import React, { Component } from 'react';
import notFoundImg from '../image/404Imge2.png'

export class NotFound extends Component {
    render() {
        return (
            <div>

                <section className="text-gray-600 body-font ">
                    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded" alt="hero" src={notFoundImg}/>
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font  sm:text-[4.25rem] text-[4.25rem] mb-4 font-medium text-gray-900">404
                            </h1>
                            <h2 className="mb-8 text-[2.25rem] leading-relaxed">OPPS! PAGE NOT FOUND</h2>
                            <p className="mb-8 leading-relaxed text-[1.2rem]">Sorry. the page you're looking for doesn't exict.😢😢😢😢😢😢😢😢</p>
                            <div className="flex  justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href='/'>RETURN</a></button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default NotFound