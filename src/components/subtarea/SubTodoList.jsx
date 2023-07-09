import SubTarea from "./SubTodo";

export default function SubTareaList({ subTareaList, eliminarSubTarea, handleChange }) {
    const content = () => {
        if (subTareaList) {
            return (
                subTareaList.map(element => (
                    <SubTarea
                        subtarea={element}
                        eliminarSubTarea={eliminarSubTarea}
                        handleChange={handleChange}
                        key={element.id}
                    />
                ))

            )
        }
    }
    return (
        <ul>
            {content()}
        </ul>
    )
}