const { expect } = require("chai");

describe("Voting", function () {
  before(async function () {
    this.Voting = await ethers.getContractFactory("Voting");
  });

  beforeEach(async function () {
    this.voting = await this.Voting.deploy();
    await this.voting.deployed();
  });

  it("should create a username successfully", async function () {
    await this.voting.createUser("n");
    expect((await this.voting.getUser())[0]).to.equal("n");
  });

  it("should create a poll and enable fetching", async function () {
    await this.voting.createPoll(
      "name",
      "string memory description",
      parseInt((Date.now() - 100)/1000),
      parseInt((Date.now()+36000)/1000),
      0,
      ["string[]", "memory", "option"]
    );

    // vote and check vote count
    await this.voting.vote(0,1);
    
    const polls = await this.voting.getPolls();

    // Ensure it uses the correct vote count
    expect(polls[8][0].map(value => parseInt(value["_hex"]))).to.eql([0, 1, 0]);

    // Ensure it uses the correct name
    expect(polls[1]).to.eql(["name"]);

    // Ensure it uses the correct voted for id
    expect(polls[9].map(value => parseInt(value["_hex"]))).to.eql([1]);

  });
});
