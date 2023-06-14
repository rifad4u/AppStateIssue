import React, { useEffect } from 'react';
import { AppState, View } from 'react-native';

const App = () => {

    useEffect(() => {
        console.log("App State", AppState.currentState);
    }, []);
    return (
        <View>

        </View>
    );
};

export default App;
