import React from "react";
import { Lock, Unlock } from "react-feather";
import moment from 'moment';


function Poll({
    poll={
        name:"",
        closed:true,
        voted:"",
        duration:"",
        createdBy:"Jibola Coker",
        endTime:"",
        votes:"",
        fee:""
    },
    last=false
}) {
    return (
        <div className="mb-4">
            <div className={`w-full flex justify-between items-center mb-4 ${poll.closed && "text-gray-400"}`}>
                <div className="w-3/4">
                    <span className="text-gray-400 uppercase text-xs block">title</span>
                    <span className="text-xl">{poll.name}</span>
                </div>
                <div>{poll.closed ? <Lock/> : <Unlock/>}</div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">Voted</span>
                    <span className={`font-bold text-${poll.voted ? "success": "pink"}`}>{poll.voted ?  "Voted" : "Not Voted"}</span>
                </div>
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">duration</span>
                    <span className={`font-bold text-${poll.duration === "Expired" ? "pink": "success"}`}>{poll.duration}</span>
                </div>
            </div>


            <div className="flex justify-between items-center mb-4">
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">created by</span>
                    <span className="font-bold break-words">{poll.createdBy}</span>
                </div>
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">Dated</span>
                    <span className="font-bold">{moment(poll.endTime).format("DD MMM YYYY")}</span>
                </div>
            </div>

            <div className="flex justify-between items-center mb-10">
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">no of votes</span>
                    <span className="font-bold">{poll.votes}</span>
                </div>
                <div className="text-xs w-2/5">
                    <span className="text-gray-400 uppercase block">fee</span>
                    <span className="font-bold">{poll.fee}</span>
                </div>
            </div>

            {!last && <hr className="mb-10"/>}

        </div>
    );
}

export default Poll;
