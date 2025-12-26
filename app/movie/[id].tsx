import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import useFetch from '@/services/useFetch'
import { fetchMovieDetails } from '@/services/api'
import { icons } from '@/constants/icons'

export default function Details() {
    const { id }: { id: string } = useLocalSearchParams()

    const {
        data: movie,
        loading,


    } = useFetch(() => fetchMovieDetails(id))

    return (
        <View className='bg-primary flex-1'>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 80 }}
                className='flex-1'>
                {
                    loading ?
                        <ActivityIndicator size='large' />
                        :
                        <View>
                            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} className='w-full h-[550px]' />
                            <View className='p-5'>
                                <Text className='text-white text-2xl font-bold'>{movie?.title}</Text>
                                <Text className='text-gray-400 text-xs mt-1'>{movie?.release_date.split('-')[0]} | {movie?.runtime} min</Text>
                                <View className='flex-row'>
                                    <View className='flex-row gap-2 items-center bg-accent/20 px-2 rounded-md mt-2 w-fit'>
                                        <Image source={icons.star} className='size-4' />
                                        <Text className='text-white font-bold text-sm mt-1'>{movie?.vote_average.toFixed(1)}/10</Text>
                                        <Text className='text-xs text-gray-400 font-normal'>({movie?.vote_count} votes)</Text>
                                    </View>
                                </View>
                                <Text className='text-white text-sm font-bold mt-5'>Overview</Text>
                                <Text className='text-xs text-[#fadeff] mt-1'>{movie?.overview}</Text>
                                <Text className='text-white text-sm font-bold mt-5'>Genres</Text>
                                <View>
                                    <Text className='text-white text-xs'>
                                        {
                                            movie?.genres.map((g: any) => g.name).join(' - ') || "N/A"
                                        }
                                    </Text>
                                </View>

                            </View>
                        </View>
                }
            </ScrollView>
        </View>
    )
}