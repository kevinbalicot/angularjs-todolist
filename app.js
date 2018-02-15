angular.module("myApp", [])
  .controller("mainController", MainController)
  .component("createUserComponent", CreateUserComponent)
  .component("createTodoComponent", {
      controller: function() {
        this.title = null;
      },
      bindings: {
        createNewTodo: '&'
      },
      template: `
        <form ng-submit="$ctrl.createNewTodo({ title: $ctrl.title })">
          <input id="title" ng-model="$ctrl.title" type="text" placeholder="define your ToDo" />
          <button type="submit">submit</button>
        </form>
      `
  })
  .component("listTodoComponent", {
      controller: function() {
        this.todos = [];
      },
      bindings: {
        todos: '<'
      },
      template: `
        <table>
          <tr>
            <th>Title</th>
          </tr>
          <tr ng-repeat="item in $ctrl.todos">
            <td>{{ item.title }}</td>
          </tr>
        </table>
      `
  })
  .service('UsersRepository', function() {
      return {
          createUser: function(name) {
              localStorage.setItem('user', name);
          },
          getUser: function() {
              return localStorage.getItem('user');
          }
      };
  })
  .service('TodoRepository', TodoRepository);
