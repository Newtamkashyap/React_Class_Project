import { useState } from "react"


export const MountDemo=()=>{

     const [name,setName]=useState('Newtam')

     function demo(e){
        setName(e.target.value)
     }
    return(
        <div>
            <p onChange={demo} value={name}>Hello !{name}</p>
        </div>
    )
}