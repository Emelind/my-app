import React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import Welcome from './Welcome';
import Dogs from './Dogs';
import { useSelector, useStore } from 'react-redux';
import ColorPicker from './ColorPicker';
import { Provider } from 'react-redux';

const Content = () => {

    const [showWelcome, setShowWelcome] = useState(true);
    const color = useSelector(state => state.color);

    const store = useStore();

    return (
        <>
            <View 
                style={{
                    backgroundColor: color,
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                {showWelcome ?
                <View>
                    <Welcome
                        setShowWelcome={setShowWelcome}/>
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
                        <Provider store={store}>
                            <ColorPicker color='lightgreen'/>
                            <ColorPicker color='purple'/>
                            <ColorPicker color='hotpink'/>
                            <ColorPicker color='white'/>
                        </Provider>
                    </View>
                </View>
                :
                <Dogs />}
            </View>
        </>
    )
}


export default Content;

/* För G
---> Skapa ett projekt i GitHub och länka till projektet när du lämnar in
---> Sätta upp ett React projekt med create-react-native-app och jobba med browser (utgå för skärmstorlek för iPhone X)
---> Minst en var av dessa core components: View, Text, Image, Pressable (eller liknande), ScrollView
---> Minst 3 egna komponenter varav minst en med props och minst en av dessa props ska vara en funktion (callback)
---> Använd dig av Context för att skicka ner viss data till komponenter utan att använda props. 

Skriv minst 1 test som passerar om man skriver "yarn test" / "npm test"
Projektet skall starta efter npm/yarn install & npm/yarn start utan några konsollfel

För VG
Uppfyll kraven för G samt:
---> Minst 5 egna komponenter 
---> Hämta och använd data från extern API (för inspiration, se: https://github.com/public-apis/public-apis)

Skriv minst 5 test som passerar om man skriver "yarn test" / "npm test"
---> Koden ska vara enhetligt formatterad


Given / When / Then
Kanske kan testa...

Given a dog has a name, when passed to blabla comp. then the name should be shown ?
Given the color has been changed when pressing the Pressable, then the background color should change
Given the api url has been provided when clicking the dogs button, the data should be fetched

---- KNAPPAR ----
Testa att knapparna fungerar som de ska när man interagerar med dem
Testa att knapparna renderas som de ska - appearance och placement i UI

*/