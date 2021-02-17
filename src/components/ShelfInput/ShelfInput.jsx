import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function ShelfInput() {

    const dispatch = useDispatch();
    const store = useSelector(store => store);

    const [descriptionInput, setDescriptionInput] = useState('');
    const [imageInput, setImageInput] = useState('');

    const addItem = () => {
        
        if (!descriptionInput || !imageInput ){
            alert('fill in those fields, yo!');
            return;
        }        
        
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                description: descriptionInput,
                item_url: imageInput,
                user_id: store.user.id, 
            }
        })
        setDescriptionInput('');
        setImageInput('');
    }


    return (
        <>
            <h1>hi</h1>
            <p><label htmlFor='descriptionInput'>Item Description:</label><input onChange={(e) => {setDescriptionInput(e.target.value)}}/></p>
            <p><label htmlFor='imageInput'>Image URL:</label><input onChange={(e) => {setImageInput(e.target.value) }}/></p>
            <button onClick={addItem}>Add Item</button>
        </>
    );
}

export default ShelfInput;