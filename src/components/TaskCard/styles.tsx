import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {verticalScale, horizontalScale} from '../../utils';
import { useTheme } from '../../context/ThemeContext';



export const useTaskCardStyles = () => {
  const { theme } = useTheme(); 

  return StyleSheet.create({
    card: {
      backgroundColor: theme.card,
      padding: verticalScale(16),
      marginVertical: verticalScale(10),
      borderRadius: horizontalScale(10),
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
      marginBottom: verticalScale(8),
    },
    title: {
      fontSize: horizontalScale(18),
      fontWeight: 'bold',
      color: theme.text,
      flexShrink: 1,
    },
    dueDateContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: verticalScale(5),
    },
    dueDateLabel: {
      fontSize: horizontalScale(13),
      fontWeight: "bold",
      color: theme.text,
      marginRight: horizontalScale(4),
    },
    dueDateValue: {
      fontSize: horizontalScale(13),
    },
    description: {
      fontSize: horizontalScale(14),
      color: theme.gray,
      marginVertical: verticalScale(6),
    },
    priorityContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: verticalScale(8),
    },
    priorityLabel: {
      fontSize: horizontalScale(14),
      fontWeight: "600",
      color: theme.text,
      marginRight: horizontalScale(4),
    },
    priorityValue: {
      fontSize: horizontalScale(14),
      fontWeight: "bold",
    },
    dueDate: {
      fontSize: horizontalScale(13),
      fontWeight: "bold",
      color: theme.error,
      marginBottom: verticalScale(5),
    },
    priority: {
      fontSize: horizontalScale(14),
      fontWeight: "bold",
      color: theme.primary,
      marginBottom: verticalScale(5),
    },
    statusBadge: {
      alignSelf: "flex-start",
      paddingHorizontal: horizontalScale(10),
      paddingVertical: verticalScale(6),
      borderRadius: horizontalScale(12),
      backgroundColor: theme.background,
    },
    statusText: {
      fontSize: horizontalScale(12),
      fontWeight: "bold",
      color: theme.text,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: verticalScale(12),
    },
  });
};


