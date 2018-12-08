import axios from 'axios';

declare var process : {
  env: {
    NODE_ENV: string,
    apiUrl: string
  }
}

export default axios.create({
  baseURL: process.env.apiUrl
})
