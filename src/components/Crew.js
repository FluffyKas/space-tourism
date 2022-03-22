import { useState } from 'react';
import './Crew.scss';
import '../global-styles/utilities.scss';
import ButtonContainer from './ButtonContainer';

const Crew = ({ data }) => {

  const [activeTab, setActiveTab] = useState(0);

  // const content = <div className="btn-circle"></div>;

  return (
    <div className="crew-container container white">

      <h1 className="page-title"><span className="page-title-number">02</span> Meet your crew</h1>

      <div className="inner-container">

        <picture className="crew-img">
          <source media="(min-width:30rem)" srcSet={data[activeTab].images.png} />
          <img src={data[activeTab].images.webp} alt="" className="crew-illustration" />
        </picture>

        <div className="destination-text">

          <ButtonContainer name={'crew'} data={data} activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="crew-text">
            <h2 className="job-title ff-bellefair uppercase fw-400 pb-050">{data[activeTab].role}</h2>
            <h3 className="name ff-bellefair uppercase fw-400 pb-100">{data[activeTab].name}</h3>
            <p className="page-description">{data[activeTab].bio}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Crew;