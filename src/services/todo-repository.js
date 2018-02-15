
class TodoRepository {
    createTodo(title) {
        var tab = this.getTodo();

        tab.push({ title: title });
        localStorage.setItem('todoTab', JSON.stringify(tab));
    }

    getTodo() {
        return JSON.parse(localStorage.getItem('todoTab') || '[]');
    }
}
