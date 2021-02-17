import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ShelfInput from '../ShelfInput/ShelfInput';

function ShelfPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM' });
  }, []);

  const shelf = useSelector(store => store.itemReducer)
  console.log('should be something', shelf);
  //store.rootReducer.itemReducer

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfInput />
      {shelf.map(item =>
        (
          <div key={item.user_id}>
            <p>{item.description}</p>
            <img src={item.image_url} height="200px"/>
          </div>
      ))}
    </div>
  );
}

export default ShelfPage;
