/* eslint-disable react/prop-types */
import SubTarea from "./SubTarea";

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