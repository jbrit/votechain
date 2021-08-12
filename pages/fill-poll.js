import Head from 'next/head'
import Card from '../components/Card'
import Input from '../components/Input'
import Sidebar from '../components/Sidebar'

function FillPoll() {
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
                        <Input textArea placeholder="Paste a poll link here..." />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default FillPoll
