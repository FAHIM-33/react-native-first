import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { Link, useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter()

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({
    query: ''
  }))

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="w-full absolute" />
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 100,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mx-auto" />

        {
          moviesLoading ? (
            <ActivityIndicator
              size="large"
              color="#0000ff"
              className="mt-5"
            />
          )
            : moviesError ?
              <Text>Error : {moviesError?.message}</Text>
              :
              <View className="px-3">
                <SearchBar
                  placeholder='Search for something'
                  onPress={() => router.push('/search')}
                />
                <>
                  <Text className="text-lg text-white font-bold mt-5 mb-3">Latest Movies</Text>
                  <View>
                    <FlatList
                      data={movies}
                      renderItem={({ item }) => (
                        <MovieCard {...item}></MovieCard>
                      )}
                      keyExtractor={(item) => item.id.toString()}
                      numColumns={3}
                      columnWrapperStyle={{
                        justifyContent: 'flex-start',
                        gap: 10,
                        paddingRight: 5,
                        marginBottom: 10,
                      }}
                      className="mt-2 mb-32"
                      scrollEnabled={false}
                    />

                  </View>
                </>
              </View>

        }

      </ScrollView>
    </View>
  );
}
