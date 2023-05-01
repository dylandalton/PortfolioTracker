const API_KEY = "2CEKZU6WCD8GKPTJ";

const getPrice = async (stock: string): Promise<number> => {
    // const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${API_KEY}`); 
    // const data = await response.json();
    // const priceQuote = parseFloat(data["Global Quote"]["05. price"]);
    // (Above Code works) Commented out to Avoid using 500 API Calls per Day  

    const mockPrice = (Math.random() * 1000).toFixed(2);
    return Number(mockPrice);
}

export default getPrice;


