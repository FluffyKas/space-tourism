import json from '../assets/data.json';
import './Crew.scss';

const Crew = () => {

  const crewData = json.crew;

  return (
    <div className="crew-container">
      <div className="inner-container">

        <h1 className="page-title"><span className="page-title-number">02</span> Meet your crew</h1>

        <picture>
          <source media="(min-width:30rem)" srcSet={crewData[0].images.png} />
          <img src={crewData[0].images.webp} alt="" className="crew-illustration" />
        </picture>

        <div className="destination-text">
          <li className="btn-container">
            {crewData.map((crewOption, index) => {
              return <button key={index} className="destination-page-btn">.</button>
            })
            }
          </li>

          <div>
            <h2 className="const-subtitle">{crewData[0].role}</h2>
            <h3 className="dynamic-subtitle">{crewData[0].name}</h3>
            <p className="page-description">{crewData[0].bio}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Crew;