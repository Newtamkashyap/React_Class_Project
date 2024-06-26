


export const UserLogin = () => {
    var price = 4000;
    var stock = true;

    // var product = ["saare", "jeans", "lower", "shirt", "tshirt"]
    var myArray = {
        name: "tv",
        price: 250000,
        model: "t-25"
    }
    return (
        <div className="container-fluid">
            <h4>UserLogin Page</h4>
            <dl>
                <dt>userName</dt>
                <dd><input type="text" /></dd>

                <dt>Password</dt>
                <dd><input type="password" /></dd>


                <dt>{(price === null) ? "price" : price}</dt>
                <dt>{(stock === true) ? "Available" : "out of stock"}</dt>
                <dt>
                    {/* {myArray.map((item) => <p>{item}</p>)} */}

                </dt>
            </dl>
            <button className="btn btn-primary">button</button>

        </div>
    )
}