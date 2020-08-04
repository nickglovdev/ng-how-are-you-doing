const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/cardSentences/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/cardSentences`).then(result => result.json())
  },
  post(newQuestion) {
    return fetch(`${remoteURL}/cardSentences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newQuestion)
    }).then(data => data.json())
  },
  getQuote() {
    return fetch('http://api.quotable.io/random?tags=inspirational%7Chappiness')
      .then(response => response.json())
  }
}