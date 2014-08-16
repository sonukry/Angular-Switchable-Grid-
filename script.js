var app = angular.module("switchableGrid", []);
            var SwitchableGridController =function($scope) {
                $scope.people=[
                    {name:"raj" , age:20},
                    {name:'Sonu', age:21},
                    {name:"raman" , age:22}, 
                    {name:'Shubham', age:15}, 
                    {name:'Sushi' , age:26},
                    {name:'Gokul', age:30},
                    {name:'Harinath', age:35},
                    {name:'Divya', age:19},
                    {name:"Sushmita,'A'", age:20},
                    {name:'Mahindra', age:40}
                ];
                $scope.layout = 'grid';
            };
            