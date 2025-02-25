import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "../../../utils";
import { useTheme } from "../../../context/ThemeContext";
import Colors from "../../../constants/Colors";


export const useTaskDetailsStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: horizontalScale(20),
      backgroundColor: theme.background,
    },
    // header: {
    //   fontSize: verticalScale(24),
    //   fontWeight: "bold",
    //   color: theme.primary,
    //   marginBottom: verticalScale(15),
    //   textAlign: "center",
    //   marginLeft: horizontalScale(10), // Space after back arrow

    // },
    headerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: verticalScale(32),
      marginTop: verticalScale(16)
    },
    header: {
      fontSize: verticalScale(22),
      fontWeight: "bold",
      color: theme.primary,
    },
    input: {
      width: "100%",
      borderWidth: 1,
      borderColor: theme.gray,
      padding: verticalScale(12),
      marginBottom: verticalScale(12),
      borderRadius: 8,
      backgroundColor: theme.card,
      color: theme.text,
      fontSize: verticalScale(14),
    },
    dateInputContainer: {
      padding: verticalScale(12),
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: 8,
      alignItems: "center",
      marginBottom: verticalScale(15),
      backgroundColor: theme.card,
      flexDirection:'row', 
      justifyContent:'center'
    },
    dateText: {
      color: theme.text,
      fontSize: verticalScale(14),
    },
    priorityContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: verticalScale(15),
    },
    priorityButton: {
      padding: verticalScale(10),
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: 8,
      width: "30%",
      alignItems: "center",
    },
    selectedPriority: {
      backgroundColor: theme.primary,
    },
    priorityText: {
      color: theme.text,
      fontWeight: "bold",
    },
    statusContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: verticalScale(15),
    },
    statusButton: {
      padding: verticalScale(10),
      borderWidth: 1,
      borderColor: theme.gray,
      borderRadius: 8,
      width: "45%",
      alignItems: "center",
    },
    selectedStatus: {
      backgroundColor: theme.primary,
    },
    statusText: {
      color: theme.text,
      fontWeight: "bold",
    },
    updateButton: {
      backgroundColor: theme.primary,
      padding: verticalScale(14),
      borderRadius: 8,
      alignItems: "center",
      marginTop: verticalScale(15),
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    updateButtonText: {
      color: Colors.dark.text,
      fontSize: verticalScale(16),
      fontWeight: "bold",
    },
    deleteButton: {
      backgroundColor: theme.background,
      padding: verticalScale(14),
      borderRadius: 8,
      alignItems: "center",
      marginTop: verticalScale(10),
      shadowColor: "#000",
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    deleteButtonText: {
      color: theme.error,
      fontSize: verticalScale(16),
      fontWeight: "bold",
    },
    errorText: {
      fontSize: verticalScale(18),
      color: theme.error,
      textAlign: "center",
      marginTop: verticalScale(20),
    },
  });
};
