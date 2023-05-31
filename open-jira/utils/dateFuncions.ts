import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";



export const getFormantDistance= (date: number)=>{
    const fromNow= formatDistanceToNow(date,{locale:es})

    return `Creado hace ${fromNow}`
}