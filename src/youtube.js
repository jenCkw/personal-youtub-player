
import axios from 'axios';

const URL = "https://www.googleapis.com/youtube/v3";
const KEY = "AIzaSyC7Ak-t4l7RmkexsSysM_xmhcgzJic5pUQ";

export default axios.create({
  baseURL: URL,
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
  headers: {},
});