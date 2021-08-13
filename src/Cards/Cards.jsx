import React,{Component} from 'react';
import './Card.css';
import Card from './CardUI';
import img1 from '../images/image.webp'
class Cards extends Component{
    render(){
        return(
            <div className="container d-flex justify-center">
                <div className="row">
                <div className="col-md-4">
                <Card 
                featured="FEATURED"
                 imgsrc={img1}
                  title="2323"
                   text="Mukhtar attari"/>
                </div>
                <div className="col-md-4">
                <Card featured="FEATURED" imgsrc={img1} title="2323" text="Mudassir Mukhtar attari"/>
                </div>
                <div className="col-md-4">
                <Card featured="FEATURED" imgsrc={img1} title="2323" text="Silver Oaks Two Bed Furnished Apartment 16 K Per Day"/>
                </div>
                </div>
            </div>
        )
    }
}
export default Cards;