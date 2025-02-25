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

const AppContent = () => {
 

  
  const {theme} = useTheme();


  useEffect(() => {
    
    const unsubscribe = NetInfo.addEventListener((state:any) => {
      if (state.isConnected === false) {
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
  
  return (
    <TaskProvider>
      <View style={[styles.container, {backgroundColor: theme.background}]}>
        <MainStack />
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
  container: {
    flex: 1,
    paddingTop: verticalScale(80),
  },
});

export default App;
