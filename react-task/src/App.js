import './App.css';
import Button from './components/buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { openCloseModal } from './redux/slices/modalSlice';

function App() {
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(openCloseModal());
  };

  return (
    <div className="App">
      <Button label="Click me!" onClick={onClickHandler} />
      {isModalOpen &&
        <h1>Open modal</h1>
      }
    </div>
  );
}

export default App;
