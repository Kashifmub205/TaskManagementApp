import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';

import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from '../../../context/ThemeContext';
import { useDynamicStyles } from './styles';
import { storeToken } from '../../../services/secureStorage';

const Login = ({ navigation }: any) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { theme } = useTheme();
  const styles = useDynamicStyles();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onLogin = async () => {
    setLoading(true);
    setErrorMessage('');

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken(); 
      console.log('tokennn', token)

      await storeToken(token); 
      console.log('User logged in successfully!');

      navigation.replace('Home');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={theme.gray}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor={theme.gray}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Feather name={passwordVisible ? 'eye' : 'eye-off'} size={20} color={theme.text} />
          </TouchableOpacity>
        </View>

        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <TouchableOpacity
          style={[styles.button, loading && styles.disabledButton]}
          onPress={onLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color={theme.text} />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <View style={styles.btnView}>
          <Text style={[styles.linkText, styles.linkTextColor]}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.linkPrimary}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
