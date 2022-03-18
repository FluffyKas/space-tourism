import { useState } from 'react';
import json from '../assets/data.json';
import './Destination.scss';
import '../global-styles/utilities.scss'
import { motion } from 'framer-motion';

const Destination = () => {

  const [planet, setPlanet] = useState('');

  const destinationData = json.destinations;

  const switchDestination = (e) => {
    setPlanet(e.target.innerText);
  }

  return (
    <div className="destination-container container white">

      <h1 className="page-title"><span className="page-title-number">01</span> Pick your destination</h1>

      <div className="inner-container">

        <motion.picture
          className="destination-img"
          animate={{ rotate: "360deg" }}
          transition={{ repeat: "Infinity", duration: 110 }}
        >
          <source media="(min-width:30rem)" srcSet={destinationData[0].images.png} />
          <img src={destinationData[0].images.webp} alt="" />
        </motion.picture>

        <div className="destination-text">
          <ul className="destination-btn-container">
            {destinationData.map((destinationOption, index) => {
              return <li><button
                key={index}
                className="destination-page-btn uppercase ff-barlow-cond pastel-blue"
                onClick={switchDestination}
              >
                {destinationOption.name}
              </button></li>
            })
            }
          </ul>

          <div>
            <h2 className="destination-name ff-bellefair uppercase pt-100 fw-400">{destinationData[0].name}</h2>
            <p className="page-description">{destinationData[0].description}</p>

            <div className="destination-details pb-200">
              <div className="detail">
                <h3 className="detail-title ff-barlow-cond uppercase pastel-blue fw-300 pb-050">Avg. distance</h3>
                <p className="detail-data ff-bellefair uppercase pb-150">{destinationData[0].distance}</p>
              </div>
              <div className="detail">
                <h3 className="detail-title ff-barlow-cond uppercase pastel-blue fw-300 pb-050">Est. travel time</h3>
                <p className="detail-data ff-bellefair uppercase">{destinationData[0].travel}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Destination;