import { useState } from "react"
import App from "./App"
import Register from "./Register"


export default function Decide(){
    const [isActive,setActive] = useState(true)
    const elem = (isActive) ?<App /> :<Register />
    return(
        <div>
            {elem}
        </div>
    )
}