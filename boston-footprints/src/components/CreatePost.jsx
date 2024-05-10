import React from 'react';
import '../css/CreatePost.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';


function CreatePost() {
    const [text, setText] = useState({ title: '', summary: '' });
    const [images, setImages] = useState(null);

    const supabase = useSupabaseClient();
    const user = useUser();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setText((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    async function getImages() {
        const { data, error } = await supabase
            .storage
            .from('PostImages')
            .list(user?.id + '/', {
                offset: 0
            });

        if (data !== null) {
            setImages(data);
        } else {
            alert("Error loading images");
            console.log(error);
        }
    }

    async function uploadImage(e) {
        if (!user) {
            alert("Please log in to upload images.");
            return;
        }

        let file = e.target.files[0];
        //userid: Ada
        // Ada/
        //Ada/nameOfImage.png
        const { data, error } = await supabase
            .storage
            .from('PostImages')
            .upload(user.id + '/' + uuidv4(), file);
        if (data) {
            getImages();
        } else {
            console.error('Upload error:', error);
            alert("Failed to upload image");
        }
    };

    const createPost = async (e) => {
        e.preventDefault();
        if (!user) {
            console.error('User is not logged in.');
            alert("Please log in to create a post.");
            return;
        }
        if (!images) {
            console.error('No images uploaded.');
            alert("Please upload an image before submitting.");
            return;
        }
        if (images) {
            const { data: uploadData, error: uploadError } = await supabase
                .storage
                .from('PostImages')
                .upload('public/' + uuidv4(), images);
            if (uploadData) {
                console.log('Image uploaded successfully:', uploadData);
                // getImages();
            } else {
                console.error('Error uploading image:', uploadError);
            }


            const { publicURL, error: urlError } = supabase.storage.from('PostImages').getPublicUrl('public/');
            if (urlError) {
                console.error('Error getting image URL:', urlError);
                // return;
            }

            console.log('Public URL:', publicURL);
            const imageUrl = publicURL;
            const { data, error } = await supabase
                .from('Posts')
                .insert([{ title: text.title, summary: text.summary, imageUrl: imageUrl, user_id: user.id }]);

            if (error) {
                console.error('Error inserting post data:', error);
            } else {
                console.log('Post created:', data);
                // window.location = "/";
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
                <input type="file" onChange={(e) => uploadImage(e)} accept="image/png, image/jepg" />


                <input className='create__form-button' type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreatePost