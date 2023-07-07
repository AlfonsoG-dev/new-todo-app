const datos = [
    {
        id: 0,
        descripcion: "sacar la basura",
        comletada: false,
        subtarea: [
            {
                id: 0,
                descripcion: "subtarea de la tarea 0",
                completada: false
            },
            {
                id: 1,
                descripcion: "segunda subtarea",
                completada: false
            }, {
                id: 2,
                descripcion: "tercera subtarea",
                completada: false
            },
        ]
    },
    {
        id: 1,
        descripcion: "comprar frutas",
        comletada: false,
        subtarea: [{ id: 0 }]
    },
    {
        id: 2,
        descripcion: "comprar pan",
        comletada: false,
        subtarea: [{ id: 0 }]
    },
    {
        id: 3,
        descripcion: "tender la cama",
        comletada: false,
        subtarea: [{ id: 0 }]
    },
]
export default datos;