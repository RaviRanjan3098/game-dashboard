import React from 'react';
import { SlMenu } from "react-icons/sl";
import { TbArrowsMinimize } from "react-icons/tb";
import { PiHandHeartFill } from "react-icons/pi";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { IoFishSharp } from "react-icons/io5";
import { BiSolidChess } from "react-icons/bi";

const dashboard = () => {
    return (
        <div className='bg-[url("/image/image.png")] bg-cover  md:px-8 px-3 pb-6 h-full bg-center'>
            <div className='flex justify-between items-center pt-2'>
                {/* logo section */}
                <div>
                    <div className='md:space-x-4 space-x-2 '>
                        <div className='md:w-12 md:h-12 w-9 h-9 border-2 border-pinkgradient rounded-full bg-gray-800'>
                            <img className=' bg-black' />
                        </div>
                    </div>
                </div>

                {/* image section */}
                <div className=''>
                    <div className=''>
                        <img src="/image/logo.png" className='sm:w-4/12 w-1/2 m-auto' />
                    </div>
                </div>

                {/* icon section */}
                <div>
                    <div className='text-pinkgradient flex space-x-4'>
                        <p className='md:p-1.5 p-1 border-2 border-pinkgradient cursor-pointer rounded-md'><TbArrowsMinimize /></p>
                        <p className='md:p-1.5 p-1 border-2 border-pinkgradient cursor-pointer rounded-md'><SlMenu /></p>
                    </div>
                </div>
            </div>

            {/*card section  */}
            <div className='flex flex-wrap w-full md:py-12 m-auto'>
                {/* Left section */}
                <div className='md:w-4/12 w-full flex flex-wrap sm:mb-0 mb-1'>
                    <div className='w-4/12 items-stretch'>
                        <div className='m-2 border-2 border-pinkwhite h-full rounded-full'>
                            <div className='bg-black opacity-70 rounded-full pb-4 text-white h-full flex flex-col justify-between'>
                                <div className='rounded-t-full'>
                                    <img src="/image/Frame_single_1.png" className='rounded-t-full w-full' />
                                    <p className='font-bold text-pinkwhite text-xs text-center px-1 break-all'>ALL</p>
                                    <hr className='border border-gray-800 mx-2 mt-1' />
                                </div>

                                <div className='flex-grow mt-2'>
                                    <PiHandHeartFill className='text-4xl m-auto text-pinkgradient' />
                                    <p className='font-bold text-pinkwhite text-xs text-center px-1 break-all'>FAVORITE</p>
                                    <hr className='border border-gray-800 mx-2 mt-1' />
                                </div>

                                <div className='flex-grow mt-2'>
                                    <FaCircleDollarToSlot className='text-4xl m-auto text-pinkgradient' />
                                    <p className='font-bold text-pinkwhite text-xs text-center px-1 break-all'>SLOTS</p>
                                    <hr className='border border-gray-800 mx-2 mt-1' />
                                </div>

                                <div className='flex-grow mt-2'>
                                    <IoFishSharp className='text-4xl m-auto text-pinkgradient' />
                                    <p className='font-bold text-pinkwhite text-xs text-center px-1 break-all'>FISHING</p>
                                    <hr className='border border-gray-800 mx-2 mt-1' />
                                </div>

                                <div className='mt-2 bg-black rounded-b-full'>
                                    <BiSolidChess className='text-4xl m-auto text-pinkgradient' />
                                    <p className='font-bold text-pinkwhite text-xs text-center px-1 break-all'>OTHER</p>
                                    <hr className='border border-gray-800 w-1/2 m-auto mt-1' />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Right section for the image */}
                    <div className='w-8/12 flex items-stretch'>
                        <div className='m-2 mr-0 md:mt-0 md:mb-0 h-full'>
                            <img src="/image/wiking.png" className='rounded-md h-full w-full object-cover' />
                        </div>
                    </div>
                </div>


                {/* Right section */}
                <div className='md:w-8/12 w-full flex flex-wrap items-center'>
                    <div className='w-full sm:w-1/2 md:w-1/3'>
                        <div className='m-2 border-2 border-pinkgradient rounded-md'>
                            <img src="/image/Frame_single.png" className='rounded-md w-full object-cover' />
                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3'>
                        <div className='m-2 border-2 border-pinkgradient rounded-md'>
                            <img src="/image/Frame_single.png" className='rounded-md w-full object-cover' />
                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3'>
                        <div className='m-2 border-2 border-pinkgradient rounded-md'>
                            <img src="/image/Frame_single.png" className='rounded-md w-full object-cover' />
                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3'>
                        <div className='m-2 border-2 border-pinkgradient rounded-md'>
                            <img src="/image/Frame_single.png" className='rounded-md w-full object-cover' />
                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3'>
                        <div className='m-2 border-2 border-pinkgradient rounded-md'>
                            <img src="/image/Frame_single.png" className='rounded-md w-full object-cover' />
                        </div>
                    </div>

                    <div className='w-full sm:w-1/2 md:w-1/3'>
                        <div className='m-2 border-2 border-pinkgradient rounded-md'>
                            <img src="/image/Frame_single.png" className='rounded-md w-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default dashboard;
