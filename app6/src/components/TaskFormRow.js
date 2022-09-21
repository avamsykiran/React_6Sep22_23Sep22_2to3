import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createAddTaskActionThunk,createUpdateTaskDataActionThunk,createUnMarkTaskEditableAction} from '../stateManagement/tasksReducer'

const TaskFormRow = ({ t }) => {

    let [task, setTask] = useState(t ? { ...t } : { id: 0, desp: '', status: "PLANNED" });
    
    const dispatch = useDispatch();

    const setField = event => {
        let fieldName = event.target.name;
        let fieldValue = event.target.type === "number" ? parseInt(event.target.value) : event.target.value;
        setTask({ ...task, [fieldName]: fieldValue });
    }

    const handleFormSubmit = event => {
        if (task.isEditable) {
            dispatch(createUpdateTaskDataActionThunk({ ...task,isEditable:undefined }));
        } else {
            dispatch(createAddTaskActionThunk({ ...task }));
            setTask({ id: 0, desp: '', status: "PLANNED" });
        }
        event.preventDefault();
    }

    const reset = event => {
        if (task.isEditable) {
            dispatch(createUnMarkTaskEditableAction(task.id));
        } else {
            setTask({ id: 0, desp: '', status: "PLANNED" });
        }
    }

    return (
        <form className="row p-1 border-bottom" onSubmit={handleFormSubmit}>
            <div className="col-2">
                <input type="number" className="form-control" value={task.id} name="id" onChange={setField} />
            </div>
            <div className="col">
                <input type="text" className="form-control" value={task.desp} name="desp" onChange={setField} />
            </div>
            <div className="col-3">
                <select className="form-control" value={task.status} name="status" onChange={setField}>
                    <option value="PLANNED">PLANNED</option>
                    <option value="DONE">DONE</option>
                </select>
            </div>
            <div className="col-2">
                <button className="btn btn-sm btn-primary">
                    {task.isEditable ? "SAVE" : "ADD"}
                </button>
                <button className="btn btn-sm btn-danger" type="button" onClick={reset}>
                    {task.isEditable ? "CANCEL" : "RESET"}
                </button>
            </div>
        </form>
    );
};

export default TaskFormRow;