import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import useVoting from "../hooks/useVoting";

function CreatePoll() {
  const [percentage, setPercentage] = useState(0);
  const [next, setNext] = useState(false);
  const [form, setForm] = useState({
    pollName: "",
    description: "",
    startDate: "",
    endDate: "",
    pollType: "free",
    votingFee: "",
    options: [],
  });
  const [counter, setCounter] = useState(1);
  const voting = useVoting({ getRequest: false });

  const handleChange = (e) => {
    const { value, id } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleOptionChange = (e) => {
    const { value } = e.target;
    const { options } = form;
    if (!options.filter((x) => x === value).length > 0) {
      setForm({ ...form, options: [...form.options, value] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let votingFee = 0;
    if (form.votingFee !== "") {
      votingFee = Number(form.votingFee);
    }
    const createPoll = async () => {
      const { contract } = await voting;
      await contract.createPoll(
        form.pollName,
        form.description,
        new Date(form.startDate).getTime() / 1000,
        new Date(form.endDate).getTime() / 1000,
        votingFee,
        form.options
      );
    };
    if (percentage >= 100) {
      createPoll()
        .then((r) => {
          alert("POLL CREATED SUCCESSFULLY !!!");
        })
        .catch((e) => {
          console.log(e.message);
          alert(
            "Oops, something came up !!!, please ensure you filled the form correctly. " +
              e.message
          );
        });
    } else {
      alert("Please fill the form completely");
    }

    // new Date("2021-08-08").getTime()
  };

  useEffect(() => {
    let total = 1;
    let formKeys = Object.keys(form);
    for (let x of formKeys) {
      if (form[x].length !== 0) {
        total++;
      }
      let percentage = Math.floor((total / formKeys.length) * 100);
      setPercentage(percentage);
    }
  }, [form]);

  return (
    <div className="w-full">
      <Head>
        <title>Voting DAPP | Create a poll</title>
      </Head>
      <Sidebar />

      <form
        className="lg:ml-80 ml-16 mr-2 mt-5 p-4 rounded "
        onSubmit={handleSubmit}
      >
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
                <span>{percentage <= 100 ? percentage : 100}%</span>
              </span>
            </span>
          </div>
        </Card>

        <Card className="-mt-3 rounded-b-none rounded-t-none">
          <Transition
            show={!next}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="grid gap-10 xl:grid-cols-3 grid-cols-1">
              <div className="form lg:col-span-2">
                <Input
                  value={form.pollName}
                  id="pollName"
                  label="poll name"
                  placeholder="Enter the name of the poll here"
                  onChange={handleChange}
                />
                <Input
                  value={form.description}
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
                      value={form.startDate}
                      label="start date"
                      type="date"
                      width="w-full lg:w-60 2xl:w-80"
                      className="mr-4 inline-block"
                      normal
                      id="startDate"
                      onChange={handleChange}
                    />
                    <Input
                      value={form.endDate}
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
                {/* <div className="block mb-4">
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
                                </div> */}

                <div className="mb-4">
                  <Label>Poll Type</Label>
                  <span className="mr-4">
                    <input
                      type="radio"
                      id="pollType"
                      name="#"
                      value="free"
                      onChange={handleChange}
                      defaultChecked
                    />{" "}
                    Free
                  </span>
                  <span>
                    <input
                      type="radio"
                      id="pollType"
                      name="#"
                      value="paid"
                      onChange={handleChange}
                    />{" "}
                    Paid
                  </span>
                </div>
                <Transition
                  show={form.pollType === "paid"}
                  enter="transition-opacity duration-75"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Input
                    value={form.votingFee}
                    label="voting fee"
                    placeholder="0.005"
                    id="votingFee"
                    onChange={handleChange}
                    type="number"
                  />
                </Transition>
              </div>
            </div>
          </Transition>

          <Transition
            show={next}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="">
              <h4 className="text-xl">Options</h4>
            </div>
            <div>
              {Array(counter)
                .fill(0)
                .map((option, i) => (
                  <Input
                    label={`Option ${i + 1}`}
                    id={i}
                    name="option"
                    key={i}
                    onBlur={handleOptionChange}
                  />
                ))}
              <Button onClick={() => setCounter(counter + 1)}>
                Add Option
              </Button>
              {counter > 0 && (
                <Button
                  color="pink"
                  className="ml-4"
                  onClick={() => setCounter(counter - 1)}
                >
                  Reduce Option
                </Button>
              )}
            </div>
          </Transition>
        </Card>

        <Card className="-mt-3 rounded-t-none">
          <div className="flex justify-end">
            {!next ? (
              <Button size="sm" onClick={() => setNext(true)}>
                Next
              </Button>
            ) : (
              <>
                <Button
                  size="sm"
                  className="mr-2"
                  onClick={() => setNext(false)}
                >
                  Previous
                </Button>
                <Button size="sm" color="success" type="submit">
                  Create
                </Button>
              </>
            )}
          </div>
        </Card>
      </form>
    </div>
  );
}

export default CreatePoll;
