import React from 'react'
import { BsUpload } from 'react-icons/bs'

function CreatePost() {
  return (
    <form className="create-post">
      <div className="profile-pic">
        <img src="images/profile-8.jpg" alt="" />
      </div>
      <input
        type="text"
        className="focus:outline-none px-5 py-2 text-xl"
        placeholder="What's on your mind Chirag?"
        id="create-post"
      />
      <label htmlFor="icon-button-file">
        <BsUpload
          color="primary"
          aria-label="upload picture"
          component="span"
          className="text-3xl mr-2"
        />
      </label>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
      />
      <input type="submit" value="Post" className="btn btn-primary" />
    </form>
  )
}

export default CreatePost
