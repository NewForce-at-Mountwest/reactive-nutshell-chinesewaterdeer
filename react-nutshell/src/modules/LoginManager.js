const remoteURL = "http://localhost:5002";

// remote url as a base for future fetch calls
// get request to retrieve one user's information from the database
export default {
getOneUser(id) {
    return fetch(`${remoteURL}/users/${id}`)
    .then(result => result.json())
}

}