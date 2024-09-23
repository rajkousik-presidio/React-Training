import { useDispatch } from 'react-redux';
import { sellStock } from '../store/slices/stockSlice';

export const PortfolioItem = ({ stock }) => {
  const dispatch = useDispatch();

  const handleSell = () => {
    const quantity = parseInt(prompt(`How many shares of ${stock.name} would you like to sell?`), 10);

    if (quantity > 0 && quantity <= stock.quantity) {
      dispatch(sellStock({ id: stock.id, quantity }));
    } else {
      alert('Invalid quantity. You cannot sell more shares than you own.');
    }
  };

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="flex-row gap-0-5 stock-name">
        <span>{stock.name}</span>
        <span>( {stock.quantity} )</span>
      </div>
      <div>{(stock.quantity * stock.price).toFixed(2)}</div>
      <button className="sell-button" onClick={handleSell}>Sell</button>
    </li>
  );
};
