import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ReviewsBottom extends Component {
  render() {
    return (
        <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
        <h1 className="text-[30px] text-black mb-[2rem]">Customer Reviews(3)</h1>
          <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                  <div className="w-[130px] inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                    <img src='https://3x9j5k37sbkgorhw23wpbk0x-wpengine.netdna-ssl.com/wp-content/uploads/2022/01/Connor-New-Caricature-scaled-e1643363640460.jpeg' alt="" />
                  </div>
                  <h2  className="text-lg text-black font-medium title-font mb-2">NAME: Robart</h2>
                  <h2 className="text-lg text-black font-medium title-font mb-2">DESCRIPTION: Excellent</h2>
                  <p className="leading-relaxed text-base">RATING: 5.0</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                  <div className="w-[130px] inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                    <img src='https://lh4.googleusercontent.com/-vUu-GeFB1j0/AAAAAAAAAAI/AAAAAAAAAV4/crU-eS-d_ZY/photo.jpg' alt="" />
                  </div>
                  <h2  className="text-lg text-black font-medium title-font mb-2">NAME: Stiven</h2>
                  <h2 className="text-lg text-black font-medium title-font mb-2">DESCRIPTION: Excellent</h2>
                  <p className="leading-relaxed text-base">RATING: 5.0</p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                  <div className="w-[130px] inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                    <img src='https://www.fivesquid.com/pics/t2/1562957531-108379-1-1_236px.jpg' alt="" />
                  </div>
                  <h2  className="text-lg text-black font-medium title-font mb-2">NAME: Maikal</h2>
                  <h2 className="text-lg text-black font-medium title-font mb-2">DESCRIPTION: Excellent</h2>
                  <p className="leading-relaxed text-base">RATING: 5.0</p>
                </div>
              </div>
        </div>
      </div>

        
        <div className="flex justify-center">
            <button className="inline-flex text-[#8c00ffed] bg-[#c47cff63] border-0 py-2 mb-[50px] px-6 focus:outline-none hover:bg-[#8c00ffed] hover:text-[white] rounded text-[20px] font-[600]"><Link to='/reviews'>SEE ALL REVIEWS</Link></button>
        </div>

      </section>
    )
  }
}

export default ReviewsBottom