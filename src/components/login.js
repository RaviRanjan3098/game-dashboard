"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Form, Input, message } from 'antd';

const login = () => {

  return (
    <div>
      <section className="w-full flex items-center justify-center bg-pinkgradient">
        <div className="flex flex-wrap md:w-[70%] w-full md:py-12 md:h-screen h-auto m-auto overflow-hidden">
          {/* Left Image Section */}
          <div className='md:w-1/2 w-full md:h-full sm:block hidden'>
          <div className="w-full md:h-full p-5 flex md:rounded-l-2xl flex-col items-center shadow-lg justify-center bg-white overflow-hidden">
            <img alt="profile feature" className="w-10/12" src="/image/Frame_single.png" />
            <h2 className="text-lg font-bold text-yellow md:mt-8 my-3">Complete Your Profile</h2>
            <p className="text-sm text-center">Welcome back! Log in to explore thrilling games, unlock rewards, and enjoy exclusive gaming experiences tailored just for you!</p>
          </div>
          </div>
          {/* Right Form Section */}
          <div className="md:w-1/2 w-full p-5 sm:h-full h-screen  flex flex-col md:rounded-r-2xl  items-center justify-center bg-white overflow-hidden">
            <img alt="main logo" className="w-6/12 mb-5" src="/image/main_logo.png" />
            <h2 className="text-lg font-bold text-yellow">Login</h2>
            <p className="text-xs text-center mb-5">Enter your Email & Password to Get Started</p>
            <div className="w-full flex justify-center">
              <Form className="md:w-9/12 w-full space-y-4">
                <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                    className="m-auto flex text-xs border border-yellow focus:border-gray placeholder-black rounded-md w-full text-black py-2 px-4"
                  />
                </Form.Item>

                <Form.Item name="password"  rules={[{ required: true, message: 'Please enter your password!' }]}>
                  <Input.Password
                    placeholder="Enter your password"
                    className="m-auto flex text-xs border border-yellow placeholder-black rounded-md w-full text-black py-2 px-4"
                  />
                </Form.Item>

                <div className="m-auto flex text-sm text-center space-x-1 md:mt-3 mt-2 bg-pinkgradient rounded-md w-full justify-center text-white py-2 px-4">
                  <Link href="/dashboard" className='text-white hover:text-white'>Login</Link>
                </div>
              </Form>
            </div>

            <div className="md:mt-6 mt-4 flex w-full text-center items-center justify-center">
              <div className="flex">
                <p className="text-xs mb-3">
                  Don't have an account?
                  <Link href="#" className="w-full pl-1 text-green-600 text-xs">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
