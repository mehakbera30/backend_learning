import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Post = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios.post('http://localhost:3000/create-post', formData)
      .then((res) => {
        console.log(res.data);
        alert('Post created successfully');
        navigate('/Feed');
      })
      .catch((err) => {
        console.error(err);
        alert('Error creating post');
      });
    }


  return (
    <section className='create-post-section'>
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>
        <input type='file' name='image' accept='image/*' required />
        <input type='text' name='caption' placeholder='Enter a caption...' required />
        <button type='submit'>Submit</button>
        
      </form>
    </section>
  )
}

export default Post


// Overall flow
// 1. e.preventDefault() — prevents the page from refreshing.
// 2. new FormData(e.target) — collects the image and caption.
// 3. axios.post() — sends the form data to your backend.
// 4. .then() — runs when the request succeeds.
// 5. .catch() — runs when the request fails.


// .then() — Success
// Runs when the server returns a successful HTTP status (2xx).
// - res contains the server's response.
// - res.data contains the response body.
// - alert() displays a success message.
// - navigate('/feed') redirects to the feed page.


// .catch() — Error
// Runs when the request fails, such as when the server is unavailable or responds with an HTTP error status.
// - err contains error information.
// - console.error(err) helps you debug the problem.
// - alert() informs the user that the post could not be created.

// Think of axios.post() as sending a parcel:
// - .then() → The delivery was successful; proceed to the next step.
// - .catch() → Something went wrong; handle the problem
