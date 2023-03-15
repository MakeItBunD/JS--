
async function getUsers(names) {
    let users = []
  
    for (let name of names) {
        let user = fetch(`https://api.github.com/users/${name}`).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null
                } else {
                    return successResponse.json()
                }
            },
            failResponse => {
                return null
            }
        )

        users.push(user)
    }
  
    let results = await Promise.all(users)
        .then(data => {
            console.log(data[0].login)
            console.log(data[1].login)
            console.log(data[2])
        })
  
    return results;
}

getUsers(['iliakan', 'remy', 'no.such.users'])