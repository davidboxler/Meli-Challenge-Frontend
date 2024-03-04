import "./ProductDetails.scss";

export const ProductDetails = ({
  quantity,
  price,
  title,
  picture,
  description,
}) => {
  const formattedPrice = new Intl.NumberFormat("es-AR").format(price?.amount);

  return (
    <section className="product-details-grid bg-white">
      <article className="right-column">
        <section className="product-details">
          <p className="sold-quantity">
            Nuevo&nbsp;&nbsp;|&nbsp;&nbsp;{quantity} vendidos
          </p>
          <div className="product-title">
            <h1>{title}</h1>
          </div>

          <div className="product-price">
            <h2>$ {formattedPrice}</h2>
          </div>

          <button className="btn-blue product-details-btn mb-8px">
            Comprar ahora
          </button>
        </section>
      </article>
      <article className="left-column">
        <section>
          <div className="gallery-container">
            <div className="image">
              <img src={picture} alt="Imagen del producto" />
            </div>
          </div>
          <h2 className="product-details-subtitle">Descripcion del producto</h2>
          <p className="product-description">{description}</p>
        </section>
      </article>
    </section>
  );
};

export default ProductDetails;
