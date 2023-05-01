import React from 'react';
// Original File, prints both Ticker and Price

interface StockProps {
    stock: string;
    price: number;
}

const Stock: React.FC<StockProps> = ({ stock, price }) => {
    return (
        <div className="stock">
            <h2>{stock}</h2>
            <p>${price}</p>
        </div>
    )
}

export default Stock;