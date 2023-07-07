/* eslint-disable react/prop-types */
import SubTarea from "./SubTarea";

export default function SubTareaList({ subTareaList }) {
    return (
        <ul>
            {subTareaList.map(element => (
                <SubTarea
                    subtarea={element}
                    key={element.id}
                />
            ))}
        </ul>
    )
}