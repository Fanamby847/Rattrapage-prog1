const expect = require('expect');
import {capitalizeNames} from '../code/exercice1.js';

describe("capitalizeNames", () => {
    it("should capitalize ['jo', 'nelson', 'jurie']", () => {
        const input = ["jo", "nelson", "jurie"];
        const expected = ["Jo", "Nelson", "Jurie"];
    expect(capitalizeNames(input)).to.deep.equal(expected);
    });


    it("should capitalize ['KARLY', 'DANIEL', 'KELSEY']", () => {
        const input = ["KARLY", "DANIEL", "KELSEY"];
        const expected = ["Karly", "Daniel", "Kelsey"];
    expect(capitalizeNames(input)).to.deep.equal(expected);
    });
});
