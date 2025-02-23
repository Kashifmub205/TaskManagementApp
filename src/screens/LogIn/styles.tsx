import { StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

export const useDynamicStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background, 
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.text, 
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 10,
      color: theme.text,
    },
    error: {
      color: theme.error,
      fontSize: 14,
      marginBottom: 10,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 10,
    },
    buttonText: {
      color: theme.text,
      fontSize: 18,
      fontWeight: 'bold',
    },
    signupText: {
      color: theme.primary,
      marginTop: 15,
      fontSize: 16,
    },
  });
};
