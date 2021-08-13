import React from 'react'
import{ BrowserRouter as Router,Route, } from 'react-router-dom';
import Home from '../containers/Home'
import Addproduct from '../containers/Addproduct'

import Cars from '../containers/Cars'
import Houseshe from '../containers/Houses'
import Land_Plots from '../containers/Land & Plots'
import Mobile_Phones from '../containers/Mobile Phones'
import Motorcycles from '../containers/Motorcycles'
import TV_Video_Audio from '../containers/TV-Video-Audio'
import Tablets from '../containers/Tablets'
import Item from '../containers/Item/index'

class AppRouter extends React.Component{
  
    render(){
        return(
            <Router>
                <Route exact path='/'component={Home}/>
                {/* <Route exact path='/home'component={Home}/> */}
                <Route exact path='/Cars'component={Cars}/>
                <Route exact path='/Houseshe'component={Houseshe}/>
                <Route exact path='/Land_Plots'component={Land_Plots}/>
                <Route exact path='/Mobile_Phones'component={Mobile_Phones}/>
                <Route exact path='/Motorcycles'component={Motorcycles}/>
                <Route exact path='/TV_Video_Audio'component={TV_Video_Audio}/>
                <Route exact path='/Tablets'component={Tablets}/>
                <Route exact path='/Addproduct'component={Addproduct}/>
            </Router>
            )
    }
}
export default  AppRouter;