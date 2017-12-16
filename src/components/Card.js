import React from "react";
import "../styles/Card.css";

const Card = (props) => (
    <div className="card" clicked={props.clicked} onClick={() => {props.checkClick(props.alt)}}>
        <img alt={props.alt} src={props.img} onClick={() => {props.checkClick(props.alt)}}/>
    </div>
);

export default Card;