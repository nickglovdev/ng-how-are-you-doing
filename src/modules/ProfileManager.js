const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/profiles/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/profiles`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/profiles/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  post(newAnimal) {
    return fetch(`${remoteURL}/profiles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },
  update(editedAnimal) {
    return fetch(`${remoteURL}/profiles/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },
  getUser() {
    console.log(localStorage.getItem("id"))
    return fetch(`${remoteURL}/profiles?id=${localStorage.getItem("id")}`)
    .then(res=>res.json())
  }
}