(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{Anfc:function(e,t,n){"use strict";n.r(t),n.d(t,"CContent",function(){return o});var r=n("j4xQ"),o=function(){function e(){}return e.prototype.setTheme=function(e){void 0===e&&(e=void 0),this.theme=e||this.store.getState().theme.name,this.currentTheme=this.store.getState().themes[this.theme]},e.prototype.componentWillLoad=function(){var e=this;this.store=this.ContextStore||window.CorporateUi.store,this.setTheme(this.theme),this.store.subscribe(function(){return e.setTheme()})},e.prototype.componentDidLoad=function(){this.tagName=this.el.nodeName.toLowerCase()},e.prototype.render=function(){return[this.currentTheme?Object(r.b)("style",null,this.currentTheme[this.tagName]):"",Object(r.b)("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"c-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{ContextStore:{context:"store"},currentTheme:{state:!0},el:{elementRef:!0},router:{type:Boolean,attr:"router"},store:{state:!0},tagName:{state:!0},theme:{type:String,attr:"theme",mutable:!0,watchCallbacks:["setTheme"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-c-content-h{display:block;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;padding-left:20px;padding-right:20px}"},enumerable:!0,configurable:!0}),e}()}}]);