define("modules/clean/react/async_file_modal_controller",["require","exports","tslib","modules/core/exception"],function(e,n,o,t){"use strict";function r(n){return o.__awaiter(this,void 0,void 0,function(){var t;return o.__generator(this,function(o){switch(o.label){case 0:return[4,new Promise(function(n,o){e(["modules/clean/react/file_modal_controller"],n,o)})];case 1:return t=o.sent(),n(t),[2]}})})}function i(e,n,o,t){r(function(r){return(0,r.showRestore)(e,n,o,t)})}function s(n){e(["modules/clean/react/file_modals"],function(e){(0,e.showUnifiedTrashModal)(n)})}function a(n){e(["modules/clean/react/file_modals"],function(e){(0,e.showPurgeModal)(n)})}function u(e,n,o){r(function(t){return(0,t.showPermanentlyDelete)(e,n,o)})}function c(e,n,o,t,i){r(function(r){(0,r.showDelete)(e,n,o,t,i)})}function l(e,n,o){r(function(t){return(0,t.showNoAccess)(e,n,o)})}function f(e,n,o){r(function(t){return(0,t.showContentManagerBridge)(e,n,o)})}function d(e){r(function(n){return(0,n.showConfirmOwnershipTransferModal)(e)})}function h(e){if(!(e.fsws.length>0))return void t.reportStack("Opening FSW modal without fsws",{severity:t.SEVERITY.NONCRITICAL,tags:["x_platform_fsw"]});r(function(n){return(0,n.showFileSystemWarningsModal)(e)})}Object.defineProperty(n,"__esModule",{value:!0}),n.showRestore=i,n.showUnifiedTrashModal=s,n.showPurgeModal=a,n.showPermanentlyDelete=u,n.showDelete=c,n.showNoAccess=l,n.showContentManagerBridge=f,n.showConfirmOwnershipTransferModal=d,n.showFileSystemWarningsModal=h}),define("modules/clean/react/async_overquota_modal_controller",["require","exports","tslib"],function(e,n,o){"use strict";function t(n,t,r){return o.__awaiter(this,void 0,void 0,function(){var i;return o.__generator(this,function(o){switch(o.label){case 0:return[4,new Promise(function(n,o){e(["modules/clean/react/overquota_modal_controller"],n,o)})];case 1:return i=o.sent().showOverquota,i({oqa:n,tagline:t,headline:r}),[2]}})})}Object.defineProperty(n,"__esModule",{value:!0}),n.showOverquota=t});
//# sourceMappingURL=pkg-browse-more.min.js-vflVUIqt9.map