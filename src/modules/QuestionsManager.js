const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
      },
    getAll() {
      return fetch(`${remoteURL}/points`).then(result => result.json())
    },
}