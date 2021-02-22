import axios from "axios";

class NameService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_PROJECTS_API}/api`,
    });
    this.service = service;
  }

  getAll() {
    return this.service.get("/names");
  }

  getNames(id) {
    return this.service.get(`/names/${id}`);
  }

  addName(project) {
    return this.service.post('/names', project);
}


  updateName(updatedName) {
    return this.service.put(`/names/${updatedName.id}`, updatedName);
  }

  deleteName(id) {
    return this.service.delete(`/names/${id}`);
  }
}

export default NameService;
