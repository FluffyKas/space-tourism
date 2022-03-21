import json from '../assets/data.json';
import './Crew.scss';
import '../global-styles/utilities.scss';

const Crew = () => {

  const crewData = json.crew;

  return (
    <div className="crew-container container white">

      <h1 className="page-title"><span className="page-title-number">02</span> Meet your crew</h1>

      <div className="inner-container">

        <picture className="crew-img">
          <source media="(min-width:30rem)" srcSet={crewData[0].images.png} />
          <img src={crewData[0].images.webp} alt="" className="crew-illustration" />
        </picture>

        <div className="destination-text">

          <li className="crew-btn-container">
            {crewData.map((crewOption, index) => {
              return <button key={index} className="crew-page-btn">
                <div className="btn-circle"></div>
              </button>
            })
            }
          </li>

          <div className="crew-text">
            <h2 className="job-title ff-bellefair uppercase fw-400 pb-050">{crewData[0].role}</h2>
            <h3 className="name ff-bellefair uppercase fw-400 pb-100">{crewData[0].name}</h3>
            <p className="page-description">{crewData[0].bio}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Crew;