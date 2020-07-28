const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/users`).then(result => result.json())
    },
}