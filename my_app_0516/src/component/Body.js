import React from 'react';
import './Body.css';

function Body() {
    const numA = 1;
    const numB = 2;
    const strA = "안녕 ";
    const strB = "리액트";
    const boolA = true;
    const boolB = false;
    const objA = { name: "홍길동", age: 25 };
    return (
        <div className='body'>
            <h1>Body</h1>
            <input type="text" />
            <hr />
            <h2>{numA + numB}</h2>
            <h2>{strA + strB}</h2>
            <h2>{String(boolA || boolB)}</h2>
            <h2>{objA.name}</h2>
            <h2>{objA.age}</h2>
        </div>
    );
}

export default Body;