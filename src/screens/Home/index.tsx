import React, {useState} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {useTaskContext} from '../../context/TaskContext';
import TaskCard from '../../components/TaskCard';
import {AddTaskModal} from '../../modals/AddTask';
import {useTheme} from '../../context/ThemeContext';
import {useDynamicStyles} from './styles';
import moment from 'moment';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import auth from '@react-native-firebase/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import {removeToken} from '../../services/secureStorage';
const Home = ({navigation}: any) => {
  const {tasks} = useTaskContext();
  const [modalVisible, setModalVisible] = useState(false);
  const {theme, toggleTheme, mode} = useTheme();
  const styles = useDynamicStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredTasks = tasks.filter(task => {
    const formattedDueDate = moment(task.dueDate).format('MM/DD hh:mm A');

    return (
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.priority.toLowerCase().includes(searchQuery.toLowerCase()) ||
      formattedDueDate.includes(searchQuery)
    );
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOption === 'date') {
      const dateA = new Date(a.dueDate).getTime() || 0;
      const dateB = new Date(b.dueDate).getTime() || 0;
      return dateA - dateB;
    }
    if (sortOption === 'priority') {
      const priorityOrder = {high: 1, medium: 2, low: 3};
      return (
        (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3)
      );
    }
    if (sortOption === 'status') {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });
  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: async () => {
            try {
              await removeToken(); 
              const user = auth().currentUser;
              
              if (user) {
                await auth().signOut(); 
              }
  
          
              navigation.replace('Login'); 
            } catch (error) {
              console.error('Logout Error:', error);
            }
          }
        }
      ]
    );
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Feather
          name={mode === 'dark' ? 'sun' : 'moon'}
          size={24}
          color={theme.text}
          style={styles.mode}
          onPress={toggleTheme}
        />
        <TouchableOpacity onPress={handleLogout} style={{padding: 10}}>
          <MaterialIcons
            name="logout"
            size={24}
            color={mode === 'dark' ? Colors.dark.text : Colors.light.text}
          />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search tasks..."
        placeholderTextColor={theme.gray}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.sortContainer}>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setSortOption('date')}>
          <Text style={styles.sortButtonText}>Sort by Date</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setSortOption('priority')}>
          <Text style={styles.sortButtonText}>Sort by Priority</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setSortOption('status')}>
          <Text style={styles.sortButtonText}>Sort by Status</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={sortedTasks}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TaskCard
            onPress={() => console.log('Navigate to Task Details', item.id)}
            task={item}
          />
        )}
        ListEmptyComponent={
          searchQuery.length > 0 ? (
            <View style={styles.noSearch}>
              <Text style={styles.searchText}>
                No search results found
              </Text>
            </View>
          ) : null 
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}>
        <Fontisto name="plus-a" size={20} color="white" />
      </TouchableOpacity>

      <AddTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default Home;
