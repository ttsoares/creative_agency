import React from 'react';
import { Image, View, useWindowDimensions } from 'react-native';

import BgPatternWaveRed from '@/assets/images/desktop/bg-pattern-wave-red';
import { MyButton } from "@/components/MyButton";
import MyText from './MyText';


const Design = () => {

  const { width } = useWindowDimensions();

  const imageSource =
    width >= 1440
      ? require("../assets/images/desktop/image-strategic.jpg")
      : width >= 768
        ? require("../assets/images/tablet/image-strategic.jpg")
        : require("../assets/images/mobile/image-strategic.jpg");

  return (
    <>
      <View className='flex-1 flex-col md:flex-row bg-white'>
        <View className='lg:w-1/2  relative'>
          <Image source={imageSource} />
          <BgPatternWaveRed className='hover:animate-pulse scale-50  absolute z-50 -bottom-7 -left-3
                          md:top-[118px] md:-right-16 md:bottom-auto md:left-auto
                          lg:top-[230px] lg:-right-[82px] lg:scale-100'
          />
        </View>
        <View className='pt-20 pl-7 itens-start bg-c_black -z-10 flex w-full h-[400px]
              md:w-[550px] md:h-[565px] md:p-20 md:justify-center md:pt-0 md:pl-20
              lg:w-[720px] lg:h-[788px] lg:ml-15 lg:p-36
        '>
          <MyText className='text-size25 font-bold text-white
                            md:text-[32px] md:max-w-36
                            lg:text-size2 lg:max-w-fit lg:mt-0'
          >
            <span className='text-c_red'>Design</span> is strategic.
          </MyText>
          <MyText className='text-size5 text-white mt-10 leading-relaxed md:max-w-80 pr-14'>
            “A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”
          </MyText>
          <MyButton className="lg:mt-12 " variant="outline">Schedule a Call</MyButton>
        </View>
      </View>
      <View className='flex flex-col md:flex-row  w-full relative '>
        {/*  */}
        <View className='md:w-[30%] lg:w-[38%]  relative'>
          <MyText className='text-size25  text-white font-extrabold absolute z-50 max-w-[500px] -bottom-[200px] ml-5
                md:text-c_black md:-right-[120px] md:top-32 md:bottom-auto
                lg:absolute lg:top-[270px] lg:-right-[210px] lg:text-size2
          '>
            Our approach for creating a winning brand
          </MyText>
        </View>
        {/*  */}
        <View className='bg-c_red -z-20 flex justify-center items-center pt-[150px] pb-32 p-6 space-y-10
                        md:py-0 md:px-0 md:w-[448px] md:pt-0 md:pb-28 md:-mt-[120px] md:ml-[90px]
                        lg:p-40 lg:space-y-20 lg:w-[62%] lg:pt-48 lg:-mt-[200px]'
        >
          {/* Cards */}
          <View className=' relative max-w-lg md:ml-12 lg:ml-28 mt-32 '>
            <MyText className='absolute text-size1 font-extrabold text-[#FB7B7B]
                    -top-6 -left-2
                    md:-top-6 md:-left-4
                    lg:-top-9 lg:-left-14
            '>
              01
            </MyText>
            <MyText className=" font-bold text-white my-4 text-size4 md:text-size3">
              Brand Stretegy
            </MyText>
            <MyText className="sm:text-size5 lg:text-size4 text-white leading-7 sm:max-w-[350px] lg:max-w-lg">
              Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.
            </MyText>
          </View>
          <View className=' relative max-w-lg md:ml-12 lg:ml-28'>
            <MyText className='absolute text-size1 font-extrabold text-[#FB7B7B]
                    -top-6 -left-2
                    md:-top-6 md:-left-4
                    lg:-top-9 lg:-left-14
            '>
              02
            </MyText>
            <MyText className=" font-bold text-white my-4 text-size4 md:text-size3">
              Brand Desigsn
            </MyText>
            <MyText className="sm:text-size5 lg:text-size4 text-white leading-7 sm:max-w-[350px] lg:max-w-lg">
              Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.
            </MyText>
          </View>
          <View className='relative max-w-lg md:ml-12 lg:ml-28'>
            <MyText className='absolute text-size1 font-extrabold text-[#FB7B7B]
                    -top-6 -left-2
                    md:-top-6 md:-left-4
                    lg:-top-9 lg:-left-14
            '>
              03
            </MyText>
            <MyText className=" font-bold text-white my-4 text-size4 md:text-size3">
              Web Design
            </MyText>
            <MyText className="sm:text-size5 lg:text-size4 text-white leading-7 sm:max-w-[350px] lg:max-w-lg">
              A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.
            </MyText>
          </View>
        </View>
      </View>
    </>
  )
}

export default Design