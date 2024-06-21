import '../Register/netflix_register';


export function NetflixRegistration() {
    return (
        <form>
            <div className="input-group input-group-lg">
                <input type="email" placeholder="Your email address" className="form-control" />
                <button className="btn btn-danger ms-2" >
                    Get Started<span className="bi bi-chevron-right"></span>
                </button>
                
            </div>
        </form>
    )

}