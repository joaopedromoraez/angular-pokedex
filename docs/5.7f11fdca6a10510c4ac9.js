(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"08r1":function(t,e,a){"use strict";a.r(e),a.d(e,"PokemonsModule",function(){return $});var r=a("ofXK"),n=a("tk/3"),o=a("tyNb"),i=a("fXoL"),s=a("AytR");let c=(()=>{class t{constructor(t){this.http=t}getAllPokemons(){return this.http.get(s.a.api+"pokemon?offset=0&limit=722")}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(n.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=a("0IaG");let d=(()=>{class t{constructor(t){this.http=t}getPokemon(t){return this.http.get(`${s.a.api}pokemon/${t}`)}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(n.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=a("bTqV"),p=a("A5z7");function h(t,e){if(1&t&&(i.Ob(0,"mat-chip",4),i.sc(1),i.Nb()),2&t){const t=e.$implicit;i.zb(1),i.tc(t)}}function g(t,e){if(1&t&&(i.Ob(0,"mat-chip",4),i.sc(1),i.Nb()),2&t){const t=e.$implicit;i.zb(1),i.tc(t)}}let f=(()=>{class t{constructor(t,e){this.pokemon=t,this.detalharPokemonService=e,this.dataPokemon={peso:0,altura:0,tipo:[],habilidades:[]}}ngOnInit(){this.detalharPokemonService.getPokemon(this.urlToIdPokemon(this.pokemon.url)).subscribe(t=>{this.dataPokemon.peso=t.weight/10,this.dataPokemon.altura=t.height/10,this.dataPokemon.tipo=t.types.map(t=>t.type.name),this.dataPokemon.habilidades=t.abilities.map(t=>t.ability.name)})}imgPokemon(t){return`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${e=this.urlToIdPokemon(t),String(e).padStart(3,"0")}.png`;var e}urlToIdPokemon(t){return t.substring(34,t.length-1)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(m.a),i.Jb(d))},t.\u0275cmp=i.Db({type:t,selectors:[["app-detalhar-pokemon"]],decls:32,vars:10,consts:[["mat-dialog-title",""],["mat-fab","","color","warn"],[1,"mat-typography"],["mat-card-image","",3,"src"],["color","accent"],["color","accent",4,"ngFor","ngForOf"],["mat-dialog-actions","","align","end"],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(i.Ob(0,"h1",0),i.sc(1),i.ac(2,"titlecase"),i.Ob(3,"button",1),i.sc(4),i.Nb(),i.Nb(),i.Ob(5,"mat-dialog-content",2),i.Kb(6,"img",3),i.Ob(7,"div"),i.Ob(8,"b"),i.sc(9,"Peso:"),i.Nb(),i.Ob(10,"mat-chip-list"),i.Ob(11,"mat-chip",4),i.sc(12),i.Nb(),i.Nb(),i.Ob(13,"p"),i.Ob(14,"b"),i.sc(15,"Altura:"),i.Nb(),i.Ob(16,"mat-chip-list"),i.Ob(17,"mat-chip",4),i.sc(18),i.Nb(),i.Nb(),i.Nb(),i.Ob(19,"p"),i.Ob(20,"b"),i.sc(21,"Tipo:"),i.Nb(),i.Ob(22,"mat-chip-list"),i.rc(23,h,2,1,"mat-chip",5),i.Nb(),i.Nb(),i.Ob(24,"p"),i.Ob(25,"b"),i.sc(26,"Habilidades:"),i.Nb(),i.Ob(27,"mat-chip-list"),i.rc(28,g,2,1,"mat-chip",5),i.Nb(),i.Nb(),i.Nb(),i.Nb(),i.Ob(29,"div",6),i.Ob(30,"button",7),i.sc(31,"Ok"),i.Nb(),i.Nb()),2&t&&(i.zb(1),i.uc(" ",i.bc(2,8,e.pokemon.name)," "),i.zb(3),i.tc(e.urlToIdPokemon(e.pokemon.url)),i.zb(2),i.ec("src",e.imgPokemon(e.pokemon.url),i.kc),i.zb(6),i.uc("",e.dataPokemon.peso," kg"),i.zb(6),i.uc("",e.dataPokemon.altura," m"),i.zb(5),i.ec("ngForOf",e.dataPokemon.tipo),i.zb(5),i.ec("ngForOf",e.dataPokemon.habilidades),i.zb(2),i.ec("mat-dialog-close",!0))},directives:[m.g,l.b,m.e,p.b,p.a,r.j,m.c,m.d],pipes:[r.q],styles:["mat-dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}mat-dialog-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:215px;width:215px}mat-dialog-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:200px;border:1px solid #919191;padding:1em;border-radius:2%}mat-dialog-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:relative}.mat-dialog-title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),t})(),b=(()=>{class t{constructor(t){this.dialog=t}abrirDetalhe(t){this.dialog.open(f,{autoFocus:!1,data:t})}}return t.\u0275fac=function(e){return new(e||t)(i.Sb(m.b))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=a("FKr1"),k=a("8LU1"),x=a("nLfN"),_=a("R1ws");function w(t,e){if(1&t&&(i.Yb(),i.Kb(0,"circle",3)),2&t){const t=i.Zb();i.oc("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),i.Ab("r",t._getCircleRadius())}}function v(t,e){if(1&t&&(i.Yb(),i.Kb(0,"circle",3)),2&t){const t=i.Zb();i.oc("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),i.Ab("r",t._getCircleRadius())}}function y(t,e){if(1&t&&(i.Yb(),i.Kb(0,"circle",3)),2&t){const t=i.Zb();i.oc("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),i.Ab("r",t._getCircleRadius())}}function A(t,e){if(1&t&&(i.Yb(),i.Kb(0,"circle",3)),2&t){const t=i.Zb();i.oc("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),i.Ab("r",t._getCircleRadius())}}const S=".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";class O{constructor(t){this._elementRef=t}}const C=Object(u.k)(O,"primary"),P=new i.q("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let N=(()=>{class t extends C{constructor(e,a,r,n,o){super(e),this._elementRef=e,this._document=r,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const i=t._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),i.has(r.head)||i.set(r.head,new Set([100])),this._fallbackAnimation=a.EDGE||a.TRIDENT,this._noopAnimations="NoopAnimations"===n&&!!o&&!o._forceAnimations,o&&(o.diameter&&(this.diameter=o.diameter),o.strokeWidth&&(this.strokeWidth=o.strokeWidth))}get diameter(){return this._diameter}set diameter(t){this._diameter=Object(k.e)(t),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(t){this._strokeWidth=Object(k.e)(t)}get value(){return"determinate"===this.mode?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,Object(k.e)(t)))}ngOnInit(){const t=this._elementRef.nativeElement;this._styleRoot=Object(x.c)(t)||this._document.head,this._attachStyleNode(),t.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const t=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${t} ${t}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const e=this._styleRoot,a=this._diameter,r=t._diameters;let n=r.get(e);if(!n||!n.has(a)){const t=this._document.createElement("style");t.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),t.textContent=this._getAnimationText(),e.appendChild(t),n||(n=new Set,r.set(e,n)),n.add(a)}}_getAnimationText(){const t=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*t).replace(/END_VALUE/g,""+.2*t).replace(/DIAMETER/g,""+this._spinnerAnimationLabel)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(i.l),i.Jb(x.a),i.Jb(r.d,8),i.Jb(_.a,8),i.Jb(P))},t.\u0275cmp=i.Db({type:t,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(t,e){2&t&&(i.Ab("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),i.oc("width",e.diameter,"px")("height",e.diameter,"px"),i.Bb("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[i.wb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(i.Yb(),i.Ob(0,"svg",0),i.rc(1,w,1,9,"circle",1),i.rc(2,v,1,7,"circle",2),i.Nb()),2&t&&(i.oc("width",e.diameter,"px")("height",e.diameter,"px"),i.ec("ngSwitch","indeterminate"===e.mode),i.Ab("viewBox",e._getViewBox()),i.zb(1),i.ec("ngSwitchCase",!0),i.zb(1),i.ec("ngSwitchCase",!1))},directives:[r.m,r.n],styles:[S],encapsulation:2,changeDetection:0}),t._diameters=new WeakMap,t})(),E=(()=>{class t extends N{constructor(t,e,a,r,n){super(t,e,a,r,n),this.mode="indeterminate"}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(i.l),i.Jb(x.a),i.Jb(r.d,8),i.Jb(_.a,8),i.Jb(P))},t.\u0275cmp=i.Db({type:t,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(t,e){2&t&&(i.oc("width",e.diameter,"px")("height",e.diameter,"px"),i.Bb("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color"},features:[i.wb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(i.Yb(),i.Ob(0,"svg",0),i.rc(1,y,1,9,"circle",1),i.rc(2,A,1,7,"circle",2),i.Nb()),2&t&&(i.oc("width",e.diameter,"px")("height",e.diameter,"px"),i.ec("ngSwitch","indeterminate"===e.mode),i.Ab("viewBox",e._getViewBox()),i.zb(1),i.ec("ngSwitchCase",!0),i.zb(1),i.ec("ngSwitchCase",!1))},directives:[r.m,r.n],styles:[S],encapsulation:2,changeDetection:0}),t})(),T=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[u.c,r.c],u.c]}),t})();const D=["*",[["mat-card-footer"]]],L=["*","mat-card-footer"],R=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],z=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Eb({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=i.Eb({type:t,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),t})(),I=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(_.a,8))},t.\u0275cmp=i.Db({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&i.Bb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:L,decls:2,vars:0,template:function(t,e){1&t&&(i.dc(D),i.cc(0),i.cc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Db({type:t,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:z,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(t,e){1&t&&(i.dc(R),i.cc(0),i.Ob(1,"div",0),i.cc(2,1),i.Nb(),i.cc(3,2))},encapsulation:2,changeDetection:0}),t})(),U=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[u.c],u.c]}),t})();function X(t,e){1&t&&i.Kb(0,"mat-spinner")}function J(t,e){if(1&t&&(i.Ob(0,"div",2),i.rc(1,X,1,0,"mat-spinner",3),i.Nb()),2&t){const t=i.Zb();i.zb(1),i.ec("ngIf",t.loading)}}function W(t,e){if(1&t){const t=i.Pb();i.Mb(0),i.Ob(1,"mat-card",4),i.Vb("click",function(){i.jc(t);const a=e.$implicit;return i.Zb().detalharPokemon(a)}),i.Ob(2,"button",5),i.sc(3),i.Nb(),i.Kb(4,"img",6),i.Ob(5,"mat-card-header"),i.Ob(6,"mat-card-title"),i.sc(7),i.ac(8,"titlecase"),i.Nb(),i.Nb(),i.Nb(),i.Lb()}if(2&t){const t=e.$implicit,a=i.Zb();i.zb(3),i.tc(a.urlToIdPokemon(t.url)),i.zb(1),i.ec("src",a.imgPokemon(t.url),i.kc),i.zb(3),i.uc(" ",i.bc(8,3,t.name)," ")}}const F=[{path:"",component:(()=>{class t{constructor(t,e){this.pokedexService=t,this.pokemonDetalhado=e,this.loading=!0}ngOnInit(){this.pokedexService.getAllPokemons().subscribe(t=>{console.log(t),this.loading=!1,this.allPokemons=t.results})}imgPokemon(t){return`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${e=this.urlToIdPokemon(t),String(e).padStart(3,"0")}.png`;var e}urlToIdPokemon(t){return t.substring(34,t.length-1)}detalharPokemon(t){this.pokemonDetalhado.abrirDetalhe(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(c),i.Jb(b))},t.\u0275cmp=i.Db({type:t,selectors:[["app-pokemons"]],decls:2,vars:2,consts:[["class","loading-shade",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"loading-shade"],[4,"ngIf"],["matRipple","",1,"card",3,"click"],["mat-fab","","color","warn"],["mat-card-image","","alt","Photo of a Shiba Inu",3,"src"]],template:function(t,e){1&t&&(i.rc(0,J,2,1,"div",0),i.rc(1,W,9,5,"ng-container",1)),2&t&&(i.ec("ngIf",e.loading),i.zb(1),i.ec("ngForOf",e.allPokemons))},directives:[r.k,r.j,E,I,u.h,l.b,V,j,M],pipes:[r.q],styles:[".card[_ngcontent-%COMP%]{min-width:200px;margin:1em}.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:absolute}.header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}[_nghost-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-evenly}.loading-shade[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:56px;right:0;background:rgba(0,0,0,.15);z-index:1;display:flex;align-items:center;justify-content:center}@media screen and (max-width:547px){.card[_ngcontent-%COMP%]{width:100%}}"]}),t})()}];let B=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[o.f.forChild(F)],o.f]}),t})(),$=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},providers:[c],imports:[[r.c,B,n.b,U,l.c,T,u.i]]}),t})()}}]);