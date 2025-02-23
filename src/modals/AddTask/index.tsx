import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTaskContext} from '../../context/TaskContext';
import {useDynamicStyles} from './styles';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

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

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.modalContainer}>
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
              <Text
                style={[
                  styles.dateText,
                  dueDate ? {} : styles.placeholderText,
                ]}>
                {dueDate
                  ? moment(dueDate).format('MM/DD hh:mm A')
                  : 'Select Due Date'}
              </Text>
            </TouchableOpacity>

            {/* Date Picker Modal */}
            <DatePicker
              modal
              open={showDatePicker}
              date={dueDate || new Date()}
              mode='datetime'
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
                  onPress={() =>
                    setPriority(level as 'low' | 'medium' | 'high')
                  }>
                  <Text style={styles.priorityText}>{level}</Text>
                </TouchableOpacity>
              ))}
            </View>

         
            <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
              <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>

       
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
