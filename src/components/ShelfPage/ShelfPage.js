import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ShelfInput from '../ShelfInput/ShelfInput';

//Bring in bootstrap components and css
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShelfPage.css';

function ShelfPage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEM' });
  }, []);
  const store = useSelector(store => store);
  const shelf = useSelector(store => store.itemReducer)
  console.log('should be something', shelf);

  const deleteItem = (e) => {
    dispatch({ type: 'DELETE_ITEM', payload: e.target.value })
  }

  return (
    <div class='centering-div'>
    <div className="container">
      <h1 id='main-h1'>Community Picture Shelf</h1>
      <Button className="shelf-btn" variant="info" onClick={() => dispatch({type: 'FETCH_ITEM', payload: store.user.id})}>My Shelf</Button>
      <Button className="shelf-btn" variant="info" onClick={() => dispatch({type: 'FETCH_ITEM'})}>Community Shelf</Button>
      <ShelfInput />
      <Container>
        <Row>
          {shelf.map(item =>
          (<Col xl={3} lg={4} md={6} xs={12}><Card className='item-card' bg="secondary" text="white" border="black" key={item.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image_url} height="200px" />
            <Card.Body>
              <Card.Title>{item.description}</Card.Title>
              <Card.Text>{(store.user.id === item.user_id) && (<Button variant="danger" size="sm" onClick={deleteItem} value={item.id}>Delete</Button>)}</Card.Text>
            </Card.Body>
          </Card></Col>)
          )}
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default ShelfPage;
