import { useState } from "react"


export const MountDemo=()=>{

     const [name,setName]=useState('')

     function demo(e){
        setName(e.target.value)
     }
    return(
        <div>
            <p onChange={demo}>Hello !{name}</p>
        </div>
    )
}