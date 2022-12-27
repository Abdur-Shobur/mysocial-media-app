import React from 'react'
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai'
import { BiCommentDots } from 'react-icons/bi'
import { BsBookmarkCheck, BsUpload } from 'react-icons/bs'
import user from '../../assets/images/userlist-2.jpg'
import post from '../../assets/images/user-post6.jpg'

function FeedCard() {
  return (
    <div className="feed">
      <div className="head"></div>
      <div className="user">
        <div className="profile-pic">
          <img src={user} alt="" />
        </div>
        <div className="info">
          <h3>Lana Rose</h3>
          <small>Dubai, 15 MINUTES AGO</small>
        </div>
        <span className="edit">
          <i className="uil uil-ellipsis-h"></i>
        </span>
      </div>

      <div className="photo">
        <img src={post} alt="" />
      </div>

      <div className="action-button !my-6">
        <div className="flex gap-6">
          <div className="flex ">
            <AiOutlineLike />
            <span className="text-sm text-blue-700">10</span>
          </div>
          <div className="flex ">
            <BiCommentDots />
            <span className="text-sm text-green-600">10</span>
          </div>
          <div className="flex ">
            <AiOutlineShareAlt />
            <span className="text-sm text-orange-700">10</span>
          </div>
        </div>
        <div className="bookmark text-[#6b4ce6]">
          <BsBookmarkCheck />
          <span></span>
        </div>
      </div>

      <div className=" ">
        <form className="create-comment ">
          <input
            type="text"
            className="focus:outline-none px-5 py-2 text-base w-full"
            placeholder="What's on your mind Chirag?"
            id="create-post"
          />

          <input type="submit" value="Comment" className="btn btn-primary" />
        </form>
      </div>
    </div>
  )
}

export default FeedCard
