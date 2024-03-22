import React, { useState } from 'react'

const ActivePlan = () => {

    const [isChecked, setIsChecked] = useState(true); // By default, yearly is checked

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);

    };
    console.log(isChecked)

    return (
        <>
            <div className="max-w-7xl mx-auto mt-8">
            <div className="max-w-full mx-auto mb-6 px-6">
                <h2 className='mb-4'>Currenctly You dont have any active plans</h2>
                <button className='btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full'>Purchase</button>
            </div>
                <div className="flex flex-col gap-1 px-2 border-b-4 md:flex-row md:items-center ">
                    <h1 className="text-2xl lg:block lg:text-2xl font-extrabold md:me-10">Basic</h1>
                    <div className="flex items-center mr-4">
                        <h3 className="text-sm">monthly</h3>
                        <input type="checkbox" className="toggle mx-2" checked={isChecked} onChange={handleCheckboxChange} />
                        <h3 className="text-sm">yearly</h3>
                    </div>
                    <div className="flex items-center mr-4">

                        <div className="form-control ">
                            <label className="cursor-pointer label">
                                <h3 className="label-text mr-3">auto renew</h3>
                                <input type="checkbox" className="toggle" />
                            </label>
                        </div>
                    </div>
                    <h3 className="text-sm mr-4">Pause</h3>
                    <h3 className="text-sm">Upgrade</h3>
                </div>
                <div className="max-w-full mx-auto flex h-96 ">
                    <div className="overflow-x-auto w-full">
                        <table className="table table-pin-rows">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className='text-slate-700 font-extrabold'>#Document ID</th>
                                    <th className='text-slate-700 font-extrabold'>Title</th>
                                    <th className='text-slate-700 font-extrabold'>Trained</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="hover">
                                    <th>5 active chatbot</th>
                                    <td>2000 Valid chats/mo</td>
                                    <td>Unlimited stories</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>5</th>
                                    <td>2000</td>
                                    <td>Untitled</td>
                                </tr>
                                {/* row 3 */}
                                <tr className="hover">
                                    <th>2</th>
                                    <td>1000</td>
                                    <td>200</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ActivePlan
