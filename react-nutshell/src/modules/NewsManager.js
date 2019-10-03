const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/news/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/news`).then(result => result.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/news/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newNewsArticle) {
    return fetch(`${remoteURL}/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNewsArticle)
    }).then(data => data.json())
  },
  update(editedNewsArticle) {
    return fetch(`${remoteURL}/news/${editedNewsArticle.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedNewsArticle)
    }).then(data => data.json());
  }
}