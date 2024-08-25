import { ReactNode } from "react"
//Excersise: Creating a button
interface Props{
    children:string;
    onClick: () => void;
    color: string;
}

function Button({children, onClick, color}: Props){
    return(
<button className={"btn btn-" + color} onClick={onClick}>{children}</button>
    )
}

export default Button