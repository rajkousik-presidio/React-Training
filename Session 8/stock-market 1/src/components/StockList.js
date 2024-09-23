import { useSelector } from 'react-redux';
import { StockListItem } from './StockListItem';

export const StockList = () => {
  const stockList = useSelector((state) => state.stock.stockList);

  return (
    <div className="flex-column gap-1">
      <h2>Stock List</h2>

      <ul className="flex-column gap-1">
        {stockList.map((stock) => (
          <StockListItem key={stock.id} stock={stock} />
        ))}
      </ul>
    </div>
  );
};
