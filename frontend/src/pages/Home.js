import Helmet from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Mercado Libre Argentina</title>
        <meta name="description" content="Encontrá lo que buscas" />
      </Helmet>
      <h4>Buscar productos ...</h4>
    </div>
  );
};

export default Home;