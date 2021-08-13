// import React from 'react';
// import { Modal, Button, Row, Col, form, Container } from 'react-bootstrap';
// import '../../App.css';
// import img1 from '../../images/image.webp'
// import Card from '../../Cards/CardUI'
// import swal from 'sweetalert';
// import firebase from '../../config/firebase';
// import storage from '../../config/firebase';
// import { connect } from 'react-redux';


// class Addproduct extends React.Component {
//   // constructor(){
//   //   super()
//   //   this.state={
//   //     Condition: [""],
//   //   value1: [""],
//   //   Ad_title: [""],
//   //   Description: [""],
//   //   Price:[""]
//   //       }
//   // }
//   // if (user === "") {
//   //   alert("Enter yor add data")
//   // }
//   // else {
//   //   alert("Plzzz sign in & try again")
//   // }
//   constructor(props) {
//     super(props)
//     this.state = {
//       chat_user: {},
//       olx: [],
//       Condition: "",
//       value1: "",
//       Ad_title: "",
//       Description: "",
//       Price: "",
//       value: "",
//       file: null,
//       image: null,
//       Url:"",
//       progress:0
//     }
//     this.handleChange=this
//     .handleChange
//     .bind(this);
//     this.handleChange = this.handleChange.bind(this)
//   }

//   // add = () => {
//   //   this.state.Description.push(this.state.value)
//   //   this.setState({
//   //     Description: this.state.Description
//   //   })
//   // }

//   handleChange=e=> {
//     if (e.target.files[0]){
//       const image =e.target.files[0];
//       this.setState(()=>({image}))
//     }
//     // this.setState({
//     //   file: URL.createObjectURL(e.target.files[0])
//     // })
//   }
//   // state = {
//   //   file: null
//   // };

//   // submit = () => {
//   //   let Condition = (this.state.Condition);
//   //   let value1 = (this.state.value1);
//   //   let Ad_title = (this.state.Ad_title);
//   //   let Description = (this.state.Description);
//   //   let Price = (this.state.Price);
//   //   firebase.database().ref('/').child("Condition").push(Condition)
//   //   firebase.database().ref('/').child("Type").push(value1)
//   //   firebase.database().ref('/').child("Ad_title").push(Ad_title)
//   //   firebase.database().ref('/').child("Description").push(Description)
//   //   firebase.database().ref('/').child("Price").push(Price)
//   // }
//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   Upload_file=()=>{
//     const {image} = this.state;
//     const uploadTask = storage().ref(`images/${image.name}`).put(image)

//     uploadTask.on('state_changed', (snapshot) =>{
//       // ref.on('state_changed', function (snapshot) {
//       // // Observe state change events such as progress, pause, and resume
//       // // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//       var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
//       this.setState({progress});
//       // console.log('Upload is ' + progress + '% done');
//       // switch (snapshot.state) {
//       //   case firebase.storage.TaskState.PAUSED: // or 'paused'
//       //     console.log('Upload is paused');
//       //     break;
//       //   case firebase.storage.TaskState.RUNNING: // or 'running'
//       //     console.log('Upload is running');
//       //     break;
//       // }
//     },  (error)=> {
//       console.log("image uploding error===>",error)
//       // Handle unsuccessful uploads
//     },  ()=> {
//       // Handle successful uploads on complete
//       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//       // ref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
//       //   console.log('File available at', downloadURL);
//       //  this.setState({downloadURL});
//     // });
//     storage.ref('image').child(`images/${image.name}`).getDownloadURL().then(Url=>{
//            console.log('File available at', Url);
//            this.setState({Url})

//     })
//     });
//   }
//   Post_Add = () => {
//     let user = this.props.create_user;
//     let uid = this.props.create_user.uid;


//     if (this.state.Condition !== "") {
//       if (this.state.value1 !== "") {
//         if (this.state.Ad_title !== "") {
//           if (this.state.Description !== "") {
//             if (this.state.Price !== "") {
               
//                 firebase.database().ref('/').child("OLX").push({
//                   Condition: this.state.Condition,
//                   value1: this.state.value1,
//                   Ad_title: this.state.Ad_title,
//                   Description: this.state.Description,
//                   Price: this.state.Price,
//                   name: user.name,
//                   uid: user.uid,
//                   Url: this.state.Url,                
//                 })
//                 this.setState({
//                   Condition: "",
//                   value1: "",
//                   Ad_title: "",
//                   Description: "",
//                   Price: "",
//                   // file: null,
//                   Url:""
//                 })
                
//                 // alert("your add is post successfully")
//                 swal("your add is post successfully!", "", "success");
//             }
//             else {
//               swal("Plzzz Enter Price", "", "error");
//             }
//           }
//           else {
//             swal("Plzzz Enter Description", "", "error");
//           }
//         }
//         else {
//           swal("Plzzz Enter Ad title", "", "error");
//         }
//       }
//       else {
//         swal("Plzzz slecet Type", "", "error");
//       }
//     }
//     else {
//       swal("Plzzz slecet Condatio", "", "error");
//     }
//   }
 

//   // onChange = e => {
//   //   this.setState({ [e.target.name]: e.target.value });
//   // };
//   render() {

//     const { Condition, value1, Ad_title, Description, Price, value ,Url  } = this.state;
//     return (
//       <div >
//         <center><h3>POST YOUR AD</h3></center>
//         <div className="container form-cont">
//           <div className="row ">
//             <div className=" col-lg-6 col-sm-12  col-md-6" >
//               <h4>SELECTED CATEGORY</h4>
//             </div>
//           </div>
//           <hr />
//           <div className="row ">
//             <div className=" col-lg-12 col-sm-12  col-md-12" >
//               <h4>INCLUDE SOME DETAILS</h4>




