import { Transition } from '@headlessui/react'
import Head from 'next/head'
import { useState } from 'react'
import Card from '../components/Card'
import Input from '../components/Input'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import useVoting from '../hooks/useVoting'

function FillPoll() {
    const [pollID, setPollID] = useState(null);
    const [poll, setPoll] = useState(null);
    const [optionID, setOptionID] = useState(null)

    const voting = useVoting();

    const handleChange = e => {
        const { value, id } = e.target;
        if (id === "pollID") {
            setPoll(null)
            if (value.length >= 0) {
                setPollID(value)
            }
        } else {
            setOptionID(value)
        }
    }

    const handleGetPoll = e => {
        e.preventDefault()
        const polls = JSON.parse(localStorage.getItem("polls"))
        const poll = polls.find(x => x.id === Number(pollID))
        if (poll) {
            setPoll(poll)
            console.log(poll)
        }
    }

    const handleVote = e => {
        e.preventDefault()
        console.log(pollID, optionID)
        const vote = async () => {
            const { contract } = await voting;
            await contract.vote(pollID, optionID)
        }
        vote()
            .then(r => {
                console.log(r)
                alert("POLL VOTED FOR SUCCESSFULLY !!!")
            })
            .catch(e => {
                console.log(e)
                const error = e.data.message
                if(error.indexOf("past") > 0){
                    alert("Oops, something came up !!!, you've voted before sir")
                } else if(error.indexOf("future") > 0) {
                    alert("Oops, something came up !!!, Poll Expired !!")
                }
            })
    }

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
                        <Input placeholder="Paste a poll ID here..." onChange={handleChange} id="pollID" />
                        <Button block width="w-100" onClick={handleGetPoll}>Get Poll</Button>
                    </Card>

                    {pollID !== "" && poll !== null &&
                        <Card className="break-words">
                            <h4 className="text-2xl">{poll.name}</h4>
                            {JSON.stringify(poll)}
                            <div>
                                {poll.options.map((option, i) => (
                                    <span className="mr-4" key={i}>
                                        <input type="radio" id="option" name="#" value={i} key={i}
                                            onChange={handleChange} /> {option.name}
                                    </span>
                                ))}
                                <br />
                                <Button onClick={handleVote}>Vote</Button>
                            </div>
                        </Card>
                    }
                </div>
            </div>
        </div>
    )
}

export default FillPoll
