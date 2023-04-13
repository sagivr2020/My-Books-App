import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const { createBook } = useBooksContext()

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleImageChange = (event) => {
        setImage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title, image);
        setTitle('')
        setImage('')
    }

    return (
    <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleTitleChange}/>
            <label>Image URL</label>
            <input className="input" value={image} onChange={handleImageChange}/>
            <button className="button">Create!</button>
        </form>
    </div>)
}

export default BookCreate;