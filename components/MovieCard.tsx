import { Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: any) => {
    return (
        <Link href={`/movie/${id}`} asChild>
            <TouchableOpacity className='flex-1 max-w-[33%]'>
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : `https://placehold.co/600x400/1a1a1a/ffffff.png`

                    }}

                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <Text className='text-white text-sm mt-1 font-bold' numberOfLines={1}>{title}</Text>
                <View className='flex-row items-center'>
                    <Image source={icons.star} className='size-4' />
                    <Text className='text-white text-xs mt-1 font-bold ml-2'>{(vote_average/2).toFixed(2)}</Text>
                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-white/50 text-[8px] mt-1'>{release_date.split('-')[0]}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard