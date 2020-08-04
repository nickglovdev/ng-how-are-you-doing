const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/profiles`).then(result => result.json())
    },
}