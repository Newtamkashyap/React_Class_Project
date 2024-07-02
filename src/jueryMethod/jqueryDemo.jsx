import { useState, useEffect } from "react";
import $ from 'jquery';


export const JqueryMethod = () => {

    const [userName, setUserName] = useState([{ faculty: "", course: "", payment: 0, timing: "" }])

    function LoadName() {
        //========================by using Ajax juery method=========================//
        $.ajax({
            method:'get',
            url:"institute.json",
            success:(response)=>{
                setUserName(response);
            }
        })
    }
    useEffect(() => {
        LoadName()
    }, [])



    return (
        <div>
            <h3>Fetching data by using jquery method</h3>
            <table className="table table-hover table-danger table-bordered">
                <thead>
                    <tr>
                        <th>Faculty</th>
                        <th>course</th>
                        <th>payment</th>
                        <th>timing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userName.map(institute =>
                            <tr key={institute}>
                                <td>{institute.name}</td>
                                <td>{institute.course}</td>
                                <td>{institute.payment}</td>
                                <td>{institute.timing}</td> 

                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    )
}