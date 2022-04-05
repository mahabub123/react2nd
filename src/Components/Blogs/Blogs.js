import React, { Component } from 'react'

export class Blogs extends Component {
    render() {
        return (
            <div>

                <section className="text-gray-400 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">WHAT IS CONTEXT API</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">একটি সাধারণ প্রতিক্রিয়া অ্যাপ্লিকেশনে, প্রপসের মাধ্যমে ডেটা উপরে-নিচে পাস করা হয়, তবে এই ধরনের ব্যবহার কিছু নির্দিষ্ট ধরণের প্রপসের জন্য কষ্টকর হতে পারে যা একটি অ্যাপ্লিকেশনের মধ্যে অনেক উপাদানের জন্য প্রয়োজনীয়। প্রসঙ্গ গাছের প্রতিটি স্তরের মধ্য দিয়ে স্পষ্টভাবে একটি প্রপ পাস না করে উপাদানগুলির মধ্যে এই জাতীয় মানগুলি ভাগ করার একটি উপায় সরবরাহ করে।</p>
                        </div>
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">WHAT IS SEMANTIC TAG</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">শব্দার্থিক এইচটিএমএল ট্যাগগুলি সেই ট্যাগের বিষয়বস্তু সম্পর্কে তথ্য প্রদান করে যা একটি পৃষ্ঠায় তারা যেভাবে দেখায় তার বাইরে যায়৷ code ট্যাগে আবদ্ধ পাঠ্যটি অবিলম্বে ব্রাউজার দ্বারা কিছু ধরণের কোডিং ভাষা হিসাবে স্বীকৃত হয়। সেই কোডটি রেন্ডার করার চেষ্টা করার পরিবর্তে, ব্রাউজার বুঝতে পারে যে আপনি একটি নিবন্ধ বা অনলাইন টিউটোরিয়ালের উদ্দেশ্যে কোডের উদাহরণ হিসাবে সেই পাঠ্যটি ব্যবহার করছেন</p>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Blogs