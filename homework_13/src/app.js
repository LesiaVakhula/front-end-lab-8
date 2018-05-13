const myApp = angular.module('myApp', []);
myApp.controller('myBlogList',function ($scope) {

    $scope.defPosts = defaultData;
    $scope.isVisible = false;
    $scope.isTripVisisble = false;
    let postsInButton=[];
    $scope.getButtonItems = function(){
        postsInButton =['All'];
        for(let i=0; i<defaultData.length; i++){
            for(let n=0; n<defaultData[i].category.length; n++){
                if(postsInButton.some(item=> item.toLowerCase() == defaultData[i].category[n].toLowerCase())){
                    continue
                }else{
                    postsInButton.push(defaultData[i].category[n]);
                }
            }
        }
        return postsInButton;
    }
   
    $scope.getTripName = function(){
        return postsInButton.filter(item=>item.toLowerCase()!=='all'&&item.toLowerCase()!=='trip');
    }

    $scope.setPosts = function (name) {
        $scope.isTripVisisble = false;
        $scope.defPosts = defaultData;
        if(name.toLowerCase() ==='all'){
            $scope.defPosts = defaultData;
        }else if(name.toLowerCase()==='trip'){
            $scope.isTripVisisble = true;
        }else {
            $scope.defPosts = $scope.defPosts.filter(item =>item.category.some(item => item.toLowerCase() === name.toLowerCase()));
        }
    };
       
    $scope.filterPosts = function (value) {
        if(!value){
            return $scope.defPosts = defaultData;
        }
        $scope.defPosts = $scope.defPosts.filter(post =>post.category.some(item => item.toLowerCase().indexOf(value) !== -1));
    };

    $scope.addPost = function () {
        if($scope.isVisible && (!$scope.titleName || !$scope.newCategory || !$scope.newDescript || !$scope.newImage)){
            return;
        }else if($scope.isVisible && $scope.titleName && $scope.newCategory && $scope.newDescript && $scope.newImage){
            $scope.defPosts.push({title: $scope.titleName, description: $scope.newDescript, photoUrl: './assets/'+$scope.newImage, category: $scope.newCategory.split(','), id: ($scope.defPosts.length+1), isEditing: true});
        }
        $scope.isVisible =!$scope.isVisible;
    }
    $scope.editPost = function(object){
        if(object.title == undefined || object.description == undefined){
            return;
        };
        object.isEditing = !object.isEditing;
    }
});
