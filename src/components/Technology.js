import json from '../assets/data.json';
import './Technology.scss';
import '../global-styles/utilities.scss';

const Technology = () => {

  const techData = json.technology;

  const changeContent = () => {
    console.log('clicked')
  }

  return (
    <div className="technology-container container white">


      <h1 className="page-title"><span className="page-title-number">03</span> Space launch 101</h1>

      <div className="inner-container">

        <picture>
          <source media="(min-width:30rem)" srcSet={techData[0].images.portrait} />
          <img src={techData[0].images.landscape} alt="" className="technology-illustration" />
        </picture>

        <div className="tech-text">
          <li className="btn-container">
            {techData.map((techOption, index) => {
              return <button key={index} className="tech-page-btn ff-bellefair white tech-active fw-400" onClick={changeContent}>{index + 1}</button>
            })
            }
          </li>

          <div>
            <h2 className="const-tech-title fw-400 ff-barlow-cond pastel-blue uppercase">The terminology...</h2>
            <h3 className="tech-title fw-400">{techData[0].name}</h3>
            <p className="page-description">{techData[0].description}</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Technology;