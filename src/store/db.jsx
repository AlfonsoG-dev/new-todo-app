const datos = [
    {
        id: 1,
        descripcion: "sacar la basura",
        completada: false,
        subtarea: [
            {
                id: 1,
                descripcion: "subtarea de la tarea 0",
                completada: false
            },
            {
                id: 2,
                descripcion: "segunda subtarea",
                completada: false
            }, {
                id: 3,
                descripcion: "tercera subtarea",
                completada: false
            },
        ]
    },
    {
        id: 2,
        descripcion: "comprar frutas",
        completada: false,
        subtarea: []
    },
    {
        id: 3,
        descripcion: "comprar pan",
        completada: false,
        subtarea: []
    },
    {
        id: 4,
        descripcion: "tender la cama",
        completada: false,
        subtarea: []
    },
]
export default datos;