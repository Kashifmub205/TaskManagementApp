import { StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { verticalScale, horizontalScale, moderateScale } from '../../utils';

export const useDynamicStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: horizontalScale(16),
    },
    searchInput: {
      width: '100%',
      borderWidth: 1,
      borderColor: theme.gray,
      padding: moderateScale(10),
      borderRadius: moderateScale(5),
      backgroundColor: theme.card,
      color: theme.text,
      marginBottom: verticalScale(10),
    },
    mode: {
      alignSelf: 'flex-end',
      marginBottom: verticalScale(15),
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: horizontalScale(16),
    },
    noSearch:{ alignItems: 'center', marginTop: verticalScale(20) },
    searchText:{ color: theme.text, fontSize: moderateScale(16) },
    logoutText: {
      color: 'red',
      fontSize: moderateScale(16),
      fontWeight: 'bold',
    },
    sortContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: verticalScale(10),
    },
    sortButton: {
      padding: moderateScale(10),
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: moderateScale(5),
      backgroundColor: theme.background,
    },
    sortButtonText: {
      color: theme.text,
      fontSize: moderateScale(14),
      fontWeight: '600',
    },
    fab: {
      position: 'absolute',
      bottom: verticalScale(80),
      right: horizontalScale(20),
      backgroundColor: theme.primary,
      width: moderateScale(50),
      height: moderateScale(50),
      borderRadius: moderateScale(30),
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
    },
    themeToggleButton: {
      backgroundColor: theme.primary,
      padding: moderateScale(10),
      borderRadius: moderateScale(5),
      alignItems: 'center',
      marginVertical: verticalScale(10),
    },
  });
};
