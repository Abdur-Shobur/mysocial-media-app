import React from 'react'
import FeedCard from '../../component/card/FeedCard'
import CreatePost from './CreatePost'
import PostBox from './PostBox'
import PostMoreSection from './PostMoreSection'
import Story from './Story'

function Home() {
  return (
    <div className="middle">
      <Story />

      <CreatePost />

      <div className="feeds">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
    </div>
  )
}

export default Home
