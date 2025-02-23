import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import Colors from '../../constants/Colors';
import { useDynamicStyles } from './styles';
import { useTheme } from '../../context/ThemeContext';


const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const styles = useDynamicStyles();
  const { theme } = useTheme();
  const onLogin = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
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

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={theme.gray}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={onLogin} disabled={loading}>
        {loading ? <ActivityIndicator color={theme.text} /> : <Text style={styles.buttonText}>Login</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
