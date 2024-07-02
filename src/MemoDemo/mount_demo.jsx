import { useEffect, useState } from "react"


export const MountDemo = () => {

    const [products, setProducts] = useState([{ Name: '', Price: 0, Stock: false }]);

    function LoadProducts() {
        // var http = new XMLHttpRequest();
        // http.open("get", "product.json", true); //get is mandatory for getting data,it is showing what type of request is GET,POSt,DELETE,Update..like that
        // http.send();

        // http.onreadystatechange = function () {
        //     if (http.readyState == 4) {
        //         setProducts(JSON.parse(http.responseText));
        //     }
        // }

        //========================OR(we can do with fetch method,easy and sort)=======================

        fetch("product.json")
        .then(response => response.json())
        .then(products =>{
            (setProducts(products));
        })
    }

    useEffect(() => {
        LoadProducts();
    })

    return (
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover table-bordered table-light">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>price</th>
                        <th>Stock</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>{(product.Stock===true)?"Available":"out of stock"}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}