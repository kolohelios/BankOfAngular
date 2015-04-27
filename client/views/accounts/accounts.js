'use strict';

angular.module('poseidon')
.controller('AccountsCtrl', function($scope, Account){

  var afUser = $scope.afUser = Account.init();

  afUser.$loaded().then(syncNames);

  $scope.addAccount = function(name){
    Account.addAccount(name).then(syncNames);
    $scope.accountName = '';
  };

  $scope.addTransaction = function(name, tx){
    Account.addTransaction(name, tx);
    $scope.tx = {};
  };

  $scope.deleteTransaction = function(transaction, $index){
    Account.deleteTransaction(transaction, $index);
  }

  function syncNames(){
    $scope.names = afUser.names ? afUser.names.split(',') : [];
  }


});
