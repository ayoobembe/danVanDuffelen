'use strict';

describe('Controller: UploadCtrl', function () {

  // load the controller's module
  beforeEach(module('danVanDuffelenApp'));

  var UploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadCtrl = $controller('UploadCtrl', {
      $scope: scope
    });
  }));

  it('should initialize with no pictures', function () {
    expect(scope.pictures.length).toBe(0);
  });
});
