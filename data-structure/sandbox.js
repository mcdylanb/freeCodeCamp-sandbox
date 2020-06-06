let users = {
    Alan: {
        age: 27,
        online: true
    },
    Awesome: {
        age: 27,
        online: true
    },
    Sarah: {
        age: 27,
        online: true
    },
    Ryan: {
        age: 27,
        online: true
    },
}

function isEveryoneHere(obj) {
    let answer = false
        if ('Alan' in obj &&
            'Dylan' in obj &&
            'Sarah' in obj &&
            'Ryan' in obj
           ){
            answer = true
        }else {
            answer = false
        }
    return answer
};

console.log(isEveryoneHere(users));
