import React, {useState} from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'; 
import {useScreens} from 'react-native-screens';

import MealsNavigator from './components/navigation/MealsNavigator';

useScreens(); // improves the performance of the app

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
}

export default function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    if (!isLoaded) {
        return (
            <AppLoading 
                startAsync={fetchFonts} 
                onFinish={() => setIsLoaded(true)} 
                onError={err => console.log(err)}
            />
        )

    }

    return (

        <View style={{flex: 1}}>
            <MealsNavigator />
        </View>
    );
}
