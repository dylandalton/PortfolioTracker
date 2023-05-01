import React from 'react';

interface stockPriceProps {
    price: number;
}

const StockPrice: React.FC<stockPriceProps> = ({ price }) => {
    return (
        <div className="stockPrice">
            <p>${price}</p>
        </div>
    )
}

export default StockPrice;