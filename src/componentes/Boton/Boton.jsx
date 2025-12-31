import { Link } from 'react-router-dom';
import './Boton.css';


function Boton(props) {

    return (
            <Link to={props.destino}>
        <button onClick={props.onClick} className="cool-btn">  {props.texto}</button>
         </Link>
    );
}

export default Boton; 