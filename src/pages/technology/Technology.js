import './Technology.scss';
import { useState } from 'react';
import { ButtonContainer } from '../../components';
import { AnimatePresence, motion } from 'framer-motion';
import { pageAnimation, textContainerVariants, imgVariants, placeHolderVariants } from '../../assets/animations/animations';

export const Technology = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      className="technology-container container white"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
    >

      <h1 className="page-title"><span className="page-title-number">03</span> Space launch 101</h1>

      <div className="inner-container tech-container-inner">


        <div className="tech-img-container">
          <AnimatePresence exitBeforeEnter>
            <motion.picture
              className="tech-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: .75 } }}
              exit={{ opacity: 0 }}
              key={activeTab}>
              <source media="(min-width:30rem)" srcSet={data[activeTab].images.portrait} />
              <img src={data[activeTab].images.landscape} alt={data[activeTab].name} />
            </motion.picture>
          </AnimatePresence>
        </div>


        <div className="tech-text">

          <ButtonContainer
            name={'technology'}
            data={data}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
            className="tech-text-right"
          >
            <h2 className="const-tech-title fw-400 ff-barlow-cond pastel-blue uppercase">The terminology...</h2>
            <h3 className="tech-title fw-400">{data[activeTab].name}</h3>
            <p className="page-description">{data[activeTab].description}</p>
          </motion.div>

        </div>

      </div >

    </motion.div >
  );
}