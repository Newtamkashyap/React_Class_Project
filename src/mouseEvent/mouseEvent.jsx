import axios from "axios";
import { useEffect, useState } from "react";
import './mouseEvent.css';


export function MouseEvents() {


    const [images, setImages] = useState([{ image: "" }]);
    const[previewSrc,setPreviewSrc]=useState('images/m1.png')

    useEffect(() => { //at the time of mounting we have to load the images.
        axios.get("mobiles.json")
            .then(response => {
                setImages(response.data);
            })

    }, [])

    
    function handleMouseOver(e){
        setPreviewSrc(e.target.src);

    }

    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-2">
                    {
                        images.map(images =>
                            <div key={images.image} className="border  border-1" style={{ width: '100px', height: '100px' }}>
                                <img  onMouseOver={handleMouseOver} src={images.image} width="80" height="80" />
                            </div>
                        )

                    }

                </div>
                <div className="col-10">
                    <img src={previewSrc} width="400" height="500"/>

                </div>
            </div>
        </div>
    )
}