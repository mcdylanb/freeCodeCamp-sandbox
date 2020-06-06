
let users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}




function countOnline(obj) {
    let numOnline = 0
    console.log(obj)
    for (let user in obj){
        console.log(user)
        console.log(typeof user)
        if (obj[user].online == true) {
            console.log("inside the if staement")
            numOnline += 1;
        }
    }
    return numOnline
}

console.log(users.Alan.online)

console.log(countOnline(users))
