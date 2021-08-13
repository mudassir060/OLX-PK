import React from 'react';
import '../../../App.css';
import CardUI from '../../../Cards/CardUI';
import img1 from '../../../images/image.webp';
import img2 from '../../../images/phone image.webp';
import app_store from '../../../images/app store logo.png';
import play_store from '../../../images/play store logo.png';
class Center extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div className="col-md-4 mx-3">
                            <img src={img2} alt="" />
                        </div>
                        <div className="col-md-4">
                            <h1><b> TRY THE OLX APP</b></h1>
                            <h5>
                                Buy, sell and find just about anything using the app on your mobile.
                                </h5>
                        </div>
                        <div className="col-md-3 my-4">
                            <p><b> GET YOUR APP TODAY</b></p>
                            <div>
                                <a href="https://play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home">
                                    <img style={{ width: "100px" }}
                                        src={play_store} alt="" />
                                </a>
                                <a href="https://apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home">
                                    <img style={{ width: "100px" }}
                                        src={app_store} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
class Cards extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h3>Fresh recommendations</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <CardUI imgsrc={img1} title="2323" text="Mukhtar attari" />
                        </div>
                        <div className="col-md-3">
                            <CardUI imgsrc={img1} title="2323" text="Mudassir Mukhtar attari" />
                        </div>
                        <div className="col-md-3">
                            <CardUI imgsrc={img1} title="2323" text="Silver Oaks Two Bed Furnished Apartment 16 K Per Day" />
                        </div>
                        <div className="col-md-3">
                            <CardUI imgsrc={img1} title="2323" text="Silver Oaks Two Bed Furnished Apartment 16 K Per Day" />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export {
    Center,
    Cards
};