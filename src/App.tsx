import React from 'react';
import styles from './App.module.scss';
import Product from './components/product';
import Loader from './components/loader';
import ErrorMessage from './components/error-message';
import { useProducts } from './hooks/products';
import Modal from './components/modal';
import CreateProduct from './components/create-product';

function App() {
  const {loading, error, products} = useProducts()
  return (
    <div className={styles.container}>
      {error && <ErrorMessage error={error} />}

      <h1 className={styles.title}>
        Hello world!
      </h1>
      
      {loading &&<Loader />}
      
      {products.map(product => <Product product={product} key={product.id} />)}
      <Modal title='Modal form'>
        <CreateProduct />
      </Modal>
    </div>
  );
}

export default App;
