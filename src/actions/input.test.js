import { expect } from 'chai';

import { changeField, savePosition, changeOpacityStatus } from './input';

describe('Tests on the input actions', () => {

    it('should create an action to change input field', () => {
        const value = 'test';
        const expectedAction = {
            type: 'CHANGE_FIELD',
            value,
        };
        expect(changeField(value)).to.eql(expectedAction);
    });

    it('should create an action to save object position', () => {
        const value = 'c4';
        const expectedAction = {
            type: 'SAVE_POSITION',
            value,
        };
        expect(savePosition(value)).to.eql(expectedAction);
    });

    it('should create an action to change opacity status', () => {
        const bool = true;
        const expectedAction = {
            type: 'CHANGE_OPACITY_STATUS',
            bool,
        };
        expect(changeOpacityStatus(bool)).to.eql(expectedAction);
    });

});