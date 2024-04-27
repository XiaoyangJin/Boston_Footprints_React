import React from 'react';
import '../css/CreatePost.css';
import { useState } from 'react';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [media, setMedia] = useState([]);

    return (
        <div className='create'>
            <form className='create__form'>

            </form>
        </div>
    )
}

export default CreatePost