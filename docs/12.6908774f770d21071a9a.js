(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ZjQI:function(r,o,t){"use strict";t.r(o),t.d(o,"CCard",function(){return c});var d=t("j4xQ"),a=t("s5TK"),e=Object.freeze({scania:":host {\n  display: block; }\n\n.card-body {\n  background-color: #e8e8e8; }\n\n.card-footer {\n  background-color: transparent;\n  border-top: 0; }\n",scania_ie:"c-card.sc-c-card-h {\n  display: block; }\n\n.card.sc-c-card-body {\n  background-color: #e8e8e8; }\n\n.card.sc-c-card-footer {\n  background-color: transparent;\n  border-top: 0; }\n"}),c=function(){function r(){this.currentTheme=this.theme||a.a.getState().theme.name}return r.prototype.updateTheme=function(r){this.currentTheme=r},r.prototype.hostData=function(){return{class:{card:!0}}},r.prototype.componentWillLoad=function(){var r=this;a.a.subscribe(function(){return r.currentTheme=a.a.getState().theme.name})},r.prototype.componentDidLoad=function(){var r=this;this.el.shadowRoot.querySelectorAll("slot").forEach(function(o){r.toggleHide(o),o.addEventListener("slotchange",function(o){return r.toggleHide(o.target)})})},r.prototype.toggleHide=function(r){var o=r.assignedNodes().length||r.children.length;r.style.display=o?"":"none"},r.prototype.render=function(){return[this.currentTheme?Object(d.b)("style",null,e[this.currentTheme]):"",Object(d.b)("slot",Object.assign({name:"card-header"},{class:"card-header"})),Object(d.b)("slot",Object.assign({name:"card-body"},{class:"card-body"})),Object(d.b)("slot",Object.assign({name:"card-footer"},{class:"card-footer"}))]},Object.defineProperty(r,"is",{get:function(){return"c-card"},enumerable:!0,configurable:!0}),Object.defineProperty(r,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(r,"properties",{get:function(){return{currentTheme:{state:!0},el:{elementRef:!0},theme:{type:String,attr:"theme",watchCallbacks:["updateTheme"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(r,"style",{get:function(){return".card,:host(.card,:host){position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr,:host(.card,:host)>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child,:host(.card,:host)>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child,:host(.card,:host)>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-bottom:-.75rem;border-bottom:0}.card-header-pills,.card-header-tabs{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-deck .card,.card-deck :host(.card,:host){margin-bottom:15px}@media (min-width:576px){.card-deck{-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card,.card-deck :host(.card,:host){display:-ms-flexbox;display:flex;-ms-flex:1 0 0%;flex:1 0 0%;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-group>.card,.card-group>:host(.card,:host){margin-bottom:15px}@media (min-width:576px){.card-group{-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card,.card-group>:host(.card,:host){-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card,.card-group>.card+:host(.card,:host),.card-group>:host(.card,:host)+.card,.card-group>:host(.card,:host)+:host(.card,:host){margin-left:0;border-left:0}.card-group>.card:not(:last-child),.card-group>:not(:last-child):host(.card,:host){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top,.card-group>:not(:last-child):host(.card,:host) .card-header,.card-group>:not(:last-child):host(.card,:host) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom,.card-group>:not(:last-child):host(.card,:host) .card-footer,.card-group>:not(:last-child):host(.card,:host) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child),.card-group>:not(:first-child):host(.card,:host){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top,.card-group>:not(:first-child):host(.card,:host) .card-header,.card-group>:not(:first-child):host(.card,:host) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom,.card-group>:not(:first-child):host(.card,:host) .card-footer,.card-group>:not(:first-child):host(.card,:host) .card-img-bottom{border-bottom-left-radius:0}}.card-columns .card,.card-columns :host(.card,:host){margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card,.card-columns :host(.card,:host){display:inline-block;width:100%}}.accordion>.card,.accordion>:host(.card,:host){overflow:hidden}.accordion>.card:not(:first-of-type) .card-header:first-child,.accordion>:not(:first-of-type):host(.card,:host) .card-header:first-child{border-radius:0}.accordion>.card:not(:first-of-type):not(:last-of-type),.accordion>:not(:first-of-type):not(:last-of-type):host(.card,:host){border-bottom:0;border-radius:0}.accordion>.card:first-of-type,.accordion>:first-of-type:host(.card,:host){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:last-of-type,.accordion>:last-of-type:host(.card,:host){border-top-left-radius:0;border-top-right-radius:0}.accordion>.card .card-header,.accordion>:host(.card,:host) .card-header{margin-bottom:-1px}:host,:host *,:host :after,:host :before{-webkit-box-sizing:border-box;box-sizing:border-box}a{text-decoration:none}a:hover{text-decoration:underline}:host,slot{display:block}"},enumerable:!0,configurable:!0}),r}()}}]);