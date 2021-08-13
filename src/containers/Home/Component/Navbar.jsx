import React from 'react';
import '../../../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaMobileAlt,FaCarSide,FaHome,FaMotorcycle ,FaTabletAlt,FaHeadphonesAlt} from 'react-icons/fa';
// import { SiVlcmediaplayer } from 'react-icons/si';
import { RiComputerLine } from 'react-icons/ri';
import { GiIsland } from 'react-icons/gi';
// import { FaMobileAlt } from 'react-icons/fa';

class Navbar extends React.Component {
    render() {
        return (

            <div className="container  my-1">
                <div className="dropdown topbar">
                    {/* <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown">
                        <b>ALL CATEGORIES</b>
                    </button> */}
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                    <Link to='/Mobile_Phones'><b>Mobile</b></Link>
                    <Link to='/Cars'><b>Cars</b> </Link>
                    <Link to='/Houseshe'><b>Houses</b> </Link>
                    <Link to='/Mobile_Phones'><b>Bikes</b></Link>
                    <Link to='/Mobile_Phones'><b>Electronic</b></Link>
                    <Link to='/Mobile_Phones'><b>Tablets</b></Link>
                    <Link to='/Land_Plots'><b>Land & Plots</b></Link>
{/* 
                    <Link to='/Mobile_Phones'><h1><FaMobileAlt/></h1></Link>
                    <Link to='/Cars'><h1><FaCarSide/></h1> </Link>
                    <Link to='/Houseshe'><h1><FaHome/></h1></Link>
                    <Link to='/Motorcycles'> <h1><FaMotorcycle/></h1></Link>
                    <Link to='/TV_Video_Audio'><h1><RiComputerLine/></h1> </Link>
                    <Link to='/TV_Video_Audio'><h1><FaHeadphonesAlt/></h1> </Link> */}
                    {/* <Link to='/Tablets'><h1><FaTabletAlt/></h1></Link>
                    <Link to='/Land_Plots'><h1><GiIsland/></h1></Link> */}

                    {/* <a href="#">Mobile Phones</a> */}
                    {/* <a href="#">Cars</a>
                <a href="#">Motorcycles</a>
                <a href="#">Houses</a>
                <a href="#">TV - Video - Audio</a>
                <a href="#">Tablets</a>
                <a href="#">Land & Plots</a> */}
                </div >
            </div>


        )
    }
}
export default Navbar;