import { useDispatch } from 'react-redux';
import { buyStock } from '../store/slices/stockSlice';

export const StockListItem = ({ stock }) => {
  const dispatch = useDispatch();

  const handleBuy = () => {
    const quantity = parseInt(prompt('How many shares would you like to buy?'), 10);

    if (quantity > 0) {
      dispatch(buyStock({ id: stock.id, quantity }));
    } else {
      alert('Please enter a valid quantity');
    }
  };

  return (
    <li className="stock-list-item" key={stock.id}>
      <div className="stock-name">{stock.name}</div>
      <div>${stock.price.toFixed(2)}</div>
      <button className="buy-button" onClick={handleBuy}>Buy</button>
    </li>
  );
};