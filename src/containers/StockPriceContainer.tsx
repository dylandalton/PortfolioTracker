import React, { useState, useEffect, useCallback } from 'react'
import StockPrice from '../components/StockPrice';
import getPrice from '../services/Price'

interface StockPriceContainerProps {
    stock: string;
}

const StockContainer: React.FC<StockPriceContainerProps> = ({ stock }) => {
    const [price, setPrice] = useState<number>(0);

    const updatePrice = useCallback(async () => {
        const newPrice: number = await getPrice(stock);
        if (price !== newPrice) {
            return setPrice(newPrice);
        }
    }, [stock, price])

    useEffect(() => {
        const interval = setInterval(updatePrice, 1000);
        return () => clearInterval(interval);
    }, [updatePrice])

    console.log(<StockPrice price={price}/>);

    return (
        <StockPrice price={price}/>
    )
}

export default StockContainer;