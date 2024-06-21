
import '../component/login.css';
export function Login(){
    return(
        <div className='container text-center border border-secondary border-radius rounded-4 border-2 mt-5 p-5   w-25'>
            <form className='form-login alert alert-warning alert-dismissible'>
            <h3 className="container text-uppercase bi bi-person-fill">User Login</h3>
            <button data-bs-dismiss="alert" className='btn btn-close'></button>
            <dl>
                <dt className="">User Name</dt>
                <dd><input type="text" className='form-control'/></dd>
                <dt>Password</dt>
                <dd><input type="password" className='form-control'/></dd>
            </dl>
            <button className="btn btn-warning w-100 mb-2">Login</button>
            </form>
        </div>
    )
}