import React, { useEffect, useState } from 'react'
import { Virtual } from 'swiper'
import { RiImageAddFill } from 'react-icons/ri'
import { toast } from 'react-toastify'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import MyDayCard from '../../component/card/MyDayCard'
import { BeatLoader } from 'react-spinners'

function Story({ user, db_user }) {
  const [myDay, setMyDay] = useState([])
  const [loading, setLoading] = useState()
  const [load_day, set_load_day] = useState()

  useEffect(() => {
    fetch(`${process.env.REACT_APP_URL}/my-day`)
      .then((res) => res.json())
      .then((data) => setMyDay(data))
      .catch((err) => console.log(err))
  }, [load_day, user])

  const my_day_handler = async (e) => {
    setLoading(true)
    e.preventDefault()
    let formData = new FormData()
    const post_image = e.target.image
    formData.append('image', post_image.files[0])
    let milliseconds = new Date().getTime()

    const fetch_fu = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB}`,
      {
        method: 'POST',
        'Content-Type': 'application/json',
        body: formData,
      },
    )
    const res = await fetch_fu.json()
    if (res.success) {
      const all_data = {
        user_name: db_user?.name,
        user_img: db_user?.info?.photoUrl,
        user_id: db_user?._id,
        day_photo: res.data.url,
        milliseconds,
      }

      const post_db = async () => {
        const fetch_url = await fetch(`${process.env.REACT_APP_URL}/my-day`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(all_data),
        })
        const response = await fetch_url.json()
        set_load_day(!load_day)
        setLoading(false)
        toast.success('Your Post is Live', {
          position: 'top-center',
          autoClose: 100,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: 'light',
        })
      }
      post_db()
      e.target.reset()
    } else {
      setLoading(false)
      toast.error('Something is Wrong', {
        position: 'top-center',
        autoClose: 100,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        theme: 'light',
      })
      e.target.reset()
    }
    e.target.reset()
  }
  return (
    <div className="storiesa flex">
      <div className="flex justify-center items-center ">
        <form
          onSubmit={my_day_handler}
          className="flex justify-center items-center flex-col gap-1"
        >
          <label htmlFor="icon-button-files">
            <RiImageAddFill
              color="primary"
              aria-label="upload picture"
              component="span"
              className="text-4xl mx-auto cursor-pointer text-indigo-900"
            />
          </label>
          <input
            // accept="image/*"
            name="image"
            id="icon-button-files"
            type="file"
            style={{ display: 'none' }}
          />

          <button className="text-sm px-3 rounded py-1 w-full btn-primary !flex justify-center items-center">
            {loading ? (
              <BeatLoader
                color="#ffffff"
                size={5}
                className="inline-block py-1 px-2"
              />
            ) : (
              'Upload'
            )}
          </button>
        </form>
      </div>
      <Swiper
        virtual
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
            // slidesPerGroup: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
            // slidesPerGroup: 3,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, Virtual]}
        className="stories w-full md:max-w-md lg:max-w-xl  absolute "
      >
        {myDay.map((e, i) => (
          <SwiperSlide key={e._id} virtualIndex={i}>
            <MyDayCard data={e} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Story
