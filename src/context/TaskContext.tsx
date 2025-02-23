import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
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
  const db = SQLite.openDatabase(
    { name: 'tasks.db', location: 'default' },
    () => console.log('Database opened'),
    (error) => console.error('Database error:', error)
  );
  

  const initializeDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS tasks (
          id TEXT PRIMARY KEY, 
          title TEXT, 
          description TEXT, 
          status TEXT, 
          dueDate TEXT, 
          priority TEXT
        );`
      );
    });
  };
  
  
  const saveTaskToDB = (task: Task) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO tasks (id, title, description, status, dueDate, priority) VALUES (?, ?, ?, ?, ?, ?);',
        [task.id, task.title, task.description, task.status, task.dueDate, task.priority]
      );
    });
  };
  

  const loadTasksFromDB = (setTasks: (tasks: Task[]) => void) => {
    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM tasks;', [], (_, { rows }) => {
        const tasks = rows.raw() as Task[];
        setTasks(tasks);
      });
    });
  };


  const addTask = (task: Task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    saveTaskToDB(task); 
  };


  const updateTask = (taskId: string, updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? updatedTask : task))
    );
  };


  const deleteTask = (taskId: string) => {
   
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  
  
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM tasks WHERE id = ?;',
        [taskId],
        () => {}, 
        () => false 
      );
    });
  };
  

  useEffect(() => {
    initializeDatabase();
    loadTasksFromDB(setTasks);
  }, []);
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
