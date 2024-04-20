let apiRoot = ''
if (process.env.BUILD_MODE === 'dev') {
  apiRoot = 'http://localhost:8080'
}

if (process.env.BUILD_MODE === 'production') {
  apiRoot = 'https://trello-api-guvt.onrender.com'
  // apiRoot = 'https://trello-api.anhquandev.com'
}
// export const API_ROOT = 'http://localhost:8080'
// export const API_ROOT = 'https://trello-api-guvt.onrender.com'

export const API_ROOT = apiRoot
