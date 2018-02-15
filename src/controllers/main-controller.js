
class MainController {
    constructor(UsersRepository, TodoRepository) {
        this.UsersRepository = UsersRepository;
        this.TodoRepository = TodoRepository;
        this.todos = TodoRepository.getTodo();
    }

    onCreateNewUser(name) {
        this.UsersRepository.createUser(name);
    }

    onCreateNewTodo(title) {
        this.TodoRepository.createTodo(title);
        this.todos = this.TodoRepository.getTodo();
    }
}
