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

		$scope.changeText(file);
	};

	$scope.changeText = function(elementID){
		var imgText = document.getElementById('imgtext');

		if (elementID == "./WorkAndSkills/martialArts.jpg"){

			imgText.innerHTML = "Hey it works";
		}else if(elementID == "./WorkAndSkills/Hackathons/capitalonehack.jpg"){
			imgText.innerHTML = "Okay not bad hotshot";
		}else if(elementID == "./WorkAndSkills/business.jpg"){
			imgText.innerHTML = "I've gotten bored. Final test."
		}
	};

});

app.controller("projectCtrl", function($scope){	

});

app.controller("achievementsCtrl", function($scope){	

});

app.controller("extraCtrl", function($scope){	

});

app.controller("resumeCtrl", function($scope){	

});
