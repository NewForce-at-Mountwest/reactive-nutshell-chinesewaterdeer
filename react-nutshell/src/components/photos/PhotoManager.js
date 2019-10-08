const remoteURL = "http://localhost:5002"

export default {
    // get one photo
  get(id) {
    return fetch(`${remoteURL}/photos/${id}`).then(result => result.json())
  },
  //get all photos
  getAll() {
    return fetch(`${remoteURL}/photos`).then(result => result.json())
  },
  // delete one photo
  delete(id) {
    return fetch(`http://localhost:5002/photos/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  //post one photo
  post(newPhoto) {
    return fetch(`${remoteURL}/photos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPhoto)
    }).then(result => result.json())
  },
  //update with edited photo
  update(editedPhoto) {
    return fetch(`${remoteURL}/photos/${editedPhoto.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPhoto)
    }).then(result => result.json());
  }
}