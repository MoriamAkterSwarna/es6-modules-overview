import React from 'react';

import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNumberByTheSecond as divide } from '../../Utils/calculate';
// import add from '../../Utils/calculate';


const Sunglass = () => {

    const first = 55; 
    const second = 45;

    const sum = add(first, second);

    const mult = multiply(first, second);

    const divi = divide(first, second);


    return (
        <div>
            <Watch />
        </div>
    );
};

export default Sunglass;