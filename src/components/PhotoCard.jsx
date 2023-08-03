import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import fas from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PhotoCard.module.css'
import { faCodepen, faInstagram, faDribbble, faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { SectionWrapper } from "../hoc";
const PhotoCard = ({ imageUrl, name, position, twitter, insta, github, facebook, linkdin }) => {
  return (
    // <div className={styles.aboutSection}>
      // <div className={styles.container}>
        <div className={styles.card} style={{
          backgroundImage: `url("${imageUrl}")`,
          backgroundColor:"#fff"
        }}>
          {/* <img src="ahsan.jpg.JPG"  className="" /> */}
          <div className={styles.border}>
            <h2 className={styles.text}>{name}</h2>
            <h4 className={styles.text}>{position}</h4>
            <div className={styles.icon1}>
              <a href={twitter} target="_blank" rel="noopener noreferrer" >
                < FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href={insta} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                < FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href={linkdin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};


export default PhotoCard;