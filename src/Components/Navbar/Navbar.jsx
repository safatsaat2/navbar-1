import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        {
            name: 'Home',
            id: 1,
            path: "/home"
        },
        {
            name: 'About',
            id: 2,
            path: "/about"
        },
        {
            name: 'Contact',
            id: 3,
            path: "/contact"
        },
        {
            name: 'Details',
            id: 4,
            path: "/details"
        },
        {
            name: 'Product',
            id: 5,
            path: "/product"
        },
    ]
    return (
        <nav className='bg-purple-400'>
            <div onClick={() => setOpen(!open)}  className='md:hidden'> 
            {
            open === true ? <XMarkIcon  className="h-6 w-6 text-blue-500" /> 
             : <Bars3Icon  className="h-6 w-6 text-blue-500" />
             }
            </div>
            
            <ul className={`md:flex absolute md:static duration-500 bg-purple-500 ${open ? 'top-6' : '-top-56'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;