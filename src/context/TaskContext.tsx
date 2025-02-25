import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  uid: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (taskId: string, updatedTask: Task) => void;
  deleteTask: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [uid, setUid] = useState<string | null>(null);
  const auth = getAuth();

  const db = SQLite.openDatabase(
    { name: 'tasks.db', location: 'default' },
    () => console.log('Database opened'),
    (error) => console.error('Database error:', error)
  );

  const migrateDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS tasks_new (
          id TEXT PRIMARY KEY, 
          title TEXT, 
          description TEXT, 
          status TEXT, 
          dueDate TEXT, 
          priority TEXT,
          uid TEXT
        );`,
        [],
        () => {
          console.log("New tasks table created.");
          tx.executeSql(
            `INSERT INTO tasks_new (id, title, description, status, dueDate, priority)
            SELECT id, title, description, status, dueDate, priority FROM tasks;`,
            [],
            () => {
              console.log("Data migrated to new table.");
              tx.executeSql("DROP TABLE tasks;", [], () => {
                tx.executeSql("ALTER TABLE tasks_new RENAME TO tasks;", [], () => {
                  console.log("Database migration completed.");
                });
              });
            }
          );
        }
      );
    });
  };

  const initializeDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "PRAGMA table_info(tasks);",
        [],
        (_, { rows }) => {
          const columns = rows.raw().map((row) => row.name);
          if (!columns.includes("uid")) {
            console.log("Updating tasks table schema...");
            migrateDatabase();
          } else {
            console.log("Database schema is correct.");
          }
        }
      );
    });
  };

  const loadTasksFromDB = (userId: string) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM tasks WHERE uid = ?;',
        [userId],
        (_, { rows }) => {
          const loadedTasks = rows.raw() as Task[];
          console.log('Loaded tasks:', loadedTasks);
          setTasks(loadedTasks);
        },
        (error) => {
          console.log('Error loading tasks:', error);
        }
      );
    });
  };

  useEffect(() => {
    initializeDatabase();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        loadTasksFromDB(user.uid); 
      } else {
        setUid(null);
        setTasks([]); 
      }
    });

    return () => unsubscribe();
  }, []);

  const saveTaskToDB = (task: Task) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO tasks (id, title, description, status, dueDate, priority, uid) VALUES (?, ?, ?, ?, ?, ?, ?);',
        [task.id, task.title, task.description, task.status, task.dueDate, task.priority, task.uid]
      );
    });
  };

  const addTask = (task: Task) => {
    if (!uid) return;

    const newTask = { ...task, uid };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    saveTaskToDB(newTask);
  };

  const updateTask = (taskId: string, updatedTask: Task) => {
    if (!uid) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...updatedTask, uid } : task))
    );

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE tasks SET title = ?, description = ?, status = ?, dueDate = ?, priority = ? WHERE id = ? AND uid = ?;',
        [
          updatedTask.title,
          updatedTask.description,
          updatedTask.status,
          updatedTask.dueDate,
          updatedTask.priority,
          taskId,
          uid
        ]
      );
    });
  };

  const deleteTask = (taskId: string) => {
    if (!uid) return;

    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));

    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM tasks WHERE id = ? AND uid = ?;',
        [taskId, uid]
      );
    });
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
