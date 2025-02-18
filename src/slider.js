export default function Slider() {
  return (
    <div className="mb-5">
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg"
              alt="Los Angeles"
              className="d-block w-100 "
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://calbizjournal.com/wp-content/uploads/2023/06/785054-ecommerce-istock-020119.jpg"
              alt="Chicago"
              className="d-block w-100 slider-img"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.investopedia.com/thmb/HTsQttB_aZtIFO2aNUau7T82UXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ecommerce-d7e19a12ebed400eb1b2344b2cbb0e7d.png"
              alt="New York"
              className="d-block w-100 slider-img"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
