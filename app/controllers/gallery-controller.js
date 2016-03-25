app.controller('GalleryController', function ($scope) {
  
    $scope.test = "this controller works"
    
    $scope.curator = true;
    $scope.edit = false;
    $scope.gallery = [];

    
    
        $scope.addArt = function(){
       
       if($scope.newArt){
           $scope.gallery.push($scope.newArt);
           $scope.newArt = {};
       }
   }
   
    $scope.removeArt = function(i){
        $scope.gallery.splice(i,1);
     }
     
    $scope.editArt = function($index){
           $scope.gallery.push($index);
           $scope.editArt = {};
    }
    
});