import React from 'react'

const Analytics = () => {
    return (
        <>
                <div className="sm:p-10 p-5 lg:px-10 bg-gray-100">
            <div classNameName='max-w-7xl mx-auto'>
                    <div className="max-w-full mx-auto  justify-items-center grid md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-5">
                        <div className="w-full bg-white shadow-lg h-36 p-4 flex flex-col justify-end  order-1 md:col-start-1 md:col-end-1 md:max-w-xs lg:order-none">
                            <h3 className="stat-title">Conversations 1</h3>
                            <p className="stat-value">12652</p>
                        </div>
                        <div class="w-full flex flex-col justify-end bg-white shadow-lg h-36 p-4  order-1 md:col-start-2 md:col-end-2 md:max-w-xs lg:order-none">
                            <h3 className="stat-title">Conversations 2</h3>
                            <p className="stat-value">12652</p>
                        </div>
                        <div class="w-full flex flex-col justify-end bg-white shadow-lg h-36 p-4  order-1 md:col-start-3 md:col-end-4 md:max-w-xs lg:order-none">
                            <h3 className="stat-title">Conversations 3</h3>
                            <p className="stat-value">12652</p>
                        </div>
                        <div class="w-full flex flex-col justify-end bg-white shadow-lg h-36 p-4  order-1 md:col-start-4 md:col-end-5 md:max-w-xs lg:order-none">
                            <h3 className="stat-title">Conversations 4</h3>
                            <p className="stat-value">12652</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics
