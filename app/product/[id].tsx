import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Details() {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>Prod Details: {id}</Text>
        </View>
    )
}