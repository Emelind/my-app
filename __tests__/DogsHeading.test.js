import 'react-native';
import React from 'react';
import DogsHeading from '../components/Welcome';
import {render} from '@testing-library/react-native';

describe('DogsHeading', () => {
    it('should have two children', () => {
        const tree = render(<DogsHeading/>).toJSON();
        expect(tree.children.length).toBe(2);
    })
});