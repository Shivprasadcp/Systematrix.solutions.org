import React, { FC } from 'react';

const Button: FC<{ text: string }> = (props) => {
    return (
        <div>
            <button className=' rounded-full p-4 mx-10 border-solid border  hover:scale-105  ' >{props.text}</button>
        </div>
    );
}

export default Button;
