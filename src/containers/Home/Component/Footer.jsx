import React from 'react';
import { Container } from 'reactstrap';
import '../../../App.css';

class Footer extends React.Component {
  render() {
    return (
      <div class="container-fluid bg-secondary m-0 ">


        <div className="container ">
          <div className="row py-3">
            <div className="col-3">
              <b>POPULAR CATEGORIES</b><br />
                Cars<br />
                Flats for rent<br />
                Jobs<br />
                Mobile Phones<br />
            </div>
            <div className="col-3">
              <b>TRENDING SEARCHES</b><br />
<span>Bikes</span><br />
<span>Watches</span><br />
<span>Books</span><br />
<span>Dogs</span><br />
            </div>
            <div className="col-2">
              <b>ABOUT US</b><br />
About OLX Group<br />
OLX Blog<br />
Contact Us<br />
OLX for Businesses<br />
            </div>
            <div className="col-2">
              <b>OLX</b><br />
Help<br />
Sitemap<br />
Legal & Privacy information<br />
            </div>
            <div className="col-2">

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer;