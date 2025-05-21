import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, useWindowDimensions, View } from 'react-native';

import Logo from '../assets/images/desktop/logo';
import MyText from './MyText';

type RoutePath = '/' | '/about' | '/services' | '/projects' | '/schedule';

const NAV_ITEMS: { label: string; route: RoutePath }[] = [
  { label: 'About', route: '/about' },
  { label: 'Services', route: '/services' },
  { label: 'Projects', route: '/projects' },
  { label: 'Schedule a Call', route: '/schedule' },
];

export default function Navigation() {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const isMobile = width < 768;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerAnim = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.timing(drawerAnim, {
      toValue: drawerOpen ? 0 : width,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [drawerOpen, width, drawerAnim]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  if (isMobile) {
    return (
      <>
        <View className='w-full h-[110px] bg-white flex flex-row relative'>
          <Logo className='absolute top-6 left-4 z-50' />
          {/* Open button */}
          {!drawerOpen && <Pressable
            className='p-2 absolute top-3 right-3 z-50'
            onPress={toggleDrawer}>
            <Ionicons name="menu" size={28} color="black" />
          </Pressable>}
          {/* Close button */}
          {drawerOpen && <Pressable
            className='p-2 absolute top-3 right-3 z-50'
            onPress={toggleDrawer}>
            <Ionicons name="close" size={28} color="black" />
          </Pressable>}
        </View>

        <View
          className="absolute top-[110px] w-2/3 right-5 z-50 flex-row justify-between items-center p-4  h-[300px] "
        >
          {/* Overlay backdrop */}
          {drawerOpen && (
            <View className="absolute inset-0 bg-black"></View>
          )}
          <Animated.View
            className="absolute top-10 w-full items-center"
            style={{
              left: 34,
              transform: [{ translateX: drawerAnim }],
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Pressable
                key={item.route}
                className="py-3 px-3 items-center hover:bg-c_red"
                onPress={() => {
                  setDrawerOpen(false);
                  router.push(item.route as RoutePath);
                }}
              >
                <MyText className="text-size4 text-white">{item.label}</MyText>
              </Pressable>
            ))}
          </Animated.View>
        </View>
      </>
    );
  }

  // Desktop  & tablet layout
  return (
    <View className="h-[177px] flex-row flex">
      <View className='h-full lg:w-1/2 flex-1 justify-center items-start bg-white'>
        <Logo className='md:ml-10 lg:ml-40' />
      </View>
      <View className='h-full lg:w-1/2 bg-c_red flex flex-row justify-start lg:pr-14 lg:pl-6'>
        {NAV_ITEMS.map((item) => (
          <Pressable
            key={item.route}
            onPress={() => router.push(item.route as RoutePath)}
            className="hover:text-white rounded-md transition-colors group flex justify-center mx-3"
          >
            <MyText className="text-white px-3 lg:px-6 py-8 hover:bg-black text-size5 lg:text-size4 group-hover:font-bold">
              {item.label}
            </MyText>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
