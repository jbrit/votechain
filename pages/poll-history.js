import Head from 'next/head'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import { RadioGroup } from '@headlessui/react';
import Pill from '../components/Pill';
import moment from 'moment';

function PollHistory() {
    const [polls, setPolls] = useState([])
    useEffect(() => {
        const polls = JSON.parse(localStorage.getItem("polls"))
        if (polls !== null) {
            setPolls(polls)
        }
    }, [])

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
                    {polls.length > 0 && polls.map(poll => (
                        <div key={poll.id}>
                            <Card className="break-words mx-10">
                                <div className="mb-4 bg-primary rounded-lg text-white text-large p-5">
                                    <h4 className="text-4xl font-bold text-center">{poll.name} {poll.voted && `- ${poll.votes} votes`}</h4>
                                </div>
                                <h4 className="text-2xl font-bold">{poll.description}</h4>

                                <div className="flex justify-between items-center mb-4">
                                    <div className="w-2/5">
                                        <span className="text-gray-400 uppercase block">created by</span>
                                        <span className=" break-words">{poll.createdBy}</span>
                                    </div>
                                    <div className="w-2/5">
                                        <span className="text-gray-400 uppercase block">duration</span>
                                        <span className={`font-bold text-${poll.duration === "Expired" ? "pink" : "success"}`}>{poll.duration}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-4">
                                    <div className="w-2/5">
                                        <span className="text-gray-400 uppercase block">Began</span>
                                        <span className=" break-words">{moment(poll.startTime).format("DD MMM YYYY")}</span>
                                    </div>
                                    <div className="w-2/5">
                                        <span className="text-gray-400 uppercase block">Dated</span>
                                        <span className="">{moment(poll.endTime).format("DD MMM YYYY")}</span>
                                    </div>
                                </div>
                                {/* {JSON.stringify(poll)} */}
                                <hr className="mb-4" />
                                <div className="text-center">
                                    <RadioGroup>
                                        <RadioGroup.Label className="text-xl">Options</RadioGroup.Label>
                                        <div className="flex flex-wrap justify-center">
                                            {poll.options.map((option, i) => (
                                                <RadioGroup.Option value={i} disabled key={i}>
                                                    {({ checked }) => (
                                                        <Pill
                                                            textSize="lg"
                                                            className="cursor-pointer pt-3"
                                                            rounded color={checked ? 'bg-primary text-white' : 'bg-gray-100'}>
                                                            {option.name} {poll.voted && `(${option.votes})`}
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
    )
}

export default PollHistory
