import React, { useState } from "react";
import styles from './product.module.scss';
import { IProduct } from "../models";
interface PropsProduct {
    product: IProduct
}

export default function Product({product}:PropsProduct) {
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-yellow-300' : 'bg-green-300'
    const btnClasses = ['py-2 px-4', btnBgClassName]
    return(
        <div className={styles.product}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <img src={product.image} width={50} alt={product.title} />
            <p className="font-bold w-full text-center">Cost: {product.price} $</p>
            <button 
            className={btnClasses.join(' ')}
            onClick={()=> setDetails(!details)}
            >
                {details ? 'Hide text' : 'Show more...'}
            </button>
            {
            details &&
            <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight:'bold'}}>{product.rating.rate}</span></p>
                <button className="bg-green-300 py-2 px-4 block mx-auto hover:bg-yellow-300">Buy</button>
            </div>
            }
        </div>
    )
}