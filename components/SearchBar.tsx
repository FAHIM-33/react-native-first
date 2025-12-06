import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder: string,
    onPress?: () => void,
}

const SearchBar = ({ placeholder='', onPress }: Props) => {
    
    return (
        <View className='flex-row items-center px-5 py-4 rounded-full bg-dark-200 overflow-hidden'>
            <Image source={icons.search} className='size-5' tintColor={'#AB8BFF'} />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=''
                onChangeText={() => { }}
                placeholderTextColor='#a8b5db'
                className='flex-1 ml-2 text-white'

            />
        </View>
    )
}

export default SearchBar