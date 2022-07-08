const { assert } = require("chai");

const HashToken = artifacts.require('HashToken');

contract('HashToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.hash = await HashToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.hash.mint(alice, 1000, { from: minter });
        assert.equal((await this.hash.balanceOf(alice)).toString(), '1000');
    })
});
