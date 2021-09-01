import React from 'react';
import { Text, Button, View } from 'react-native';
import ColorPicker from './ColorPicker';

const Welcome = ({setShowWelcome}) => {

    return (
        <View>
            <Text 
                style={{
                    padding: 20,
                    fontSize: 20}}
            >
                Welcome to the dog app!
            </Text>
            <Button 
                onPress={() => setShowWelcome(false)}
                title='Check out the dogs!'
                testID='welcomeButton'
            />

        </View>

    );
}

export default Welcome;