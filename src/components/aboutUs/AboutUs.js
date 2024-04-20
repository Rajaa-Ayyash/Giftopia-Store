import React from "react"
import '../aboutUs/AboutUsD.css'
import Teammember from './TeamMembers'
import AboutPageVid from '../aboutUs/aboutUsVidAndPic/AboutPageVid.mp4'
import { Link } from "react-router-dom"
//import Navbar from '../Navbar/Navbar';
//import Footer from '../Footer/Footer';



const AboutUs = () => {

  return (

    <>

      <div className="title">
        <h1 >About</h1>
        <Link className="title2">Giftopia</Link>
      </div>


      <div className='bodyy'>
        <div class="gallery">
          <figure class="card">
            <img
              src={require('../aboutUs/aboutUsVidAndPic/AboutPagePic1.jpg')}
              alt="Lakeview Elegance preview"
            ></img>
          </figure>

          <figure class="card">
            <img
              src={require('../aboutUs/aboutUsVidAndPic/AboutPagePic2.jpg')}
              alt="Skyline Oasis preview"
            ></img>
          </figure>

          <figure class="card">
            <img
              src={require('../aboutUs/aboutUsVidAndPic/AboutPagePic3.jpg')}
              alt="Vista Paradiso preview"
            ></img>
          </figure>

          <figure class="card">
            <img
              src={require('../aboutUs/aboutUsVidAndPic/AboutPagePic4.jpg')}
              alt="Villa Verde preview"
            ></img>
          </figure>
        </div>
      </div>


      <div className="about_f">
        <h1 className='ourhis'>We were born in Palestine</h1>
        <h1 className='Giftopia_idea'> <span className='Giftopia_about' >Giftopia </span>project began in 2020 during the Corona era, when we were forced to stay at home and adhere to safety measures, which changed the course of our lives on many levels, including shopping, as online shopping became widespread, and from here came the idea of ​​our website to make it easier for you to provide Suitable gifts for many occasions from home without any effort.
        </h1>
      </div>


      <div className="container-2">
        <img className='image'  src={require('../aboutUs/aboutUsVidAndPic/AboutPagePic5.png')} alt="jgk"></img>
        <p className="text">
        <h1 className="ourfeat"> Why Giftopia ...?</h1>   
         We are pleased to offer you through our website what increases the love and familiarity between us. Gifts suitable for all genders, ages,
         and special and general occasions. Prices are affordable and gifts are available for multiple purposes, including perfumes, clothing, toys, cosmetics, care and more. We also
         provide all the modern technologies to search for gifts and access them without spending hours to get the appropriate gift, by <h3 className="ourspecialfeat"> chatting with artificial intelligence (AI)</h3> where you give it information about your specific gift and it gives you all the options that you can choose from, in addition to the possibility of delivery to any place in the world.
        </p>
      </div>


      <div  className="paragraph">
        <h1 >" Thank U for making me feel special "</h1>
        <p  >some words we love to hear</p>
      </div>


      <div className="about" >
        <div className="row" id="row">
          <div className="video-container">
            <video src={AboutPageVid} autoPlay loop muted  ></video>
            <h3>share lOVE</h3>
          </div>
          <div className="content-c"  >
            <h3>You're part of our family</h3>
            <p>We hope to be a permanent part of your happy occasions.</p>
            <p>If you have any further questions, please feel free to ...</p>
            <Link to="/ContactUs" className="btn" >Contact Us</Link>
          </div>
        </div>
      </div>


      <div className='container'>
        <div>
          <h2 className="padd-ourteam"> " Our team members "</h2>
          <div className="container_text_center">
            <div className="row align-items-start rowCard  padd-top">

              <div className="col">
                <Teammember name='Reema' identification='employee' />
              </div>

              <div className="col">
                <Teammember   name='Mohammed' identification='employee' />
              </div>

              <div className="col">
                <Teammember name='Rajaa' identification='employee' />
              </div>

              <div className="col">
                <Teammember name='Noor' identification='employee' />
              </div>

            </div>
          </div>
        </div>
      </div>



    </>


  );

}




export default AboutUs