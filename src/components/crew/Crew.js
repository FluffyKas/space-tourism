import './Crew.scss';
import { useState } from 'react';
import ButtonContainer from '../buttoncontainer/ButtonContainer';
import { motion } from 'framer-motion';
import { textContainerVariants, imgVariants } from '../../assets/shared/animations';

const Crew = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="crew-container container white">

      <h1 className="page-title"><span className="page-title-number">02</span> Meet your crew</h1>

      <div className="inner-container crew-container-inner">

        <motion.picture className="crew-img" variants={imgVariants} initial="hidden" animate="visible" key={activeTab}>
          <source media="(min-width:30rem)" srcSet={data[activeTab].images.png} />
          <img src={data[activeTab].images.webp} alt={data[activeTab].name} />
        </motion.picture>

        <motion.div className="destination-text"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >

          <ButtonContainer name={'crew'} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />

          <motion.div className="crew-text" variants={textContainerVariants} key={activeTab}>
            <h2 className="job-title ff-bellefair uppercase fw-400 pb-050">{data[activeTab].role}</h2>
            <h3 className="name ff-bellefair uppercase fw-400 pb-100">{data[activeTab].name}</h3>
            <p className="page-description">{data[activeTab].bio}</p>
          </motion.div>

        </motion.div>
      </div>
    </div >
  );
}

export default Crew;