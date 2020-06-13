import http from "../http-common";

const domainRoute = "items";

class ItemDataService {
  getAll() {
    return http.get(`/${domainRoute}`);
  }

  get(id) {
    return http.get(`/${domainRoute}/${id}`);
  }

  create(data) {
    return http.post(`/${domainRoute}`, data);
  }

  update(id, data) {
    return http.put(`/${domainRoute}/${id}`, data);
  }

  delete(id) {
    return http.delete(`/${domainRoute}/${id}`);
  }

  deleteAll() {
    return http.delete(`/${domainRoute}`);
  }

  findByTitle(title) {
    return http.get(`/${domainRoute}?title=${title}`);
  }
}

export default new ItemDataService();
