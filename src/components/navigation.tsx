import {Link} from 'react-router-dom'
export default function Navigation() {

    return (
        <nav className='flex items-center justify-center gap-4 px-4  border-b-2 border-teal-900 bg-stone-400 h-10'>
            <span className='mr-auto'>React test project 2023</span>

            
                <Link className='hover:text-white' to='/'>Products</Link>
                <Link className='hover:text-white' to='/about'>About</Link>
            
        </nav>
    )
}