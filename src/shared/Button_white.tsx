import React, { FC } from 'react';

const Button_white: FC<{ text: string }> = (props) => {
    return (
        <div>
            <button className=' rounded-full p-4 mx-10 bg-white text-black hover:bg-gray-500 hover:scale-105 hover:text-white' >{props.text}</button>
        </div>
    );
}

export default Button_white;

