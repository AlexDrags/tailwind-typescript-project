import axios from 'axios';
import  { ChangeEvent, useState} from 'react';
import { IProduct } from '../models';
import ErrorMessage from './error-message';

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export default function CreateProduct({onCreate}: CreateProductProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        setError('')
        if(value.trim().length === 0){
            setError('Please enter valid title')
            return
        }

        productData.title = value

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return(
        <form onSubmit={submitHandler}>
            <input 
            className='px-4 py-2 w-full mb-3 border-none outline-none'
            type="text"
            name='name'
            placeholder='Enter product name..'
            value={value}
            onChange = {changeHandler}
            />
            {error && <ErrorMessage error={error} />}
            <button className='bg-yellow-200 px-4 py-2 block mx-auto hover:bg-green-200' type="submit">Create product</button>
        </form>
    )
}