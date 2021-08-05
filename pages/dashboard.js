import Head from "next/head";
import Card from "../components/Card";
import Button from "../components/Button";
import { BarChartCircle, Lightning, Radial, RadialSmall, Rate } from "../components/Icons";
import Sidebar from "../components/Sidebar";
import { X } from "react-feather";
import Pill from "../components/Pill";
import Link from "next/link";
import Poll from "../components/Poll";

function Dashboard() {

    const polls = [
        {
            subject:"Best UI/UX Design Software.",
            closed:true,
            category:"Technology",
            duration:"Expired",
            createdBy:"Jibola Coker",
            dated:"01 Aug 2021",
            voteAmount:"Not disclosed",
            status:"Ended"
        },
        {
            subject:"Best tool for Web development.",
            closed:false,
            category:"Technology",
            duration:"Expires in 20hrs",
            createdBy:"Paul Walker",
            dated:"02 Aug 2021",
            voteAmount:"25,000 voted",
            status:"Completed"
        }
    ]

    return (
        <div>
            <Head>
                <title>Voting DAPP | Dashboard</title>
            </Head>
            <Sidebar />

            <div className="lg:ml-80 ml-16 mr-2 mt-5 p-4 rounded">
                <div className="mx-4 flex xl:flex-row flex-col xl:justify-between">

                    <div className="xl:px-4 w-full">
                        {/* left-top */}
                        <div className="flex xl:flex-row flex-col justify-between">
                            <Card className="w-full xl:mr-4 mr-0">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-xl">Your Poll Info</span>
                                    <span>{BarChartCircle}</span>
                                </div>
                                <div className="flex pr-5">
                                    <div className="mr-4">
                                        <span className="text-bold text-purple text-3xl">05</span>
                                        <br />
                                        <span>Filled</span>
                                    </div>
                                    <div className="mr-4">
                                        <span className="text-bold text-pink text-3xl">18</span>
                                        <br />
                                        <span>Created</span>
                                    </div>
                                    <div>
                                        <span className="text-bold text-primary text-3xl">02</span>
                                        <br />
                                        <span>Pending</span>
                                    </div>
                                </div>
                            </Card>
                            <Card className="w-full">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-bold text-xl">Create <br /> or find a Poll</span>
                                    <span>{Lightning}</span>
                                </div>
                                <Button color="primary" size="sm" className="mr-4 mb-4">New Poll</Button>
                                <Button color="pink" size="sm">Find a Poll</Button>
                            </Card>
                        </div>
                        {/* left-bottom */}
                        <Card className="w-full">
                            <div className="font-bold text-xl flex items-center">
                                <span>Your Active Polls</span> <span className="mt-1 ml-4">{Radial}</span>
                            </div>
                            <div className="flex justify-between mb-4 lg:flex-row flex-col">
                                <span className="text-2xl">
                                    Should the United Kingdom ban the <br /> buying and selling of Crypto coins? <br />
                                    <span className="text-sm text-gray-400">Expires in <b>5h</b></span>
                                </span>
                                <span>
                                <Button outline className="flex justify-between items-center" color="danger" size="sm">
                                    <span><X width={16} height={15} className="-mt-.1 mr-2"/></span>
                                    <span>End Poll</span>
                                </Button>
                                </span>
                            </div>
                            {/* Records */}
                            <div className="records flex text-white text-center mb-4 justify-center">
                                <div className="bg-success p-4 rounded-l-full w-3/5">
                                    <b>Yes</b> <span className="font-thin">300 votes (60%)</span>
                                </div>
                                <div className="bg-pink py-4 px-4 rounded-r-full w-2/5">
                                    <b>No</b> <span className="font-thin">200 votes (40%)</span>
                                </div>
                            </div>
                            {/* More records */}
                            <div className="flex justify-between items-center">
                                <div className="">
                                    <Pill>1000 Potential Votes</Pill>
                                    <Pill>25 Undecided Votes</Pill>
                                    <Pill>25 Potential Votes</Pill>
                                </div>
                                <div className="text-gray-400 text-xs">
                                    {RadialSmall} Created 2 days ago
                                </div>
                            </div>
                        </Card>

                        <div className="justify-center flex">
                            <Link href="#">
                                <a className="text-center text-primary underline font-thin">See more active polls</a>
                            </Link>
                        </div>
                    </div>

                    {/* right */}
                    <Card className="w-full xl:w-96">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-xl">Recent Polls</span>
                            <span>{Rate}</span>
                        </div>
                        {polls.map((poll,i) => (i === polls.length-1 ?
                            <Poll poll={poll} key={poll.subject} last/>
                            : <Poll poll={poll} key={poll.subject} />)
                        )}

                        <div className="justify-center flex">
                            <Link href="#">
                                <a className="text-center text-primary underline font-thin">See polls history</a>
                            </Link>
                        </div>

                    </Card>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;
