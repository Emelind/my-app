import 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';
import {render} from '@testing-library/react-native';

describe('welcome component', () => {
    it('should have a text saying Welcome to the dog app!', () => {
        const welcomeText = 'Welcome to the dog app!';
        const notFoundText = 'Not found text';
        const {toJSON, getByText, queryByText} = render(<Welcome />);
        const foundWelcomeTextElement = getByText(welcomeText);
        const notFoundTextElement = queryByText(notFoundText);
        expect(foundWelcomeTextElement.props.children).toEqual(welcomeText);
        expect(notFoundTextElement).toBeNull();
        expect(toJSON()).toMatchSnapshot();
    });
});
