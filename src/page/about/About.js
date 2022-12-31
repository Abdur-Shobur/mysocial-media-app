import React, { useContext, useEffect, useState } from 'react'
import { BsUpload } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { BarLoader } from 'react-spinners'
import FeedCard from '../../component/card/FeedCard'
import { UseUser } from '../../context/UseAuth'
function About() {
  const [toggle, setToggle] = useState(false)
  const [ur_post, set_ur_post] = useState([])
  const [loader, setLoader] = useState(true)
  const [load_post, set_load_post] = useState(false)
  const [load_more, set_load_more] = useState(6)

  const { user, db_user, update_profile, set_update_profile } = useContext(
    UseUser,
  )
  useEffect(() => {
    const fetch_fun = async () => {
      const fetch_url = await fetch(
        `${process.env.REACT_APP_URL}/post-by-u_id?id=${db_user?._id}&load_more=${load_more}`,
      )
      const response = await fetch_url.json()
      set_ur_post(response)
      set_load_post(!load_post)
      setLoader(false)
    }
    fetch_fun()
  }, [db_user, load_more, load_post])

  const update_form_handler = (e) => {
    e.preventDefault()
    let target = e.target
    const name = target.name.value
    const address = target.address.value
    const university = target.university.value
    const about_me = target.about_me.value
    const post_image = e.target.image
    let formData = new FormData()
    formData.append('image', post_image.files[0])

    const photo_upload = async () => {
      try {
        const fetch_url = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB}`,
          {
            method: 'POST',
            'Content-Type': 'application/json',
            body: formData,
          },
        )
        const response = await fetch_url.json()

        if (response.success) {
          const user_data = {
            name,
            info: {
              photoUrl: response.data.url,
              address,
              university,
              about_me,
            },
          }

          const update_user = async () => {
            const fetch_url = await fetch(
              `https://end-game-server-abdur-shobur.vercel.app/user?_id=${db_user?._id}`,
              {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user_data),
              },
            )
            const response = await fetch_url.json()
            set_update_profile(!update_profile)
          }

          update_user()
          setToggle(false)
        }
      } catch (err) {
        console.log(err)
        setToggle(false)
      }
    }
    photo_upload()
  }

  return (
    <div className="bg-white rounded-xl">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">37</h1>
              <h1 className="text-stone-600 text-sm">Friends</h1>
            </div>
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">23</h1>
              <h1 className="text-stone-600 text-sm">Photo</h1>
            </div>
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">64</h1>
              <h1 className="text-stone-600 text-sm">Comments</h1>
            </div>
          </div>
          <div>
            {toggle ? (
              <RxCross2
                onClick={() => setToggle(!toggle)}
                className="bg-[#f22536] text-3xl p-1 text-white rounded-md cursor-pointer"
              />
            ) : (
              <button
                onClick={() => setToggle(!toggle)}
                className="bg-[#6b4ce6] px-4 py-2 text-white rounded-md"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* edit form  */}
        {toggle && (
          <div className="bg-[#efeef5] p-3 rounded my-5">
            <h1 className="text-xl text-blue-700">Edit Profile</h1>
            <form
              className="flex flex-col gap-3 px-5"
              onSubmit={update_form_handler}
            >
              {/* name  */}
              <div className="flex gap-1 flex-col mt-2">
                <label className="text-lg" htmlFor="name">
                  Name:
                </label>
                <input
                  className="w-full focus:outline-none px-5 py-1 text-lg rounded"
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user && db_user?.name}
                  placeholder={user && db_user?.name}
                />
              </div>
              {/* university  */}
              <div className="flex gap-1 flex-col mt-2">
                <label className="text-lg" htmlFor="university">
                  University:
                </label>
                <input
                  className="w-full focus:outline-none px-5 py-1 text-lg rounded"
                  type="text"
                  name="university"
                  id="university"
                  defaultValue={user && db_user?.info?.university}
                  placeholder={user && db_user?.info?.university}
                />
              </div>
              {/* address   */}
              <div className="flex gap-1 flex-col mt-2">
                <label className="text-lg" htmlFor="address">
                  Address:
                </label>
                <input
                  className="w-full focus:outline-none px-5 py-1 text-lg rounded"
                  type="text"
                  name="address"
                  id="address"
                  defaultValue={user && db_user?.info?.address}
                  placeholder={user && db_user?.info?.address}
                />
              </div>
              {/* phot up  */}
              <div className="flex gap-1 flex-col mt-2 ">
                <span className="text-lg">Photo Upload</span>
                <label
                  htmlFor="icon-button-file"
                  className="!cursor-pointer bg-white rounded p-2"
                >
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
                  name="image"
                  style={{ display: 'none' }}
                />
              </div>
              <div className="flex gap-1 flex-col mt-2">
                <label className="text-lg" htmlFor="about_me">
                  About Me:
                </label>
                <textarea
                  className="w-full focus:outline-none px-5 py-1 text-lg rounded"
                  type="text"
                  name="about_me"
                  id="about_me"
                  defaultValue={user && db_user?.info?.about_me}
                  placeholder={user && db_user?.info?.about_me}
                />
              </div>

              <button
                type="submit"
                className="bg-[#6b4ce6] text-white py-1 rounded"
              >
                Update
              </button>
            </form>
          </div>
        )}
        {/* end edit from  */}
        <div className="bg-white font-semibold text-center rounded-3xl  border shadow-lg p-10">
          <img
            className="mb-3 w-32 h-32 rounded-full mx-auto shadow-lg"
            src={user && db_user?.info?.photoUrl}
            alt="product designer"
          />
          <h1 className="text-lg text-gray-700"> {user && db_user?.name}</h1>
          <h3 className="text-sm text-gray-400">
            Email: {user && db_user?.email}
          </h3>
          <h3 className="text-sm text-gray-400">
            University: {user && db_user?.info?.university}
          </h3>
          <h3 className="text-sm text-gray-400">
            Address: {user && db_user?.info?.address}
          </h3>
          <p className="text-xs text-gray-400 mt-4">
            {user && db_user?.info?.about_me}
          </p>
          {/* <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button> */}
        </div>

        <div className="mt-10">
          <h1 className="text-xl text-sky-800 font-semibold">
            Your All Post is Here
          </h1>
          <div className="feeds">
            {loader && (
              <div className="flex items-center justify-center mt-5">
                <BarLoader color="#36d7b7" width={'100%'} />
              </div>
            )}

            {ur_post?.map((post) => (
              <FeedCard
                key={post._id}
                post={post}
                user={user}
                db_user={db_user}
                set_load_post={set_load_post}
                load_post={load_post}
                comment_show={3}
                shadow="shadow-lg shadow-gray-300"
              />
            ))}
          </div>
          <div className="flex justify-center ">
            {!loader && ur_post.length >= load_more && (
              <button
                className="text bg-center bg-blue-600 px-4 py-2 !rounded-md text-white mb-10"
                onClick={() => set_load_more((pre) => pre + 5)}
              >
                See more post
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
