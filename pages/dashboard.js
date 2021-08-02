import Head from 'next/head'
import Sidebar from '../components/Sidebar'

function Dashboard() {
    return (
        <div>
            <Head>
                <title>Voting DAPP | Dashboard</title>
            </Head>
            <Sidebar/>
        </div>
    )
}

export default Dashboard
