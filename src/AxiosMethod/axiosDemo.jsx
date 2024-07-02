import { useEffect, useState } from "react";
import axios from "axios";


export function AxiosDemo() {
    const [products, setProducts] = useState([{ name: "", price: 0, stock: false }]);

    function LoadProducts() {
        axios.get("product.json")
            .then(response => {
                setProducts(response.data)
            })

    }
    useEffect(() => {
        LoadProducts();
    })

    return (
        <div>
            <h3>using axios method</h3>
            <table className="table table-primary table-bordered">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>price</th>
                        <th>stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product}><td>{product.Name}</td><td>{product.Price}</td><td>{(product.Stock === true) ? "Availble" : "Out of stock"}</td>


                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    )
}

