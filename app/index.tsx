import Navigation from "@/components/Navigation";
import { SafeAreaView, ScrollView } from "react-native";

import Brand from "@/components/Brand";
import Design from "@/components/Design";
import Hero from "@/components/Hero";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="">
        <Navigation />
        <Hero />
        <Design />
        <Brand />
      </ScrollView>
    </SafeAreaView>
  );
}
