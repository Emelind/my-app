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
            />
            <Text
                style={{
                    paddingTop:20}}>
                Pick a color:
            </Text>
            <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingTop: 10}}>
                <ColorPicker color='green'/>
                <ColorPicker color='purple'/>
                <ColorPicker color='pink'/>
                <ColorPicker color='white'/>
            </View>
        </View>

    );
}

export default Welcome;