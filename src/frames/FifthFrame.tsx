import { Animation5, Animation6 } from '../Animations'
import Opacity from '../springs/Opacity'
import Shape from '../springs/Shape'
import Move from '../springs/Move'

export const FifthFrame = () => {
  return (
    <Move twstyles={ ''}  duration={300} delay={1000}>
      <Shape duration={ 300} delay={1000} twstyles='flex flex-col bg-white px-32 py-0 pb-20 justify-center text-brandblue w-full '>
          <div className='flex bg-white '>
                <div className='flex flex-col  justify-center text-left gap-1'>
                      <div className='flex  text-4.5xl  font-semibold font-playfair'>
                        Brookfield Asset Management
                      </div>
                      <div className='flex  text-base   w-9775'>
                        An asset-lite manager investing third party capital through its private funds
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >Manages money for Limited Partners</li>
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >Requires little or no [balance sheet] capital</li>
                      </div>
                      <div  className='flex  text-base   ml-5'>
                        <li >[Higher] dividend payout ratio</li>
                      </div>
                </div>
          
        <Opacity delay={0} duration={0} twstyles={''}>
          <Animation5 />
        </Opacity>
         
          </div>
          <Opacity  delay={0} duration={1000} twstyles={'w-full'}>
              <Animation6 />
          </Opacity>
    </Shape>
    </Move>
  )
}

export default FifthFrame