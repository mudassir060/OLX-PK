import React from 'react';
import Header from '../Home/Component/Header';
import Navbar from '../Home/Component/Navbar';
import Footer from '../Home/Component/Footer';
import Bottem from '../Home/Component/Bottem';
import CardUI from '../../Cards/CardUI';
import img1 from '../../images/image.webp'
import './style.css';
import { connect } from 'react-redux';

class Item extends React.Component {
  constructor() {
    super()
    this.state = {
      chat_user: {},

    }

  }



  render() {
    return (
      <div>
        <Header />
        <Navbar />

        <div className="container ">
          <div className="row">
            <div className="col-8">
              <div className="left-inner">
                <div className='carousel-inner'>
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item ">
                        <img className="d-block h-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0NVTfFPNVAnobxSmoHq6oR5XA7SZPMcK1dA&usqp=CAU" alt="First slide" />
                      </div>
                      <div className="carousel-item">
                        <img className="d-block h-100" src="https://i.pinimg.com/originals/9a/1e/8c/9a1e8cf21f0c2f28d848adcd814dbd4e.jpg" alt="Second slide" />
                      </div>
                      <div className="carousel-item active">
                        <img className="d-block h-100" src="https://www.setaswall.com/wp-content/uploads/2017/06/Creative-Heart-Facebook-Cover-851-x-315-768x284.jpg" alt="Third slide" />
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

                <div className="Description">
                  <h3>Description:</h3>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="first-inner">

              </div>
              <div className="second-inner">
                <h3>Seller description</h3>
                <div class="row">
                  <img className="imgprofile" src={this.props.create_user.profile} alt="" />
                  <p className='des-o'>{this.props.create_user.name}</p>
                </div>


                {/* <p className='des-o'>{this.props.create_user.email}</p> */}
                <p className='my-2 mx-5'>mudassirmukhtar4@gmail.com</p>
              </div>
              <div className="thard-inner">

              </div>
            </div>

          </div>



        </div>
        <Footer />
        <Bottem />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  create_user: state.create_user,
  users: state.users

})



export default connect(mapStateToProps, null)(Item);