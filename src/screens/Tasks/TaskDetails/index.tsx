import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';

import {RouteProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTaskContext} from '../../../context/TaskContext';
import {useTaskDetailsStyles} from './styles';
import moment from 'moment';
import DatePicker from 'react-native-date-picker';

type TaskDetailsScreenProps = {
  route: RouteProp<{params: {taskId: string}}, 'params'>;
  navigation: StackNavigationProp<any>;
};

const TaskDetails: React.FC<TaskDetailsScreenProps> = ({route, navigation}) => {
  const {taskId} = route.params;
  const {tasks, updateTask, deleteTask} = useTaskContext();
  const task = tasks.find(t => t.id === taskId);
  const styles = useTaskDetailsStyles();

  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  const [dueDate, setDueDate] = useState<Date | null>(task?.dueDate);

  const [priority, setPriority] = useState(task?.priority || 'medium');
  const [status, setStatus] = useState(task?.status || 'pending');
  const [showDatePicker, setShowDatePicker] = useState(false);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Task not found</Text>
      </View>
    );
  }

  const handleUpdate = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      dueDate,
      priority,
      status,
    };
    updateTask(taskId, updatedTask);

    Alert.alert('Success', 'Task updated successfully', [
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);
  };

  const handleDelete = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this task?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteTask(taskId);
            navigation.goBack();
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task Details</Text>

      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline
      />

      <TouchableOpacity
        onPress={() => setShowDatePicker(true)}
        style={styles.dateInputContainer}>
        <Text style={{color: 'black'}}>
          {dueDate
            ? moment(new Date(dueDate)).format('MM/DD hh:mm A')
            : 'Select Due Date'}
        </Text>
      </TouchableOpacity>

      <DatePicker
        modal
        open={showDatePicker}
        date={dueDate || new Date()}
        mode="datetime"
        onConfirm={selectedDate => {
          setShowDatePicker(false);
          setDueDate(selectedDate);
        }}
        onCancel={() => setShowDatePicker(false)}
      />

      <View style={styles.priorityContainer}>
        {['low', 'medium', 'high'].map(level => (
          <TouchableOpacity
            key={level}
            style={[
              styles.priorityButton,
              priority === level && styles.selectedPriority,
            ]}
            onPress={() => setPriority(level as 'low' | 'medium' | 'high')}>
            <Text style={styles.priorityText}>{level}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.statusContainer}>
        {['pending', 'completed'].map(state => (
          <TouchableOpacity
            key={state}
            style={[
              styles.statusButton,
              status === state && styles.selectedStatus,
            ]}
            onPress={() => setStatus(state as 'pending' | 'completed')}>
            <Text style={styles.statusText}>{state}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update Task</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetails;
