import { Animation5 } from '../Animations'
import Opacity from '../springs/Opacity'

export const FourthFrame = () => {
  return (
    <div className='flex '>
       <div className='flex flex-col w-97  justify-center text-left gap-3'>
                  <div className='flex text-white text-4.75xl  font-mediumplus font-playfair'>
                    Brookfield Corporation
                  </div>
                  <div className='flex text-white text-base  font-semibold '>
                    Reinvest the bulk of its earnings for a steady return with a long-term horizon in mind
                  </div>
                  <div>
                    <li>Retains / Reinvests the bulk of its earnings</li>
                  </div>
        </div>
        <Opacity  delay={2000} duration={5000} twstyles={''}>

      <Animation5 />
        </Opacity>
    </div>
  )
}

export default FourthFrame