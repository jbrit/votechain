const { expect } = require("chai");

describe("Voting", function () {
  it("should create a polland enable fetching", async function () {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.deployed();

    await voting.createPoll();
    await voting.createPoll();

    expect((await voting.getPolls())[0]).to.eql([
      "Default Name",
      "Default Name",
    ]);
  });
});
