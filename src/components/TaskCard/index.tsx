import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getPriorityStyle, getStatusStyle} from '../../utils/HelperFunc';
import {useTaskCardStyles} from './styles';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Feather';

interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'completed';
    dueDate: string;
    priority: 'low' | 'medium' | 'high';
  };
  onPress: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({task, onPress}) => {
  const navigation = useNavigation();
  const styles = useTaskCardStyles();
  return (
    <TouchableOpacity
      style={styles.card}
      // @ts-ignore
      onPress={() => navigation.navigate('TaskDetails', {taskId: task.id})}>
      <View style={styles.header}>
        <Text style={styles.title}>{task.title}</Text>
        <Ionicons name="arrow-forward" size={20} color="gray" />
    
      </View>

      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.dueDate}>
        Due:{' '}
        {task.dueDate
          ? moment(task.dueDate).format('MM/DD hh:mm A')
          : 'No due date'}
      </Text>

      <Text style={[styles.priority, getPriorityStyle(task.priority)]}>
        Priority: {task.priority}
      </Text>

    
      <View style={[styles.statusBadge, getStatusStyle(task.status)]}>
        <Text style={styles.statusText}>{task.status.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
