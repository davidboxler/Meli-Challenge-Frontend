import React from "react";
import { Link } from "react-router-dom";
import logoEnvio from "../../assets/ic_shipping.png";
import "./ProductCardList.scss";

export const ProductCard = (props) => {
  return (
    <>
      <section className="card-product">
        <Link to={"/items/" + props?.data?.id} className="container-card">
          <div className="img-container">
            <img
              alt="imagen de producto"
              className="img-product"
              src={props.data.picture}
            />
          </div>
          <div className="title-container">
            <div className="container-info-product">
              <div className="container-price">
                <p className="price-text">$ {props?.data?.price?.amount}</p>
                {props.data.free_shippin ? (
                  <img
                    alt="logo envio"
                    src={logoEnvio}
                    className="icon-envio"
                  />
                ) : null}
              </div>
              <div>
                <p>{props.data.title}</p>
                <p>{props.data.condition}</p>
              </div>
            </div>
            <div className="lugar-product">
              <p>{props.data.location}</p>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default ProductCard;
