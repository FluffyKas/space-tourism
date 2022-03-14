import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="home__title">So, you want to travel to <span className="home__title-highlight">Space</span></h1>
      <p className="home__text">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
      <button className="explore-btn">Explore</button>
    </div>
  );
}

export default HomePage;