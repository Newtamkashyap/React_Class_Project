import { useState } from "react"


export const ClassBinding = () => {

    const [theme, setTheme] = useState('');
    const [buttonClass, setButtonClass] = useState(' ');

    function handleThemeChange(e) {
        if (e.target.checked) {
            setTheme("bg-dark text-white");
            setButtonClass('btn btn-light ');
        }
        else {
            setTheme("bg-light text-dark");
            setButtonClass('btn btn-dark ');
        }

    }


    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <form className={`border border-1 rounded rounded-2 p-4 ${theme} ${buttonClass}`}>
                <h2 className="bi bi-person-fill">User login</h2>
                <div className="form-switch">
                    <input type='checkbox' onChange={handleThemeChange} className="form-check-input" /> Dark Mode
                </div>
                <div className="my-2" >
                    <label className="form-label">User name</label>
                    <div>
                        <input type='text' className="form-control" />
                    </div>
                </div>
                <div className="my-2">
                    <label className="form-label">Password</label>
                    <div>
                        <input type='password' className="form-control" />
                    </div>
                </div>
                <div>

                    <button className={buttonClass}>Button</button>

                </div>
            </form>
        </div>
    )
}