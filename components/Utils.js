import moment from 'moment';

export const structurePolls = (allPolls) => {
    let length = allPolls.poll_fees.length;
    let polls = Array(length).fill(0).map((obj, i) => {
        return {
            id: Number(allPolls.poll_ids[i]),
            name: allPolls.poll_names[i],
            fee: Number(allPolls.poll_fees[i]),
            description: allPolls.poll_descriptions[i],
            options: allPolls.poll_options[i].map((option, j) => {
                return { name: option, votes: Number(allPolls.poll_options_votes[i][j]) }
            }),
            // options_vote: allPolls.poll_options_votes[i],
            createdBy: allPolls.poll_owners[i],
            startTime: new Date(Number(allPolls.poll_start_times[i]) * 1000),
            endTime: new Date(Number(allPolls.poll_end_times[i]) * 1000),
            voted: (Number(allPolls.poll_voted_idxs[i]) - 1) >= 0,
            votes: get_votes(allPolls, i),
            closed: is_closed(allPolls, i),
            duration: get_duration(new Date(Number(allPolls.poll_end_times[i]) * 1000))
        }
    })

    return polls
}

export const get_votes = (allPolls, i) => {
    let sum = 0
    allPolls.poll_options[i].map((option, j) => {
        sum += Number(allPolls.poll_options_votes[i][j])
    })
    return sum
}

export const is_closed = (allPolls, i) => {
    let endTime = new Date(Number(allPolls.poll_end_times[i]) * 1000)
    let today = Date.now()
    return today >= endTime
}

export const get_duration = (date) => {
    let before = moment(date).isBefore();
    if (before) {
        return "Expired"
    }
    else {
        return "Expires in " + moment(date).toNow(true)
    }
}

export const formatNumber = (number) => {
    if (number < 10) {
        return `0${number}`
    }
    return number
}

export const logout = () => {
    localStorage.removeItem("dappUser");
}