function saturdayFun(passTime="roller-skate"){
    return (`This Saturday, I want to ${passTime}!`)
}

function mondayWork(work="go to the office"){
    return (`This Monday, I will ${work}.`)
}

function wrapAdjective(wrap="*"){
    return function (string = "special"){
        return `You are ${wrap}${string}${wrap}!`
    }
}