import { expect } from 'chai';

import mapReducer from './map';

import { savePosition } from '../actions/input';

describe('Tests on the map reducer', () => {

    describe('#structure', () => {

        it('expected to be a function', () => {
            expect(mapReducer).to.exist;
            expect(mapReducer).to.be.a('function');
        });

        it('expected to return an object which has highlightedShelf property', () => {
            expect(mapReducer()).to.be.an('object').which.has.property('highlightedShelf', '');
        });

        describe('with actions', () => {

            it('check case of action SAVE_POSITION', () => {
              const stateBefore = {
                highlightedShelf: '',
              };
              const action = savePosition('a1');
              expect(mapReducer(stateBefore, action)).to.eql({
                highlightedShelf: 'a1', // highlightedShelf has been set to 'a1'
              });
            });

        });
    });
});