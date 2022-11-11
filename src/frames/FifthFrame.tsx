import { Animation5, Animation6 } from '../Animations'

export const FifthFrame = () => {
  return (
    <div className='flex flex-col bg-white p-28 justify-center '>
          <div className='flex bg-white '>
                <div className='flex flex-col  justify-center text-left gap-3'>
                      <div className='flex text-brandblue text-4.5xl  font-semibold font-playfair'>
                        Brookfield Asset Management
                      </div>
                      <div className='flex  text-base  text-brandblue w-9775'>
                        An asset-lite manager investing third party capital through its private funds
                      </div>
                      <div  className='flex  text-base  text-brandblue ml-5'>
                        <li >Manages money for Limited Partners</li>
                      </div>
                      <div  className='flex  text-base  text-brandblue ml-5'>
                        <li >Requires little or no [balance sheet] capital</li>
                      </div>
                      <div  className='flex  text-base  text-brandblue ml-5'>
                        <li >[Higher] dividend payout ratio</li>
                      </div>
                </div>
                <div>
                    <Animation5 />
                </div>
          </div>
          <div className='w-full'>
              <Animation6 />
          </div>
    </div>
  )
}

export default FifthFrame