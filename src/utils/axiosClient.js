import axios from 'axios';

let serverUrl = 'http://localhost:4000';

if (process.env.REACT_APP_NODE_ENV === 'production') {
  serverUrl = process.env.REACT_APP_SERVER_URL;
}
export default axios.create({
  baseURL: serverUrl,
});
