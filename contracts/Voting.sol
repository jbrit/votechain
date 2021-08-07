//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// TODO: Ensure options count from one
contract Voting {
    // structs
    struct VoteOption{
        string name;
        uint count;
    }
    struct Poll {
        address owner;
        string name;
        string description;
        uint start_time;
        uint end_time;
        uint fee;
        uint option_count; // Number of options
        mapping(uint => VoteOption ) options; // mapping of index+1 to options (should start from 1)
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
    event createPollEvt(uint pollId, address owner, string name, string description, uint start_time, uint end_time, uint fee, string[] options);

    constructor() {
        owner = msg.sender;
    }

    // Private Functions
    function validStr(string memory str) private pure returns(bool isValid) {
        return bytes(str).length >= 1;
    }

    // Public Functions 
    function createPoll(string memory name, string memory description, uint start_time, uint end_time, uint fee, string[] memory options) public {
        // Check string length
        assert(validStr(name) && validStr(description));
        // Check end time after start time
        assert(end_time >= start_time);
        // Check more than one option
        assert(options.length >= 2);
        // Check that options have valid names
        for (uint i=0; i<options.length; i++) {
            assert(validStr(options[i]));
        }

        // Adding the poll
        Poll storage newPoll = polls[polls_created];
        newPoll.owner = msg.sender;
        newPoll.name = name;
        newPoll.description = description;
        newPoll.start_time = start_time;
        newPoll.end_time = end_time;
        newPoll.fee = fee;
        newPoll.option_count = options.length;

        // Adding the poll options
        for (uint i=0; i<options.length; i++) {
            VoteOption storage option = newPoll.options[newPoll.option_count+1];
            option.name = options[i];   
        }


        emit createPollEvt(polls_created, msg.sender, name, description, start_time, end_time, fee, options);

        // Increment poll id
        polls_created++;
    }

    function getUser() public view returns(string memory username) {
        return address_to_username[msg.sender];
    }

    function createUser(string memory username) public{
        // Make checks to ensure user name is not empty && not taken && address not registered
        assert(validStr(username));
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
            if (polls[i].owner==msg.sender || true) {
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
