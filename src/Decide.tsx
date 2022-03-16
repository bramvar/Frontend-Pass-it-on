import { useState } from "react"
import UserRegisterForm from "./UserRegisterForm"
import LogIn from "./LogIn"

function Decide(){
    const [isActive,setActive] = useState(true)

    //const elem = (isActive) ?<UserRegisterForm /> :<Register />

    return(
        <div>
            {(isActive) ?<UserRegisterForm /> :<LogIn/>}
        </div>
    )
}

export default Decide