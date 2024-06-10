import { View, Text, ScrollView, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
    return(
        <View>
            <Header />
            <View>
                <Text>Shopping List</Text>
                <Text>2023/10/01</Text>
            </View>
            <View>
                <ScrollView>               
                    <Text>
                        Vlad~~
                        baka
                        hellow
                        moscow
                        jajajaj
                    </Text>
                </ScrollView>
            </View>
            <CircleButton>+</CircleButton>
        </View>
    )
}

export default Detail