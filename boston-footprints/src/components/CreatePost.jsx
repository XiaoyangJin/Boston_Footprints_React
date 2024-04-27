import React from 'react';
import '../css/CreatePost.css';
import { useState } from 'react';
import { supabase } from '../client';

function CreatePost() {
    const [text, setText] = useState({ title: '', summary: '' });
    const [media, setMedia] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const createPost = async (e) => {
        e.preventDefault();
        await supabase
            .from('Posts')
            .insert({ title: text.title, summary: text.summary })
            .select();
        window.location = "/";
    }

    return (
        <div className='create__content'>
            <p className='title'>Create a New Post</p>
            <form className='create__form'>
                <label className='create__form-lable' htmlFor='title'>Title: </label><br />
                <input className='create__form-input' type='text' id='title' name='title' onChange={handleChange} /><br />

                <label className='create__form-lable' htmlFor='summary'>Summary: </label><br />
                <textarea rows="5" cols="50" id="summary" onChange={handleChange}>
                </textarea><br />

                <input className='create__form-button' type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost