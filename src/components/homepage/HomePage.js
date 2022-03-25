import './HomePage.scss';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div className="home-outer-wrapper">
      <div className="home">

        <div className="home-text-wrapper">
          <h1 className="home__title uppercase pastel-blue ff-barlow-cond">So, you want to travel to <span className="home__title-highlight white ff-bellefair">Space</span></h1>
          <p className="home__text pastel-blue ff-barlow">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
        </div>

        <motion.button
          className="explore-btn ff-bellefair uppercase"
          whileHover={{ boxShadow: "0 0 0 40px hsla(0, 0%, 100%, 0.175)" }}
          transition={{ ease: "easeOut", duration: 0.35 }}
        >
          Explore
        </motion.button>

      </div>
    </div>
  );
}

export default HomePage;