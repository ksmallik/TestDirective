/// <reference path='node_modules/@types/angular/index.d.ts' />
var MyDirective = (function () {
    // empty
    function MyDirective() {
        this.template = '<h1>Hi Typescript</h1>';
        this.restrict = 'E';
    }
    MyDirective.instance = function () {
        return new MyDirective();
    };
    // no deps
    MyDirective.$inject = [''];
    return MyDirective;
}());
angular.module('app', []).directive('myDirective', MyDirective.instance);
//# sourceMappingURL=app.js.map