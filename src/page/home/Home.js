import React, { useContext, useEffect, useState } from 'react'
import FeedCard from '../../component/card/FeedCard'
import { UseUser } from '../../context/UseAuth'
import CreatePost from './CreatePost'
import Story from './Story'
import { BarLoader } from 'react-spinners'
import ChangeTittle from '../../context/ChangeTittle'
import LoadFeedCard from '../../component/loader/LoadFeedCard'
import PostFormLoader from '../../component/loader/PostFormLoader'
function Home() {
  ChangeTittle('My Social App')
  const { user, db_user } = useContext(UseUser)
  const [load_more, set_load_more] = useState(5)
  const [post, set_post] = useState([])
  const [load_post, set_load_post] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch(
      `https://end-game-server-abdur-shobur.vercel.app/post?load_more=${load_more}`,
    )
      .then((res) => res.json())
      .then((data) => {
        set_post(data)
        setLoader(false)
      })
      .catch((err) => console.log(err))
  }, [load_post, load_more])

  return (
    <div className="middle">
      <Story user={user} db_user={db_user} />
      {!db_user ? (
        <PostFormLoader />
      ) : (
        <CreatePost
          user={user}
          db_user={db_user}
          set_load_post={set_load_post}
        />
      )}

      <div className="feeds">
        {loader && (
          <div className="flex items-center justify-center flex-col mt-5">
            <LoadFeedCard />
            <LoadFeedCard />
            <LoadFeedCard />
            <LoadFeedCard />
          </div>
        )}

        {post?.map((post) => (
          <FeedCard
            key={post._id}
            post={post}
            user={user}
            db_user={db_user}
            set_load_post={set_load_post}
            load_post={load_post}
            comment_show={3}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {!loader && post.length >= load_more && (
          <button
            className="text bg-center bg-blue-600 px-4 py-2 !rounded-md text-white mb-10"
            onClick={() => set_load_more((pre) => pre + 5)}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  )
}

export default Home
