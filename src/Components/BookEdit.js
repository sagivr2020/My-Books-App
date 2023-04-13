import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);
    const [image, setImage] = useState(book.image);
    const { editBookById } = useBooksContext()

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleImageChange = (event) => {
        setImage(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit()
        editBookById(book.id, title, image)
    }

    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleTitleChange}></input>
            <label>Image URL</label>
            <input className="input" value={image} onChange={handleImageChange}></input>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;