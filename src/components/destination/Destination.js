import './Destination.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { textContainerVariants } from '../../assets/shared/animations';
import ButtonContainer from '../buttoncontainer/ButtonContainer';

const Destination = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="destination-container container white">

      <h1 className="page-title"><span className="page-title-number">01</span> Pick your destination</h1>

      <div className="inner-container">

        <motion.picture
          className="destination-img"
          animate={{ rotate: "360deg" }}
          transition={{ repeat: "Infinity", duration: 110 }}
        >
          <source media="(min-width:30rem)" srcSet={data[activeTab].images.png} />
          <img src={data[activeTab].images.webp} alt={data[activeTab].name} />
        </motion.picture>

        <motion.div className="destination-text"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >

          <ButtonContainer name={'destination'} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />

          <motion.div variants={textContainerVariants} key={activeTab}>
            <h2 className="destination-name ff-bellefair uppercase pt-100 fw-400">{data[activeTab].name}</h2>
            <p className="page-description">{data[activeTab].description}</p>

            <div className="destination-details pb-200">
              <div className="detail">
                <h3 className="detail-title ff-barlow-cond uppercase pastel-blue fw-300 pb-050">Avg. distance</h3>
                <p className="detail-data ff-bellefair uppercase pb-150">{data[activeTab].distance}</p>
              </div>
              <div className="detail">
                <h3 className="detail-title ff-barlow-cond uppercase pastel-blue fw-300 pb-050">Est. travel time</h3>
                <p className="detail-data ff-bellefair uppercase">{data[activeTab].travel}</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}

export default Destination;