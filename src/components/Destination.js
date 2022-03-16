import json from '../assets/data.json';
import './Destination.scss';
import '../global-styles/utilities.scss'

const Destination = () => {

  const destinationData = json.destinations;

  return (
    <div className="destination-container container white">
      <div className="inner-container">

        <h1 className="page-title"><span className="page-title-number">01</span> Pick your destination</h1>

        <picture>
          <source media="(min-width:30rem)" srcSet={destinationData[0].images.png} />
          <img src={destinationData[0].images.webp} alt="" className="destination-img" />
        </picture>

        <div className="destination-text">
          <li className="btn-container">
            {destinationData.map((destinationOption, index) => {
              return <button key={index} className="destination-page-btn">{destinationOption.name}</button>
            })
            }
          </li>

          <div>
            <h2 className="destination-name ff-bellefair uppercase">{destinationData[0].name}</h2>
            <p className="page-description">{destinationData[0].description}</p>

            <div className="destination-details pb-200">
              <h3 className="detail-title ff-barlow-cond uppercase pastel-blue fw-300 pb-050 pt-200">Avg. distance</h3>
              <p className="detail-data ff-bellefair uppercase pb-150">{destinationData[0].distance}</p>
              <h3 className="detail-title ff-barlow-cond uppercase pastel-blue fw-300 pb-050">Est. travel time</h3>
              <p className="detail-data ff-bellefair uppercase">{destinationData[0].travel}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Destination;