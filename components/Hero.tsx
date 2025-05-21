import { Image, View, useWindowDimensions } from 'react-native';

import { MyButton } from './MyButton';
import MyText from './MyText';


export default function Hero() {

  const { width } = useWindowDimensions();

  // Define heights for each breakpoint
  const heroHeight =
    width >= 1440 ? 800 :
      width >= 768 ? 600 :
        500;

  const imageSource =
    width >= 1440
      ? require("../assets/images/desktop/image-hero.jpg")
      : width >= 768
        ? require("../assets/images/tablet/image-hero.jpg")
        : require("../assets/images/mobile/image-hero.jpg");

  return (
    <View className='flex bg-white relative mb-[150px] md:mb-0'
      style={{ height: heroHeight }}>
      {/* Text */}
      <View className="z-50 flex justify-center items-start px-6 max-w-3xl absolute
            top-[230px]
            md:top-[60px] md:left-5
            lg:top-[100px] lg:left-20 lg:px-24 ">
        <MyText className="text-size27 md:text-size2 lg:text-size1 font-bold text-black">
          Branding & {'\n'}website design {'\n'}agency
        </MyText>

        <MyText className="mt-6 text-size5 leading-relaxed text-black lg:max-w-[95%] md:max-w-[52%]">
          We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.
        </MyText>

        <MyButton className="mt-12" variant="primary">Learn more</MyButton>
      </View>
      <Image
        className="absolute top-0 right-0 object-cover w-full h-full -z-[-1-]"
        source={imageSource}
      >
      </Image>
    </View>
  )
}
