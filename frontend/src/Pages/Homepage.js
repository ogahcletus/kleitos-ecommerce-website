import { Link } from 'react-router-dom';
//import data from '../data';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Homepage() {
  const[products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }

    fetchData();

  }, [])
  return (
    <div>
<h1>Featured Products</h1>
        <div className='products'>
        {
          products.map((product) => (
            <div className='product' key={product.slug}>
            <Link to={`/product/${product.slug}`}>
            <img  src={product.image}  alt={product.name} className='product-image'/>
            </Link>
            <div  className='product-info'>
            <Link to={`/product/${product.slug}`}>
            <p>{product.name}</p>
            </Link>
            <p><strong>N{product.price}</strong></p>
            <button>Add to Cart</button>
            </div>
          </div>

          ))
        }
        </div>

    </div>
  )
}



export default Homepage

