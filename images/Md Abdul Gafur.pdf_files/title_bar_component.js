define(["require","exports","tslib","esignature_prototype/data/selectors","external/react","external/react-redux","modules/clean/filepath","modules/clean/react/css_timing","modules/clean/file_store/utils","spectrum/file_icon","modules/clean/react/title_bar/base","modules/clean/react/file_viewer/title_bar/controls","modules/clean/react/file_viewer/title_bar/title","modules/clean/react/file_viewer/title_bar/title_breadcrumb","modules/constants/python","modules/core/i18n","external/classnames"],function(e,i,s,t,n,o,r,l,a,c,d,u,f,p,m,h,S){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var g=(function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i.isSharedFile=function(){return!!i.props.sharedLinkInfo},i.isMountedFile=function(){return!i.isSharedFile()},i.closeButtonTitle=function(){if(i.isMountedFile()){var e=void 0;if(i.props.isVersionHistoryMode)e=h._("Version history");else if(i.props.fileViewOrigin===m.FileViewOriginType.RECENTS)e=h._("Recents");else if(i.props.fileViewOrigin===m.FileViewOriginType.HOME)e=h._("Home");else{if(i.props.fileViewOrigin===m.FileViewOriginType.PHOTOS||i.props.fileViewAction===m.FileViewActionType.SEARCH)return h._("Close");var s=i.props.file;a.isBrowseFile(s)&&s.fq_path&&(e=r.filename(r.parent_dir(s.fq_path)))}if(e)return h._("Back to %(folder)s").format({folder:e})}return h._("Close")},i}return s.__extends(i,e),i.prototype.componentDidMount=function(){var e=this.props.onMount;e&&e()},i.prototype.render=function(){var e=this.props,i=e.canClose,s=e.canRestoreRevision,t=e.closeUrl,o=e.file,r=e.fileSubpath,l=e.hidePageChrome,m=e.isSeenStatesEnabled,h=e.isVersionHistoryMode,g=e.isViewingFileSubpath,_=e.maxFilenameEmLength,M=e.onClose,F=e.onRestoreRevision,v=e.sharedLinkInfo,y=e.sharePermission,b=e.shareToken,C=e.sizeClass,w=e.user,V=e.isSigningMode,T=e.isSendForSignatureMode,E=v?v.ownerTeamLogo:void 0,R=l?n.createElement("div",{className:"file-icon"},n.createElement(c.FileIcon,{path:a.getFilename(o)})):null,k=!(!y||0!==y.canViewMetadataRoles.length);return n.createElement(d.TitleBarBase,{canClose:i&&!l,className:S({"esignature-title-bar":T||V}),closeTitle:this.closeButtonTitle(),customLogoUrl:E,file:o,isSendForSignatureMode:T,closeUrl:t,onClose:M,overrideIcon:R,shouldShowIcon:!g,sizeClass:C,title:g?n.createElement(p.TitleBreadcrumb,{file:o,fileSubpath:r,sizeClass:C}):n.createElement(f.Title,{file:o,maxFilenameEmLength:_,sharedLinkInfo:v,shouldDisplayStarred:!l,shouldDisplayMetadata:!l,sizeClass:C,user:w}),controls:[l?null:n.createElement(u.SeenStates,{key:"seen-states",file:o,isSeenStatesEnabled:m,isVersionHistoryMode:h,isViewingFileSubpath:g,isViewMetadataDisabled:k,sharedLinkInfo:v,user:w,sizeClass:C}),l?null:n.createElement(u.FileActions,{key:"file-actions",canRestoreRevision:s,file:o,isSharedFile:this.isSharedFile(),isVersionHistoryMode:h,onRestoreRevision:F,sharedLinkInfo:v,sharePermission:y,shareToken:b,shouldDisplayActionButtons:!g,sizeClass:C,user:w,isSigningMode:V,isSendForSignatureMode:T})]})},i.defaultProps={canClose:!1,canRestoreRevision:!1,isSeenStatesEnabled:!0,isVersionHistoryMode:!1,isSendForSignatureMode:!1,isSigningMode:!1},i})(n.Component);i._TitleBar=g;var _=function(e){return{isSendForSignatureMode:t.getIsSendForSignatureMode(e),isSigningMode:t.getIsSigningMode(e)}},M=o.connect(_,void 0)(g),F=l.requireCssWithComponent(M,["/static/css/react_title_bar-vflFmgAnG.css"]);i.TitleBar=F});
//# sourceMappingURL=title_bar_component.min.js-vflmbohme.map