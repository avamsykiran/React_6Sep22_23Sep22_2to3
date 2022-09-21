import { useDispatch } from 'react-redux';
import { createDeleteTaskActionThunk,createMarkTaskEditableAction } from '../stateManagement/tasksReducer'

const TaskRow = ({ t }) => {
    
    const dispatch = useDispatch();

    return (
        <div className="row p-1 border-bottom">
            <div className="col-2 text-end">
                {t.id}
            </div>
            <div className="col">
                {t.desp}
            </div>
            <div className="col-3">
                {t.status}
            </div>
            <div className="col-2">
                <button className="btn btn-sm btn-primary" onClick={e => dispatch(createMarkTaskEditableAction(t.id))}>
                    EDIT
                </button>
                <button className="btn btn-sm btn-danger" onClick={e => dispatch(createDeleteTaskActionThunk(t.id))}>
                    DELETE
                </button>
            </div>
        </div>
    );
}
export default TaskRow;