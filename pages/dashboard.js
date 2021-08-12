
import Head from "next/head";
import Card from "../components/Card";
import Button from "../components/Button";
import {
  BarChartCircle,
  Lightning,
  Radial,
  RadialSmall,
  Rate,
} from "../components/Icons";
import Sidebar from "../components/Sidebar";
import Pill from "../components/Pill";
import Link from "next/link";
import Poll from "../components/Poll";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import routeNames from "../routes";
import useVoting from "../hooks/useVoting";
import { formatNumber, structurePolls } from "../components/Utils";
import moment from 'moment'

function Dashboard() {
  const router = useRouter();
  const [polls, setPolls] = useState([]);
  const [filled, setFilled] = useState(0)
  const [created, setCreated] = useState(0)
  const [pending, setPending] = useState(0)
  const [activePolls, setActivePolls] = useState([])

  const voting = useVoting();

  const getPolls = async () => {
    const { contract } = await voting;

    const allPolls = await contract.getPolls();

    const polls = structurePolls(allPolls)
    localStorage.setItem("polls", JSON.stringify(polls));
    setPolls(polls)
    const user = localStorage.getItem("dappUser")
    const active = formatNumber(polls.filter(x => x.endTime <= Date.now()))
    if (user) {
      setCreated(formatNumber(polls.filter(x => x.createdBy === user).length))
      setActivePolls(active.filter(x => x.createdBy === user))
    }
    setPending(active.length)
    setFilled(formatNumber(polls.filter(x => x.voted).length))
  };

  useEffect(() => {
    getPolls();
  }, []);
  return (
    <div>
      <Head>
        <title>Voting DAPP | Dashboard</title>
      </Head>
      <Sidebar />

      <div className="lg:ml-80 ml-16 mr-2 mt-5 p-4 rounded">
        <div className="mx-4 flex xl:flex-row flex-col xl:justify-between">
          <div className="xl:px-4 w-full mb-4">
            {/* left-top */}
            <div className="flex xl:flex-row flex-col justify-between">
              <Card className="w-full xl:mr-4 mr-0">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">Your Poll Info</span>
                  <span>{BarChartCircle}</span>
                </div>
                <div className="flex pr-5">
                  <div className="mr-4">
                    <span className="text-bold text-purple text-3xl">{filled}</span>
                    <br />
                    <span>Filled</span>
                  </div>
                  <div className="mr-4">
                    <span className="text-bold text-pink text-3xl">{created}</span>
                    <br />
                    <span>Created</span>
                  </div>
                  <div>
                    <span className="text-bold text-primary text-3xl">{pending}</span>
                    <br />
                    <span>Pending</span>
                  </div>
                </div>
              </Card>
              <Card className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-xl">
                    Create <br /> or find a Poll
                  </span>
                  <span>{Lightning}</span>
                </div>
                <Button
                  onClick={() => router.push(routeNames["create-poll"])}
                  color="primary"
                  size="sm"
                  className="mr-4 mb-4"
                >
                  New Poll
                </Button>
                <Button color="pink" size="sm">
                  Find a Poll
                </Button>
              </Card>
            </div>
            {/* left-bottom */}
            <Card className="w-full">
              <div className="font-bold text-xl flex items-center">
                <span>Your Active Polls</span>{" "}
                <span className="mt-1 ml-4">{Radial}</span>
              </div>
              {activePolls.length > 0 && activePolls.slice(0,1).map(poll => (
                <div key={poll.id} className="mb-5">
                  <div className="mb-4">
                    <span className="text-2xl">
                      {poll.name}
                      <span className="text-sm text-gray-400 block">
                        <b>{poll.duration}</b>
                      </span>
                    </span>
                  </div>
                  {/* Records */}
                  <div className="records flex text-white text-center mb-4 justify-center">
                    <div className="bg-success p-4 flex justify-center items-center rounded-l-full w-3/5">
                      <span>
                        <b>Yes</b>{" "}
                        <span className="font-thin">300 votes (60%)</span>
                      </span>
                    </div>
                    <div className="bg-pink py-4 flex justify-center items-center px-4 rounded-r-full w-2/5">
                      <span>
                        <b>No</b> <span className="font-thin">200 votes (40%)</span>
                      </span>
                    </div>
                  </div>
                  {/* More records */}
                  <div className="flex lg:flex-row flex-col justify-between items-center">
                    <div className="flex lg:flex-row flex-col justify-center">
                      <Pill>1000 Potential Votes</Pill>
                      <Pill>25 Undecided Votes</Pill>
                      <Pill>25 Potential Votes</Pill>
                    </div>
                    <div className="text-gray-400 text-xs">
                      {RadialSmall} Created {moment(poll.startTime).fromNow()}
                    </div>
                  </div>
                </div>
              ))}
            </Card>

            <div className="justify-center flex">
              <Link href="/poll-history?filter=true">
                <a className="text-center text-primary underline font-thin">
                  See more active polls
                </a>
              </Link>
            </div>
          </div>

          {/* right */}
          <Card className="w-full xl:w-96">
            <div className="flex justify-between items-center">
              <span className="font-bold text-xl">Recent Polls</span>
              <span>{Rate}</span>
            </div>
            {polls.slice(0, 2).map((poll, i) =>
              i === polls.length - 1 ? (
                <Poll poll={poll} key={poll.id} last />
              ) : (
                <Poll poll={poll} key={poll.id} />
              )
            )}

            <div className="justify-center flex">
              <Link href="/poll-history">
                <a className="text-center text-primary underline font-thin">
                  See polls history
                </a>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
