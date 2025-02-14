import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  let nav = useNavigate();
  let [newproduct, setnewproduct] = useState({
    image: "",
    title: "",
    text: "",
    price: "",
  });

  const handelCreatepro = () => {
    fetch("https://67af9113dffcd88a67870b98.mockapi.io/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newproduct,
        price: Number(newproduct.price), // تحويل السعر إلى رقم
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product added:", data);
        alert("✅ Product added successfully!");
        setnewproduct({ image: "", title: "", text: "", price: "" });
        nav("/");
      })
      .catch((error) => console.error("❌ Error:", error));
  };

  return (
    <>
      <h1 className="text-center customMargin">Create Product Page</h1>

      <div className="createform">
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Enter an Image Address
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Image Address"
            value={newproduct.image}
            onChange={(e) =>
              setnewproduct((prev) => ({ ...prev, image: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productname" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productname"
            placeholder="Product Name"
            value={newproduct.title}
            onChange={(e) =>
              setnewproduct((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Product Price"
            value={newproduct.price}
            onChange={(e) =>
              setnewproduct((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Product Description"
            value={newproduct.text}
            onChange={(e) =>
              setnewproduct((prev) => ({ ...prev, text: e.target.value }))
            }
          />
        </div>

        <button className="text-center save-btn" onClick={handelCreatepro}>
          Save Product
        </button>
      </div>
    </>
  );
}
