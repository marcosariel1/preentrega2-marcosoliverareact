import Button from "./Button";
import { Link } from "react-router-dom";

export default function Item(props) {
    const {title, text, price,img,id}=props;

    return (
        <>

            <div className='card'>
                <img className="card-img" src={img} alt="img product" />
                <div className='card-content'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-text'>{text}</p>
                    <div>
                        <p className='card-price'>${price}</p>
                    </div>
                    <Link to={"/item/"+{id}}>
                    <Button text="Ver detalles"></Button>
                    
                    </Link>


                </div>




            </div>
        </>
    );
}
