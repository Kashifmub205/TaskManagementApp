import React, {useEffect, useState} from 'react';
import MainStack from './src/navigation/MainStack';
// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {firebaseConfig} from './src/services/firebaseConfig';
import {TaskProvider} from './src/context/TaskContext';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ThemeProvider, useTheme} from './src/context/ThemeContext';
import {verticalScale} from './src/utils';
import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';
import auth from '@react-native-firebase/auth';
import {getToken} from './src/services/secureStorage';
import {ActivityIndicator} from 'react-native';
import Colors from './src/constants/Colors';

const AppContent = () => {
  const {theme, mode} = useTheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      const token = await getToken();
      console.log('Retrieved Token:', token); 
      setIsAuthenticated(!!token);
      setLoading(false);
    };
    
    checkAuth();

    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        Toast.show({
          type: 'error',
          text1: 'No Internet Connection',
          text2: 'You are offline.',
          position: 'bottom',
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    });

    return () => unsubscribe();
  }, []);
  if (loading) {
    return (
      <View
        style={[
          styles.loader,
          {
            backgroundColor: mode === 'dark' ? Colors.dark.background : Colors.light.background,
          },
        ]}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }
  
  
  
  return (
    <TaskProvider>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
          },
        ]}>
        <MainStack isAuthenticated={isAuthenticated} />
      </View>
    </TaskProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
      <Toast />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: verticalScale(60)},
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
