import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  let nav = useNavigate();
  let { id } = useParams();

  let [datab, setdata] = useState({
    image: "",
    title: "",
    text: "",
    price: null,
  });

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("falid to fetch data");
        return res.json();
      })
      .then((data) => setdata(data))
      .catch((err) => console.error("Error  to fetch data", err));
  }, [id]);

  let editproduct = () => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datab),
    })
      .then((res) => res.json())
      .then((dat) => {
        alert("its edited");
        nav("/");
      });
  };

  return (
    <>
      <h1 className="text-center customMargin "> Create product page </h1>

      <div className="createform">
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            enter a image address
          </label>
          <input
            value={datab.image}
            onChange={(e) =>
              setdata((prev) => ({ ...prev, image: e.target.value }))
            }
            type="text"
            className="form-control"
            id="image"
            placeholder="image address"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productname" className="form-label">
            product name
          </label>
          <input
            value={datab.title}
            onChange={(e) =>
              setdata((prev) => ({ ...prev, title: e.target.value }))
            }
            type="text"
            className="form-control"
            id="productname"
            placeholder="Product Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productname" className="form-label">
            price
          </label>
          <input
            value={datab.price}
            onChange={(e) =>
              setdata((prev) => ({ ...prev, price: +e.target.value }))
            }
            type="number"
            className="form-control"
            id="productname"
            placeholder="Product Name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Product Description
          </label>
          <input
            value={datab.text}
            onChange={(e) =>
              setdata((prev) => ({ ...prev, text: e.target.value }))
            }
            type="text"
            className="form-control"
            id="Description"
            placeholder="Product Description"
          />
        </div>

        <button
          type="button"
          className="btn btn-dark d-block mx-auto mb-2"
          onClick={() => editproduct()}
        >
          Edit Data
        </button>
      </div>
    </>
  );
}
