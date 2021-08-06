//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

// TODO: Ensure options count from one
contract Voting {
    // structs
    struct VoteOptions{
        string name;
    }
    struct Poll {
        address owner;
        string name;
        string description;
        uint start_time;
        uint end_time;
        uint fee;
        uint option_count; // Number of options
        mapping(uint => VoteOptions ) options; // mapping of index+1(option_id) to options (should start from 1)
        mapping(address => uint ) votes; // mapping of address to option_id (should start from 1)
    }
    
    // Variables
    uint polls_created;
    // Mapping of addresses to usernames
    mapping(address => string ) address_to_username;
    mapping(string => address ) username_to_address;

    mapping(uint => Poll) polls;


    // variables    
    address public owner;
    
    // events
    event createPollEvt(uint pollId, address owner, string name, string description, uint start_time, uint end_time, uint fee);

    constructor() {
        owner = msg.sender;
    }

    // Public Functions 
    function createPoll(string memory name, string memory description, uint start_time, uint end_time, uint fee) public {
        // check end time after start time
        // Check more than one option
        emit createPollEvt(polls_created, msg.sender, name, description, start_time, end_time, fee);
        Poll storage newPoll = polls[polls_created];
        newPoll.owner = msg.sender;
        newPoll.name = name;
        newPoll.description = description;
        newPoll.start_time = start_time;
        newPoll.end_time = end_time;
        newPoll.fee = fee;

        // Increment poll id
        polls_created++;
        console.log("New pollId is '%s'", polls_created);
    }

    function getUser() public view returns(string memory username) {
        return address_to_username[msg.sender];
    }

    function createUser(string memory username) public{
        // Make checks to ensure user name is not empty && not taken && address not registered
        address_to_username[msg.sender] = username;
        username_to_address[username] = msg.sender;
    }


    function getPolls() public view returns (string[] memory name, string[] memory description, uint[] memory start_time, uint[] memory end_time, uint[] memory fee) {
       string[] memory names = new string[](polls_created);
       string[] memory descriptions = new string[](polls_created);
       uint[] memory start_times = new uint[](polls_created);
       uint[] memory end_times = new uint[](polls_created);
       uint[] memory fees = new uint[](polls_created);
       uint found;
        for (uint i=0; i<polls_created; i++) {
            if (polls[i].owner==msg.sender) {
                names[found] = polls[i].name;
                descriptions[found] = polls[i].description;
                start_times[found] = polls[i].start_time;
                end_times[found] = polls[i].end_time;
                fees[found] = polls[i].fee;
                found++;
            }
        }
        return (names, descriptions, start_times, end_times, fees);
    }
}
