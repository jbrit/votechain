import Head from 'next/head'
import Sidebar from '../components/Sidebar'

function CreatePoll() {
    return (
        <div>
            <Head>
                <title>Voting DAPP | Create a poll</title>
            </Head>
            <Sidebar/>
        </div>
    )
}

export default CreatePoll
