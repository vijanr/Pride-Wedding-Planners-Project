import React, { Component } from "react";
//import { Link } from 'react-router-dom';

//import "./index.css";
import "./contactinfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faFacebookMessenger,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
export default class Contactinfo extends Component {
    render() {
        return (
            <form>
                <div className="App">
                 <h2>Contact us on</h2>
                </div>
               
                <div className="social-container" >
                <h4>@prideweddingplanners</h4>
                <a
                   href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social"
                >
        <FontAwesomeIcon icon={faYoutube} size="3x"  />
      </a>
      <a
        href="https://www.facebook.com/Pride-Wedding-Planners-100516545407395"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://twitter.com/PlannersPride" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a
        href="https://www.instagram.com/learnbuildteach"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="3x"  />
      </a>
      <a
        href="https://web.whatsapp.com/"
        className="whatsapp social"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="3x" />
      </a>
      <a
        href="https://www.facebook.com/messenger/"
        className="Messenger social"
      >
        <FontAwesomeIcon icon={faFacebookMessenger} size="3x" />
      </a>
      <a
        href="https://telegram.org/blog/login"
        className="Telegram social"
      >
        <FontAwesomeIcon icon={faTelegram} size="3x" />
      </a>
    </div>
    
            </form>
            
        );
    }
}

