import { useState } from 'react';
import './Technology.scss';
import '../global-styles/utilities.scss';
import ButtonContainer from './ButtonContainer';
import { motion } from 'framer-motion';
import { textContainerVariants } from '../assets/shared/animations';

const Technology = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="technology-container container white">

      <h1 className="page-title"><span className="page-title-number">03</span> Space launch 101</h1>

      <div className="inner-container">

        <picture className="tech-img">
          <source media="(min-width:30rem)" srcSet={data[activeTab].images.portrait} />
          <img src={data[activeTab].images.landscape} alt={data[activeTab].name} />
        </picture>

        <motion.div className="tech-text"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >

          <ButtonContainer name={'technology'} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />

          <div>
            <h2 className="const-tech-title fw-400 ff-barlow-cond pastel-blue uppercase">The terminology...</h2>
            <h3 className="tech-title fw-400">{data[activeTab].name}</h3>
            <p className="page-description">{data[activeTab].description}</p>
          </div>

        </motion.div>

      </div>

    </div>
  );
}

export default Technology;