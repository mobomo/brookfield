import { Animation4 } from '../Animations'
import { Frame000 } from '../frames'

export const ThirdFrame = () => {
  return (
    <div className='flex'>
      <div>
      <Animation4 />
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col w-97  justify-center text-left gap-3'>
                  <div className='flex text-white text-4.75xl  font-mediumplus font-playfair'>
                    Another way to invest with Brookfield
                  </div>
                  <div className='flex text-white text-base  font-semibold '>
                    Investors looking for a pure-play asset manager to invest in-one with the backing of a company with over [50] years of investing experience and a strong track record of delivering returns to shareholders</div>
              </div>
        <div>
          <svg width="268" height="168" viewBox="0 0 268 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="264.5" cy="3.5" r="3.5" fill="#F5F5F5"/>
                          <line x1="264.5" y1="4" x2="264.5" y2="84" stroke="#F5F5F5"/>
                          <line x1="0.5" y1="168" x2="0.5" y2="83" stroke="#F5F5F5"/>
                          <line x1="1" y1="83.5" x2="265" y2="83.5" stroke="#F5F5F5"/>
                          </svg>
        </div>
      </div>
      
    </div>
  )
}

export default ThirdFrame