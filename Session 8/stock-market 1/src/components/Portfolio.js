import { useSelector, useDispatch } from 'react-redux';
import { PortfolioItem } from './PortfolioItem';
import { clearError } from '../store/slices/stockSlice';

export const Portfolio = () => {
  const portfolio = useSelector((state) => state.stock.portfolio);
  const error = useSelector((state) => state.stock.error);
  const dispatch = useDispatch();

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <div className="flex-column gap-1">
      <h2>Portfolio</h2>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={handleClearError}>Dismiss</button>
        </div>
      )}

      <ul className="flex-column gap-1">
        {portfolio.map((stock) => (
          <PortfolioItem stock={stock} key={stock.id} />
        ))}
      </ul>
    </div>
  );
};
