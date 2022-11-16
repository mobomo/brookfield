



///this are the section names  
const page3: Record<string, string> = {
  'mobile': 'flex justify-center items-center',
  'sm': '    flex justify-center items-center -mt-40',
  'md': '    flex justify-center items-center mt-20',
  'lg': '    flex justify-center items-center mt-80 ',
  'xl': '    flex justify-center items-center mt-120 ',
  '2xl': '   flex justify-center items-center mt-120 ',
  '3xl': '   flex justify-center items-center mt-96 ',
  '4xl': '   flex justify-center items-center mt-40 ',
  }

  const page4: Record <string, string> = {
  'mobile': 'flex flex-col justify-center items-center bg-lightBlue',
  'sm': '    flex flex-col justify-center items-center bg-lightBlue ',
  'md': '    flex flex-col justify-center items-center bg-lightBlue',
  'lg': '    flex flex-col justify-center items-center bg-lightBlue mt-140 ',
  'xl': '    flex flex-col justify-center items-center bg-lightBlue mt-180 ',
  '2xl': '   flex flex-col justify-center items-center bg-lightBlue mt-120 ',
  '3xl': '   flex flex-col justify-center items-center bg-lightBlue mt-96 ',
  '4xl': '   flex flex-col justify-center items-center bg-lightBlue mt-40 ',
  }

const page5: Record<string, string> = {
  'mobile': 'flex text-center justify-center items-center bg-lightBlue',
  'sm': '    flex text-center justify-center items-center bg-lightBlue',
  'md': '    flex text-center justify-center items-center bg-lightBlue',
  'lg': '    flex text-center justify-center items-center bg-lightBlue  mt-160 ',
  'xl': '    flex text-center justify-center items-center bg-lightBlue  mt-200 ',
  '2xl': '   flex text-center justify-center items-center bg-lightBlue  mt-200 ',
  '3xl': '   flex text-center justify-center items-center bg-lightBlue  mt-150 ',
  '4xl': '   flex text-center justify-center items-center bg-lightBlue  mt-40 ',
}

const page6: Record<string, string> = {
  'mobile': 'flex text-center justify-center items-center bg-lightBlue',
  'sm': '    flex text-center justify-center items-center bg-lightBlue',
  'md': '    flex text-center justify-center items-center bg-lightBlue',  
  'lg': '    flex text-center justify-center items-center bg-lightBlue  mt-160 ',
  'xl': '    flex text-center justify-center items-center bg-lightBlue  mt-200 ',
  '2xl': '   flex text-center justify-center items-center bg-lightBlue  mt-200 ',
  '3xl': '   flex text-center justify-center items-center bg-lightBlue  mt-150 ',
  '4xl': '   flex text-center justify-center items-center bg-lightBlue  mt-40 ',
}

const page7: Record<string, string> = {
  'mobile': 'flex flex-col text-center justify-center items-center mb-0 mt-0',
  'sm': '    flex flex-col text-center justify-center items-center mb-0 mt-0',
  'md': '    flex flex-col text-center justify-center items-center mb-0 mt-0',
  'lg': '    flex flex-col text-center justify-center items-center mb-0 mt-0 mt-160 ',
  'xl': '    flex flex-col text-center justify-center items-center mb-0 mt-0 mt-240 ',
  '2xl': '   flex flex-col text-center justify-center items-center mb-0 mt-0 mt-250 ',
  '3xl': '   flex flex-col text-center justify-center items-center mb-0 mt-0 mt-200 ',
  '4xl': '   flex flex-col text-center justify-center items-center mb-0 mt-0 mt-40 ',
}

const page8: Record<string, string> = {
  'mobile': '',
  'sm': '',
  'md': '',
  'lg': 'mt-180',
  'xl': 'mt-250',
  '2xl': 'mt-260',
  '3xl': 'mt-210',
  '4xl': 'mt-10',
}

type Section = typeof page3

/// this is the file 
  const App: Record<string , Section > = {
    page3, page4, page5, page6, page7, page8
  }

  // 

// to add more styles first create a section (it is a div where the styles are ) then add the section to the file variable

const FirsthFrame: Record<string, Section> = {
};

const SecondFrame: Record<string, Section> = {

};

const ThirdFrame: Record<string, Section> = {

};

const FourthFrame: Record<string, Section> = {

};

const FifthFrame: Record<string, Section> = {

}

const SixthFrame: Record<string, Section> = {

}

const SeventhFrame: Record<string, Section> = {

}





// this is the data to be used in the script
export const twStyles: Record<string, typeof App> = {
    App, FirsthFrame, SecondFrame, ThirdFrame, FourthFrame, FifthFrame, SixthFrame, SeventhFrame
};


