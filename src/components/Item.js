import './Item.css'
function Item(props) {
    let item=props.name;
    return(
    <p className="nirama">{item}</p>
    );
}

export default Item;