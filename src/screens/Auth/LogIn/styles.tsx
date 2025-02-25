import { StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import Colors from '../../../constants/Colors';
import { verticalScale } from '../../../utils';


export const useDynamicStyles = () => {
  const { theme, mode} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
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
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    eyeIcon: {
      padding: 10,
    },
    error: {
      color: theme.error,
      fontSize: 14,
      marginBottom: 10,
    },
    disabledButton: {
      backgroundColor: '#A9A9A9', 
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      borderColor: theme.gray,

      marginBottom: 15,
    },
    passwordInput: {
      flex: 1,
      padding: 10,
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
      color: theme.background,
      fontSize: 18,
      fontWeight: 'bold',
    },
    signupText: {
      color: theme.primary,
      marginTop: 15,
      fontSize: 16,
    },
    btnView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(20),
    },
    linkPrimary: {
      color: theme.primary,
      fontSize: 16,
    },
    linkTextColor: {
      color: mode === 'light' ? Colors.light.text : Colors.dark.text,
    },
    linkText: {
      color: theme.primary,
      //   textAlign: 'center',
      //   marginTop: 10,
      fontSize: 16,
    },
  });
};
