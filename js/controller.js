var app = angular.module('app', []);
app.controller('exampleCtrl', ['$scope', function ($scope)
    {


        $scope.sprawdz = function () {
            $scope.final = '';
            var count = [];
            var letters = "abcdefghijklmnopqrstuvwxyz";
            var letterArray = letters.split("");
            var textArray = $scope.text.toLowerCase().split("");
            for (var i = 0; i <= 24; i++) {
                count[i] = 0;
                for (var j = 0; j <= textArray.length; j++) {
                    if (textArray[j] == letterArray[i]) {
                        count[i]++;

                    }
                }
            }

            for (var k = 0; k <= count.length; k++) {
                if (count[k] > 1) {
                    $scope.final += "\n" + count[k] + letters[k];
                }
                if (count[k] == 1) {
                    $scope.final += "\n" + letters[k];
                }
            }
        };
              }]);
