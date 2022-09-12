const TaskRow = (props) => (
    <tr>
        <td>{props.t.id}</td>
        <td>{props.t.desp}</td>
        <td>{props.t.status}</td>
    </tr>
);

export default TaskRow;