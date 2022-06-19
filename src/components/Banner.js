import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header id="header" className="vh-100 carousel slide">
      <div className="container h-100 d-flex align-items-center carousel-inner">
        <div className="text-center carousel-item">
          <h1 className="text-uppercase py-2 fw-bold text-white" style={{ textShadow: "2px 2px 5px #5c4f3a" }}>
            new arrivals
          </h1>
          <Link to="collection" className="btn mt-3 text-uppercase">
            shop now
          </Link>
        </div>
        <div className="text-center carousel-item active">
          <h1 className="text-uppercase py-2 fw-bold text-white" style={{ textShadow: "2px 2px 5px #5c4f3a" }}>
            Welcome to Halalmart
          </h1>
          <Link to="collection" className="btn mt-3 text-uppercase">
            buy now
          </Link>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#header" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#header" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </header>
  );
};

export default Banner;
