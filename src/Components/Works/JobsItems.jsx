const JobsItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work-icons-container">
        <a
          href="https://besniknuhi.github.io/e-commerce/"
          className="work__button"
        >
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <span>React Typescript</span>
      </div>
    </div>
  );
};

export default JobsItems;
