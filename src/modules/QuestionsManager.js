const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/cardForm/${id}`).then(result => result.json())
      },
    getAll() {
      return fetch(`${remoteURL}/cardForm`).then(result => result.json())
    },

}