const expect = require('expect');
import { capitalizeName } from '../code/exercice1.js';

describe("capitalizeNames", () => {
    it("should capitalize ['jo', 'nelson', 'jurie']", () => {
    expect(capitalizeName (["jo", "nelson", "jurie"])).to.deep.equal(["Jo", "Nelson", "Jurie"]);
    });

    it("should capitalize ['KARLY', 'DANIEL', 'KELSEY']", () => {
    expect(capitalizeName (["KARLY", "DANIEL", "KELSEY"])).to.deep.equal(["Karly", "Daniel", "Kelsey"]);
    });
});