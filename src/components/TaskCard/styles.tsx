import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {verticalScale, horizontalScale} from '../../utils';
import { useTheme } from '../../context/ThemeContext';



export const useTaskCardStyles = () => {
  const { theme } = useTheme(); // Get current theme

  return StyleSheet.create({
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: verticalScale(10),
    },
    status: {
      fontSize: horizontalScale(12),
      fontWeight: "bold",
    },
    completed: {
      color: theme.primary,
    },
    pending: {
      color: theme.error,
    },
    card: {
      backgroundColor: theme.card, // Dynamic background color
      padding: verticalScale(15),
      marginVertical: verticalScale(8),
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: verticalScale(5),
    },
    title: {
      fontSize: horizontalScale(16),
      fontWeight: "bold",
      color: theme.text, // Dynamic text color
    },
    description: {
      fontSize: horizontalScale(14),
      color: theme.gray, // Use theme's gray color
      marginVertical: verticalScale(5),
    },
    dueDate: {
      fontSize: horizontalScale(12),
      fontWeight: "bold",
      color: theme.error, // Dynamic error color
    },
    priority: {
      fontSize: horizontalScale(12),
      fontWeight: "bold",
      color: theme.primary, // Dynamic primary color
    },
    statusBadge: {
      alignSelf: "flex-start",
      paddingHorizontal: horizontalScale(8),
      paddingVertical: verticalScale(4),
      borderRadius: 12,
      marginTop: verticalScale(5),
      backgroundColor: theme.background, // Dynamic background color for badge
    },
    statusText: {
      fontSize: horizontalScale(12),
      fontWeight: "bold",
      color: theme.text, // Dynamic text color
    },
  });
};

