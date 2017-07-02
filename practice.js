var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.products = [];
	$scope.dquan = [];
	$scope.add = function()
	{
		if($scope.pstatus == "1")
		{
			$scope.pstatus = "Available";
		}
		else
		{
			$scope.pstatus = "Not Available";
		}
		$scope.products.push({'pname':$scope.pname,'pstatus':$scope.pstatus,'pquantity':$scope.pquantity,'pdamaged':$scope.pdamaged,'ptotal':$scope.ptotal});
	}
	$scope.myfunc = function(index)
	{
		if(angular.isUndefined($scope.dquan[index])){
			var total = $scope.products[index].pquantity - $scope.products[index].pdamaged;
			return total;
		}else{
		var total = $scope.products[index].pquantity - $scope.dquan[index];
		return total;
		}
		
		
	}
});
