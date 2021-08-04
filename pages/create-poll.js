import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Pill from "../components/Pill";
import { X } from "react-feather";

function CreatePoll() {
    return (
        <div className="w-full">
            <Head>
                <title>Voting DAPP | Create a poll</title>
            </Head>
            <Sidebar />

            <div className="lg:ml-80 ml-16 mr-2 mt-5 p-4 rounded ">
                <Card className="rounded-b-none">
                    <div className="flex justify-between flex-col sm:flex-row">
                        <span className="mb-4">
                            <span className="block uppercase text-xs text-gray-400">
                                Step 1 of 2
                            </span>
                            <span className="text-3xl">Create a Poll</span>
                        </span>
                        <span className="w-48">
                            <ProgressBar />
                            <span className="mt-2 text-xs text-gray-400 flex justify-between">
                                <span>Started and underway</span>
                                <span>15%</span>
                            </span>
                        </span>
                    </div>
                </Card>

                <Card className="-mt-3 rounded-b-none rounded-t-none">
                    <div className="grid gap-10 xl:grid-cols-3 grid-cols-1">
                        <div className="form lg:col-span-2">
                            <Input
                                label="poll name"
                                placeholder="Enter the name of the poll here"
                            />
                            <Input
                                textArea
                                label="description"
                                placeholder="A brief explanation of what this poll is about"
                            />

                            <div className="block mb-4">
                                <Label>duration</Label>
                                <div className="flex">
                                    <Input
                                        label="start date"
                                        type="date"
                                        width="w-60 2xl:w-80"
                                        className="mr-4"
                                        normal
                                    />
                                    <Input
                                        label="end date"
                                        type="date"
                                        width="w-60 2xl:w-80"
                                        normal
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="block mb-4">
                                <Label>Add Image</Label>
                                <div className="border-4 border-dashed border-gray-200 w-full rounded-lg h-60 font-bold">
                                    <input
                                        id=""
                                        type="file"
                                        className="right-12 w-100 left-0 h-60 border border-black cursor-pointer opacity-0 absolute"
                                    />
                                    <div className="text-center pt-24">
                                        <p>
                                            Add & Drop or{" "}
                                            <span className="text-primary">
                                                Browse
                                            </span>
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            We currently support JPG, JPEG, PNG{" "}
                                            <br />
                                            and make sure your file size is not
                                            more than 500kb
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <Label>Poll Type</Label>
                                <span className="mr-4">
                                    <input type="radio" id="" name="#" /> Free
                                </span>
                                <span>
                                    <input type="radio" id="" name="#" /> Paid
                                </span>
                            </div>

                            <Input
                                label="voting fee"
                                placeholder="Enter the name of the poll here"
                            />

                            <div className="mb-4 w-100">
                                <Label>Poll Tag</Label>
                                <div className="">
                                <Pill rounded className="px-4">
                                    <span className="float-left mt-1">Politics</span>
                                    <span className="float-right"><X width={15}/></span>
                                </Pill>
                                <Pill rounded className="px-4">
                                    <span className="float-left mt-1">Politics</span>
                                    <span className="float-right"><X width={15}/></span>
                                </Pill>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card className="-mt-3 rounded-t-none">
                    <div className="flex justify-end">
                        <Button size="sm" className="mr-2">
                            Cancel
                        </Button>
                        <Button size="sm" color="gray-300">
                            Next
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default CreatePoll;
