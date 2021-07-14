export default class TodoRepository {
  static getAll() {
    const stored = localStorage.getItem("cached-todos");
    const parsed = JSON.parse(stored);
    return parsed != "" && parsed !== null ? parsed : [];
  }

  static save(todos) {
    const serialized = JSON.stringify(todos);
    return localStorage.setItem("cached-todos", serialized);
  }
}
