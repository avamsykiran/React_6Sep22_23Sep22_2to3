import taskService from '../services/taskService';

/************** action types **********************************************************************/
export const REFRESH = "refresh";
export const WAIT = "wait";
export const ERR = "error";
export const MARK_TASK_EDITABLE = "mark task editable";
export const UNMARK_TASK_EDITABLE = "unmark task editable";

/***************** action object creators *********************************************************/
export const createWaitAction = () => ({ type: WAIT })
export const createErrAction = errMsg => ({ type: ERR, errMsg })
export const createRefreshAction = tasks => ({ type: REFRESH, tasks })
export const createMarkTaskEditableAction = id => ({ type: MARK_TASK_EDITABLE, id })
export const createUnMarkTaskEditableAction = id => ({ type: UNMARK_TASK_EDITABLE, id })

/***************** action thunk creators *********************************************************/
export const createGetTasksActionThunk = () => dispatch => {
    dispatch(createWaitAction());
    taskService.getAllTasks()
        .then(resp => dispatch(createRefreshAction(resp.data)))
        .catch(error => { console.error(error); dispatch(createErrAction("Unable to load data! Please retry later")) });
};

export const createAddTaskActionThunk = task => dispatch => {
    dispatch(createWaitAction());
    taskService.addTask(task)
        .then(resp => createGetTasksActionThunk()(dispatch))
        .catch(error => { console.error(error); dispatch(createErrAction("Unable to save data! Please retry later")) });
};

export const createUpdateTaskDataActionThunk = task => dispatch => {
    dispatch(createWaitAction());
    taskService.updateTask(task)
        .then(resp => createGetTasksActionThunk()(dispatch))
        .catch(error => { console.error(error); dispatch(createErrAction("Unable to save data! Please retry later")) });
};

export const createDeleteTaskActionThunk = id => dispatch => {
    dispatch(createWaitAction());
    taskService.deleteTaskById(id)
        .then(resp => createGetTasksActionThunk()(dispatch))
        .catch(error => { console.error(error); dispatch(createErrAction("Unable to delete! Please retry later")) });
};

/******************** reducer **************************************************************/
const tasksReducer = (oldState = { tasks: null, shallWait: null, errMsg: null }, action) => {
    let { tasks, shallWait, errMsg } = oldState;

    switch (action.type) {
        case REFRESH:
            tasks = action.tasks;
            shallWait = false;
            errMsg = null;
            break;
        case WAIT:
            shallWait = true;
            break;
        case ERR:
            errMsg = action.errMsg;
            shallWait = false;
            break;
        case MARK_TASK_EDITABLE:
            tasks = tasks.map(t => t.id == action.id ? { ...t, isEditable: true } : t);
            break;
        case UNMARK_TASK_EDITABLE:
            tasks = tasks.map(t => t.id == action.id ? { ...t, isEditable: undefined } : t);
            break;
    }

    return { tasks, shallWait, errMsg }; //modifiedState
}

export default tasksReducer;