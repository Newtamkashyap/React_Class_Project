import { Button,Input, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";


export const UIDemo=()=>{

    const[userName,setUserName]=useState('');

    function handleNameChange(e){
        setUserName(e.target.value);

    }

    return(
        <div className="w-25 mt-4">
            <div className="mt-4">
            <DatePicker/>

            </div>
            <h2 className="">MUI-Demo</h2>
            <div >
                <Input placeholder="Name" className="my-3"></Input>
                <TextField onChange={handleNameChange} placeholder="username" label="username" size="large" varient="standard"></TextField>
            </div>

            <div className="my-3">
                
                <Button variant='contained' color="error" title='login' className="w-100">Login</Button>
            </div>
            <h3>Hello !{userName}</h3>

            
        </div>
    )
}