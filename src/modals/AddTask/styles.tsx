import { StyleSheet } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { horizontalScale, verticalScale, moderateScale } from "../../utils";

export const useDynamicStyles = () => {
  const { theme, mode } = useTheme();

  return StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", 
    },
    modalContainer: {
      width: "85%",
      backgroundColor: theme.background, 
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
      color: theme.primary, 
    },
    input: {
      width: "100%",
      borderWidth: 1,
      borderColor: theme.primary, 
      padding: verticalScale(10),
      marginBottom: verticalScale(10),
      borderRadius: verticalScale(5),
      fontSize: moderateScale(14),
      backgroundColor: theme.card, 
      color: theme.text, 
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
    closeIcon: {
      position: 'absolute',
      top: -14,
      right: -14,
      zIndex: 10,
      padding: 10,
    },
    selectedPriority: {
      backgroundColor: theme.primary,
      // fontWeight: "800",

    },
    priorityText: {
      // color: theme.text, 
      fontSize: moderateScale(14),
      fontWeight: "700",
    },
    dateText:{
      color: theme.text
    },
    dateInputContainer:{
      borderWidth:1,
      marginVertical: verticalScale(12),
      paddingHorizontal: horizontalScale(12),
      paddingVertical: verticalScale(6),
      borderRadius: verticalScale(8),
      borderColor: theme.primary, 
      marginBottom: verticalScale(24),
      flexDirection:'row', 
      justifyContent:'center', 
      alignItems:'center'

    },
    addButton: {
      backgroundColor: theme.primary,
      paddingVertical: verticalScale(12),
      borderRadius: verticalScale(8),
      width: "100%",
      alignItems: "center",
      marginTop: verticalScale(12)
    },
    addButtonText: {
      color: mode=== 'dark' ? theme.text : theme.background, 
      fontSize: moderateScale(16),
      fontWeight: "bold",
    },
    closeText: {
      marginTop: verticalScale(12),
      color: theme.error, 
      fontSize: moderateScale(14),
      fontWeight: "500",
    },
  });
};
