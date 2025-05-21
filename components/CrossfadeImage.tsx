import { useEffect, useRef, useState } from 'react';
import { Animated, Image, ImageSourcePropType, View } from 'react-native';

type CrossfadeImageProps = {
  source: ImageSourcePropType;
};

const CrossfadeImage = ({ source }: CrossfadeImageProps) => {
  const [prevSource, setPrevSource] = useState<ImageSourcePropType | null>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!prevSource) {
      setPrevSource(source);
      return;
    }

    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      setPrevSource(source);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [source]);

  return (
    <View className="w-full h-auto relative">
      {prevSource && (
        <Image
          source={prevSource}
          resizeMode="cover"
          className="absolute w-full h-full"
        />
      )}
      <Animated.Image
        source={source}
        resizeMode="cover"
        className="absolute w-full h-full"
        style={{ opacity: fadeAnim }}
      />
    </View>
  );
};

export default CrossfadeImage;