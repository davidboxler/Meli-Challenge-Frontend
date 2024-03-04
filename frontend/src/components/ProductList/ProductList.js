import { CircularProgressbar } from "react-circular-progressbar";
import ProductCardList from "../ProductCardList/ProductCardList";

export const ProductList = ({ dataProd }) => {
  return (
    <>
      <div className="containerBody">
        {dataProd ? (
          <div>
            {dataProd.map((product) => (
              <ProductCardList key={product.id} data={product} />
            ))}
          </div>
        ) : (
          <CircularProgressbar />
        )}
      </div>
    </>
  );
};

export default ProductList;
