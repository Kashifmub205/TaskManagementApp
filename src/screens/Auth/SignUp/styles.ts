import { StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';
import Colors from '../../../constants/Colors';
import { verticalScale, horizontalScale, moderateScale } from '../../../utils';

export const useSignUpStyles = () => {
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
    passwordContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: moderateScale(8),
      paddingHorizontal: horizontalScale(15),
      marginBottom: verticalScale(10),
    },
    passwordInput: {
      flex: 1,
      height: verticalScale(50),
      color: theme.text,
    },
    eyeIcon: {
      padding: moderateScale(10),
    },
    error: {
      color: theme.error,
      fontSize: moderateScale(14),
      marginBottom: verticalScale(10),
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
      color: mode === 'light' ? Colors.light.text : Colors.dark.text,
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
    disabledButton: {
      backgroundColor: '#A9A9A9',
    },
    buttonText: {
      color: 'white',
      fontSize: moderateScale(18),
      fontWeight: 'bold',
    },
    linkText: {
      color: theme.primary,
      fontSize: moderateScale(16),
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
