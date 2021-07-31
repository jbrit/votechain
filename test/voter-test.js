const { expect } = require("chai");

describe("Voting", function () {
  it("Should have no return value to create a poll", async function () {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.deployed();

    expect(await voting.createPoll()).to.not.equal("Return Value");
  });
});
