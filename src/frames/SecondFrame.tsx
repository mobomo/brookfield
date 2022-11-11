import {Animation3} from '../Animations'
import Opacity from '../springs/Opacity'


export const SecondFrame = () => {
  return (
    <div className='flex flex-col text-center justify-center items-center'>
    
          <div className='flex flex-col gap-3'>
              <Opacity delay={2000} duration={7000} twstyles={'flex text-white text-3xl  w-9775 text-center font-semibold font-opensans leading-9'}>
                      We believe our business has greater potential for even more growth with the creation of a new listed pure-pay alternative asset manager.
              </Opacity>
            
              <Opacity delay={2000} duration={7000} twstyles='items-center  flex gap-3 w-full justify-center'>
                  <div className='mr-72 mt-10'>
                    <svg width="268" height="168" viewBox="0 0 268 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="264.5" cy="3.5" r="3.5" fill="#F5F5F5"/>
                          <line x1="264.5" y1="4" x2="264.5" y2="84" stroke="#F5F5F5"/>
                          <line x1="0.5" y1="168" x2="0.5" y2="83" stroke="#F5F5F5"/>
                          <line x1="1" y1="83.5" x2="265" y2="83.5" stroke="#F5F5F5"/>
                          </svg>
                  </div>
              </Opacity>
          </div>

          <div className='flex w-full  justify-center gap-10 -mt-32'>
              <Opacity delay={2000} duration={7000} twstyles='flex flex-col w-97  justify-center text-left gap-3'>
                  <div className='flex text-white text-4.75xl  font-mediumplus font-playfair'>
                    Two entities, distinct offerings
                  </div>
                  <div className='flex text-white text-base  font-semibold '>
                    Each with day-to-day operations preserved and the focus of a dedicated management team.
                  </div>
              </Opacity>
              <Opacity delay={500} duration={2000} twstyles={''}>
                <Animation3 />
              </Opacity>
          </div>

          <Opacity delay={2000} duration={7000} twstyles='-mt-24'>
                <svg width="554" height="139" viewBox="0 0 554 139" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" x2="0.5" y2="100" stroke="#F5F5F5"/>
                <line x1="553.5" y1="139" x2="553.5" y2="99" stroke="#F5F5F5"/>
                <line x1="1" y1="99.5" x2="554" y2="99.5" stroke="#F5F5F5"/>
                </svg>


          </Opacity>
    </div>
  )
}

export default SecondFrame