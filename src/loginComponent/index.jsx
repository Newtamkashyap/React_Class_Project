import { useState } from "react"


export const IndexPage=()=>{

   

    const [name,setName]=useState('Newtam')

    function handleNamechange(event){
        setName(event.target.value)

    }

    return(
        <div>
            <h2>one way data-binding</h2>
            <dl>
                <dt>userlogin</dt>
                <dd><input type="text" value={name}/></dd>
                <p>hello again ! {name}</p>

                <h3>two way data-binding</h3> 
                <dl>
                    <dt>userlogin</dt>
                    <dd><input type='text' onKeyUp={handleNamechange}/></dd>
                </dl>
            </dl>

            
        </div> 
    )
}