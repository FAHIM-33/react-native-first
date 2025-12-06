import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 1000,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mx-auto" />
        <View>
          <SearchBar
            placeholder='Search for something'
            onPress={() => router.push('/search')}
          />

        </View>
      </ScrollView>
    </View>
  );
}
