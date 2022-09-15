
const TaskRow = ({ t,deleteById,markEditable }) => (
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
            <button className="btn btn-sm btn-primary" onClick={ e => markEditable(t.id) }>
                EDIT
            </button>
            <button className="btn btn-sm btn-danger" onClick={ e => deleteById(t.id) }>
                DELETE
            </button>
        </div>
    </div>
);

export default TaskRow;