(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8YKC":function(n,l,e){"use strict";e.d(l,"a",function(){return s});var t=e("t/Na"),o=e("XlPw"),r=e("67Y/"),u=e("9Z1F"),a=e("CcnG"),i={headers:new t.h({"Content-Type":"application/json"})},s=function(){function n(n){this.http=n}return n.prototype.contactus=function(n){return this.http.post("/api/contact",n,i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.getformfields=function(n){return this.http.get("/api/getformfields/"+n,i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.intlcodes=function(){return this.http.get("/api/intlcodes",i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.getPageContent=function(n){return this.http.get("/api/page/"+n).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.getCatList=function(){return this.http.get("/api/catlist",i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.getSubcatListByCatID=function(n){return this.http.get("/api/category/"+n+"/subcatlist",i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.getAmountUnitList=function(){return this.http.get("/api/amountunitlist",i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.getCountryList=function(){return this.http.get("/api/countrynames",i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.getCityList=function(n){return this.http.get("/api/getcities/"+n,i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.checksubscription=function(n){return this.http.get("/api/newsletterSubs/"+n.email,i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.subscribeemail=function(n){return this.http.post("/api/subscribe",n,i).pipe(Object(r.a)(this.extractData),Object(u.a)(this.handleError))},n.prototype.extractData=function(n){return n||{}},n.prototype.handleError=function(n){return n.error instanceof ErrorEvent?console.error("An error occurred:",n.error.message):console.error("Backend returned code "+n.status+", body was: "+n.error),Object(o.a)("Something bad happened; please try again later.")},n.ngInjectableDef=a.defineInjectable({factory:function(){return new n(a.inject(t.c))},token:n,providedIn:"root"}),n}()},"F/Pw":function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),o=function(){},r=e("pMnS"),u=e("gIcY"),a=e("Ip0R"),i=(e("l0Dz"),function(){function n(){}return Object.defineProperty(n.prototype,"isValid",{get:function(){return this.newadForm.controls[this.formbase.key].valid},enumerable:!0,configurable:!0}),n}()),s=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function c(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"input",[],[[8,"id",0],[8,"type",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,e){var o=!0;return"input"===l&&(o=!1!==t["\u0275nov"](n,1)._handleInput(e.target.value)&&o),"blur"===l&&(o=!1!==t["\u0275nov"](n,1).onTouched()&&o),"compositionstart"===l&&(o=!1!==t["\u0275nov"](n,1)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t["\u0275nov"](n,1)._compositionEnd(e.target.value)&&o),o},null,null)),t["\u0275did"](1,16384,null,0,u.DefaultValueAccessor,[t.Renderer2,t.ElementRef,[2,u.COMPOSITION_BUFFER_MODE]],null,null),t["\u0275prd"](1024,null,u.NG_VALUE_ACCESSOR,function(n){return[n]},[u.DefaultValueAccessor]),t["\u0275did"](3,671744,null,0,u.FormControlName,[[3,u.ControlContainer],[8,null],[8,null],[6,u.NG_VALUE_ACCESSOR],[2,u["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,u.NgControl,null,[u.FormControlName]),t["\u0275did"](5,16384,null,0,u.NgControlStatus,[[4,u.NgControl]],null,null)],function(n,l){n(l,3,0,l.component.formbase.key)},function(n,l){var e=l.component;n(l,0,0,e.formbase.key,e.formbase.type,t["\u0275nov"](l,5).ngClassUntouched,t["\u0275nov"](l,5).ngClassTouched,t["\u0275nov"](l,5).ngClassPristine,t["\u0275nov"](l,5).ngClassDirty,t["\u0275nov"](l,5).ngClassValid,t["\u0275nov"](l,5).ngClassInvalid,t["\u0275nov"](l,5).ngClassPending)})}function d(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),t["\u0275did"](1,147456,null,0,u.NgSelectOption,[t.ElementRef,t.Renderer2,[2,u.SelectControlValueAccessor]],{value:[0,"value"]},null),t["\u0275did"](2,147456,null,0,u["\u0275angular_packages_forms_forms_r"],[t.ElementRef,t.Renderer2,[8,null]],{value:[0,"value"]},null),(n()(),t["\u0275ted"](3,null,["",""]))],function(n,l){n(l,1,0,l.context.$implicit.key),n(l,2,0,l.context.$implicit.key)},function(n,l){n(l,3,0,l.context.$implicit.value)})}function p(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"select",[],[[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(n,l,e){var o=!0;return"change"===l&&(o=!1!==t["\u0275nov"](n,1).onChange(e.target.value)&&o),"blur"===l&&(o=!1!==t["\u0275nov"](n,1).onTouched()&&o),o},null,null)),t["\u0275did"](1,16384,null,0,u.SelectControlValueAccessor,[t.Renderer2,t.ElementRef],null,null),t["\u0275prd"](1024,null,u.NG_VALUE_ACCESSOR,function(n){return[n]},[u.SelectControlValueAccessor]),t["\u0275did"](3,671744,null,0,u.FormControlName,[[3,u.ControlContainer],[8,null],[8,null],[6,u.NG_VALUE_ACCESSOR],[2,u["\u0275angular_packages_forms_forms_j"]]],{name:[0,"name"]},null),t["\u0275prd"](2048,null,u.NgControl,null,[u.FormControlName]),t["\u0275did"](5,16384,null,0,u.NgControlStatus,[[4,u.NgControl]],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,d)),t["\u0275did"](7,802816,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var e=l.component;n(l,3,0,e.formbase.key),n(l,7,0,e.formbase.options)},function(n,l){n(l,0,0,l.component.formbase.key,t["\u0275nov"](l,5).ngClassUntouched,t["\u0275nov"](l,5).ngClassTouched,t["\u0275nov"](l,5).ngClassPristine,t["\u0275nov"](l,5).ngClassDirty,t["\u0275nov"](l,5).ngClassValid,t["\u0275nov"](l,5).ngClassInvalid,t["\u0275nov"](l,5).ngClassPending)})}function m(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","errorMessage"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[""," is required"]))],null,function(n,l){n(l,1,0,l.component.formbase.label)})}function f(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,13,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,e){var o=!0;return"submit"===l&&(o=!1!==t["\u0275nov"](n,1).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,1).onReset()&&o),o},null,null)),t["\u0275did"](1,540672,null,0,u.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),t["\u0275prd"](2048,null,u.ControlContainer,null,[u.FormGroupDirective]),t["\u0275did"](3,16384,null,0,u.NgControlStatusGroup,[[4,u.ControlContainer]],null,null),(n()(),t["\u0275eld"](4,0,null,null,1,"label",[],[[1,"for",0]],null,null,null,null)),(n()(),t["\u0275ted"](5,null,["",""])),(n()(),t["\u0275eld"](6,0,null,null,5,"div",[],null,null,null,null,null)),t["\u0275did"](7,16384,null,0,a.NgSwitch,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,c)),t["\u0275did"](9,278528,null,0,a.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,a.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,p)),t["\u0275did"](11,278528,null,0,a.NgSwitchCase,[t.ViewContainerRef,t.TemplateRef,a.NgSwitch],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,m)),t["\u0275did"](13,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,1,0,e.newadForm),n(l,7,0,e.formbase.controlType),n(l,9,0,"textbox"),n(l,11,0,"dropdown"),n(l,13,0,!e.isValid)},function(n,l){var e=l.component;n(l,0,0,t["\u0275nov"](l,3).ngClassUntouched,t["\u0275nov"](l,3).ngClassTouched,t["\u0275nov"](l,3).ngClassPristine,t["\u0275nov"](l,3).ngClassDirty,t["\u0275nov"](l,3).ngClassValid,t["\u0275nov"](l,3).ngClassInvalid,t["\u0275nov"](l,3).ngClassPending),n(l,4,0,e.formbase.key),n(l,5,0,e.formbase.label)})}var g=e("8YKC"),v=e("u0vo"),h=e("IWr7"),b=e("Ikwp"),C=function(){function n(){}return n.prototype.getQuestions=function(){return[new h.a({key:"brave",label:"Bravery Rating",options:[{key:"solid",value:"Solid"},{key:"great",value:"Great"},{key:"good",value:"Good"},{key:"unproven",value:"Unproven"}],order:3}),new b.a({key:"firstName",label:"First name",value:"Bombasto",required:!0,order:1}),new b.a({key:"emailAddress",label:"Email",type:"email",order:2})].sort(function(n,l){return n.order-l.order})},n}(),y=function(){function n(n,l,e){this.formelementservice=n,this.homepage=l,this.qcs=e,this.forcevalidation=!1,this.formbaseelements=[],this.payLoad=""}return n.prototype.trackByFn=function(n,l){return n},n.prototype.ngOnInit=function(){var n=this;this.formbaseelements=this.formelementservice.getQuestions(),console.log(this.formbaseelements),this.newadForm=this.qcs.toFormGroup(this.formbaseelements),setTimeout(function(){console.log("this.newadForm",n.newadForm.value),n.formbaseelements.splice(1,1),delete n.newadForm.controls.emailAddress,delete n.newadForm.value.emailAddress,console.log("after this.newadForm",n.newadForm.controls),n.formbaseelements.push(new b.a({key:"mycontroll",label:"jst test lebel",value:"labosto",required:!0,order:10})),n.newadForm=n.qcs.toFormGroup(n.formbaseelements)},5e3)},n.prototype.createForm=function(){},n.prototype.onSubmit=function(){this.payLoad=JSON.stringify(this.newadForm.value)},n.prototype.addnewproduct=function(){this.payLoad=JSON.stringify(this.newadForm.value)},n}(),w=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"app-formname",[],null,null,null,f,s)),t["\u0275did"](2,49152,null,0,i,[],{formbase:[0,"formbase"],newadForm:[1,"newadForm"]},null)],function(n,l){n(l,2,0,l.context.$implicit,l.component.newadForm)},null)}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Saved the following values"])),(n()(),t["\u0275eld"](3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t["\u0275ted"](4,null,[""," "]))],null,function(n,l){n(l,4,0,l.component.payLoad)})}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,12,"div",[],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,9,"form",[["class","addnewproduct register-form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,e){var o=!0,r=n.component;return"submit"===l&&(o=!1!==t["\u0275nov"](n,3).onSubmit(e)&&o),"reset"===l&&(o=!1!==t["\u0275nov"](n,3).onReset()&&o),"ngSubmit"===l&&(o=!1!==r.addnewproduct()&&o),o},null,null)),t["\u0275did"](2,16384,null,0,u["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](3,540672,null,0,u.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,u.ControlContainer,null,[u.FormGroupDirective]),t["\u0275did"](5,16384,null,0,u.NgControlStatusGroup,[[4,u.ControlContainer]],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,F)),t["\u0275did"](7,802816,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(n()(),t["\u0275eld"](8,0,null,null,2,"div",[["class","form-row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,1,"button",[["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Save"])),(n()(),t["\u0275and"](16777216,null,null,1,null,_)),t["\u0275did"](12,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,3,0,e.newadForm),n(l,7,0,e.formbaseelements,e.trackByFn),n(l,12,0,e.payLoad)},function(n,l){var e=l.component;n(l,1,0,t["\u0275nov"](l,5).ngClassUntouched,t["\u0275nov"](l,5).ngClassTouched,t["\u0275nov"](l,5).ngClassPristine,t["\u0275nov"](l,5).ngClassDirty,t["\u0275nov"](l,5).ngClassValid,t["\u0275nov"](l,5).ngClassInvalid,t["\u0275nov"](l,5).ngClassPending),n(l,9,0,!e.newadForm.valid)})}var O=t["\u0275ccf"]("app-order-list",y,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-order-list",[],null,null,null,S,w)),t["\u0275did"](1,114688,null,0,y,[C,g.a,v.a],null,null)],function(n,l){n(l,1,0)},null)},{formbaseelements:"formbaseelements"},{},[]),N=e("t/Na"),k=e("ZYCi"),R=function(){};e.d(l,"OrdersModuleNgFactory",function(){return j});var j=t["\u0275cmf"](o,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,O]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,u["\u0275angular_packages_forms_forms_i"],u["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,u.FormBuilder,u.FormBuilder,[]),t["\u0275mpd"](4608,g.a,g.a,[N.c]),t["\u0275mpd"](4608,v.a,v.a,[]),t["\u0275mpd"](4608,C,C,[]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,k.o,k.o,[[2,k.u],[2,k.l]]),t["\u0275mpd"](1073742336,R,R,[]),t["\u0275mpd"](1073742336,u["\u0275angular_packages_forms_forms_bb"],u["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,u.FormsModule,u.FormsModule,[]),t["\u0275mpd"](1073742336,u.ReactiveFormsModule,u.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,k.j,function(){return[[{path:"",component:y}]]},[])])})},XlPw:function(n,l,e){"use strict";e.d(l,"a",function(){return o});var t=e("6blF");function o(n,l){return new t.a(l?function(e){return l.schedule(r,0,{error:n,subscriber:e})}:function(l){return l.error(n)})}function r(n){n.subscriber.error(n.error)}}}]);