import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'


const TrendingCard = ({ movie, index }) => {
    return (
        <Link href={`/movie/${movie.id}`} asChild>
            <TouchableOpacity className='w-40 relative'>
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <View className='absolute top-0 left-0 '>
                    <Text className='text-2xl text-white text-center border border-accent rounded-md aspect-square bg-black/50'>{index+1}</Text>
                </View>
                <Text className='text-white text-sm font-semibold' numberOfLines={2}>{movie.title}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default TrendingCard