import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  getPriorityStyle,
  getStatusStyle,
  getDueDateStyle,
} from '../../utils/HelperFunc';
import {useTaskCardStyles} from './styles';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '../../context/ThemeContext';
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
  const {theme} = useTheme();

  return (
    <TouchableOpacity
      style={styles.card}
      // @ts-ignore
      onPress={() => navigation.navigate('TaskDetails', {taskId: task.id})}>
      <View style={styles.header}>
        <Text style={styles.title}>{task.title}</Text>

        <MaterialIcons name="arrow-forward" size={24} color={theme.text} />
      </View>

      <Text style={styles.description}>{task.description}</Text>
      <View style={styles.dueDateContainer}>
        <Text style={styles.dueDateLabel}>Due:</Text>
        <Text style={[styles.dueDateValue, getDueDateStyle(task.dueDate)]}>
          {task.dueDate
            ? moment(task.dueDate).format('MM/DD hh:mm A')
            : 'No due date'}
        </Text>
      </View>

      <View style={styles.priorityContainer}>
        <Text style={styles.priorityLabel}>Priority:</Text>
        <Text style={[styles.priorityValue, getPriorityStyle(task.priority)]}>
          {task.priority}
        </Text>
      </View>

      <View style={[styles.statusBadge, getStatusStyle(task.status)]}>
        <Text style={styles.statusText}>{task.status.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
