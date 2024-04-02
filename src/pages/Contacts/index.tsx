import "./style.scss";

const Contacts = () => {
  return (
    <section id="contacts2">
      <div className="mask"></div>
      <div className="container">
        <div className="main_content">
          <h1>CONTACTS</h1>
          <p>
            Leave your contacts by filling out the current form and we will
            contact you as soon as possible.
          </p>
        </div>
        <a href="#contacts">
          <button>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contacts;
