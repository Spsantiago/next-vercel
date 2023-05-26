interface seedData{
    entries: seedEntry[]
}

interface seedEntry{
    description:string
    createad:number
    status: string
}



export const seedData: seedData={
    entries:[
        {
            description: 'loren',
            status: 'pending',
            createad: Date.now(),
        },
        {
            description: 'linea 2',
            status: 'pending',
            createad: Date.now() - 1000000,
        },
        {
            description: 'llalala',
            status: 'in-progres',
            createad: Date.now() - 100000,
        },
    ],
}