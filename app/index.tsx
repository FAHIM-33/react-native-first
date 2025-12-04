import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1items-center justify-center">
      <Text className="text-5xl text-[#ff0000]">welcome</Text>
      <Link href="/onboarding">go to onboarding</Link>
      <Link className="bg-red-500" href="/product/khett">khet item</Link>
    </View>
  );
}
