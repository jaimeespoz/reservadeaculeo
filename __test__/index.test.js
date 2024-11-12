import { add } from '../src/views/index.js';

describe('test index', () => {
    test('add', () => {
        expect(add(1, 2)).toBe(3);
    });
});
