import moment from "moment";

export const getPriorityStyle = (priority: 'low' | 'medium' | 'high') => ({
    color: priority === 'high' ? 'red' : priority === 'medium' ? 'orange' : 'green',
  });
  
 export  const getStatusStyle = (status: 'pending' | 'completed') => ({
    borderColor: status === 'completed' ? 'green' : 'black',
    borderWidth:1
  });
  export const getDueDateStyle = (dueDate: string | null) => {
    if (!dueDate) return { color: "black", fontWeight: "bold" };
  
    const now = moment();
    const isPastDue = moment(dueDate).isBefore(now);
  
    return {
      color: isPastDue ? "red" : "gray",
      fontWeight: '400',
    };
  };
  