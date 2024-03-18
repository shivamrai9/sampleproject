import React from 'react'

const Analytics = () => {
    return (
        <>
            {/* <main className="flex flex-wrap justify-center items-center space-x-10">
                <div className="w-full md:w-1/4 p-4 bg-white  shadow-md">
                    <h3 className="stat-title">Conversations</h3>
                    <p className="stat-value">12652</p>
                </div>
                <div className="w-full md:w-1/4 p-4 bg-white  shadow-md">
                    <h3 className="stat-title">Users</h3>
                    <p className="stat-value">12652</p>
                </div>
                <div className="w-full md:w-1/4 p-4 bg-white  shadow-md">
                    <h3 className="stat-title">Messages</h3>
                    <p className="stat-value">12652</p>
                </div>
                <div className="w-full md:w-1/4 p-4 bg-white  shadow-md">
                    <h3 className="stat-title">Intents</h3>
                    <p className="stat-value">12652</p>
                </div>
            </main> */}
            {/* <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">25.6K</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div> */}
            {/* <div class="min-h-screen sm:p-10 p-5 lg:px-10 bg-gray-100">
                <div class="min-h-screen max-w-5xl mx-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-5">
                    <div class="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-first lg:order-none">
                        sad
                    </div>
                </div>
            </div> */}

            <div class="min-h-screen sm:p-10 p-5 lg:px-10 bg-gray-100">
                <div class="min-h-screen max-w-full mx-auto  justify-items-center grid md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-5">
                    <div class="w-full border-slate-900 border bg-white shadow-lg h-36 p-4 text-end  order-2 md:col-start-1 md:col-end-1 md:max-w-xs lg:order-none">
                        {/* <div class="bg-gray-200 block w-44  border h-1 rounded relative">
                            <span class="bg-blue-400 block w-full h-1 rounded absolute top-0 left-0"></span>
                        </div>  
                        <span class="ml-5 text-sm text-gray-400">70%</span> */}
                        <h3 className="stat-title">Conversations</h3>
                        <p className="stat-value">12652</p>
                    </div>
                    <div class="w-full border-slate-900 border bg-white shadow-lg h-36 p-4 text-end  order-1 md:col-start-2 md:col-end-2 md:max-w-xs lg:order-none">
                        {/* <div class="bg-gray-200 block w-44  border h-1 rounded relative">
                            <span class="bg-blue-400 block w-full h-1 rounded absolute top-0 left-0"></span>
                        </div>  
                        <span class="ml-5 text-sm text-gray-400">70%</span> */}
                        <h3 className="stat-title">Conversations</h3>
                        <p className="stat-value">12652</p>
                    </div>

                    {/* <div class="w-full bg-white shadow-lg rounded-xl h-24 flex items-center justify-center order-4 max-w-xs lg:order-none">
                        <div class="bg-gray-200 block w-44 h-1 rounded relative">
                            <span class="bg-yellow-400 block w-5 h-1 rounded absolute top-0 left-0"></span>
                        </div>

                        <span class="ml-5 text-sm text-gray-400">7%</span>
                    </div>

                    <div class="w-full bg-white shadow-lg rounded-xl h-24 flex items-center justify-center order-last md:col-start-1 md:col-end-2 md:max-w-xs lg:col-auto lg:order-none">
                        <div class="bg-gray-200 block w-44 h-1 rounded relative">
                            <span class="bg-green-400 block w-20 h-1 rounded absolute top-0 left-0"></span>
                        </div>

                        <span class="ml-5 text-sm text-gray-400">42%</span>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Analytics
