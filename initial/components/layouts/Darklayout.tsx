import { FC } from "react"

interface Props{
  children?: React.ReactNode
}
export const Darklayout :FC<Props> = ({ children }) => {
  return (
    <div style={
        {
            backgroundColor:'#000030',
            padding:'10px',
            borderRadius:'5px',
            width: '800px',
        }
    }>
        
        {children}
    </div>
  )
}
