import React from 'react';
import { Pressable } from 'react-native';
import { useDispatch } from 'react-redux';
import { setColor } from '../features/color';

const ColorPicker = (props) => {

    const dispatch = useDispatch();

    const changeColor = () => {
        dispatch(setColor(props.color));
    }

    return(
        <>
            <Pressable
                style={{ 
                    backgroundColor: props.color,
                    height : 50,
                    width: 50,
                    borderWidth: 2 }}
                onPress={() => changeColor()}
            />
        </>
    )
}

export default ColorPicker;