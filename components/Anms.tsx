import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Pressable, Text, View } from 'react-native';

const image1 = require('../assets/images/mobile/image-slide-1.jpg');
const image2 = require('../assets/images/mobile/image-slide-2.jpg');
const image3 = require('../assets/images/mobile/image-slide-3.jpg');

const IMAGES = [image1, image2, image3];

export default function ImageCrossfadeTest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (prevIndex === null) return;

    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      setPrevIndex(null);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const onSelect = (index: number) => {
    if (index === currentIndex) return;
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  return (
    <View className="pt-12 items-center justify-center">
      <View className="w-[300px] h-[200px] rounded-xl overflow-hidden bg-black relative">
        {prevIndex !== null && (
          <Image
            source={IMAGES[prevIndex]}
            className="absolute inset-0"
            resizeMode="cover"
          />
        )}
        <Animated.Image
          source={IMAGES[currentIndex]}
          resizeMode="cover"
          className="absolute inset-0"
          style={{ opacity: fadeAnim }}
        />
      </View>

      <View className="flex-row gap-3 mt-5">
        {IMAGES.map((_, index) => (
          <Pressable
            key={index}
            onPress={() => onSelect(index)}
            className={`px-4 py-2 rounded-md ${currentIndex === index ? 'bg-neutral-800' : 'bg-neutral-500'
              }`}
          >
            <Text className="text-white font-bold">{index + 1}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
