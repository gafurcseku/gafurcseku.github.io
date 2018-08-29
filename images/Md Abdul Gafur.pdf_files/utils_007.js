define(["require","exports","modules/clean/open_with","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/open_button/types","modules/clean/react/file_viewer/unity/unity_utils","modules/clean/react/file_viewer/utils","modules/clean/react/paper/utils","modules/clean/react/file_viewer/data/actions","modules/core/i18n"],function(e,n,t,i,r,o,s,u,p,l){"use strict";function a(e){var n=e.file,t=e.hasOpenInPaperSupport,o=e.isUnityDisabled,u=e.isOpenWithDisabled,a=e.unityInfo,v=e.user;if(!a)return[];var U=[];t&&U.push({handler:m({file:n,user:v}),spriteName:"paper",text:l._("Copy to Paper"),type:r.OpenButtonAction.OPEN_IN_PAPER,userAction:i.UserAction.CopyToPaper}),f({isUnityDisabled:o,unityInfo:a})&&U.push({handler:O({file:n,user:v,isFolder:!1}),spriteName:"ow_desktop",text:_(a),type:r.OpenButtonAction.UNITY_FILE,userAction:i.UserAction.OpenInUnity});var A=s.OpenWithHelpers.getOpenWithHandlerData(n,v);return d({file:n,isOpenWithDisabled:u,user:v})&&A&&U.push({handler:h({file:n,user:v}),spriteName:A.icon,text:A.name,type:r.OpenButtonAction.OPEN_WITH,userAction:i.UserAction.OpenInOfficeOnline}),c({isUnityDisabled:o,unityInfo:a})&&U.push({handler:O({file:n,user:v,isFolder:!0}),spriteName:"ow_folder",text:y(a),type:r.OpenButtonAction.UNITY_FOLDER,userAction:i.UserAction.OpenInUnityFolder}),U.length||U.push({handler:function(){return p.download(n)},spriteName:null,text:l._("Download"),type:r.OpenButtonAction.DOWNLOAD,userAction:i.UserAction.Download}),U}function c(e){var n=e.isUnityDisabled,t=e.unityInfo;return!n&&o.UnityHelpers.isUnityFolderSupported(t)}function f(e){var n=e.isUnityDisabled,t=e.unityInfo;return!n&&o.UnityHelpers.isUnityFileSupported(t)}function d(e){var n=e.file,t=e.isOpenWithDisabled,i=e.user;return!t&&s.OpenWithHelpers.canOpenWith(n,i)}function _(e){var n=(e?e.open_application_name:void 0)||l._("Desktop");return l._("Open in %(app_name)s").format({app_name:n})}function y(e){var n=(null!==e?e.file_browser_display_name:void 0)||l._("File Browser");return l._("Show in %(file_browser)s").format({file_browser:n})}function O(e){var n=e.file,t=e.isFolder,i=e.user;return function(){o.UnityHelpers.openFile(n.ns_id,n.ns_path,i.id,t)}}function h(e){var n=e.file,t=e.user;return function(){s.OpenWithHelpers.openWith(n,t)}}function m(e){var n=e.file,t=e.user;return function(){u.openFileInPaper({file:n,user:t})}}function v(e,n){var i=e.map(function(e){return e.type}).includes(r.OpenButtonAction.UNITY_FILE),o=n&&t.is_adobe_app(n.open_application_identifier),s=e.map(function(e){return e.type}).includes(r.OpenButtonAction.OPEN_WITH);return i&&o||s}Object.defineProperty(n,"__esModule",{value:!0}),n.getOpenOptions=a,n.shouldShowCoachmark=v});
//# sourceMappingURL=utils.min.js-vfl2hqv1y.map