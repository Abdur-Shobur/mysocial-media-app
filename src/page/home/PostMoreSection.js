import React from 'react'
import userPost from '../../assets/images/user-post6.jpg'
import userlist from '../../assets/images/userlist-2.jpg'
import PostWatchLikeCount from '../../component/listItems/PostWatchLikeCount'
import Comment from '../../component/listItems/Comment'

function PostMoreSection() {
  return (
    <div>
      {/* user  */}
      <div className="flex items-center gap-5 ">
        <div>
          <img
            className="rounded-full max-w-[48px] w-12"
            src={userlist}
            alt="s"
          />
        </div>
        <div>
          <h1 className="text-violet-900 font-semibold text-xl">Mr Abdur</h1>
          <p>
            Publish Date: <span className="text-red-400">1-10-2022</span>{' '}
          </p>
        </div>
      </div>
      {/* img  */}
      <div className="my-3">
        <img src={userPost} className="rounded" alt="" />
      </div>
      {/* like */}
      <div>
        <ul className="flex gap-10 my-5">
          <PostWatchLikeCount />
          <PostWatchLikeCount />
          <PostWatchLikeCount />
          <PostWatchLikeCount />
          <PostWatchLikeCount />
        </ul>
      </div>
      {/* details  */}
      <div className="my-3">
        <p>
          World's most beautiful car in Curabitur #test drive booking ! the most
          beatuiful car available in america and the saudia arabia, you can book
          your test drive by our official website
        </p>
      </div>
      {/* comment  */}
      <div>
        <ul>
          <Comment />
        </ul>
      </div>
      {/* post comment  */}
      <div>
        <div className="flex mt-5 gap-5">
          <img src={userlist} alt="" className="rounded-full" />
          <form className="w-full flex gap-4">
            <input
              type="text"
              placeholder="Add Comment"
              className="w-full border px-5 py-2"
            />
            <button className="bg-sky-400 px-4 text-white">Comment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostMoreSection
