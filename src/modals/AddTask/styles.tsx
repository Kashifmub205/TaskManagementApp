import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { horizontalScale, verticalScale, moderateScale } from "../../utils";

export const useDynamicStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", 
    },
    modalContainer: {
      width: "85%",
      backgroundColor: theme.background, // Dynamic background
      padding: horizontalScale(20),
      borderRadius: verticalScale(10),
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5,
    },
    modalTitle: {
      fontSize: verticalScale(20),
      fontWeight: "bold",
      marginBottom: verticalScale(15),
      color: theme.primary, // Dynamic color
    },
    input: {
      width: "100%",
      borderWidth: 1,
      borderColor: theme.primary, // Dynamic color
      padding: verticalScale(10),
      marginBottom: verticalScale(10),
      borderRadius: verticalScale(5),
      fontSize: moderateScale(14),
      backgroundColor: theme.card, // Dynamic background
      color: theme.text, // Dynamic text color
    },
    priorityContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginBottom: verticalScale(15),
    },
    priorityButton: {
      paddingVertical: verticalScale(8),
      paddingHorizontal: horizontalScale(15),
      borderWidth: 1,
      borderColor: theme.primary,
      borderRadius: verticalScale(5),
    },
    selectedPriority: {
      backgroundColor: theme.primary,
    },
    priorityText: {
      color: theme.text, // Dynamic text color
      fontSize: moderateScale(14),
      fontWeight: "500",
    },
    addButton: {
      backgroundColor: theme.primary,
      paddingVertical: verticalScale(12),
      borderRadius: verticalScale(5),
      width: "100%",
      alignItems: "center",
    },
    addButtonText: {
      color: theme.text, // Dynamic text color
      fontSize: moderateScale(16),
      fontWeight: "bold",
    },
    closeText: {
      marginTop: verticalScale(12),
      color: theme.error, // Dynamic error color
      fontSize: moderateScale(14),
      fontWeight: "500",
    },
  });
};
