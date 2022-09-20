
/************** action types **********************************/
export const ADD_TASK = "add task";
export const UPDATE_TASK = "update task";
export const REMOVE_TASK = "remove task";
export const MARK_TASK_EDITABLE = "mark task editable";
export const UNMARK_TASK_EDITABLE = "unmark task editable";

/***************** action creators *************************/
export const createAddTaskAction = task => ({ type: ADD_TASK, task })
export const createUpdateTaskAction = task => ({ type: UPDATE_TASK, task })
export const createRemoveTaskAction = id => ({ type: REMOVE_TASK, id })
export const createMarkTaskEditableAction = id => ({ type: MARK_TASK_EDITABLE, id })
export const createUnMarkTaskEditableAction = id => ({ type: UNMARK_TASK_EDITABLE, id })

/******************** reducer ******************************/
const tasksReducer = (oldState = {}, action) => {
    let tasks = oldState.tasks ?? [
        { id: 1, desp: 'Pay Electricity Bills', status: 'DONE' },
        { id: 2, desp: 'Clear Water Bills', status: 'PLANNED' },
        { id: 3, desp: 'Refuel the vehicle', status: 'DONE' }
    ];

    switch (action.type) {
        case ADD_TASK:
            tasks = [...tasks, action.task];
            break;
        case UPDATE_TASK:
            tasks = tasks.map(t => t.id == action.task.id ? { ...action.task, isEditable: undefined } : t);
            break;
        case REMOVE_TASK:
            tasks = tasks.filter(t => t.id != action.id);
            break;
        case MARK_TASK_EDITABLE:
            tasks = tasks.map(t => t.id == action.id ? { ...t, isEditable: true } : t);
            break;
        case UNMARK_TASK_EDITABLE:
            tasks = tasks.map(t => t.id == action.id ? { ...t, isEditable: undefined } : t);
            break;
    }

    return { tasks }; //modifiedState
}

export default tasksReducer;