import './App.css';
import Table from './components/Table'
import StockPriceContainer from './containers/StockPriceContainer';

const stocks = ['GOOG', 'AAPL', 'META', 'MSFT', 'VICI']

const App = () => {

  const columns = [
    {
      Header: 'Stock',
      accessor: 'stock'
    },
    {
      Header: 'Price',
      accessor: 'price'
    }
  ];

  const tableData = stocks.map(stock => {
    return {
      stock: stock,
      price: <StockPriceContainer stock={stock}/>,
    }
  });

  return (
    <div className="App">
        <h1>Stock Market Portfolio</h1>
        <div className="MyTable">
          <Table columns={columns} data={tableData} />
        </div>
    </div>
  );
}

export default App;
