var app = angular.module('app', ['ngRoute']);
const electron = require('electron');
const {remote} = require('electron');
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;

app.config(function($routeProvider){

		$routeProvider.when('/', {
			templateUrl: './Home/Portfolio.html',
			controller: 'homeCtrl'
		}).when('/work', {
			templateUrl: './WorkAndSkills/WorkAndSkills.html',
			controller: 'workCtrl'
		}).when('/project', {
			templateUrl: './ResearchAndProjects/ResearchAndProjects.html',
			controller: 'projectCtrl'
		}).when('/achievements', {
			templateUrl: './Achievements/Achievements.html',
			controller: 'achievementsCtrl'
		}).when ('/extra', {
			templateUrl: './Extra/extra.html',
			controller: 'extraCtrl'
		}).when ('/resume', {
			templateUrl: './Resume/resume.html',
			controller: 'resumeCtrl'
		});
});

app.controller('headCtrl', function($scope, $location) {
	
	var win = remote.getCurrentWindow();

	$scope.close = function() {
		win.close();
	};
	$scope.maximize = function() {
		win.isMaximized() ? win.unmaximize() : win.maximize();
	};
	$scope.minimize = function() {
		win.minimize();
	};
	
	$scope.changeActive = function(view){
		var btnContainer = document.getElementById('myTopnav');
		var btns = btnContainer.getElementsByClassName('topnavElement');
		var {dialog} = remote;

		for (var i = 0; i < btns.length; i++){
			btns[i].addEventListener("click", function(){
				var current = document.getElementsByClassName('topnavElement active');
				current[0].className = current[0].className.replace("topnavElement active", "topnavElement");
				this.className += " active";

			});
		}
			$location.path(view);
	};

	$scope.openPDF = function(){

		var chosen = document.getElementById('resume');

		if (!chosen.className == 'topnavElement active'){
			chosen.className.replace('topnavElement', 'topnavElement active');
			document.getElementsByClassName('topnavElement active').className.replace('topnavElement active', 'topnavElement');
		}

		const shell = require('electron').shell;
		event.preventDefault();

		shell.openItem("E:/Electron/Port-- Folio/Resume/resume.pdf");
	};

});


app.controller("homeCtrl", function($scope){

	$scope.openBrowserFace = function(){

		const shell = require('electron').shell;
		event.preventDefault();

		shell.openExternal('https://www.facebook.com/GillHarasees');
	};

	$scope.openBrowserGram = function(){

		const shell = require('electron').shell;
		event.preventDefault();

		shell.openExternal('https://www.instagram.com/harasees_gill/');
	};

	$scope.openBrowserHub = function(){

		const shell = require('electron').shell;
		event.preventDefault();

		shell.openExternal('https://github.com/HaraseesG');
	};

	$scope.openBrowserIn = function(){

		const shell = require('electron').shell;
		event.preventDefault();

		shell.openExternal('https://www.linkedin.com/in/haraseessinghgill/');
	};

});

app.controller("workCtrl", function($scope){	

	$scope.changeImg = function(file){
		var expandImg = document.getElementById('expandedImg');
		var imgText = document.getElementById('imgtext');

		expandImg.src = file;
		expandImg.parentElement.style.display = 'block';
	};

});

app.controller("projectCtrl", function($scope){	
	var i = 0;

	$scope.$on('$viewContentLoaded', function(){
		var images = [];

		images = ['./ResearchAndProjects/Images/RI3D/one.jpg', './ResearchAndProjects/Images/RI3D/two.jpg', './ResearchAndProjects/Images/RI3D/three.jpg', './ResearchAndProjects/images/RI3D/four.jpg', './ResearchAndProjects/Images/RI3D/five.jpg', './ResearchAndProjects/Images/RI3D/six.jpg', './ResearchAndProjects/Images/RI3D/seven.jpg',]

		document.getElementById('slideShow').src = images[i];

		if (i < images.length - 1){
			i++;
		}else {
			i = 0;
		}

		setTimeout(function(){ //Note to self: setTimeout is asynchroneous so don't pass a function in. Call a function that calls your function
			$scope.imgSlideOne()
		}, 3000);	
	});

	$scope.imgSlideOne = function(){
		var images = [];

		images = ['./ResearchAndProjects/Images/RI3D/one.jpg', './ResearchAndProjects/Images/RI3D/two.jpg', './ResearchAndProjects/Images/RI3D/three.jpg', './ResearchAndProjects/images/RI3D/four.jpg', './ResearchAndProjects/Images/RI3D/five.jpg', './ResearchAndProjects/Images/RI3D/six.jpg', './ResearchAndProjects/Images/RI3D/seven.jpg',]

		document.getElementById('slideShow').src = images[i];

		if (i < images.length - 1){
			i++;
		}else {
			i = 0;
		}

		setTimeout(function(){ //Note to self: setTimeout is asynchroneous so don't pass a function in. Call a function that calls your function
			$scope.imgSlideOne()
		}, 3000);	
	};

});

app.controller("achievementsCtrl", function($scope){	
	var i = 0;

	$scope.$on('$viewContentLoaded', function(){
		var images = [];

		images = ['./Achievements/images/medals.jpg', './Achievements/images/trophies.jpg', './Achievements/images/awards.jpg']

		document.getElementById('slide').src = images[i];

		if (i < images.length - 1){
			i++;
		}else {
			i = 0;
		}

		setTimeout(function(){ //Note to self: setTimeout is asynchroneous so don't pass a function in. Call a function that calls your function
			$scope.imgSlide()
		}, 5000);	
	});

	$scope.imgSlide = function(){
		var images = [];

		images = ['./Achievements/images/medals.jpg', './Achievements/images/trophies.jpg', './Achievements/images/awards.jpg']

		document.getElementById('slide').src = images[i];

		if (i < images.length - 1){
			i++;
		}else {
			i = 0;
		}

		setTimeout(function(){ //Note to self: setTimeout is asynchroneous so don't pass a function in. Call a function that calls your function
			$scope.imgSlide()
		}, 5000);	
	};

});

app.controller("resumeCtrl", function($scope){	

});
