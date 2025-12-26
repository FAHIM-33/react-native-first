import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import MovieCard from '@/components/MovieCard'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'

const Search = () => {

  const [query, setQuery] = useState('')
  const [isTyping, setIstyping] = useState(false)

  // const router = useRouter()

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({
    query: query
  }), false)




  useEffect(() => {
    setIstyping(true)
    const timeoutId = setTimeout(
      async () => {
        try {
          if (query) {
            await loadMovies()
          } else {
            reset()
          }
        } finally {
          setIstyping(false)
        }
      }, 500);
    return () => clearTimeout(timeoutId);
  }, [query])

  console.log("mmmmmmmmmmmmmm", moviesError, moviesLoading, movies?.length);

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='absolute w-full z-0' resizeMode='cover' />
      <FlatList
        data={movies}
        renderItem={({ item }) => (<MovieCard {...item} />)}
        numColumns={3}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          !moviesLoading && !moviesError && !isTyping ? (
            <View>
              <Text className='text-white/50 text-center my-5 '>{query ? "No movies found" : "Search for movies"}</Text>
            </View>
          ) : null
        }
        ListHeaderComponent={
          <>
            <View className=''>
              <Image source={icons.logo} className='w-12 h-10 mx-auto' />
            </View>
            <View className='mt-5 '>
              <SearchBar
                onChange={(text: string) => setQuery(text)}
                value={query}
                placeholder='Search movies...'
              />
            </View>

            {
              moviesLoading && (
                <ActivityIndicator
                  size="large"
                  color="#ffffff"
                  className='mt-24'
                />
              )
            }
            {
              moviesError && (
                <Text className='text-red-500 font-bold text-center mt-5'>{moviesError.message}</Text>
              )
            }

            {
              !moviesLoading && !moviesError && movies?.length > 0 && (
                <Text className='text-white text-center my-5 '>
                  Search results for: <Text className='text-accent font-bold'>{query}</Text>
                </Text>
              )
            }
          </>
        }
        className='mt-20 px-3'
      />
    </View >
  )
}

export default Search