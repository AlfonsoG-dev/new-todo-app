import TodoContainer from "../tarea/TodoContainer";

export default function TodoBoard({ n_title = '' }) {
    return (

        <>
            <div>
                <TodoContainer title={n_title} />
            </div>
        </>

    )
}