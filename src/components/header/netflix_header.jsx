
export function NetflixHeader() {
    return (
        <header className="d-flex p-4 justify-content-around">
            <div>
                <span className="brand-title">NETFLIX</span>
            </div>

            <div>
                <div className="input-group">



                    <span className="bi input-group-text bi-translate"></span>
                    <select className="form-select">
                        <option>Language</option>
                        <option>English</option>
                    </select>
                    <button className="btn ms-4 btn-danger">Sign in</button>
                </div>
            </div>
        </header >
    )

}