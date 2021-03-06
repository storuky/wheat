// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require underscore
//= require angular
//= require perfect-scrollbar.min
//= require dcbox
//= require pace.min
//= require angular-route
//= require angular-resource
//= require angular-animate

//= require js-routes
//= require_self
//= require_tree .

var app = angular.module("app", ["ngResource", "ngRoute", "ngAnimate", "ngNotify"]);

app.run(['$rootScope', 'Page', 'Action', 'User', 'Correspondence', 'Message', 'Search', 'Position', function ($rootScope, Page, Action, User, Correspondence, Message, Search, Position) {
  $rootScope._ = _;
  $rootScope.gon = gon;
  $rootScope.Page = Page;
  $rootScope.Search = Search;
  $rootScope.Position = Position;
  $rootScope.Action = Action;
  $rootScope.User = User;
  $rootScope.Correspondence = Correspondence;
  $rootScope.Message = Message;
  $rootScope.findById = findById;
}])