//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract Voting {
    // structs
    struct Poll {
        address owner;
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
    event createPollEvt(uint pollId);

    constructor() {
        owner = msg.sender;
    }

    function createPoll() public {
        emit createPollEvt(pollId);
        pollId += 1;
        console.log("New pollId is '%s'", pollId);
    }
}
