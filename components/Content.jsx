import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import Welcome from './Welcome';
import Dogs from './Dogs';
import { useSelector } from 'react-redux';

const Content = () => {

    const [showWelcome, setShowWelcome] = useState(true);
    const color = useSelector(state => state.color)

    return (
        <>
            <View 
                style={{
                    backgroundColor: color}}>
                {showWelcome ?
                <View>
                    <Welcome
                        setShowWelcome={setShowWelcome}/>
                </View>
                :
                <Dogs />}
            </View>
        </>
    )
}

export default Content;

/* För G
Skapa ett projekt i GitHub och länka till projektet när du lämnar in
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
Koden ska vara enhetligt formatterad
*/