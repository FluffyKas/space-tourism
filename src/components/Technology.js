import { useState } from 'react';
import './Technology.scss';
import '../global-styles/utilities.scss';
import ButtonContainer from './ButtonContainer';

const Technology = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="technology-container container white">


      <h1 className="page-title"><span className="page-title-number">03</span> Space launch 101</h1>

      <div className="inner-container">

        <picture>
          <source media="(min-width:30rem)" srcSet={data[activeTab].images.portrait} />
          <img src={data[activeTab].images.landscape} alt="" className="technology-illustration" />
        </picture>

        <div className="tech-text">

          <ButtonContainer name={'technology'} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />

          <div>
            <h2 className="const-tech-title fw-400 ff-barlow-cond pastel-blue uppercase">The terminology...</h2>
            <h3 className="tech-title fw-400">{data[activeTab].name}</h3>
            <p className="page-description">{data[activeTab].description}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Technology;