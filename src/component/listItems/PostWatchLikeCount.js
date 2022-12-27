import React from 'react'
import { AiFillEye } from 'react-icons/ai'

function PostWatchLikeCount() {
  return (
    <li className="relative ">
      <AiFillEye className="text-2xl" />
      <span className="absolute top-0 left-6 text-xs">1.2k</span>
    </li>
  )
}

export default PostWatchLikeCount
