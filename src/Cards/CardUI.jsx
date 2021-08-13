import React from 'react';
import './Card.css';
const Card = (props) => {
    return (
        <div className=" col-lg-12 col-md-12 my-2 col-md-12 card1">
            <div className="card text-center">
                <a>
                    <div className="overflowed">
                        <div className="featured"><b>{props.featured}</b></div>
                        <img src={props.imgsrc} className="card-img-top imag " alt="" />
                    </div>
                    <div className="cardbody ">
                        <h4 className="card-title"> Rs {props.title}</h4>
                        <p className="card-text ">{props.text} <p style={{display:'inline'}}>...</p></p>
                    </div>
                </a>
            </div>
        </div >

    );
}
export default Card;