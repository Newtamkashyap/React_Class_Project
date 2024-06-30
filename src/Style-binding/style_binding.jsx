import { useState } from "react";
// import './style-binding.css';

export function StyleBinding() {

    const [styleObject, setStyleObject] = useState({ border: '2px solid red' });

    function handleNameChange(e) {
        if (e.target.value.length === 0) { //if it is empty showing this color if not then else part
            setStyleObject({ border: '2px solid red', boxShadow:"2px 2px 2px red" });
        }
        else {
            setStyleObject({ border: '2px solid green', boxShadow:"2px 2px 2px green" });
        }
    }


    return (

        <div className="container-fluid">
            <h2>Style Binding</h2>
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type='text' className="remove-outline" onChange={handleNameChange} style={styleObject} />
                </dd>
            </dl>
        </div>

    )
} 