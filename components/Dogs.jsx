import React, {useEffect, useState} from 'react';
import { View, ScrollView, Image, Pressable} from 'react-native';
import DogDetails from './DogDetails';
import DogsHeading from './DogsHeading';

const Dogs = () => {

    const apiUrl = 'https://dog.ceo/api/breeds/image/random/50';
    
    const [dogData, setDogData] = useState([]);
    const [elementData, setElementData] = useState(null);
    const [showDogDetails, setShowDogDetails] = useState(false);
    const [dogDetails, setDogDetails] = useState({});

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                return response.json()
            })
            .then((data) => {

                let list = [];

                for(let i = 0; i < data.message.length; i++) {
                    let obj = {
                        name: '',
                        url: data.message[i]
                    }
                    list.push(obj);
                }
                setDogData(list);
            })
            .catch((err) => {
                console.log('error', err)
            })
    }, []);

    useEffect(() => {
        if (dogData.length > 0) {
            setElementData(dogData.map((item, index) =>
                <View 
                    style={{padding: 10 }}
                    key={index}
                >
                    <Pressable onPress={() => {setShowDogDetails(true), setDogDetails({name: item.name, url: item.url})}}>
                        <Image
                            source={{
                                uri: item.url
                            }}
                            style={{ 
                                width: 100, 
                                height: 100,
                                borderRadius: 5 }}
                        />
                    </Pressable>
                </View>
                ));
        }
    }, [dogData]);

    useEffect(() => {
        if (dogDetails.name !== '') {
            const newData = dogData.map((item) => {
                if (item.url === dogDetails.url) {
                    const updatedItem = {
                        ...item,
                        name: dogDetails.name,
                    };
                    return updatedItem;
                }
                return item;
            });

            setDogData(newData);
        }
    }, [dogDetails]);
    

    return(
        <>
            {showDogDetails ?
            <DogDetails 
                dogDetails={dogDetails} 
                setShowDogDetails={setShowDogDetails}
                setDogDetails={setDogDetails}
            />
            :
            <ScrollView>
                <DogsHeading />
                <View 
                    style={{
                        flexDirection: 'row', 
                        flexWrap: 'wrap'}}>
                    {elementData}
                </View>
            </ScrollView>}
        </>
    )
}

export default Dogs;