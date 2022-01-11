import { RadioGroup } from "@headlessui/react";
import Head from "next/head";
import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Sidebar from "../components/Sidebar";
import Button from "../components/Button";
import useVoting from "../hooks/useVoting";
import moment from "moment";
import Pill from "../components/Pill";
import { structurePolls } from "../components/Utils";
import { useQuery } from "react-query";

function FillPoll() {
  const [pollID, setPollID] = useState(null);
  const [poll, setPoll] = useState(null);
  const [optionID, setOptionID] = useState(null);

  const voting = useVoting({ getRequest: false });
  const { data: pollData } = useQuery("polls", async () => {
    const { contract } = await voting;
    const polls = await contract.getPolls();
    return structurePolls(polls);
  });
  const polls = pollData ?? [];
  const handleChange = (e) => {
    const { value, id } = e.target;
    if (id === "pollID") {
      setPoll(null);
      if (value.length >= 0) {
        setPollID(value);
      }
    } else {
      setOptionID(value);
    }
  };

  const handleGetPoll = (e) => {
    e.preventDefault();
    const poll = polls.find((x) => x.id === Number(pollID));
    if (poll) {
      setPoll(poll);
    } else {
      alert("Poll not found");
    }
  };

  const handleVote = (e) => {
    e.preventDefault();
    const vote = async () => {
      const { contract } = await voting;
      await contract.vote(pollID, optionID);
    };

    if (optionID !== null) {
      vote()
        .then((r) => {
          alert("POLL VOTED FOR SUCCESSFULLY !!!");
        })
        .catch((e) => {
          console.log(e);
          const error = e.data ? e.data.message : e.message;
          if (error.indexOf("past") > 0) {
            alert("Oops, something came up !!!, you've voted before sir");
          } else if (error.indexOf("future") > 0) {
            alert("Oops, something came up !!!, Poll Expired !!");
          } else {
            alert("Transaction Cancelled");
          }
        });
    } else {
      alert("Select an option please");
    }
  };

  return (
    <div>
      <Head>
        <title>Voting DAPP | Settings</title>
      </Head>
      <Sidebar />
      <div className="lg:ml-80 ml-16 mr-2 mt-5 p-4 rounded">
        <div className="xl:px-4 w-full">
          <Card className="rounded-b-none">
            <span className="text-3xl">Fill a Poll</span>
          </Card>
          <Card>
            <Input
              placeholder="Paste a poll ID here...(You can find it in the poll history)"
              onChange={handleChange}
              id="pollID"
            />
            <Button className="w-full" onClick={handleGetPoll}>
              Get Poll
            </Button>
          </Card>

          {pollID !== "" && poll && (
            <>
              {/* <div className="shadow-2xl bg-primary rounded-lg -mb-8 text-white text-large p-12">
                                <h4 className="text-4xl font-bold text-center">{poll.name} {poll.voted && `- ${poll.votes} votes`}</h4>
                            </div> */}
              <Card className="break-words mx-10">
                <div className="mb-4 bg-primary rounded-lg text-white text-large p-5">
                  <h4 className="text-4xl font-bold text-center">
                    {poll.name} {poll.voted && `- ${poll.votes} votes`}
                  </h4>
                </div>
                <h4 className="text-2xl font-bold">{poll.description}</h4>

                <div className="flex justify-between items-center mb-4">
                  <div className="w-2/5">
                    <span className="text-gray-400 uppercase block">
                      created by
                    </span>
                    <span className=" break-words">{poll.createdBy}</span>
                  </div>
                  <div className="w-2/5">
                    <span className="text-gray-400 uppercase block">
                      duration
                    </span>
                    <span
                      className={`font-bold text-${
                        poll.duration === "Expired" ? "pink" : "success"
                      }`}
                    >
                      {poll.duration}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="w-2/5">
                    <span className="text-gray-400 uppercase block">Began</span>
                    <span className=" break-words">
                      {moment(poll.startTime).format("DD MMM YYYY")}
                    </span>
                  </div>
                  <div className="w-2/5">
                    <span className="text-gray-400 uppercase block">Dated</span>
                    <span className="">
                      {moment(poll.endTime).format("DD MMM YYYY")}
                    </span>
                  </div>
                </div>
                {/* {JSON.stringify(poll)} */}
                <hr className="mb-4" />
                <div className="text-center">
                  <RadioGroup value={optionID} onChange={setOptionID}>
                    <RadioGroup.Label className="text-xl">
                      Options
                    </RadioGroup.Label>
                    <div className="flex flex-1 flex-wrap justify-center">
                      {poll.options.map((option, i) => (
                        <RadioGroup.Option
                          value={i}
                          disabled={poll.voted}
                          key={i}
                        >
                          {({ checked }) => (
                            <Pill
                              textSize="md"
                              className="cursor-pointer pt-3"
                              rounded
                              color={
                                checked
                                  ? "bg-primary text-white"
                                  : "bg-gray-100"
                              }
                            >
                              {option.name} {poll.voted && `(${option.votes})`}
                            </Pill>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                  {!poll.voted && (
                    <Button className="block w-full mt-5" onClick={handleVote}>
                      Vote
                    </Button>
                  )}
                </div>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FillPoll;
