import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTaskContext} from '../../context/TaskContext';
import {useDynamicStyles} from './styles';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useTheme} from '../../context/ThemeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface AddTaskModalProps {
  visible: boolean;
  onClose: () => void;
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({
  visible,
  onClose,
}) => {
  const {addTask} = useTaskContext();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const {theme} = useTheme();

  const styles = useDynamicStyles();

  const handleAddTask = () => {
    if (!title.trim() || !description.trim()) return;

    addTask({
      id: Date.now().toString(),
      title,
      description,
      status: 'pending',
      dueDate: dueDate ? moment(dueDate).toISOString() : null,
      priority,
    });

    setTitle('');
    setDescription('');
    setDueDate(null);
    setPriority('medium');
    onClose();
  };
  const handleClose = () => {
    onClose();
    setDueDate(null);
    setTitle('');
    setDescription('');
  };
  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={handleClose} style={styles.closeIcon}>
              <MaterialCommunityIcons
                name="close-circle"
                size={30}
                color={theme.text}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Add Task</Text>

            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              multiline
            />

            <TouchableOpacity
              onPress={() => setShowDatePicker(true)}
              style={styles.dateInputContainer}>
              <Text style={[styles.dateText]}>
                {dueDate
                  ? moment(dueDate).format('MM/DD hh:mm A')
                  : 'Select Due Date'}
              </Text>
              <MaterialCommunityIcons
                name="clock-outline"
                size={20}
                color={theme.gray}
                style={{marginLeft: 8}}
              />
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
                    {
                      backgroundColor:
                        priority === level ? theme.primary : theme.background,
                    },
                  ]}
                  onPress={() =>
                    setPriority(level as 'low' | 'medium' | 'high')
                  }>
                  <Text
                    style={[
                      styles.priorityText,
                      {
                        color:
                          priority === level ? theme.background : theme.text,
                      },
                    ]}>
                    {level}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
              <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
