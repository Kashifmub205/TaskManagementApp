import {StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import {verticalScale} from '../../utils';

export const useDynamicStyles = () => {
  const {theme} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 16,
    },
    searchInput: {
      width: '100%',
      borderWidth: 1,
      borderColor: theme.gray,
      padding: 10,
      borderRadius: 5,
      backgroundColor: theme.card,
      color: theme.text,
      marginBottom: 10,
    },
    mode: {
      alignSelf: 'flex-end',
      marginBottom: verticalScale(15),
    },
    sortContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    sortButton: {
      padding: 10,
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: 5,
      backgroundColor: theme.primary,
    },
    sortButtonText: {
      color: theme.text,
      fontSize: 14,
    },
    fab: {
      position: 'absolute',
      bottom: 80,
      right: 20,
      backgroundColor: theme.primary,
      width: 50,
      height: 50,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 5,
    },
    themeToggleButton: {
      backgroundColor: theme.primary,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
    },
  });
};
