import React from 'react';
import '../css/CreatePost.css';
import { useState } from 'react';
import { supabase } from '../client';

function CreatePost() {
    const [text, setText] = useState({ title: '', summary: '' });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setText((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    async function uploadImage(e) {
        setImage(e.target.files[0]); // Set the first selected file
    };


    const createPost = async (e) => {
        e.preventDefault();
        if (image) {
            const fileExt = image.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            console.log(fileName);
            const { data: uploadData, error: uploadError } = await supabase
                .storage
                .from('PostImages')
                .upload(`public/${fileName}`, image);

            if (uploadError) {
                // handle error
                console.error('Error uploading image:', uploadError);
                return;
            } else {
                //handle success
                console.log('Image uploaded successfully:', uploadData);
            }

            const { publicURL, error: urlError } = supabase.storage.from('PostImages').getPublicUrl(`public/${fileName}`);
            if (urlError) {
                console.error('Error getting image URL:', urlError);
                return;
            }

            console.log('Public URL:', publicURL);
            const imageUrl = publicURL;
            const { data, error } = await supabase
                .from('Posts')
                .insert([{ title: text.title, summary: text.summary, imageUrl: imageUrl }]);

            if (error) {
                console.error('Error inserting post data:', error);
            } else {
                console.log('Post created:', data);
                window.location = "/";
            }
        } else {
            console.error('Please upload an image.');
        }
    };




    return (
        <div className='create__content'>
            <p className='title'>Create a New Post</p>
            <form className='create__form'>
                <label className='create__form-lable' htmlFor='title'>Title: </label><br />
                <input className='create__form-input' type='text' id='title' name='title' onChange={handleChange} /><br />

                <label className='create__form-lable' htmlFor='summary'>Summary: </label><br />
                <textarea rows="5" cols="30" id="summary" name='summary' onChange={handleChange}>
                </textarea><br />

                <label className='create__form-lable' htmlFor='image'>Please upload one image: </label><br />
                <input type="file" onChange={uploadImage} accept="image/png, image/jepg" />


                <input className='create__form-button' type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost