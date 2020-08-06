const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/profiles`).then(result => result.json())
    },
    post(accountCreate) {
      return fetch(`${remoteURL}/profiles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(accountCreate)
      }).then(data => data.json())
    }
}