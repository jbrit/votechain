import Head from "next/head";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import { RadioGroup } from "@headlessui/react";
import Pill from "../components/Pill";
import moment from "moment";
import useVoting from "../hooks/useVoting";
import { useQuery } from "react-query";
import { structurePolls } from "../components/Utils";

function PollHistory() {
  const voting = useVoting({});
  const { data: pollData, isLoading: pageLoading } = useQuery(
    "polls",
    async () => {
      const { contract } = await voting;
      const polls = await contract.getPolls();
      return structurePolls(polls);
    }
  );
  let polls = pollData ?? [];
  polls.sort((a, b) => b.id - a.id);

  return (
    <div>
      <Head>
        <title>Voting DAPP | Poll History</title>
      </Head>
      <Sidebar />
      <div className="lg:ml-80 ml-16 mr-2 mt-5 p-4 rounded">
        <div className="xl:px-4 w-full">
          <Card className="rounded-b-none">
            <span className="text-3xl">Poll History</span>
          </Card>
          {pageLoading && <div className="xl:px-4 w-full">Loading...</div>}

          {polls.length > 0 &&
            polls.map((poll) => (
              <div key={poll.id}>
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
                      <span className="text-gray-400 uppercase block">
                        Began
                      </span>
                      <span className=" break-words">
                        {moment(poll.startTime).format("DD MMM YYYY")}
                      </span>
                    </div>
                    <div className="w-2/5">
                      <span className="text-gray-400 uppercase block">
                        Dated
                      </span>
                      <span className="">
                        {moment(poll.endTime).format("DD MMM YYYY")}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="w-2/5">
                      <span className="text-gray-400 uppercase block">
                        Poll Id
                      </span>
                      <span className="break-words">{poll.id}</span>
                    </div>
                  </div>

                  <hr className="mb-4" />
                  <div className="text-center">
                    <RadioGroup>
                      <RadioGroup.Label className="text-xl">
                        Options
                      </RadioGroup.Label>
                      <div className="flex flex-wrap justify-center">
                        {poll.options.map((option, i) => (
                          <RadioGroup.Option value={i} disabled key={i}>
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
                                {option.name}{" "}
                                {poll.voted && `(${option.votes})`}
                              </Pill>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PollHistory;
