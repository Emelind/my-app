import 'react-native';
import { setColor } from '../features/color';

 describe('setColor', () => {
    it('given a color is passed to setColor, setColor returns payload color from action set color', () => {
        expect(setColor('hotpink')).toStrictEqual({"payload": "hotpink", "type": "set color"});
    });
 });
