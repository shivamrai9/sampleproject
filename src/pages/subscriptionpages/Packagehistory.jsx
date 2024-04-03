import React from 'react'

const Packagehistory = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-8">
        <div className="max-w-full mx-auto flex h-96 mt-2 backg">
          <div className="overflow-x-auto w-full">
            <table className="table table-pin-rows">
              {/* head */}
              <thead>
                <tr>
                  <th className='text-slate-700 font-bold text-base'>Plan</th>
                  <th className='text-slate-700 font-bold text-base'>Status</th>
                  <th className='text-slate-700 font-bold text-base'>Purchase Date</th>
                  <th className='text-slate-700 font-bold text-base'>Expiry Date</th>
                  <th className='text-slate-700 font-bold text-base'>Price</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="hover">
                  <td>Basic</td>
                  <td>Active</td>
                  <td>24 Jan 2012</td>
                  <td>24 Jan 2012</td>
                  <td>60.00</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <td>Basic</td>
                  <td>Active</td>
                  <td>24 Jan 2012</td>
                  <td>24 Jan 2012</td>
                  <td>60.00</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <td>Basic</td>
                  <td>Active</td>
                  <td>24 Jan 2012</td>
                  <td>24 Jan 2012</td>
                  <td>60.00</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default Packagehistory
