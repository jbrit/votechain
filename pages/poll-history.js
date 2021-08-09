import Head from 'next/head'
import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import useVoting from '../hooks/useVoting';

function PollHistory() {
    useEffect(() => {
        const voting = useVoting();
        const getPolls = async () => {
            const { contract } = await voting;

            const allPolls = await contract.getPolls();
            console.log(allPolls);
        };
    }, [input])

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
                </div>
            </div>
        </div>
    )
}

export default PollHistory
