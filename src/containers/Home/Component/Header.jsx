import React from 'react';
import OLXLOGO from '../../../images/logolx.png';
import Sellimg from '../../../images//sell.png';
import '../../../App.css';
import { Component } from 'react';
import { connect } from 'react-redux';
import { set_data, facebook_login } from '../../../store/action';
import firebase from 'firebase'
import history from 'history/createBrowserHistory'
import useHistory from 'react-router-dom'
import{ BrowserRouter as Router,Route,Link } from 'react-router-dom';
import { IoMdCloudUpload } from 'react-icons/io';

// const FavS =(user)=>{
//   console.log('user.name==>',user.name)
//   {if (user.name==user.name) {
//     <button className="nav-link my-2" onClick={()=>this.props.facebook_login()}><b>Login</b> </button>
//   } else {
//     <img src="" alt=""/>
//     // <img src="" alt=""/>
//   }}
// }

class Logo extends Component {
  constructor() {
    super()
    this.state = {
      chat_user: {}
    }

  }
  render() {
    return (
      <div className='logo ml-5'>
        <img src={OLXLOGO} alt="logo" width="70px"  onClick={()=>this.gotoform()} />
      </div>
    )
  }
}
class Sell extends Component {
  gotoform = (history) => {
    // this.props.history.push('./addproducr')
    history.push('/Addproduct')
    alert('Ook')
  }
  render() {
    return (
      <div className=' mr-5'>
        <img src={Sellimg}
          // onClick={() => this.gotoform()}
          alt="logo" width="90px" />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          <Logo />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-item ">
              <div class="form-group my-2">
                {/* <label for="sel1">Select LOCATIONS:</label> */}
                <select class="form-control" id="sel1">
                  <option>Pakistan</option>
                  <option>Punjab</option>
                  <option>Islamabad Capital Territory</option>
                  <option>Sindh</option>
                  <option>Khyber Pakhtunkhwa</option>
                </select>
              </div>
              {/* <a className="nav-link disabled" href="#">Disabled</a> */}
            </li>
            <form className="form-inline my-2 mx-5 my-lg-0">
              <input className="form-control Searchbar mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
            </form>
            <li className="nav-item active">
              {/* <FavS /> */}
              <a className="nav-link my-2" onClick={() => this.props.facebook_login()}><b><u>Login</u></b> </a>

              {/* {if (this.state.chat_user==this.state.chat_user) {
              <button className="nav-link my-2" onClick={()=>this.props.facebook_login()}><b>Login</b> </button>
            } else {
              <img src="" alt=""/>
              // <img src="" alt=""/>
            }} */}
            </li>

          </ul>
          {/* <li>
            {
            
            }
          </li> */}
          <a className="navbar-brand mr-5" >
          {/* <Sell /> */}
         
          <Link to='/Addproduct'><h1><IoMdCloudUpload /></h1> </Link>

        </a>
        </div>
      </nav>
    );



  }
}


// export default Header;

const mapStateToProps = (state) => ({
  create_user: state.create_user,
  users: state.users
})
const mapDispatchToProp = (dispatch) => ({
  // set_data: ()=> console.logo("Hello")
  set_data: () => dispatch(set_data()),
  facebook_login: () => dispatch(facebook_login()),
})


export default connect(mapStateToProps, mapDispatchToProp)(Header);
