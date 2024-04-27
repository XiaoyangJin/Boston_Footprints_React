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
        <div className='create'>
            <form className='create__form'>

            </form>
        </div>
    )
}

export default CreatePost