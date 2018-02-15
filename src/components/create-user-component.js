
class CreateUserController {
    constructor() {
        this.name = null;
    }
}

const CreateUserComponent = {
    controller: CreateUserController,
    bindings: {
      createNewUser: '&'
    },
    template: `
      <form ng-submit="$ctrl.createNewUser({ name: $ctrl.name })">
        <input id="name" ng-model="$ctrl.name" type="text" placeholder="Enter your name" />
        <button type="submit">submit</button>
      </form>
    `
}
