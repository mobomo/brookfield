import { Animation4 } from '../Animations'
import Opacity from '../springs/Opacity'

export const ThirdFrame = () => {
  return (
    <div className='flex mt-40'>
      <Opacity  delay={500} duration={2000} twstyles={'-mt-28 mr-10'}>
      <Animation4 />
      </Opacity>
      <div className='flex flex-col'>
        <Opacity delay={500} duration={2000} twstyles={'flex flex-col w-97  justify-center text-left gap-3 mb-20'}>
                  <div className='flex text-white text-4.75xl  font-mediumplus font-playfair'>
                    Another way to invest with Brookfield
                  </div>
                  <div className='flex text-white text-base  font-semibold '>
                    Investors looking for a pure-play asset manager to invest in-one with the backing of a company with over [50] years of investing experience and a strong track record of delivering returns to shareholders</div>
              </Opacity>
        <div className='mb-10 -mt-5'>
          <svg width="333" height="168" viewBox="0 0 333 168" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="164.5" r="3.5" transform="rotate(-180 3.5 164.5)" fill="#F5F5F5"/>
<line x1="3.5" y1="164" x2="3.5" y2="84" stroke="#F5F5F5"/>
<line x1="332.5" y1="85" x2="332.5" stroke="#F5F5F5"/>
<line x1="3" y1="84.5" x2="333" y2="84.5" stroke="#F5F5F5"/>
</svg>




        </div>
      </div>
      
    </div>
  )
}

export default ThirdFrame