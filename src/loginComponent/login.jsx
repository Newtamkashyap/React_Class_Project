

export function UserLogin(){
    return(
      <div className="container-fluid">
        <h2>Bootstrap in react</h2>
        <button data-bs-target="#login" data-bs-toggle="modal" className="btn btn-danger">Button</button>
        <div className="modal fade" id='login'>
            <div className="modal-dialog modal-dailog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>UserLogin</h2>
                        <button data-bs-dismiss="modal" className="btn btn-close"></button>
                    </div>
                    <div className="modal-body">
                        <dl>
                            <dt>User Name</dt>
                            <dd><input type="text" className="form-control"/></dd>
                            <dt>Password</dt>
                            <dd><input type="password" className="form-control"/></dd>
                        </dl>

                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-primary">Login</button>
                        <button data-bs-dismiss="modal" className="btn btn-warning">cancle</button>

                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}