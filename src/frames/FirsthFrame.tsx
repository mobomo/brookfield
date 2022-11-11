import { Animation1 } from '../Animations'
import { Frame000 } from '../frames'
import Opacity from '../springs/Opacity'

export const FirsthFrame = () => {
  return (
    <div className='flex flex-col text-center  w-4/5  items-center'>
      <Opacity  delay={2000} duration={3000} twstyles={'flex justify-center'}>
        <Animation1 />
      </Opacity>
      <div className='mt-10'>
        <Opacity  delay={500} duration={2000} twstyles={''}>
          <svg width="7" height="84" viewBox="0 0 7 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="3.5" cy="80.5" r="3.5" transform="rotate(-180 3.5 80.5)" fill="white"/>
<line x1="3.5" y1="80" x2="3.5" stroke="white"/>
          </svg>
        </Opacity>
        
      </div>
     <Opacity  delay={2000} duration={5000} twstyles={''}> <Frame000 /></Opacity>
    </div>
  )
}

export default FirsthFrame