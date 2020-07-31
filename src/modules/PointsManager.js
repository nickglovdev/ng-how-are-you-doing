const remoteURL = "http://localhost:5002"

export default {
    post(newPoints) {
        return fetch(`${remoteURL}/points`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newPoints)
        }).then(data => data.json())
      },
      getAll() {
        return fetch(`${remoteURL}/points`).then(result => result.json())
      },
      delete(id) {
        return fetch(`${remoteURL}/points/${id}`, {
          method: "DELETE"
        }).then(result => result.json())
      }
}
