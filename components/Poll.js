import React from "react";
import { Lock, Unlock } from "react-feather";

function Poll({
    poll={
        subject:"",
        closed:true,
        category:"",
        duration:"",
        createdBy:"",
        dated:"",
        voteAmount:"",
        status:""
    },
    last=false
}) {
    return (
        <div className="mb-4">
            <div className={`w-full flex justify-between items-center mb-4 ${poll.closed && "text-gray-400"}`}>
                <div className="w-3/4">
                    <span className="text-gray-400 uppercase text-xs block">subject</span>
                    <span className="text-xl">{poll.subject}</span>
                </div>
                <div>{poll.closed ? <Lock/> : <Unlock/>}</div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">technology</span>
                    <span className="font-bold">{poll.category}</span>
                </div>
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">duration</span>
                    <span className={`font-bold ${poll.duration === "Expired" && "text-pink"}`}>{poll.duration}</span>
                </div>
            </div>


            <div className="flex justify-between items-center mb-4">
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">created by</span>
                    <span className="font-bold">{poll.createdBy}</span>
                </div>
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">dated</span>
                    <span className="font-bold">{poll.dated}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mb-10">
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">no of votes</span>
                    <span className="font-bold">{poll.voteAmount}</span>
                </div>
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">status</span>
                    <span className={`font-bold text-${poll.status === "Ended" ? "success": "primary"}`}>{poll.status}</span>
                </div>
            </div>

            {!last && <hr className="mb-10"/>}

        </div>
    );
}

export default Poll;
