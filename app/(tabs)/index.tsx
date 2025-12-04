import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-[#ff0000] w-full bg-black">welcome</Text>
      <Link className="shrink-0 grow w-full bg-red-500" href="/product/khett">khet item</Link>
    </View>
  );
}
