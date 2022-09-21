import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { wrapper } from "../../store/index";
import { useSelector } from "react-redux";
import { productActions } from "../../store/product-slice";

import classes from "./ProductList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Something went wrong when retrieving data!");
    }

    const data = await response.json();

    const productList = [];

    for (const key in data) {
      productList.push({
        key: key,
        id: data[key].id,
        name: data[key].title,
        price: data[key].price,
        description: data[key].description,
        category: data[key].category,
        image: data[key].image,
        ratingScore: data[key].rating.rate,
        ratingCount: data[key].rating.count,
      });
    }

    store.dispatch(productActions.loadProducts(productList));
    console.log("loading");
    console.log(products);
  } catch (error) {
    alert(error.message);
  }
});*/



const ProductList = (props) => {
  //const products = useSelector((state) => state.products);

  const [list, setList] = useState([]);

  const fetchProductHandler = async() => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong when retrieving data!");
      }
  
      const data = await response.json();
  
      const productList = [];
  
      for (const key in data) {
        productList.push({
          key: key,
          id: data[key].id,
          name: data[key].title,
          price: data[key].price,
          description: data[key].description,
          category: data[key].category,
          image: data[key].image,
          ratingScore: data[key].rating.rate,
          ratingCount: data[key].rating.count,
        });
      }
  
      setList(productList);

    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchProductHandler();
  }, []);

  return (
    <div className={classes.product}>
      <div className={classes.list}>
      {list.map((product) => (
        <Card className={classes.card} key={product.key}>
          <Card.Img src={product.image} />
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className={classes.cardText}>${product.price}</Card.Text>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
