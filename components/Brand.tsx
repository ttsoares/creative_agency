import React, { useEffect, useState } from 'react';
import { ImageSourcePropType, Platform, Pressable, useWindowDimensions, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import BgPatternWaveRed from '@/assets/images/desktop/bg-pattern-wave-red';
import BgPatternWavyWhite from '@/assets/images/desktop/bg-pattern-wavy-white';
import IconArrowNext from '@/assets/images/desktop/icon-arrow-next';
import IconArrowPrevious from '@/assets/images/desktop/icon-arrow-previous';
import { MyButton } from './MyButton';
import MyText from './MyText';

import CrossfadeImage from './CrossfadeImage';

const Brand = () => {

  const { width } = useWindowDimensions();

  let image1: ImageSourcePropType;
  let image2: ImageSourcePropType;
  let image3: ImageSourcePropType;

  //sm
  image1 = require("../assets/images/mobile/image-slide-1.jpg");
  image2 = require("../assets/images/mobile/image-slide-2.jpg");
  image3 = require("../assets/images/mobile/image-slide-3.jpg");

  // lg
  if (width >= 1440) {
    image1 = require("../assets/images/desktop/image-slide-1.jpg");
    image2 = require("../assets/images/desktop/image-slide-2.jpg");
    image3 = require("../assets/images/desktop/image-slide-3.jpg");
  }
  //md
  if (width >= 768 && width < 1440) {
    image1 = require("../assets/images/tablet/image-slide-1.jpg");
    image2 = require("../assets/images/tablet/image-slide-2.jpg");
    image3 = require("../assets/images/tablet/image-slide-3.jpg");
  }

  type Slide = { image: ImageSourcePropType, headLine: string, title: string, description: string, year: string };

  const Slides: Slide[] = [
    {
      image: image1,
      headLine: "Brand naming & guidelines",
      title: "Lean Product Roadmap",
      description: "Lean Product Roadmap",
      year: "2019 Project",
    },
    {
      image: image2,
      headLine: "Brand identity & merchandise",
      title: "Brand identity & merchandise",
      description: "New Majestic Hotel",
      year: "2018 Project",
    },
    {
      image: image3,
      headLine: "Brand identity & web design",
      title: "Brand identity & web design",
      description: "Crypto Dashboard",
      year: "2016 Project",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  function incrementSlide() {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Slides.length);
  }

  function decrementSlide() {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + Slides.length) % Slides.length);
  }

  useEffect(() => {
    if (Platform.OS !== "web") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") decrementSlide();
      if (e.key === "ArrowRight") incrementSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <View className='flex flex-col md:flex-row bg-white relative justify-end mb-[200px] md:mb-[80px]'>
        <View className='absolute bg-c_black flex justify-center items-start z-50
                        w-[100%] h-[80%] left-0 top-[100%] pl-6
                        md:w-[50%] md:h-[60%] md:left-0 md:top-0 md:pl-8
                        lg:w-[732px] lg:h-[524px] lg:pt-8 lg:pl-[6%] lg:left-0 lg:top-0
        '>
          {/* Headline */}
          <MyText className='text-size25 text-white font-bold mb-8
                              lg:text-size2 lg:max-w-[90%]
                              md:text-size25 md:max-w-[70%]
          '>
            {Slides[currentSlide].headLine}
          </MyText>
          <View className='flex flex-row gap-5 md:mt-8 lg:mt-14 hover:cursor-pointer'>
            <Pressable
              className='hover:animate-pulse'
              onPress={decrementSlide}
              accessible
              accessibilityRole="button"
            >
              <IconArrowPrevious />
            </Pressable>
            <Pressable
              className='hover:animate-pulse'
              onPress={incrementSlide}
              accessible
              accessibilityRole="button"
            >
              <IconArrowNext />
            </Pressable>
          </View>
        </View>
        <BgPatternWavyWhite className='absolute z-50 hidden hover:animate-fade-in
                      md:scale-50  md:top-[18%] md:left-[42%] md:block
                      lg:top-[180px] lg:scale-100 lg:left-[670px]
                      '
        />
        <View className='relative h-fit flex flex-col justify-start items-end'>
          <CrossfadeImage source={Slides[currentSlide].image} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,4)']}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '30%',
            }}
            pointerEvents="none"
          />
          <View className='absolute flex flex-col bottom-5 right-5
                md:bottom-3 md:right-4
                lg:bottom-16 lg:right-10 lg:mr-28
                '
          >
            <MyText className='text-right text-size5 lg:text-size4 font-bold text-white mb-2'>
              {Slides[currentSlide].title}
            </MyText>
            <MyText className='text-right text-size5 lg:text-size4 text-white'>
              {Slides[currentSlide].year}
            </MyText>
          </View>
        </View>
      </View>
      <View className='flex flex-col items-center justify-between relative p-6 space-y-8 mt-[200px]
            md:px-10 md:flex-row md:mt-0
            lg:px-40
            '
      >
        <BgPatternWaveRed className='hidden md:block absolute top-38 -left-20 z-50 hover:animate-spin' />
        <MyText className='text-size25 lg:text-size2 font-extrabold text-c_black md:max-w-[50%] md:ml-20'>
          Let&apos;s build something great together.
        </MyText>
        <MyButton variant='primary'>
          Schedule a Call
        </MyButton>
      </View>
    </>
  )
}

export default Brand