//               <p>Condition * <span className="form-p">{Condition}</span><br />
//                 <div className="btn-group btn-group-toggle" data-toggle="buttons">
//                   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="New" name="Condition" id="option1"
//                       autoComplete="off" checked={Condition === "New"}
//                       onChange={this.onChange} /> New
//   </label>
//                   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="Used" name="Condition" id="option2"
//                       autoComplete="off" checked={Condition === "Used"}
//                       onChange={this.onChange} /> Used
//   </label>
//                 </div>
//               </p>
// {/* 
//    <Link to='/Mobile_Phones'>Mobile Phones</Link>
//                     <Link to='/Cars'>Cars </Link>
//                     <Link to='/Houseshe'>Houses </Link>
//                     <Link to='/Mobile_Phones'>Motorcycles </Link>
//                     <Link to='/Mobile_Phones'>TV - Video - Audio </Link>
//                     <Link to='/Mobile_Phones'>Tablets </Link>
//                     <Link to='/Land_Plots'>Land & Plots </Link> */}




//               <p>Type * <span className="form-p">{value1}</span><br />
//                 <div className="btn-group btn-group-toggle" data-toggle="buttons">
//                   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="Mobile Phones" name="value1" id="option1"
//                       autoComplete="off" checked={value1 === "Mobile Phones"}
//                       onChange={this.onChange} /> Mobile Phones
//   </label>
//                   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="Cars" name="value1" id="option2"
//                       autoComplete="off" checked={value1 === "Cars"}
//                       onChange={this.onChange} /> Cars
//   </label>
//                   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="Houses" name="value1" id="option2"
//                       autoComplete="off" checked={value1 === "Houses"}
//                       onChange={this.onChange} /> Houses
//   </label>
//                   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="Motorcycles" name="value1" id="option2"
//                       autoComplete="off" checked={value1 === "Motorcycles"}
//                       onChange={this.onChange} /> Motorcycles
//   </label>
//   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="TV - Video - Audio" name="value1" id="option2"
//                       autoComplete="off" checked={value1 === "TV - Video - Audio"}
//                       onChange={this.onChange} /> TV - Video - Audio
//   </label>
//   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="Tablets" name="value1" id="option2"
//                       autoComplete="off" checked={value1 === "Tablets"}
//                       onChange={this.onChange} /> Tablets
//   </label>
//   <label className="btn btn-outline-secondary">
//                     <input type="radio" value="Land & Plots" name="value1" id="option2"
//                       autoComplete="off" checked={value1 === "Land & Plots"}
//                       onChange={this.onChange} /> Land & Plots
//   </label>
//                 </div>
//               </p>
//             </div>
//           </div>
//           {/* Ad title */}
//           <div className="row ">
//             <div className=" col-lg-6 col-sm-12  col-md-6" >
//               <p>Ad title * <span className="form-p">{Ad_title}</span><br />
//                 <input type="text" id="title"
//                   onChange={(e) => this.setState({ Ad_title: e.target.value })}
//                   minLength="5" maxLength="70" />
//                 <span className='bot'>A minimum length of 5 characters is required. Please edit the field.</span>
//               </p>
//             </div>
//           </div>
//           {/* Description */}
//           <div className="row ">
//             <div className=" col-lg-6 col-sm-12  col-md-6" >
//             <p>Description * <span className="form-p">{Description}</span><br />
//                 <textarea className='dis' name="Description" id="Description"
//                   onChange={(e) => this.setState({ Description: e.target.value })}
//                   minLength="20" maxLength="470"></textarea>
//                 <span className='bot'>A minimum length of 20 characters is required. Please edit the field.</span>
//               </p>
//             </div>
//           </div>
//           {/* todo */}
//           {/* <button onClick={this.add}>add</button> */}
//           {/* <ul>
//             {this.state.Description.map((v, i) => {
//               return <li key={i}>{v}</li>
//             })}
//           </ul> */}

//           <hr />

//           <h3>SET A PRICE</h3>
//           <div className="row ">
//             <div className=" col-lg-6 col-sm-12  col-md-6" >
//               <p>Price * <span className="form-p">{Price}</span><br />
//                 <input type="number" id="Price"
//                   onChange={(e) => this.setState({ Price: e.target.value })}
//                   minLength="3" maxLength="20" />
//                 <span className='bot'>Enter price in Rs</span>
//               </p>
//             </div>
//           </div>



//           <div className="row">
//           <div className="col-lg-6">
//           <img type="file" src={this.state.file} width="150" />
//           {/* <br /> */}
//           <input type="file" className="btn-sm" accept="jpg, jpeg, png"
//           onChange={this.handleChange}
//             // onChange={this.handleChange}
//             />
//             <progress value={this.state.progress} max="100"/>
//             <img src={this.state.Url}/>
//             <button onClick={this.Upload_file}>Upload</button>
//           {/* <input type="file" className="btn-sm" accept="jpg, jpeg, png" onChange={this.handleChange} /> */}
//         </div>
//           </div>



//           <div className="row m-5">
//             <div className=" col-lg-12 col-sm-12  col-md-12" >
//               <center>
//                 <button onClick={() => this.Post_Add()}>
//                   Post now
//                   </button>
//               </center>
//             </div>
//           </div>
//         </div>
//         {/* {
//           this.state.Description.map((v,i)=>{
//             return  <Card key={i} imgsrc={v} title={v} text={v}/>
//           }
//           )
//         } */}
//       </div>
//     )
//   }
// }
// // export default Addproduct;
// const mapStateToProps = (state) => ({
//   create_user: state.create_user,
//   users: state.users

// })



// export default connect(mapStateToProps, null)(Addproduct);
