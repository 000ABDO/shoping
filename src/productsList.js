import { useState, useEffect } from "react";
import Product from "./productone";
import { useNavigate } from "react-router-dom";

export default function ProductsList() {
  const [productsddata, setproducts] = useState([]);
  let [originalproducts, setoriginal] = useState([]);
  let nav = useNavigate();

  useEffect(() => {
    fetch("https://67af9113dffcd88a67870b98.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data);
        setoriginal(data);
      });
  }, []);

  const change = () => {
    nav("Create");
  };

  const filter = (element) => {
    if (!element) {
      setproducts(originalproducts);
      return;
    }
    let filtered = productsddata.filter((el) =>
      el.title.toLowerCase().includes(element.toLowerCase())
    );
    setproducts(filtered);
  };

  const sortbig = () => {
    let sorted = [...productsddata].sort((a, b) => b.price - a.price);
    setproducts(sorted);
  };
  const sortsmall = () => {
    let small = [...productsddata].sort((e, b) => e.price - b.price);
    setproducts(small);
  };

  return (
    <div className="container">
      <h1 className="productshead">Our Products</h1>

      {/*search and filter products filter ptoducts*/}

      <div className="filtercontainer">
        {/* search */}
        <div className="mb-3 w-25">
          <div className="form-outline" data-mdb-input-init>
            <label className="form-label" htmlFor="form1">
              Search
            </label>
            <input
              type="search"
              id="form1"
              className="form-control"
              onChange={(e) => filter(e.target.value)}
            />
          </div>
        </div>
        {/* filter top and filter bootoom */}

        <div className="filter">
          <h3> sort by price </h3>
          <i
            onClick={() => sortbig()}
            className="fa-solid fa-arrow-up-wide-short"
          ></i>
          <i
            onClick={() => sortsmall()}
            className="fa-solid fa-arrow-down-short-wide"
          ></i>
        </div>
      </div>

      <button
        type="button"
        className="customMargin btn btn-dark"
        onClick={() => change()}
      >
        Add Product
      </button>

      <div className="row g-5 customMargin">
        {productsddata.length > 0
          ? productsddata.map((one, index) => <Product key={index} jso={one} />)
          : console.log("no data avalibale")}
      </div>
    </div>
  );
}
