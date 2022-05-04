import './ButtonContainer.scss';

export const ButtonContainer = ({ data, name, activeTab, setActiveTab }) => {

  const changeContent = (index) => {
    setActiveTab(index);
  }

  return (
    <nav className={`${name}-btn-container`}>
      {data.map((element, index) => {
        switch (name) {
          case 'destination':
            return <button key={index} className={`${name}-page-btn uppercase ff-barlow-cond pastel-blue ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)}>
              {element.name}</button>
          case 'crew':
            return <button key={index} className={`${name}-page-btn ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)} aria-label="Show crew member">
              <div className="btn-circle" aria-hidden="true"></div></button>
          case 'technology':
            return <button key={index} className={`${name}-page-btn ff-bellefair white fw-400 ${index === activeTab ? `${name}-active` : ""}`} onClick={() => changeContent(index)}>
              {index}</button>
          default:
            return <p>Not Found</p>
        }
      })
      }
    </nav>

  );
}