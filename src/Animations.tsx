
import Lottie from 'react-lottie';
import animations from './jfiles'


export const Animation1 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.loader ,
    }
  return (
    <div className=' mt-40 '>
      <Lottie options={defaultOptions} />
      </div>
    )
};

export const Animation2 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim4 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Animation3 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim2 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Animation4 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim3 ,
    }
    return  <Lottie options={defaultOptions} />
};
export const Animation5 = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.anim5 ,
    }
    return  <Lottie options={defaultOptions} />
}

export const Animation6 = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animations.iconRow,
    }
    return  <Lottie options={defaultOptions} />
};
export const Animation7 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.icon1v2 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Animation8 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.icon2 ,
    }
    return  <Lottie options={defaultOptions} />
};

export const Animation9 = () => {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animations.anim1 ,
    }
    return  <div className='w-80  '><Lottie options={defaultOptions} /></div>
};



