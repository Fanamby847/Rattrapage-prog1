const expect = require('expect');
import { findOdd } from '../code/exercice2.js';

describe("findOdd", () => {
    it("should return 4 for [1,2,2,3,3,3,4,3,3,3,2,2,1]", () => {
        const input = [1,2,2,3,3,3,4,3,3,3,2,2,1];
        const expected = 4;
    expect(findOdd(input)).to.deep.equal(expected);
    });

    it ("should return 0 for [0]" , () => {
        expect(findOdd([0])).to.deep.equal(0);
    })
})