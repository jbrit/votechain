import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Search } from "react-feather";
import Input from "./Input";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { structurePolls } from "./Utils";
import useVoting from "../hooks/useVoting";

function SearchBar() {
  const voting = useVoting({});
  const [pollID, setPollID] = useState("");
  const router = useRouter();
  const { data: pollData } = useQuery("polls", async () => {
    const { contract } = await voting;
    const polls = await contract.getPolls();
    return structurePolls(polls);
  });
  const polls = pollData ?? [];

  const handleChange = (e) => {
    setPollID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/pollDetails/${pollID}`);
  };
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="focus:outline-none pt-1">
            <Search
              className={`cursor-pointerz-50 ${open && "text-primary"}`}
            />
          </Popover.Button>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-x-1"
            enterTo="opacity-100 translate-x-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-1"
          >
            <Popover.Panel className="absolute z-10 lg:-left-72 lg:-ml-10 -ml-48 -top-3">
              <form onSubmit={handleSubmit}>
                <Input
                  onChange={handleChange}
                  list="polls"
                  placeholder="Search for past and present polls"
                  width="lg:w-80"
                />
                <datalist id="polls" width="lg:w-80">
                  {polls.length > 0 &&
                    polls.map((poll) => (
                      <option value={poll.name} key={poll.id} />
                    ))}
                </datalist>
              </form>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export default SearchBar;
