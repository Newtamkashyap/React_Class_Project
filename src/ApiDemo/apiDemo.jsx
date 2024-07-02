import { useEffect, useState } from "react"


export const ApiDemo = () => {

    const [items, setItems] = useState([{ category: '',  product: '',Price:0}]);
    //always recommand to define the type of all the datas

    function LoadItems() {
    //============================by using XML Http Request method========================
        var http = new XMLHttpRequest();
        http.open("get", "item.json", true); //get is mandatory for getting data,it is showing what type of request is GET,POSt,DELETE,Update..like that
        http.send();

        http.onreadystatechange = function () {
            if (http.readyState == 4) {
                setItems(JSON.parse(http.responseText));
            }
        }
    }
    useEffect(() => {
        LoadItems()
    },[])



    return (
        <div className="container-fluid">
            <h3 className="">Fetching data bu using XML http request method</h3>
            <table className="table table-hover table-dark table-bordered">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Product</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item =>
                            <tr key={item.category}>
                                <td>{item.category}</td>
                                <td>{item.product}</td>
                                <td>{item.price}</td>


                            </tr>
                        )
                    }
                </tbody>

            </table>

        </div>
    )
}
