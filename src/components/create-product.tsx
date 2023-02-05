import  { ChangeEvent, useState} from 'react';

export default function CreateProduct() {
    const [value, setValue] = useState('')

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
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
            <button className='bg-yellow-200 px-4 py-2 block mx-auto hover:bg-green-200' type="submit">Create product</button>
        </form>
    )
}