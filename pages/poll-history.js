import Head from 'next/head'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'
import useVoting from '../hooks/useVoting';

function PollHistory() {
    const voting = useVoting();
    const [polls, setPolls] = useState([])
    useEffect(() => {
        const polls = JSON.parse(localStorage.getItem("polls"))
        if (polls !== null){
            setPolls(polls)
        }
    }, [])

    const handleVote = e => {
        e.preventDefault()
        const vote = async () => {
            const { contract } = await voting;
            await contract.vote(pollId, optionID)
        }
        vote()
        .then(r=>{
            console.log(r)
            alert("POLL VOTED FOR SUCCESSFULLY !!!")
        })
        .catch(e=>{
            console.log(e)
            alert("Oops, something came up !!!, try again later. "+e.data.message)
        })
    }

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
                    {polls.length > 0 && polls.map(poll=> (
                        <Card className="break-words" key={poll.id}>
                            <h4 className="text-2xl">{poll.name}</h4>
                            {JSON.stringify(poll)}
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PollHistory
