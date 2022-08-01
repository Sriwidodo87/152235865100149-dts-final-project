import React from "react";
import { useEffect, useState } from "react";
import CardProduct from "../component/CardProduct";
import { Grid } from "@mui/material";



const Home =() =>{

    const [products,setProducts]=useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((products) => {
            setProducts(products);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <p>Data is loading...</p>;
      }
    
      if (error || !Array.isArray(products)) {
        return <p>There was an error loading your data!</p>;
      }

 return (
    <section>
      <div>
          <Grid container spacing={3}>
              {products.map((item) => (
              <CardProduct key={item.id}  propsP={item}></CardProduct>
            ))}  
          </Grid>
      </div>
    </section>
)};



export default Home;



