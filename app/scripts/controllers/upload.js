'use strict';

/**
 * @ngdoc function
 * @name danVanDuffelenApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the danVanDuffelenApp
 */
angular.module('danVanDuffelenApp')
  .controller('UploadCtrl', function ($scope) {
      $scope.pictures = [
        "hello",
        "hi"
      ];
      $scope.uploader = {};
      $scope.upload = function() {
        $scope.uploader.flow.upload();
      }
  });
