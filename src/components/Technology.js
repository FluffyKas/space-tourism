import json from '../assets/data.json';
import './Technology.scss';

const Technology = () => {

  const techData = json.technology;

  const changeContent = () => {
    console.log('clicked')
  }

  return (
    <div className="technology-container">


      <h1 className="page-title"><span className="page-title-number">03</span> Space launch 101</h1>

      <div className="inner-container">

        <picture>
          <source media="(min-width:30rem)" srcSet={techData[0].images.portrait} />
          <img src={techData[0].images.landscape} alt="" className="technology-illustration" />
        </picture>

        <div className="tech-text">
          <li className="btn-container">
            {techData.map((techOption, index) => {
              return <button key={index} className="tech-page-btn" onClick={changeContent}>{index + 1}</button>
            })
            }
          </li>

          <div>
            <h2 className="const-subtitle">The terminology...</h2>
            <h3 className="dynamic-subtitle">{techData[0].name}</h3>
            <p className="page-description">{techData[0].description}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Technology;