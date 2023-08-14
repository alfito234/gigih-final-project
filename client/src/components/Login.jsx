import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../assets/tokopedia_play-removebg-preview.png";

export default function Login() {
  return (
    <>
      <div className='flex flex-1 max-h-screen'>
        <div className='flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='w-full max-w-sm mx-auto lg:w-96'>
            <div>
              <img className='w-auto h-20' src={Logo} alt='Your Company' />
              <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Sign in to your account
              </h2>
            </div>

            <div className='mt-10'>
              <div>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='text-sm leading-6'>
                      <p className='mt-2 text-sm leading-6 text-gray-500'>
                        Don't have an account?{" "}
                        <a
                          href='#'
                          className='font-semibold text-indigo-600 hover:text-indigo-500'
                        >
                          Register here!
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex-1 hidden w-0 lg:block'>
          <img
            className='absolute inset-0 object-cover w-full h-full'
            src='https://awsimages.detik.net.id/community/media/visual/2021/09/20/live-shopping-tokopedia-play.jpeg?w=1200'
            alt=''
          />
        </div>
      </div>
    </>
  );
}
