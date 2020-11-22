import './Char.css'

const Char = (props) => {
    return (
        <p className="Char" onClick={props.click}>{props.inputChar}</ p>
    );
};

export default Char;