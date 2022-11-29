import { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import './Products.css';
import SingleProduct from './SingleProduct';
function Products(props) {
  // komponentas, kuris parsisiuncia duomenis
  // 1. sugeneruojam komponenta su tusciu masyvu be duomenu

  const [mainProductsArray, setMainProductsArray] = useState([]);

  // 2. tik sugeneravus useEffect parsiunciam duomenis

  useEffect(() => {
    getProducts();
  }, []);

  // 3. parsiuntus atnaujinam tuscia state masyva su gautais duomenimis
  // react pats nubraizo pakeitimus html

  const [isLoading, setIsLoading] = useState(true);

  async function getProducts() {
    try {
      setIsLoading(true);
      let url = 'https://golden-whispering-show.glitch.me';
      url = '/api/products.json';
      const response = await fetch(url);
      const dataInJs = await response.json();
      console.log('dataInJs ===', dataInJs);
      setMainProductsArray(dataInJs);
    } catch (error) {
      console.warn('did not get products');
    } finally {
      // vyksta bet kuriuo atveju
      setIsLoading(false);
    }
  }

  function productDeleteHandler(idToDelete) {
    console.log('idToDelete ===', idToDelete);
    setMainProductsArray((prevState) =>
      prevState.filter((pObj) => pObj.id !== idToDelete)
    );
  }

  function productAddHandler(newProduct) {
    // perduodi i AddProduct
    // kviecia setMainProductsArray()
    const newProductToAdd = [...mainProductsArray, newProduct];
    setMainProductsArray((prevTodosArr) => newProductToAdd);
    //setMainProductsArray(newProduct);
    // atnaujinam su arrow funkcija (spread operatiorius (...))
  }

  // one source of truth :D

  return (
    <div>
      <h2>Products</h2>
      <button>Show Add Product</button>
      <AddProduct onAdd={productAddHandler} />
      {isLoading && <h2>loading...</h2>}
      <ul className='unlisted grid--pr'>
        {mainProductsArray.map((pObj) => (
          <SingleProduct
            key={pObj.id}
            id={pObj.id}
            price={pObj.price}
            img={pObj.image}
            onDelete={productDeleteHandler}
          >
            {pObj.title}
          </SingleProduct>
        ))}
      </ul>
    </div>
  );
}
export default Products;
