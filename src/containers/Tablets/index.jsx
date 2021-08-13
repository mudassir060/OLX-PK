import React from 'react';
import Header from '../Home/Component/Header';
import Navbar from '../Home/Component/Navbar';
import Footer from '../Home/Component/Footer';
import Bottem from '../Home/Component/Bottem';
import CardUI from '../../Cards/CardUI';
import img1 from '../../images/image.webp'
import '../style.css';
class Tablets extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <div className="container d-flex justify-center">
                    <br />

                    <h3 className="my-3">Tablets</h3>
                </div>

                <div className="container d-flex justify-center">
                    <div className="row">
                        <div className="col-md-4">
                            <CardUI imgsrc={img1} title="2323" text="Mukhtar attari" />
                        </div>
                        <div className="col-md-4">
                            <CardUI imgsrc={img1} title="2323" text="Mudassir Mukhtar attari" />
                        </div>
                        <div className="col-md-4">
                            <CardUI imgsrc={img1} title="2323" text="Silver Oaks Two Bed Furnished Apartment 16 K Per Day" />
                        </div>
                    </div>
                </div>        <Footer />
                <Bottem />
            </div>
        )
    }
}
export default Tablets;