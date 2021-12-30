import "./products.css";
import { useState } from "react";

export const ProductsPage = () => {
  const [state, setState] = useState();

  const handleSelect = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="Products">
      <div className="ProductsHeader">
        <select onChange={handleSelect}>
          <optgroup label="Electronics">
            <option value="Home Appliances">Home Applicances</option>
            <option value="Computer/Laptops">Computers/Laptops</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Smart wears">Smart Wears</option>
            <option value="Tv&DVD Equipment">Tv&DVD Equipment</option>
            <option value="Computer Accessories">Computer Accessries</option>
            <option value="Computer Hardware">Computer Hardwares</option>
            <option value="Networking products">Networking Products</option>
            <option value="printers & scanners">Printers & Scanners</option>
            <option value="Music & audio Equipment">
              Music & Audio Equipment
            </option>
          </optgroup>
          <optgroup label="Fasion">
            <option value="clothings">Clothings</option>
            <option value="Bags">Bags</option>
            <option value="Shoes">Shoes</option>
            <option value="jewelry">Jewelry</option>
          </optgroup>
        </select>
      </div>
    </div>
  );
};
