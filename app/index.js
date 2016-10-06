var myApp = angular.module('myApp', []);

	myApp.controller('mainCtrl', function($scope) {

		// creating an array from user inputs
		$scope.income = [];
		$scope.expense = [];

		// putting income values into table
		$scope.addIncome = function() {
			$scope.income.push(
			{
				"incomeDes": $scope.incomeDes,
				"incomeDollars": $scope.incomeDollars
			});
		}

		// putting expense values into table
		$scope.addExpense = function() {
			$scope.expense.push(
			{
				"expenseDes": $scope.expenseDes,
				"expenseDollars": $scope.expenseDollars
			});
		}

		// culmunating total income
		$scope.aIncome = function() {
			var total = 0;
			for (var i = 0; i < $scope.income.length; i++) 
			{
				total += parseInt($scope.income[i].incomeDollars);
			}
			return total;
		};

		// culmunating total expense
		$scope.aExpense = function() {
			var total = 0;
			for (var i = 0; i < $scope.expense.length; i++) 
			{
				total += parseInt($scope.expense[i].expenseDollars);
			}
			return total;
		};

});
