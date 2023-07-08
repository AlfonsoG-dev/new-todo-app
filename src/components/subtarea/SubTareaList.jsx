/* eslint-disable react/prop-types */
import SubTarea from "./SubTarea";

export default function SubTareaList({ subTareaList, eliminarSubTarea }) {
    const content = () => {
        if (subTareaList) {
            return (
                subTareaList.map(element => (
                    <SubTarea
                        subtarea={element}
                        eliminarSubTarea={eliminarSubTarea}
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