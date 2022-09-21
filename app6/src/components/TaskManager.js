import { useSelector, useDispatch } from 'react-redux';
import TaskFormRow from "./TaskFormRow";
import TaskRow from './TaskRow';
import { createGetTasksActionThunk } from '../stateManagement/tasksReducer'
import { useEffect } from 'react';

const TaskManager = () => {

    let tasks = useSelector(state => state.tasks);
    let shallWait = useSelector(state => state.shallWait);
    let errMsg = useSelector(state => state.errMsg);

    const dispatch = useDispatch();

    useEffect(() => { dispatch(createGetTasksActionThunk()) }, [dispatch])

    return (
        <section className="container-fluid p-4">
            <h4>To Do's</h4>

            {shallWait &&
                <div className="alert alert-info p-2">
                    Please wait while loading data...
                </div>
            }

            {errMsg &&
                <div className="alert alert-danger p-2">
                    {errMsg}
                </div>
            }

            <div className="col-sm-9 p-2 mx-auto">
                <div className="row p-1 fw-bold border-bottom border-primary">
                    <div className="col-2">
                        Task#
                    </div>
                    <div className="col">
                        Description
                    </div>
                    <div className="col-3">
                        Status
                    </div>
                    <div className="col-2">

                    </div>
                </div>
                <TaskFormRow />
                {(!tasks || tasks.length == 0) ?
                    (
                        <div className="row p-1">
                            <div className="col alert alert-info">
                                No Records Found
                            </div>
                        </div>
                    ) :
                    (
                        tasks.map(t =>
                            t.isEditable ?
                                <TaskFormRow key={t.id} t={t} /> :
                                <TaskRow key={t.id} t={t} />)
                    )
                }
            </div>
        </section>
    );
}

export default TaskManager;