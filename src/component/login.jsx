
import '../component/login.css';
export function Login(){
    return(
        <div className='container-fluid shadow p-3  text-center border border-secondary border-radius rounded-4 justify-content-around border-2 bg-success mt-5 w-25'>
            <h3 className="container text-uppercase ">User Login</h3>
            <dl>
                <dt className="">User Name</dt>
                <dd><input type="text"/></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
            </dl>
            <button className="bg-primary btn btn-md mb-2">Login</button>
        </div>
    )
}