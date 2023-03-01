import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addproduct, deccount } from "../redux/product/actions";
export default function Addproducts() {
  const dispatch = useDispatch();
  const formref = useRef(null);
  const submithandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const catagory = e.target[1].value;
    const imgurl = e.target[2].value;
    const price = e.target[3].value;
    const count = e.target[4].value;
    const data = {
      name,
      catagory,
      imgurl,
      price: Number(price),
      count: Number(count),
    };
    dispatch(addproduct(data));

    formref.current.reset();
  };
  return (
    <div>
      <div class="formContainer">
        <h4 class="formTitle">Add New Product</h4>
        <form
          class="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={submithandler}
          ref={formref}
        >
          {/* <!-- product name --> */}
          <div class="space-y-2">
            <label for="name">Product Name</label>
            <input
              class="addProductInput"
              id="lws-inputName"
              type="text"
              required
            />
          </div>
          {/* <!-- product category --> */}
          <div class="space-y-2">
            <label for="category">Category</label>
            <input
              class="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
            />
          </div>
          {/* <!-- product image url --> */}
          <div class="space-y-2">
            <label for="image">Image Url</label>
            <input
              class="addProductInput"
              id="lws-inputImage"
              type="text"
              required
            />
          </div>
          {/* <!-- price & quantity container --> */}
          <div class="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <div class="space-y-2">
              <label for="price">Price</label>
              <input
                class="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
              />
            </div>
            {/* <!-- quantity --> */}
            <div class="space-y-2">
              <label for="quantity">Quantity</label>
              <input
                class="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
              />
            </div>
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" class="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
