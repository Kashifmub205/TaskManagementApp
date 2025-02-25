


import { StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import { horizontalScale, moderateScale, verticalScale } from '../../../utils';
import Colors from '../../../constants/Colors';


export const useDynamicStyles = () => {
  const { theme, mode } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: horizontalScale(20),
    },
    title: {
      fontSize: moderateScale(24),
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: verticalScale(20),
    },
    input: {
      width: '100%',
      height: verticalScale(50),
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: moderateScale(8),
      paddingHorizontal: horizontalScale(15),
      marginBottom: verticalScale(10),
      color: theme.text,
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    eyeIcon: {
      padding: moderateScale(12),
    },
    error: {
      color: theme.error,
      fontSize: moderateScale(14),
      marginBottom: verticalScale(10),
    },
    disabledButton: {
      backgroundColor: '#A9A9A9',
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: moderateScale(8),
      paddingHorizontal: horizontalScale(10),
      borderColor: theme.gray,
      marginBottom: verticalScale(15),
    },
    passwordInput: {
      flex: 1,
      padding: moderateScale(10),
      color: theme.text
    },
    button: {
      width: '100%',
      height: verticalScale(50),
      backgroundColor: theme.primary,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(8),
      marginTop: verticalScale(10),
    },
    buttonText: {
      color: Colors.dark.text,
      fontSize: moderateScale(18),
      fontWeight: 'bold',
    },
    signupText: {
      color: theme.primary,
      marginTop: verticalScale(15),
      fontSize: moderateScale(16),
    },
    btnView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(20),
    },
    linkPrimary: {
      color: theme.primary,
      fontSize: moderateScale(16),
    },
    linkTextColor: {
      color: mode === 'light' ? theme.text : theme.text,
    },
    linkText: {
      color: theme.primary,
      fontSize: moderateScale(16),
    },
  });
};

