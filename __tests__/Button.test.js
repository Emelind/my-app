import 'react-native';
import React from 'react';
import Welcome from '../components/Welcome';
import { render, fireEvent } from '@testing-library/react-native';


describe('button in welcome component', () => {
    it('should have a specific button title', () => {
        const title = 'Check out the dogs!';
        const {getByText} = render(<Welcome />);
        const foundButtonTitle = getByText(title);
        expect(foundButtonTitle.props.children).toEqual(title);
    });

    it('should trigger on press', () => {
        const testIdName = 'welcomeButton';
        const mockFn = jest.fn()
        const { getByTestId } = render(<Welcome setShowWelcome={mockFn}/>);
        const foundButton = getByTestId(testIdName);
        fireEvent.press(foundButton);
        expect(mockFn).toBeCalledTimes(1);
    });
});
