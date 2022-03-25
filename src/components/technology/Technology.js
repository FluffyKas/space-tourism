import './Technology.scss';
import { useState } from 'react';
import ButtonContainer from '../buttoncontainer/ButtonContainer';
import { motion } from 'framer-motion';
import { textContainerVariants, imgVariants } from '../../assets/shared/animations';

const Technology = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="technology-container container white">

      <h1 className="page-title"><span className="page-title-number">03</span> Space launch 101</h1>

      <div className="inner-container tech-container-inner">

        <motion.picture className="tech-img" variants={imgVariants} initial="hidden" animate="visible" key={activeTab}>
          <source media="(min-width:30rem)" srcSet={data[activeTab].images.portrait} />
          <img src={data[activeTab].images.landscape} alt={data[activeTab].name} />
        </motion.picture>

        <div className="tech-text">

          <ButtonContainer name={'technology'} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />

          <motion.div variants={textContainerVariants} initial="hidden" animate="visible" key={activeTab} className="tech-text-right">
            <h2 className="const-tech-title fw-400 ff-barlow-cond pastel-blue uppercase">The terminology...</h2>
            <h3 className="tech-title fw-400">{data[activeTab].name}</h3>
            <p className="page-description">{data[activeTab].description}</p>
          </motion.div>

        </div>

      </div>

    </div >
  );
}

export default Technology;