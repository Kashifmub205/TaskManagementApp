export const getPriorityStyle = (priority: 'low' | 'medium' | 'high') => ({
    color: priority === 'high' ? 'red' : priority === 'medium' ? 'orange' : 'green',
  });
  
 export  const getStatusStyle = (status: 'pending' | 'completed') => ({
    borderColor: status === 'completed' ? 'green' : 'yellow',
    borderWidth:1
  });