import { Animation9 } from '../Animations'
import Opacity from '../springs/Opacity'


export const SixthFrame = () => {
  return (
    <div className='flex flex-col items-center text-white mt-40 mb-0'>
      <div className='w-full md:w-97'>
        <div className='flex justify-center mb-0 md:mb-8 mt-12 md:mt-0'>
          <svg width="7" height="84" viewBox="0 0 7 84" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="3.5" cy="3.5" r="3.5" fill="#F5F5F5"/>
          <line x1="3.5" y1="4" x2="3.5" y2="84" stroke="#F5F5F5"/>
          </svg>
        </div>
        <div className='text-3xl lg:text-4xl font-playfair font-semibold mt-5'>A proven strategy</div>
        <div className="px-5 lg:text-lg text-xs lg:px-2">Leveraging a history of successfully providing public market access to Brookfield's investing expertise</div>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center '>
  <Animation9 />
        <div className='w-full md:w-977 text-center px-5 lg:text-lg text-xs  lg:flex lg:flex-col lg:items-start  lg:pl-32'>
          <div className='text-left'>...allowing investors the flexibility to invest in the Brookfield businesses they prefer</div>
          <div className='flex mt-8 text-center justify-center lg:flex-none lg:text-left mb-10 lg:text-lg '>All with the backing of Brookfield.</div>
        </div>
      </div>
      <div>
        <svg width="7" height="84" viewBox="0 0 7 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3.5" cy="80.5" r="3.5" transform="rotate(-180 3.5 80.5)" fill="#F5F5F5"/>
        <line x1="3.5" y1="80" x2="3.5" stroke="#F5F5F5"/>
        </svg>
      </div>
    </div>
  )
}

export default SixthFrame