import React from 'react';
import { View, Text, Button, Image, TextInput } from "react-native";
import { useState } from 'react/cjs/react.development';


const DogDetails = ({dogDetails, setShowDogDetails, setDogDetails}) => {

    const [name, setName] = useState('');

    return(
        <View>
            {dogDetails.name !== '' ?
            <Text>The name of this dog is {dogDetails.name}</Text>
            :
            <View>
                <Text 
                    style={{
                        padding: 10}}>
                    This dog has no name.. :(
                </Text>
                <TextInput
                    style={{
                        padding: 10,
                        borderWidth: 1}}
                    placeholder='Name me!'
                    onChangeText={name => setName(name)}
                />
            </View>}
            <Image 
                source={dogDetails.url}
                style={{
                    width: 200,
                    height: 200,
                    padding: 10}}/>
            <View 
                style={{
                    flexDirection : 'row',
                    padding: 10,
                    justifyContent: 'space-evenly'}}>
                <Button
                    title='Back'
                    style={{
                        padding: 10}}
                    onPress={() => setShowDogDetails(false)}/>
                <Button 
                    title='Save name'
                    style={{
                        padding: 10}}
                    onPress={() => {setShowDogDetails(false); setDogDetails({...dogDetails, name: name})}}
                    disabled={name === ''}
                />
            </View>
        </View>
    )
}

export default DogDetails;