import { StyleSheet } from 'react-native';

import { horizontalScale, verticalScale } from '../../../utils';
import Colors from '../../../constants/Colors';
import { useTheme } from '../../../context/ThemeContext';


 
 export const useTaskDetailsStyles = () => {
   const { theme } = useTheme(); // Get current theme
 
   return StyleSheet.create({
     container: {
       flex: 1,
       padding: horizontalScale(16),
       backgroundColor: theme.background, // Dynamic background color
     },
     header: {
       fontSize: verticalScale(22),
       fontWeight: "bold",
       color: theme.primary, // Dynamic primary color
       marginBottom: verticalScale(10),
     },
     input: {
       width: "100%",
       borderWidth: 1,
       borderColor: theme.gray, // Dynamic border color
       padding: verticalScale(10),
       marginBottom: verticalScale(10),
       borderRadius: 5,
       backgroundColor: theme.card, // Dynamic background color for input
       color: theme.text, // Dynamic text color
     },
     priorityContainer: {
       flexDirection: "row",
       justifyContent: "space-around",
       marginBottom: verticalScale(10),
     },
     priorityButton: {
       padding: verticalScale(10),
       borderWidth: 1,
       borderColor: theme.gray, // Dynamic border color
       borderRadius: 5,
     },
     selectedPriority: {
       backgroundColor: theme.primary, // Dynamic primary color
     },
     priorityText: {
       color: theme.error, // Dynamic error color
     },
     statusContainer: {
       flexDirection: "row",
       justifyContent: "space-around",
       marginBottom: verticalScale(10),
     },
     statusButton: {
       padding: verticalScale(10),
       borderWidth: 1,
       borderColor: theme.gray, // Dynamic border color
       borderRadius: 5,
     },
     selectedStatus: {
       backgroundColor: theme.primary, // Dynamic primary color
     },
     statusText: {
       color: theme.text, // Dynamic text color
     },
     updateButton: {
       backgroundColor: theme.primary, // Dynamic primary color
       padding: verticalScale(12),
       borderRadius: 5,
       alignItems: "center",
       marginTop: verticalScale(10),
     },
     updateButtonText: {
       color: theme.text, // Dynamic text color for button
       fontSize: verticalScale(16),
     },
     deleteButton: {
       backgroundColor: theme.error, // Dynamic error color
       padding: verticalScale(12),
       borderRadius: 5,
       alignItems: "center",
       marginTop: verticalScale(10),
       borderWidth: 1,
       borderColor: theme.error, // Dynamic border color
     },
     deleteButtonText: {
       color: theme.text, // Dynamic text color
       fontSize: verticalScale(16),
     },
     errorText: {
       fontSize: verticalScale(18),
       color: theme.error, // Dynamic error color
       textAlign: "center",
       marginTop: verticalScale(20),
     },
   });
 };
 