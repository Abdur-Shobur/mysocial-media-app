import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { UseUser } from '../../context/UseAuth'
import SignWith from './SignWith'

function Login() {
  const navigate = useNavigate()
  const { login } = useContext(UseUser)
  const form_login_handler = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    login(email, password)
      .then((res) => {
        console.log(res)
        navigate('/')
        toast.success('Login success', {
          position: 'bottom-left',
          autoClose: 100,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          theme: 'light',
        })
      })
      .catch((err) => {
        console.log(err)
        toast.error('Something is wrong', {
          position: 'top-center',
          autoClose: 200,
          closeOnClick: true,
          draggable: true,
        })
      })
  }
  return (
    <div className="h-screen bg-white">
      <ToastContainer />
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Login
          </h2>
          <h1 className="text-center">test email: mr.user@gmail.com</h1>
          <h1 className="text-center">test password: *123abc</h1>
          <form
            className="max-w-lg border rounded-lg mx-auto"
            onSubmit={form_login_handler}
          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="email"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Email
                </label>
                <input
                  name="email"
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Log in
              </button>

              <SignWith />
            </div>

            <div className="flex justify-center items-center bg-gray-100 p-4">
              <p className="text-gray-500 text-sm text-center">
                Don't have an account?{' '}
                <Link
                  to="/sign-up"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
