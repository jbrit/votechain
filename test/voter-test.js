const { expect } = require("chai");

describe("Voting", function () {
  it("should create a poll with the sender as owner", async function () {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.deployed();

    expect(await voting.createPoll()).to.not.equal("Return Value");
  });
});
