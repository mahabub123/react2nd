import React from 'react';
import laptop from '../image/laptop.png'

const ContainerBody = () => {
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font font-[900] sm:text-[4rem] text-[4rem] mb-4 text-gray-900">Your Next Laptop
                            <br className="hidden lg:inline-block"/><span className='text-[#8c00ffed]'>Your Best Laptop</span>
                        </h1>
                        <p className="mb-8 text-[20px] leading-relaxed">ROG was founded with the goal of creating the world’s most powerful, versatile gaming laptops in the industry. Our premium devices elevate  gaming experiences with best-in-class displays</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-[#8c00ffed] bg-[#c47cff63] border-0 py-2 px-6 focus:outline-none hover:bg-[#8c00ffed] hover:text-[white] rounded text-[20px] font-[600]">Live Demo</button>
                        </div>
                    </div>
                    <div className="lg:max-w-[36rem] lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={laptop}/>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContainerBody;