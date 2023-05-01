import React, { useState, useEffect, useCallback } from 'react'
import Stock from "../components/Stock"
import getPrice from '../services/Price'

interface StockContainerProps {
    stock: string;
}

const StockContainer: React.FC<StockContainerProps> = ({ stock }) => {
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

    return (
        <Stock stock={stock} price={price}/>
    )
}

export default StockContainer;