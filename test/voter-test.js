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
      60,
      3600,
      0,
      ["string[]", "memory", "option"]
    );

    expect((await this.voting.getPolls())[0]).to.eql(["name"]);
  });
});
