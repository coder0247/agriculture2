(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{R4sv:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i("jFtu");var r=i("K9Ia"),o=function(){function t(t){this.bsModalRef=t,this.modaldata=[],this.title="app",this.imageChangedEvent="",this.croppedImage=""}return t.prototype.ngOnInit=function(){this.onClose=new r.a,this.fileChangeEvent(this.modaldata[0])},t.prototype.fileChangeEvent=function(t){this.imageChangedEvent=t},t.prototype.imageCropped=function(t){this.croppedImage=t},t.prototype.imageLoaded=function(){},t.prototype.loadImageFailed=function(){},t.prototype.confirmupload=function(){this.onClose.next(!0),this.bsModalRef.hide()},t}()},SVWe:function(t,e,i){"use strict";i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n});var r=i("CcnG"),o=(i("efFR"),i("Ip0R"),i("ZYjt"),r["\u0275crt"]({encapsulation:0,styles:["[_nghost-%COMP%]{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%] > div[_ngcontent-%COMP%]{position:relative;width:100%}[_nghost-%COMP%] > div[_ngcontent-%COMP%]   .source-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]{position:absolute;display:flex;color:#53535c!important;background:0 0!important;touch-action:none;outline:rgba(255,255,255,.3) solid 1000px}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]:after{position:absolute;content:'';top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{display:inline-block;background:#53535c!important;width:6px;height:6px;border:1px solid rgba(255,255,255,.5)}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topleft[_ngcontent-%COMP%]{top:-12px;left:-12px;cursor:nw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.top[_ngcontent-%COMP%]{top:-12px;left:calc(50% - 12px);cursor:n-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.topright[_ngcontent-%COMP%]{top:-12px;right:-12px;cursor:ne-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.right[_ngcontent-%COMP%]{top:calc(50% - 12px);right:-12px;cursor:e-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomright[_ngcontent-%COMP%]{bottom:-12px;right:-12px;cursor:se-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottom[_ngcontent-%COMP%]{bottom:-12px;left:calc(50% - 12px);cursor:s-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.bottomleft[_ngcontent-%COMP%]{bottom:-12px;left:-12px;cursor:sw-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize.left[_ngcontent-%COMP%]{top:calc(50% - 12px);left:-12px;cursor:w-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar[_ngcontent-%COMP%]{position:absolute;z-index:1}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.top[_ngcontent-%COMP%]{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:n-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.right[_ngcontent-%COMP%]{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:e-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.bottom[_ngcontent-%COMP%]{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:s-resize}[_nghost-%COMP%]   .cropper[_ngcontent-%COMP%]   .resize-bar.left[_ngcontent-%COMP%]{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:w-resize}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]{outline-color:transparent}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]:after{box-shadow:0 0 0 100vw rgba(255,255,255,.3);border-radius:100%}[_nghost-%COMP%]   .cropper.rounded[_ngcontent-%COMP%]   .move[_ngcontent-%COMP%]{border-radius:100%}"],data:{}}));function n(t){return r["\u0275vid"](2,[(t()(),r["\u0275eld"](0,0,null,null,24,"div",[],null,null,null,null,null)),(t()(),r["\u0275eld"](1,0,null,null,0,"img",[["class","source-image"]],[[8,"src",4],[4,"visibility",null]],[[null,"load"]],function(t,e,i){var r=!0;return"load"===e&&(r=!1!==t.component.imageLoadedInView()&&r),r},null,null)),(t()(),r["\u0275eld"](2,0,null,null,22,"div",[["class","cropper"]],[[2,"rounded",null],[4,"top","px"],[4,"left","px"],[4,"width","px"],[4,"height","px"],[4,"margin-left",null],[4,"visibility",null]],null,null,null,null)),(t()(),r["\u0275eld"](3,0,null,null,1,"div",[["class","move"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"move")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"move")&&r),r},null,null)),(t()(),r["\u0275ted"](-1,null,["\xa0"])),(t()(),r["\u0275eld"](5,0,null,null,1,"span",[["class","resize topleft"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"resize","topleft")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"resize","topleft")&&r),r},null,null)),(t()(),r["\u0275eld"](6,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),r["\u0275eld"](7,0,null,null,1,"span",[["class","resize top"]],null,null,null,null,null)),(t()(),r["\u0275eld"](8,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),r["\u0275eld"](9,0,null,null,1,"span",[["class","resize topright"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"resize","topright")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"resize","topright")&&r),r},null,null)),(t()(),r["\u0275eld"](10,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),r["\u0275eld"](11,0,null,null,1,"span",[["class","resize right"]],null,null,null,null,null)),(t()(),r["\u0275eld"](12,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),r["\u0275eld"](13,0,null,null,1,"span",[["class","resize bottomright"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"resize","bottomright")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"resize","bottomright")&&r),r},null,null)),(t()(),r["\u0275eld"](14,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),r["\u0275eld"](15,0,null,null,1,"span",[["class","resize bottom"]],null,null,null,null,null)),(t()(),r["\u0275eld"](16,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),r["\u0275eld"](17,0,null,null,1,"span",[["class","resize bottomleft"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"resize","bottomleft")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"resize","bottomleft")&&r),r},null,null)),(t()(),r["\u0275eld"](18,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),r["\u0275eld"](19,0,null,null,1,"span",[["class","resize left"]],null,null,null,null,null)),(t()(),r["\u0275eld"](20,0,null,null,0,"span",[["class","square"]],null,null,null,null,null)),(t()(),r["\u0275eld"](21,0,null,null,0,"span",[["class","resize-bar top"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"resize","top")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"resize","top")&&r),r},null,null)),(t()(),r["\u0275eld"](22,0,null,null,0,"span",[["class","resize-bar right"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"resize","right")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"resize","right")&&r),r},null,null)),(t()(),r["\u0275eld"](23,0,null,null,0,"span",[["class","resize-bar bottom"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"resize","bottom")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"resize","bottom")&&r),r},null,null)),(t()(),r["\u0275eld"](24,0,null,null,0,"span",[["class","resize-bar left"]],null,[[null,"mousedown"],[null,"touchstart"]],function(t,e,i){var r=!0,o=t.component;return"mousedown"===e&&(r=!1!==o.startMove(i,"resize","left")&&r),"touchstart"===e&&(r=!1!==o.startMove(i,"resize","left")&&r),r},null,null))],null,function(t,e){var i=e.component;t(e,1,0,i.safeImgDataUrl,i.imageVisible?"visible":"hidden"),t(e,2,0,i.roundCropper,i.cropper.y1,i.cropper.x1,i.cropper.x2-i.cropper.x1,i.cropper.y2-i.cropper.y1,i.marginLeft,i.imageVisible?"visible":"hidden")})}},Z6TG:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var r=function(){this.queue=[]}},efFR:function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});var r=i("CcnG"),o=function(){function t(){}return t.getOrientation=function(t){var e=new DataView(this.base64ToArrayBuffer(t));if(65496!=e.getUint16(0,!1))return-2;for(var i=e.byteLength,r=2;r<i;){if(e.getUint16(r+2,!1)<=8)return-1;var o=e.getUint16(r,!1);if(r+=2,65505==o){if(1165519206!=e.getUint32(r+=2,!1))return-1;var n=18761==e.getUint16(r+=6,!1);r+=e.getUint32(r+4,n);var s=e.getUint16(r,n);r+=2;for(var a=0;a<s;a++)if(274==e.getUint16(r+12*a,n))return e.getUint16(r+12*a+8,n)}else{if(65280!=(65280&o))break;r+=e.getUint16(r,!1)}}return-1},t.base64ToArrayBuffer=function(t){t=t.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var e=atob(t),i=e.length,r=new Uint8Array(i),o=0;o<i;o++)r[o]=e.charCodeAt(o);return r.buffer},t.resetOrientation=function(e,i,r){var o=new Image;o.onload=function(){var n=o.width,s=o.height,a=document.createElement("canvas"),p=a.getContext("2d");p?(4<i&&i<9?(a.width=s,a.height=n):(a.width=n,a.height=s),t.transformCanvas(p,i,n,s),p.drawImage(o,0,0),r(a.toDataURL())):r(e)},o.src=e},t.transformCanvas=function(t,e,i,r){switch(e){case 2:t.transform(-1,0,0,1,i,0);break;case 3:t.transform(-1,0,0,-1,i,r);break;case 4:t.transform(1,0,0,-1,0,r);break;case 5:t.transform(0,1,1,0,0,0);break;case 6:t.transform(0,1,-1,0,r,0);break;case 7:t.transform(0,-1,-1,0,r,i);break;case 8:t.transform(0,-1,1,0,0,i)}},t}(),n=function(){function t(t,e,i){this.elementRef=t,this.sanitizer=e,this.cd=i,this.marginLeft="0px",this.imageVisible=!1,this.format="png",this.maintainAspectRatio=!0,this.aspectRatio=1,this.resizeToWidth=0,this.roundCropper=!1,this.onlyScaleDown=!1,this.imageQuality=92,this.cropper={x1:-100,y1:-100,x2:1e4,y2:1e4},this.imageCroppedBase64=new r.EventEmitter,this.imageCroppedFile=new r.EventEmitter,this.imageLoaded=new r.EventEmitter,this.loadImageFailed=new r.EventEmitter,this.initCropper()}return Object.defineProperty(t.prototype,"imageFileChanged",{set:function(t){this.initCropper(),t&&this.loadImageFile(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageChangedEvent",{set:function(t){this.initCropper(),t&&t.target&&t.target.files&&t.target.files.length>0&&this.loadImageFile(t.target.files[0])},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"imageBase64",{set:function(t){this.initCropper(),this.loadBase64Image(t)},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(t){var e=this;t.cropper&&setTimeout(function(){e.setMaxSize(),e.checkCropperPosition(!1),e.crop(),e.cd.markForCheck()})},t.prototype.initCropper=function(){this.imageVisible=!1,this.originalImage=null,this.safeImgDataUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=",this.moveStart={active:!1,type:null,position:null,x1:0,y1:0,x2:0,y2:0,clientX:0,clientY:0},this.maxSize={width:0,height:0},this.originalSize={width:0,height:0},this.cropper.x1=-100,this.cropper.y1=-100,this.cropper.x2=1e4,this.cropper.y2=1e4},t.prototype.loadImageFile=function(t){var e=this,i=new FileReader;i.onload=function(i){e.isValidImageType(t.type)?e.checkExifRotationAndLoadImage(i.target.result):e.loadImageFailed.emit()},i.readAsDataURL(t)},t.prototype.isValidImageType=function(t){return"image/jpeg"===t||"image/jpg"===t||"image/png"===t||"image/gif"===t},t.prototype.checkExifRotationAndLoadImage=function(t){var e=this,i=o.getOrientation(t);i>1?o.resetOrientation(t,i,function(t){return e.loadBase64Image(t)}):this.loadBase64Image(t)},t.prototype.loadBase64Image=function(t){var e=this;this.originalImage=new Image,this.originalImage.onload=function(){e.originalSize.width=e.originalImage.width,e.originalSize.height=e.originalImage.height,e.cd.markForCheck()},this.safeImgDataUrl=this.sanitizer.bypassSecurityTrustResourceUrl(t),this.originalImage.src=t},t.prototype.imageLoadedInView=function(){var t=this;null!=this.originalImage&&(this.imageLoaded.emit(),setTimeout(function(){t.setMaxSize(),t.resetCropperPosition(),t.cd.markForCheck()}))},t.prototype.onResize=function(t){this.resizeCropperPosition(),this.setMaxSize()},t.prototype.resizeCropperPosition=function(){var t=this.elementRef.nativeElement.querySelector(".source-image");this.maxSize.width===t.offsetWidth&&this.maxSize.height===t.offsetHeight||(this.cropper.x1=this.cropper.x1*t.offsetWidth/this.maxSize.width,this.cropper.x2=this.cropper.x2*t.offsetWidth/this.maxSize.width,this.cropper.y1=this.cropper.y1*t.offsetHeight/this.maxSize.height,this.cropper.y2=this.cropper.y2*t.offsetHeight/this.maxSize.height)},t.prototype.resetCropperPosition=function(){var t=this.elementRef.nativeElement.querySelector(".source-image");if(t.offsetWidth/this.aspectRatio<t.offsetHeight){this.cropper.x1=0,this.cropper.x2=t.offsetWidth;var e=t.offsetWidth/this.aspectRatio;this.cropper.y1=(t.offsetHeight-e)/2,this.cropper.y2=this.cropper.y1+e}else{this.cropper.y1=0,this.cropper.y2=t.offsetHeight;var i=t.offsetHeight*this.aspectRatio;this.cropper.x1=(t.offsetWidth-i)/2,this.cropper.x2=this.cropper.x1+i}this.crop(),this.imageVisible=!0},t.prototype.startMove=function(t,e,i){void 0===i&&(i=null),this.moveStart.active=!0,this.moveStart.type=e,this.moveStart.position=i,this.moveStart.clientX=this.getClientX(t),this.moveStart.clientY=this.getClientY(t),Object.assign(this.moveStart,this.cropper),this.cd.markForCheck()},t.prototype.moveImg=function(t){this.moveStart.active&&(t.stopPropagation(),t.preventDefault(),this.setMaxSize(),"move"===this.moveStart.type?(this.move(t),this.checkCropperPosition(!0)):"resize"===this.moveStart.type&&(this.resize(t),this.checkCropperPosition(!1)),this.cd.markForCheck())},t.prototype.setMaxSize=function(){this.elementRef.nativeElement.querySelector(".source-image"),this.maxSize.width="400px",this.maxSize.height="400px",this.marginLeft=this.sanitizer.bypassSecurityTrustStyle("calc(50% - "+this.maxSize.width/2+"px)")},t.prototype.checkCropperPosition=function(t){void 0===t&&(t=!1),this.cropper.x1<0&&(this.cropper.x2-=t?this.cropper.x1:0,this.cropper.x1=0),this.cropper.y1<0&&(this.cropper.y2-=t?this.cropper.y1:0,this.cropper.y1=0),this.cropper.x2>this.maxSize.width&&(this.cropper.x1-=t?this.cropper.x2-this.maxSize.width:0,this.cropper.x2=this.maxSize.width),this.cropper.y2>this.maxSize.height&&(this.cropper.y1-=t?this.cropper.y2-this.maxSize.height:0,this.cropper.y2=this.maxSize.height)},t.prototype.moveStop=function(t){this.moveStart.active&&(this.moveStart.active=!1,this.crop(),this.cd.markForCheck())},t.prototype.move=function(t){var e=this.getClientX(t)-this.moveStart.clientX,i=this.getClientY(t)-this.moveStart.clientY;this.cropper.x1=this.moveStart.x1+e,this.cropper.y1=this.moveStart.y1+i,this.cropper.x2=this.moveStart.x2+e,this.cropper.y2=this.moveStart.y2+i},t.prototype.resize=function(t){var e=this.getClientX(t)-this.moveStart.clientX,i=this.getClientY(t)-this.moveStart.clientY;switch(this.moveStart.position){case"left":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-20);break;case"topleft":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-20),this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-20);break;case"top":this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-20);break;case"topright":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+20),this.cropper.y1=Math.min(this.moveStart.y1+i,this.cropper.y2-20);break;case"right":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+20);break;case"bottomright":this.cropper.x2=Math.max(this.moveStart.x2+e,this.cropper.x1+20),this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+20);break;case"bottom":this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+20);break;case"bottomleft":this.cropper.x1=Math.min(this.moveStart.x1+e,this.cropper.x2-20),this.cropper.y2=Math.max(this.moveStart.y2+i,this.cropper.y1+20)}this.maintainAspectRatio&&this.checkAspectRatio()},t.prototype.checkAspectRatio=function(){var t=0,e=0;switch(this.moveStart.position){case"top":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"bottom":this.cropper.x2=this.cropper.x1+(this.cropper.y2-this.cropper.y1)*this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"topleft":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(0-this.cropper.x1,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x1+=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"topright":this.cropper.y1=this.cropper.y2-(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(0-this.cropper.y1,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y1+=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"right":case"bottomright":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(this.cropper.x2-this.maxSize.width,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x2-=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio);break;case"left":case"bottomleft":this.cropper.y2=this.cropper.y1+(this.cropper.x2-this.cropper.x1)/this.aspectRatio,t=Math.max(0-this.cropper.x1,0),e=Math.max(this.cropper.y2-this.maxSize.height,0),(t>0||e>0)&&(this.cropper.x1+=e*this.aspectRatio>t?e*this.aspectRatio:t,this.cropper.y2-=e*this.aspectRatio>t?e:t/this.aspectRatio)}},t.prototype.crop=function(){var t=this,e=this.elementRef.nativeElement.querySelector(".source-image");if(e&&null!=this.originalImage){var i=this.originalSize.width/e.offsetWidth,r=Math.round(this.cropper.x1*i),o=Math.round(this.cropper.y1*i),n=this.getResizeRatio("400"),s=document.createElement("canvas");s.width="400"*n,s.height="400"*n;var a=s.getContext("2d");if(a){a.drawImage(this.originalImage,r,o,"400","400",0,0,"400"*n,"400"*n);var p=Math.min(1,Math.max(0,this.imageQuality/100)),l=s.toDataURL("image/"+this.format,p);l.length>10&&this.imageCroppedBase64.emit(l),s.toBlob(function(e){return t.imageCroppedFile.emit(e)},"image/"+this.format,p)}}},t.prototype.getResizeRatio=function(t){return this.resizeToWidth>0&&(!this.onlyScaleDown||t>this.resizeToWidth)?this.resizeToWidth/t:1},t.prototype.getClientX=function(t){return null!=t.clientX?t.clientX:t.touches[0].clientX},t.prototype.getClientY=function(t){return null!=t.clientY?t.clientY:t.touches[0].clientY},t}(),s=function(){}},fQIT:function(t,e,i){"use strict";var r=function(){function t(){}return t.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})},t}();i.d(e,"a",function(){return o});var o=function(){function t(t){this.file=t,this.filename=t,this.progress=0,this.id=r.newGuid(),this.message="",this.isCancel=!1,this.isError=!1}return Object.defineProperty(t.prototype,"isSuccess",{get:function(){return 100===this.progress},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isUploading",{get:function(){return this.progress>0&&this.progress<100},enumerable:!0,configurable:!0}),t}()}}]);