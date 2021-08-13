import React from 'react';
import './style.css';
import{connect} from 'react-redux';
import{set_data ,facebook_login } from '../../store/action';
import Header from './Component/Header';
import Card from './Component/Card';
import Navbar from './Component/Navbar';
import Footer from  './Component/Footer';
import Bottem from  './Component/Bottem';
import {Center,Cards} from  './Component/Center'
import CardUI from '../../Cards/CardUI';


// import Cards from '../../Cards/Cards';
class Home extends React.Component {
  render(){
    return (
      <div>
         <Header />
        <Navbar />
        <img src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" alt=""style={{  width: "120%" ,height:"260px"}}/>
        <Card />
        <Cards/> 
        <Center />
         {/* <button onClick={this.gotoform}>Mudassir</button> */}
         {/* <button onClick={()=>this.props.facebook_login()}>Facebook login</button> */}
        {/* <div id="mus"></div>
        <h1 className="app" style={{backgroundColor:"red"}}>
          Asslam O Alaikum 
        </h1> */}
        <Footer />
        <Bottem />
          {/* <button onClick={()=>this.props.facebook_login()}>Facebook login</button> */}
          {/* <button onClick={()=>this.props.set_data(users)}>set data</button> */}
      </div>
    );
  } 
}


const mapStateToProps=(state)=>({
  users:state.users,
})
const mapDispatchToProp=(dispatch)=>({
  // set_data: ()=> console.logo("Hello")
  set_data: ()=>dispatch(set_data()) ,
  facebook_login: ()=>dispatch(facebook_login()) ,
})


export default connect(mapStateToProps,mapDispatchToProp) (Home);
  