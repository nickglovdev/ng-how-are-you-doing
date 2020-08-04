const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/emotionCards/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/emotionCards`).then(result => result.json())
  },
  post(newQuestion) {
    return fetch(`${remoteURL}/emotionCards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newQuestion)
    }).then(data => data.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/emotionCards/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}