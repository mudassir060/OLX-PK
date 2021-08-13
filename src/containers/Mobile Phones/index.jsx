import React from 'react';
import Header from '../Home/Component/Header';
import Navbar from '../Home/Component/Navbar';
import Footer from '../Home/Component/Footer';
import Bottem from '../Home/Component/Bottem';
import CardUI from '../../Cards/CardUI';
import img1 from '../../images/image.webp';
import '../style.css';
import firebase from '../../config/firebase';
import { connect } from 'react-redux';

class Mobile_Phones extends React.Component {
    constructor() {
        super()
        this.state = {
          chat_user: {},
          OLX: [],
       
        }
        this.get_messages();
      }
    get_messages = () => {
        firebase.database().ref('/').child("OLX").on('child_added', (OLX) => {
            console.log('OLX Data==>',OLX.val())
            this.state.OLX.push(OLX.val())
            this.setState({
                OLX: this.state.OLX,
            })
            // console.log('OLX ok Data==>',OLX.val())
        })
    }

    render() {
        return (
            <div>
                <Header />
                {/* <button onClick={()=> this.get_messages()}><b>show sms</b> </button> */}
                <Navbar />

                <div className="container d-flex justify-center">
                    <br />

                    <h3 className="my-3">Mobile Phones</h3>
                </div>

                <div className="container d-flex justify-center">
                    <div className="row">
                            {this.state.OLX.map((v, i) => {
                                // return<li style={{marginLeft:v.uid===user.uid?"20px":"-20px"}} key={i}>{v.message}</li>
                                return  <div className="col-md-3">
                                <CardUI
                                    featured="FEATURED"
                                    imgsrc={v.Url}                                   title={v.Price}
                                    text={v.Description} />
                            </div>
                                // {let counter=counter + v}
                            })}
                     
                     
                    </div>
                </div>
                <Footer />
                <Bottem />
                
            </div>
        )
    }
}
// export default Mobile_Phones;
const mapStateToProps = (state) => ({
    create_user: state.create_user,
    users: state.users

})



export default connect(mapStateToProps, null)(Mobile_Phones);
