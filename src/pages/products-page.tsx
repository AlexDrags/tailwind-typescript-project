import styles from './products-page.module.scss';
import React, {useContext} from 'react';
import Product from '../components/product';
import Loader from '../components/loader';
import ErrorMessage from '../components/error-message';
import { useProducts } from '../hooks/products';
import Modal from '../components/modal';
import CreateProduct from '../components/create-product';
import { IProduct } from '../models';
import { ModalContext } from '../contex/modal-context';

export default function ProductsPage() {
  const {loading, error, products, addProduct} = useProducts()
  const {modal, open, close} = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }
  return (
    <div className={styles.container}>
      {error && <ErrorMessage error={error} />}

      <h1 className={styles.title}>
        Hello world!
      </h1>
      
      {loading &&<Loader />}
      
      {products.map(product => <Product product={product} key={product.id} />)}
      {modal &&
      <Modal title='Modal form' onClose={close}>
        <CreateProduct onCreate={createHandler} />
        
      </Modal>
      }
      <button className='mw-2 fixed left-36 bottom-7 border-4 border-red-200 px-2 py-2 animate-pulse' onClick={open} type='button'>Modal show</button>
      
    </div>
  );
}