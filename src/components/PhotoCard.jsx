import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PhotoCard.module.css';
import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const PhotoCard = ({ imageUrl, name, position, insta, github, facebook, linkedin }) => {
  return (
    <div className={styles.card}>
      <div className={styles.border}>
        <img src={imageUrl} alt={name} className={styles.image} />

        <h4 className={styles.text}>{position}</h4>
        <div className={styles.icon1}>
          {insta && (
            <a href={insta} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
