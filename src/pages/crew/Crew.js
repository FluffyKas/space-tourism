import './Crew.scss';
import { useState } from 'react';
import { ButtonContainer } from '../../components';
import { AnimatePresence, motion } from 'framer-motion';
import { pageAnimation } from '../../assets/animations/animations';

export const Crew = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      className="crew-container container white"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
    >

      <h1 className="page-title"><span className="page-title-number">02</span> Meet your crew</h1>

      <div className="inner-container crew-container-inner">


        <motion.div className="crew-img"
        >
          <AnimatePresence exitBeforeEnter>
            <motion.picture
              key={activeTab}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              exit={{ opacity: 0, x: 50, transition: { duration: 1 } }}
            >
              <source media="(min-width:30rem)" srcSet={data[activeTab].images.png} />
              <img src={data[activeTab].images.webp} alt={data[activeTab].name} />
            </motion.picture>
          </AnimatePresence>
        </motion.div>

        <AnimatePresence exitBeforeEnter>
          <motion.div className="crew-text"
            key={activeTab}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: -50, transition: { duration: 1 } }}
          >

            <ButtonContainer name={'crew'} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="crew-text">
              <h2 className="job-title ff-bellefair uppercase fw-400 pb-050">{data[activeTab].role}</h2>
              <h3 className="name ff-bellefair uppercase fw-400 pb-100">{data[activeTab].name}</h3>
              <p className="page-description">{data[activeTab].bio}</p>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div >
  );
}