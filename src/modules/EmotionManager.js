const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/cards/${id}`).then(result => result.json())
      },
    getAll() {
      return fetch(`${remoteURL}/cards`).then(result => result.json())
    },
    post(newQuestion) {
        return fetch(`${remoteURL}/cards`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newQuestion)
        }).then(data => data.json())
      },
}