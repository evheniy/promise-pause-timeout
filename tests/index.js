const expect = require('chai').expect;
const promise = require('../index');


describe('Promise timeout test', () => {
    it('it should test promise timeout', async () => {
        const start = new Date;
        await promise(1000);
        const ms = new Date - start;

        expect(ms).to.be.above(1000);
        expect(ms).to.be.below(2000);
    });
});