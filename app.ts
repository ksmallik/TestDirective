/// <reference path='node_modules/@types/angular/index.d.ts' />

class MyDirective implements ng.IDirective {
    // no deps
    static $inject: Array<string> = [''];

    // empty
    constructor() {}

    static instance(): ng.IDirective {
        return new MyDirective();
    }

    template: string = '<h1>Hi Typescript</h1>';
    restrict: string = 'E';
}

angular.module('app', []).directive('myDirective', MyDirective.instance);