import React from 'react';
import Card from './Card'
import '../../../App.css';

class Carousel extends React.Component{
    render(){
        return(
            
           
      <div className=" Carousel ">
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item">
            <img className="d-block w-100" src="https://digital-heaven.web.app/img/Aerocool-1440x330.webp" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://digital-heaven.web.app/img/gen-10-1440x330.webp" alt="Second slide" />
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://digital-heaven.web.app/img/Aerocool-1440x330.webp" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>

        )
    }
}
export default Carousel;