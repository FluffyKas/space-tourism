const Technology = () => {

  const data = require('../assets/data.json');
  const techData = data.technology;
  console.log(techData[1].images)

  return (
    <div>

      <h1>03 Space launch 101</h1>

      <picture>
        <img src={techData[1].images.portrait} alt="Pls mr image work." />
      </picture>

      <button>1</button>
      <button>2</button>
      <button>3</button>

      <h2>The terminology...</h2>
      <h3>{techData.name}</h3>
      <p>{techData.description}</p>

    </div>
  );
}

export default Technology;