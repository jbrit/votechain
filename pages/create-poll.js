import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Pill from "../components/Pill";
import { X } from "react-feather";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

function CreatePoll() {
    const [percentage, setPercentage] = useState(0)
    const [next, setNext] = useState(false)
    const [form, setForm] = useState({
        pollName: "",
        description: "",
        startDate: "",
        endDate: "",
        image: "",
        pollType: "free",
        pollTag: "",
        votingFee: ""

    })
    const handleChange = e => {
        const { value, id } = e.target
        setForm({ ...form, [id]: value })

    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(form)
        // await contract.createPoll(
        //   "Best UI/UX Design Software.",
        //   "Technology",
        //   60,
        //   3600,
        //   0,
        //   ["Figma", "Adobe XD", "Photoshop"]
        // );
    }

    useEffect(() => {
        let total = 0
        let formKeys = Object.keys(form)
        for (let x of formKeys) {
            if (form[x] !== "") {
                total++;
            }
            let percentage = Math.floor((total / formKeys.length) * 100)
            setPercentage(percentage)
        }
    }, [form])

    return (
        <div className="w-full">
            <Head>
                <title>Voting DAPP | Create a poll</title>
            </Head>
            <Sidebar />

            <form className="lg:ml-80 ml-16 mr-2 mt-5 p-4 rounded " onSubmit={handleSubmit}>
                <Card className="rounded-b-none">
                    <div className="flex justify-between flex-col sm:flex-row">
                        <span className="mb-4">
                            <span className="block uppercase text-xs text-gray-400">
                                Step {next ? "2" : "1"} of 2
                            </span>
                            <span className="text-3xl">Create a Poll</span>
                        </span>
                        <span className="w-48">
                            <ProgressBar progressPercentage={percentage} />
                            <span className="mt-2 text-xs text-gray-400 flex justify-between">
                                <span>Started and underway</span>
                                <span>{percentage}%</span>
                            </span>
                        </span>
                    </div>
                </Card>

                <Card className="-mt-3 rounded-b-none rounded-t-none">
                    <Transition show={!next}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="grid gap-10 xl:grid-cols-3 grid-cols-1">
                            <div className="form lg:col-span-2">
                                <Input
                                    id="pollName"
                                    label="poll name"
                                    placeholder="Enter the name of the poll here"
                                    onChange={handleChange}
                                />
                                <Input
                                    textArea
                                    label="description"
                                    placeholder="A brief explanation of what this poll is about"
                                    id="description"
                                    onChange={handleChange}
                                />

                                <div className="block mb-4">
                                    <Label>duration</Label>
                                    <div className="">
                                        <Input
                                            label="start date"
                                            type="date"
                                            width="w-full lg:w-60 2xl:w-80"
                                            className="mr-4 inline-block"
                                            normal
                                            id="startDate"
                                            onChange={handleChange}
                                        />
                                        <Input
                                            label="end date"
                                            type="date"
                                            width="w-full lg:w-60 2xl:w-80"
                                            normal
                                            className="inline-block"
                                            id="endDate"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="block mb-4">
                                    <Label>Add Image</Label>
                                    <div className="border-4 border-dashed border-gray-200 w-full rounded-lg h-60 font-bold px-2">
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
                                        <input type="radio" id="pollType" name="#" value="free"
                                            onChange={handleChange} defaultChecked /> Free
                                    </span>
                                    <span>
                                        <input type="radio" id="pollType" name="#" value="paid"
                                            onChange={handleChange} /> Paid
                                    </span>
                                </div>
                                <Transition show={form.pollType === "paid"}
                                    enter="transition-opacity duration-75"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">

                                    <Input
                                        label="voting fee"
                                        placeholder="Enter the name of the poll here"
                                        id="votingFee"
                                        onChange={handleChange}
                                        type="number"
                                    />
                                </Transition>

                                <div className="mb-4 w-100">
                                    <Label>Poll Tag</Label>
                                    <div className="">
                                        <Pill rounded className="px-4">
                                            <span className="float-left mt-1">Politics</span>
                                            <span className="float-right"><X width={15} /></span>
                                        </Pill>
                                        <Pill rounded className="px-4">
                                            <span className="float-left mt-1">Politics</span>
                                            <span className="float-right"><X width={15} /></span>
                                        </Pill>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>

                    <Transition show={next}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="">
                            <h4 className="text-xl">Options</h4>
                        </div>
                    </Transition>
                </Card>

                <Card className="-mt-3 rounded-t-none">
                    <div className="flex justify-end">
                        {!next ?
                            <Button size="sm" color="gray-300" onClick={() => setNext(true)}>
                                Next
                            </Button>
                            :
                            <>
                                <Button size="sm" className="mr-2" onClick={() => setNext(false)}>
                                    Previous
                                </Button>
                                <Button size="sm" color="success" type="submit">
                                    Submit
                                </Button>
                            </>
                        }
                    </div>
                </Card>
            </form>
        </div>
    );
}

export default CreatePoll;
