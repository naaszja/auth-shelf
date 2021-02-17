import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ShelfInput from '../ShelfInput/ShelfInput';

function ShelfPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM' });
  }, []);
  const store = useSelector(store => store);
  const shelf = useSelector(store => store.itemReducer)
  console.log('should be something', shelf);
  //store.rootReducer.itemReducer

  // *** FINISH DELETE FUNCTION ****
  const deleteItem = () => {
    console.log('in delete item function');
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfInput />
      {shelf.map(item =>
        (
          <div key={item.id} className='items'>
            <p>{item.description}</p>
            <img src={item.image_url} height="200px"/>
            <br />
            {(store.user.id === item.user_id) && (<button onClick={deleteItem}>Delete</button>)}
            <br />
          </div>
      ))}
    </div>
  );
}

export default ShelfPage;
