import { useSelector } from 'react-redux';
import TaskFormRow from "./TaskFormRow";
import TaskRow from './TaskRow';

const TaskManager = () => {

    let tasks = useSelector(state => state.tasks);

    return (
        <section className="container-fluid p-4">
            <h4>To Do's</h4>

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
                                <TaskFormRow key={t.id} t={t}  /> :
                                <TaskRow key={t.id} t={t}  />)
                    )
                }
            </div>
        </section>
    );
}

export default TaskManager;