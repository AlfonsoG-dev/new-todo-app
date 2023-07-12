import SubTarea from "./SubTodo";

export default function SubTareaList({ subTareaList, onDeleteSubTarea, onChangeSubTarea, tareaCompleta }) {
    const content = () => {
        if (subTareaList) {
            return (
                subTareaList.map(element => (
                    <SubTarea
                        subtarea={element}
                        onDeleteSubTarea={onDeleteSubTarea}
                        onChangeSubTarea={onChangeSubTarea}
                        tareaCompleta={tareaCompleta}
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