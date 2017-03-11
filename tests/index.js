const expect = require('chai').expect;
const pause = require('..');

describe('Promise pause test', () => {
    it('it should test timeout', async () => {
        const start = new Date();

        await pause(1000);
        const ms = new Date() - start;

        expect(ms).to.be.above(1000);
        expect(ms).to.be.below(2000);
    });
});
