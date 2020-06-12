import { expect } from 'chai';

import inputReducer from './input';

import { changeField, changeOpacityStatus } from '../actions/input';

describe('Tests on the input reducer', () => {

    describe('#structure', () => {

        it('expected to be a function', () => {
            expect(inputReducer).to.exist;
            expect(inputReducer).to.be.a('function');
        });

        it('expected to return an object which has searchValue property', () => {
            expect(inputReducer()).to.be.an('object').which.has.property('searchValue', '');
        });

        it('expected to return an object which has opacityStatus property', () => {
            expect(inputReducer()).to.be.an('object').which.has.property('opacityStatus', false);
        });

        describe('with actions', () => {

            it('check case of action CHANGE_FIELD', () => {
              const stateBefore = {
                searchValue: '',
              };
              const action = changeField('test');
              expect(inputReducer(stateBefore, action)).to.eql({
                searchValue: 'test', // searchValue has been set to 'test'
              });
            });

            it('check case of action CHANGE_OPACITY_STATUS', () => {
                const stateBefore = {
                    opacityStatus: false,
                };
                const action = changeOpacityStatus(true);
                expect(inputReducer(stateBefore, action)).to.eql({
                    opacityStatus: true, // opacityStatus has been set to true
                });
            });
        });
    });
});