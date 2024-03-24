import React from "react";
import "../Style/Middle.css";
import LastPage from './LastPart';
import { Link } from "react-router-dom";
import equip from '../img/equip.jpg'
import merchent from '../img/merchent.png'
import img from '../img/Midimg.png'
import img1 from '../'

const MiddleCon = () => {
  return (

    <>

      <div class="feature mt-2">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content" style={{backgroundColor:'#0f1923' , color:'white'}}>
                <i class="fab fa-cc-mastercard" style={{color:'#ff4655'}}></i>
                <h5>Secure Payment</h5>
                <p>
                  Trusted platforms employ stringent security measures, instilling confidence in users and fostering trust.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content" style={{backgroundColor:'#0f1923' , color:'white'}}>
                <i class="fa fa-truck" style={{color:'#ff4655'}}></i>
                <h5>Worldwide Delivery</h5>
                <p>
                  Your package reaches its destination seamlessly, spanning continents with efficiency and reliability.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content" style={{backgroundColor:'#0f1923' , color:'white'}}>
                <i class="fa fa-sync-alt" style={{color:'#ff4655'}}></i>
                <h5>90 Days Return</h5>
                <p>
                  Enjoy peace of mind with our 90-day return policy, ensuring satisfaction guaranteed.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 feature-col">
              <div class="feature-content" style={{backgroundColor:'#0f1923' , color:'white'}}>
                <i class="fa fa-comments" style={{color:'#ff4655'}}></i>
                <h5>24/7 Support</h5>
                <p>Enjoy uninterrupted assistance with our 24/7 support service. Our dedicated team is available round-the-clock. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        {/* Hello world */}
        <div className="container-fluid" >
          <div className="row" style={{padding:'0%'}} >
            <div className="col-sm-6">
              <div className="conatiner-fluid">
                <div className="card" style={{ height: '500px' }}>
                  <img style={{ overflow: 'hidden' }}
                    className="card-img-top h-100"
                    src={equip} alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6" style={{ padding: "10%" }}>
              <div className="container">

                <h3 style={{ fontWeight: '400' }}>EQUIPMENT</h3>
                <h6 className="mt-5 mb-2">
                  Get equipped for arm wrestling with our premium gear. From sturdy tables to grip-strengthening tools, we offer everything you need to elevate your arm wrestling experience and dominate the competition.    </h6>

                <Link to='/Product_details'>
                  {/* <button className="btn mt-2" style={{ backgroundColor: "red" }}
                  >
  {" "}
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      VIEW EQUIPMENT
                    </a>{" "}
                  </button> */}

<button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">  VIEW EQUIPMENT</span>
    </span>
</button>
                </Link>

              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid" >
          <div className="row" style={{marginTop:'-1rem', padding:'0%'}}>
            <div className="col-sm-6" style={{ padding: "10%" }}>

              <div className="container">
                <h3 style={{ fontWeight: '400' }}>MERCHANDISE</h3>
                <h6 className="mt-5 mb-2">
                  Get your hands on exclusive arm wrestling merchandise! From apparel to gear, we've got everything you need to showcase your passion and dominate the arm wrestling scene. Explore our collection now!
                </h6>
                <Link to='/Product_details' >
                  {/* <button
                    className="btn mt-2"
                    style={{ backgroundColor: "red" }}
                  >
                    {" "}
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {" "}
                      VIEW MERCHANDISE
                    </a>{" "}
                  </button> */}
                  <button class="button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">VIEW MERCHANDISE</span>
    </span>
</button>
                </Link>
              </div>

            </div>
            <div className="col-sm-6">
              <div className="conatiner-fluid">
                <div className="card" id="merchent" style={{ borderRadius: 0, height: '520px', marginLeft: '-1.3rem' }}>
                  <img style={{ overflow: 'hidden' }}
                    className="card-img-top img-fluid w-100 h-100"
                    src={merchent} alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid conn" style={{  padding:'0%'}}>
          <img
            src={img}
            style={{ width: "cover" }}
            className=" w-100 img-fluid"
            alt=""
          />
{/* <Link to='/product_details'>
<button class="button overlay-button">
    <span class="button_lg">
        <span class="button_sl"></span>
        <span class="button_text">Shop now!</span>
    </span>
</button></Link> */}
        </div>



      </>
      <LastPage />

    </>


  );
};

export default MiddleCon;
