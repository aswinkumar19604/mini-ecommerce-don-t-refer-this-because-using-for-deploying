import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard'
import { useSearchParams } from 'react-router-dom';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] =  useSearchParams()

    useEffect(() => {
  fetch("https://your-backend.vercel.app/api/v1/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include" // Only if you're using cookies/auth
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched products:", data);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}, []);


    return <Fragment>
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
        <div className="row">
            {products.map(product =><ProductCard product={product} />)} 
        </div>
        </section>
    </Fragment>
}
