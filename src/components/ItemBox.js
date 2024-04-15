import React, {useState} from 'react';
import Item from './Item';
import ItemDate from './ItemDate';
import './ItemBox.css'



function ItemBox(props) {
    let [itemName,setName]=useState(props.items[0].itemName);

    function ClickHandler(){
        setName("Added");
        console.log("ClickHandler on add to cart");
    }




    return (
        <div className="ItemBox">
            <div className="Items">
                <ItemDate day={props.items[0].itemDay} month={props.items[0].itemMonth} year={props.items[0].itemYear}></ItemDate>
                <div>
                    <Item name={itemName}></Item>
                    <button className="btn"  onClick={ClickHandler}>Add to Cart</button>
                </div>
            </div>
            <div className="Items">
                <ItemDate day={props.items[1].itemDay} month={props.items[1].itemMonth} year={props.items[1].itemYear}></ItemDate>
                <div >
                    <Item name={props.items[1].itemName}></Item>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
            <div className="Items">
                <ItemDate day={props.items[2].itemDay} month={props.items[2].itemMonth} year={props.items[2].itemYear}></ItemDate>
                <div>
                    <Item name={props.items[2].itemName}></Item>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
            <div className="Items">
                <ItemDate day={props.items[3].itemDay} month={props.items[3].itemMonth} year={props.items[3].itemYear}></ItemDate>
                <div>
                    <Item name={props.items[3].itemName}></Item>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
            <div className="Items">
                <ItemDate day={props.items[4].itemDay} month={props.items[4].itemMonth} year={props.items[4].itemYear}></ItemDate>
                <div>
                    <Item name={props.items[4].itemName}></Item>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>

        </div>
    );
}

export default ItemBox;