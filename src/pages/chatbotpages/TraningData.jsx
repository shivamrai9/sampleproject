import React from 'react'

const TraningData = () => {
    return (
        <>
            <div className="container mx-auto mt-8">
                <div className="flex flex-col w-full border-opacity-50">
                    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
                        <div className="flex items-center space-x-4">
                            <button className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full">Text documents</button>
                            <button className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full">Web Pages</button>
                        </div>
                        <div className="flex items-center">
                            <button className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full">Upload documents</button>
                        </div>
                    </header>
                </div>
                <div className="max-w-full mx-auto flex h-96 ">
                    <div className="overflow-x-auto w-full">
                        <table className="table table-pin-rows">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#Document ID</th>
                                    <th>Title</th>
                                    <th>Trained</th>
                                    <th>IP Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="hover">
                                    <th>#12323</th>
                                    <td>FAQ</td>
                                    <td>Yes</td>
                                    <td>6 Dec 2023</td>
                                    <td>View</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <th>#12323</th>
                                    <td>General Doc</td>
                                    <td>No</td>
                                    <td>6 Dec 2023</td>
                                    <td>View</td>
                                </tr>
                                {/* row 3 */}
                                <tr className="hover">
                                    <th>#12323</th>
                                    <td>General Doc 2</td>
                                    <td>Yes</td>
                                    <td>6 Dec 2023</td>
                                    <td>View</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TraningData
