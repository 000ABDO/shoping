import { useState } from "react";
import React from "react";

export default function Create() {
  let [newproduct, setnewproduct] = useState({
    image: "",
    title: "",
    text: "",
    price: null,
  });

  const handelCreatepro = () => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newproduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product added:", data);
        alert("Product added successfully!");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <h1 className="text-center customMargin ">Create product page</h1>

      <div className="createform">
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            enter a image address
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="image address"
            onChange={(e) =>
              setnewproduct((prev) => ({ ...prev, image: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productname" className="form-label">
            product name
          </label>
          <input
            type="text"
            className="form-control"
            id="productname"
            placeholder="Product Name"
            onChange={(e) =>
              setnewproduct((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            price
          </label>
          <input
            type="text"
            className="form-control"
            id="Description"
            placeholder="Product Description"
            onChange={(e) =>
              setnewproduct((prev) => ({ ...prev, price: +e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="Description"
            placeholder="Product Description"
            onChange={(e) =>
              setnewproduct((prev) => ({ ...prev, text: e.target.value }))
            }
          />
        </div>
        <button
          className="text-center save-btn"
          onClick={() => handelCreatepro()}
        >
          Save Product
        </button>
      </div>
    </>
  );
}
