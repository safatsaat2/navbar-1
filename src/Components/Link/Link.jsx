import React from 'react';

const Link = (props) => {
    return (
        <li className='px-6 py-2'>
            <a href="">{props.route.name}</a>
        </li>
    );
};

export default Link;