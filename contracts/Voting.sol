//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Voting {
    // structs
    struct Poll {
        address owner;
        string name;
        string description;
        uint start_time;
        uint end_time;
        uint fee;
    }
    
    // Variables
    uint polls_created;
    // Mapping of addresses to usernames
    mapping(address => string ) address_to_username;
    mapping(string => address ) username_to_address;

    mapping(uint => Poll) polls;


    // variables    
    address public owner;
    uint pollId;
    
    // events
    event createPollEvt(uint pollId, address owner);

    constructor() {
        owner = msg.sender;
    }

    // Public Functions 
    function createPoll() public {
        emit createPollEvt(pollId, msg.sender);
        polls[pollId] = Poll(msg.sender, "Default Name", "Default Description", 0, 100, 0);
        pollId += 1;
        console.log("New pollId is '%s'", pollId);
    }

    function createUser(string memory username) public{
        // Make checks to ensure user name is not empty && not taken && address not registered
        address_to_username[msg.sender] = username;
        username_to_address[username] = msg.sender;
    }
}
