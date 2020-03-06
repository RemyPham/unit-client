import axios from "axios";
class apiHandler {
  constructor(url) {
    this.api = axios.create({
      baseURL: url || process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    });
  }

  get(endpoint) {
    return this.api.get(endpoint);
  }

  post(endpoint, data) {
    return this.api.post(endpoint, data)
  }
  patch(endpoint, data) {
    return this.api.patch(endpoint, data)
  }
  delete(endpoint) {
    return this.api.delete(endpoint)
  }
}
export default apiHandler;