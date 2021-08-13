import React from 'react';
import '../../../App.css';
import CardUI from '../../../Cards/CardUI';
import img1 from '../../../images/image.webp';

class Card extends React.Component {
    render() {
        return (
            <div className="container radious12 bg-seco  my-4 pt-3">
                <h3>Based on your last search</h3>

                {/* <div className="container d-flex justify-center"> */}
                <div className="row">
                    <div className="col-md-3">
                        <CardUI
                        featured="FEATURED"
                            imgsrc="https://apollo-singapore.akamaized.net:443/v1/files/f0zkl2guw6vk1-PK/image;s=280x0;q=60 320w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/f0zkl2guw6vk1-PK/image;s=440x0;q=60 480w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/f0zkl2guw6vk1-PK/image;s=640x0;q=60 720w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/f0zkl2guw6vk1-PK/image;s=943x0;q=60 1024w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/f0zkl2guw6vk1-PK/image;s=780x0;q=60 1025w"
                            title="15,500"
                            text="HONDA CITY 2009-18 ANDROID NAVIGATION PANEL  " />
                    </div>
                    <div className="col-md-3">
                        <CardUI
                        featured="FEATURED"
                            imgsrc="https://apollo-singapore.akamaized.net:443/v1/files/uh75c5gbg6k31-PK/image;s=280x0;q=60 320w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/uh75c5gbg6k31-PK/image;s=320x0;q=60 360w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/uh75c5gbg6k31-PK/image;s=335x0;q=60 375w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/uh75c5gbg6k31-PK/image;s=440x0;q=60 480w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/uh75c5gbg6k31-PK/image;s=640x0;q=60 720w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/uh75c5gbg6k31-PK/image;s=943x0;q=60 1024w, 
                                    https://apollo-singapore.akamaized.net:443/v1/files/uh75c5gbg6k31-PK/image;s=780x0;q=60 1025w"
                            title="8,500 "
                            text="Study table only in 8500" />
                    </div>
                    <div className="col-md-3">
                        <CardUI
                        featured="FEATURED"
                         imgsrc={img1}
                         title="2323" 
                         text="Silver Oaks Two Bed Furnished Apartment 16 K Per Day" />
                    </div>
                    <div className="col-md-3">
                        <CardUI
                        featured="FEATURED"
                         imgsrc="https://apollo-singapore.akamaized.net:443/v1/files/odp7xdfidq0t-PK/image;s=280x0;q=60 320w, 
                https://apollo-singapore.akamaized.net:443/v1/files/odp7xdfidq0t-PK/image;s=320x0;q=60 360w, 
                https://apollo-singapore.akamaized.net:443/v1/files/odp7xdfidq0t-PK/image;s=335x0;q=60 375w, 
                https://apollo-singapore.akamaized.net:443/v1/files/odp7xdfidq0t-PK/image;s=440x0;q=60 480w, 
                https://apollo-singapore.akamaized.net:443/v1/files/odp7xdfidq0t-PK/image;s=640x0;q=60 720w, 
                https://apollo-singapore.akamaized.net:443/v1/files/odp7xdfidq0t-PK/image;s=943x0;q=60 1024w, 
                https://apollo-singapore.akamaized.net:443/v1/files/odp7xdfidq0t-PK/image;s=780x0;q=60 1025w"
                         title="90,000" 
                         text="GYM Star Fitness" />
                    </div>

                </div>
                {/* </div> */}
                {/* <div className="row">
                        <div className=" col-lg-3 col-md-3 my-2 col-md-3">
                            <a href="#">
                            <div className="card">
                                <img className="card-img-top imag m-2" src="https://apollo-singapore.akamaized.net/v1/files/gyac4hcr2b7l2-PK/image;s=300x600;q=60" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title"> Rs 16,000</h4>
                                        <p className="cardtext ">Silver Oaks Two Bed Furnished Apartment 16 K Per Day <p>...</p></p>
                                        {/* <a href="#" target="_blank">Go To Project</a>}
                                    </div>
                             </div>
                             </a>
                        </div>

                        <div className=" col-lg-3 col-md-3 my-2 col-md-3">
                            <a href="#">
                            <div className="card">
                                <img className="card-img-top imag m-2" src="https://apollo-singapore.akamaized.net/v1/files/gyac4hcr2b7l2-PK/image;s=300x600;q=60" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title"> Rs 16,000</h4>
                                        <p className="cardtext ">Silver Oaks Two Bed Furnished Apartment 16 K Per Day <p>...</p></p>
                                        {/* <a href="#" target="_blank">Go To Project</a> 
                                    </div>
                             </div>
                             </a>
                        </div>

                        <div className=" col-lg-3 col-md-3 my-2 col-md-3">
                            <a href="#">
                            <div className="card">
                                <img className="card-img-top imag m-2" src="https://apollo-singapore.akamaized.net/v1/files/gyac4hcr2b7l2-PK/image;s=300x600;q=60" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title"> Rs 16,000</h4>
                                        <p className="cardtext ">Silver Oaks Two Bed Furnished Apartment 16 K Per Day <p>...</p></p>
                                        {/* <a href="#" target="_blank">Go To Project</a> 
                                    </div>
                             </div>
                             </a>
                        </div>

                        <div className=" col-lg-3 col-md-3 my-2 col-md-3">
                            <a href="#">
                            <div className="card">
                                <img className="card-img-top imag m-2" src="https://apollo-singapore.akamaized.net/v1/files/gyac4hcr2b7l2-PK/image;s=300x600;q=60" alt=""/>
                                    <div className="card-body">
                                        <h4 className="card-title"> Rs 16,000</h4>
                                        <p className="cardtext ">Silver Oaks Two Bed Furnished Apartment 16 K Per Day <p>...</p></p>
                                        {/* <a href="#" target="_blank">Go To Project</a> 
                                    </div>
                             </div>
                             </a>
                        </div>


                    </div>
                 */}
            </div>



        )
    }
}
export default Card;





// import React from 'react';
// import '../../../App.css';
// import Card from './CardUI';
// import img1 from '../../../images/image.webp'


// class Card extends React.Component {
//     render() {
//         return (
//             <div className="container bg-seco my-4">
//                 <h3>Based on your last search</h3>

//                 <div className="row">
//                 <div className="container d-flex justify-center">
//                 <div className="row">
//                 <div className="col-md-4">
//                 <Card imgsrc={img1} title="2323" text="Mukhtar attari"/>
//                 </div>
//                 <div className="col-md-4">
//                 <Card imgsrc={img1} title="2323" text="Mudassir Mukhtar attari"/>
//                 </div>
//                 <div className="col-md-4">
//                 <Card imgsrc={img1} title="2323" text="Mudassir Mukhtar attari"/>
//                 </div>
//                 </div>
//             </div>
//                     </div>

//             </div>



//         )
//     }
// }
// export default Card;
