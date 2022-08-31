export default function(WrappedComponent) {
    return (props) => {
        const type = props.type;
        let tasks = [];
        const _tasks = [...props.tasks];
        if(type === 'To do'){
            const todoTasks = _tasks.filter(task => {
                return task.status === 'todo';
            });
            tasks = todoTasks;
        }else if(type === 'in-Progress'){
            const inProgressTasks = _tasks.filter(task => {
                return task.status === 'inprogress';
            });
            tasks = inProgressTasks;
        }else{
            const completedTasks = _tasks.filter(task => {
                return task.status === 'completed';
            });
            tasks = completedTasks;
        }
        return <WrappedComponent {...props} tasks={tasks} />
    }
}