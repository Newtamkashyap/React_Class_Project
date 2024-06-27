import { useState } from "react"



export const Login = () => {

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handlePriceChange(e) {
        setPrice(e.target.value);
    }

    function handleStockChange(e) {
        setStock(e.target.value);
    }

    function handleCityChange(e) {
        setCity(e.target.value);
    }

    function handleSaveChange() {
        setProduct({
            Name:name,
            Price:price,
            Stock:stock,
            City:city
        })
    }


    const [name, setName] = useState('Tv');
    const [price, setPrice] = useState(40000);
    const [stock, setStock] = useState(true);
    const [city, setCity] = useState("-1") //-1 is giving to select by defualt ist option
    const [product, setProduct] = useState({Name:name,Price:price,Stock:stock,City:city})
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col">
                    <h1>Two way binding example</h1>
                    <h3>Edit Product</h3>
                    <dl>
                        <dt className="form-label">Product Name</dt>
                        <dd><input type="text" onChange={handleNameChange} value={name} className="form-control w-25" /></dd>
                        <dt>Price</dt>
                        <dd><input type="number" onChange={handlePriceChange} value={price} className="form-control w-25" /></dd>
                        <dt>Stock</dt>
                        <dd><input type="checkbox" onChange={handleStockChange} checked={stock} className="form-check-input " /></dd>
                        <dt>Shipped To</dt>

                        <dd>

                            <select onChange={handleCityChange} value={city} className="form-control w-25">
                                <option value='-1'>Select City</option>
                                <option value='Delhi'>Delhi</option>
                                <option value='Hyderabad'>Hyd</option>

                            </select>

                        </dd>

                    </dl>
                    <button onClick={handleSaveChange} className="btn btn-warning w-25">Save</button>
                    <div className="col-9">
                        <h3>Product Details</h3>
                        <dl className="row">
                            <dt className="col-3">Name</dt>
                            <dd className="col-9">{product.Name}</dd>
                            <dt className="col-3">Price</dt>
                            <dd className="col-9">{product.Price}</dd>
                            <dt className="col-3">Stock</dt>
                            <dd className="col-9">{(product.Stock === true) ? "Available" : "Out of stock"}</dd>
                            <dt className="col-3">Shipped To</dt>
                            <dd className="col-9">{(product.City === '-1') ? "please select city" : product.City}</dd>
                        </dl>


                    </div>
                </div>
            </div>
        </div>
    )

}