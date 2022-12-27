import React from 'react'
import userPost from '../../assets/images/user-post6.jpg'

function PostBox() {
  return (
    <div className="mb-10 bg-sky-100 px-10 py-5 rounded">
      <form className="flex flex-col items-start gap-4">
        <textarea
          name="post_content"
          className="w-full rounded bg-sky-200 focus:outline-none p-3"
          id=""
          rows="5"
        ></textarea>
        <input type="file" className="" />
        <button type="submit" className="px-5 py-2 bg-sky-200 rounded ">
          Post
        </button>
      </form>
    </div>
  )
}

export default PostBox
