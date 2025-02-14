import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ jso }) {
  let navigat = useNavigate();

  let lgoing = JSON.parse(localStorage.getItem("login"));

  function Save(data) {
    localStorage.setItem("productDe", JSON.stringify(data));
    navigat(`/details/${data.title}`);
  }

  const delet = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("product deleted succsefuly");
        } else {
          console.error("Failed to delete product");
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  const edit = (id) => {
    navigat(`/edit/${id}`);
  };

  return (
    <div className="col-12 col-md-3 col-lg-4 privhover">
      <div className="card ">
        {" "}
        <img
          className="card-img-top"
          src={jso.image}
          alt="Avatar of John Doe"
        />
        <div className="card-body">
          <h4 className="card-title">{jso.title}</h4>
          <h5 className="text-primary">{jso.price} $</h5>
          <p className="card-text">{jso.text}</p>

          <div className="parent d-flex justify-content-between w-100">
            <button className="btn btn-primary" onClick={() => Save(jso)}>
              See Profile
            </button>
            {/*طريقه غلط دي عشان ابعت بينات للكزمبزنينت ايديت الحل الصح بال navigate + react router*/}
            <div
              className="loginonly"
              style={{ display: lgoing ? "flex" : "none" }}
            >
              <button className="btn btn-info" onClick={() => edit(jso.id)}>
                Edit
              </button>

              <button className="btn delete" onClick={() => delet(jso.id)}>
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
