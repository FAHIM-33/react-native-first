import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

interface Props {
    placeholder: string,
    onPress?: () => void,
    onChange?: (text: string) => void,
    value?: string
}

const SearchBar = ({ placeholder = '', onPress, onChange, value }: Props) => {

    return (
        <View className='flex-row items-center px-5 py-0 mt-5 rounded-lg bg-dark-200 overflow-hidden border-accent border bg-accent/20'>
            <Image source={icons.search} className='size-5' tintColor={'#AB8BFF'} />
            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                placeholderTextColor='#a8b5db'
                className='flex-1 ml-2 text-white'

            />
        </View>
    )
}

export default SearchBar