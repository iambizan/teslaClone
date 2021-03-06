import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
//& data
import cars from "./cars"
//& components
import CarItem from '../CarItem'

const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment="start"
                decelerationRate="fast"
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarList
