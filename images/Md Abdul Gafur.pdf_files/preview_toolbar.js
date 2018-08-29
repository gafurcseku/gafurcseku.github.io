define(["require","exports","tslib","esignature_prototype/components/esignature_toolbar_section","esignature_prototype/constants","esignature_prototype/data/actions","esignature_prototype/data/selectors","external/keymaster","external/react","external/react-redux","external/classnames","jquery","modules/clean/analytics","modules/clean/keycode","modules/clean/react/css_timing","modules/clean/react/file_viewer/logging","modules/clean/previews/util","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/full_screen_helpers","modules/clean/react/file_viewer/sidebar_helpers","modules/clean/react/keyboard_binding/keyboard_binding_connector","modules/clean/react/previews/constants","modules/clean/react/previews/frame_messenger_host","modules/clean/react/previews/preview_toolbar_button","modules/clean/react/size_class/constants","modules/core/dom","modules/core/exception","modules/core/i18n"],function(e,t,o,n,r,i,s,a,l,p,c,u,d,y,g,m,h,T,f,b,w,P,v,C,_,S,K,M){"use strict";function E(e){var t=e.currentPage,o=e.docType,n=e.pagesCount,r=e.sizeClass;if(!t||!n)return null;var i="";i=r===_.SizeClass.Small?M._("%(current_page)s of %(pages_count)s"):o===T.DocType.ppt?M._("Slide %(current_page)s of %(pages_count)s"):M._("Page %(current_page)s of %(pages_count)s");var s=i.format({current_page:t,pages_count:n});return l.createElement("div",{className:B.PAGE_INDICATOR},s)}Object.defineProperty(t,"__esModule",{value:!0});var O={};O[y.KeyCode.ESC]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.SPACE]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.PAGE_UP]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.PAGE_DOWN]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.LEFT]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.UP]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.RIGHT]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.DOWN]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.EQUALS]={altKey:!0,ctrlKey:!0,metaKey:!0},O[70]={altKey:!1,ctrlKey:!0,metaKey:!0},O[80]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.PLUS_EQUALS_FF]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.MINUS_FF]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.PLUS_EQUALS_FF_GERMAN]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.MINUS_FF_MAC]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.PLUS_CHROME]={altKey:!0,ctrlKey:!0,metaKey:!0},O[y.KeyCode.MINUS_CHROME]={altKey:!0,ctrlKey:!0,metaKey:!0};var F,B={ENABLE_REGION_CREATION:"enable-region-creation",FULLSCREEN:"fullscreen",PAGE_DOWN:"page-down",PAGE_INDICATOR:"page-indicator",PAGE_UP:"page-up",PRINT:"print",SIDEBAR:"sidebar",ZOOM_IN:"zoom-in",ZOOM_OUT:"zoom-out"},A=(L={},L[T.DocType.default]=[],L[T.DocType.pdf]=[P.PreviewToolbarButtonType.Sidebar,P.PreviewToolbarButtonType.PageIndicator,P.PreviewToolbarButtonType.ZoomIn,P.PreviewToolbarButtonType.ZoomOut,P.PreviewToolbarButtonType.PageUp,P.PreviewToolbarButtonType.PageDown,P.PreviewToolbarButtonType.Fullscreen,P.PreviewToolbarButtonType.Print,P.PreviewToolbarButtonType.EnableRegionCreation],L[T.DocType.ppt]=[P.PreviewToolbarButtonType.Sidebar,P.PreviewToolbarButtonType.PageIndicator,P.PreviewToolbarButtonType.PageUp,P.PreviewToolbarButtonType.PageDown,P.PreviewToolbarButtonType.Fullscreen,P.PreviewToolbarButtonType.Print,P.PreviewToolbarButtonType.EnableRegionCreation],L[T.DocType.spreadsheet]=[P.PreviewToolbarButtonType.ZoomIn,P.PreviewToolbarButtonType.ZoomOut,P.PreviewToolbarButtonType.Fullscreen,P.PreviewToolbarButtonType.Print],L[T.DocType.html]=[P.PreviewToolbarButtonType.Fullscreen,P.PreviewToolbarButtonType.Print],L),I=(G={},G[T.DocType.default]=[],G[T.DocType.pdf]=[P.PreviewToolbarButtonType.PageIndicator],G[T.DocType.ppt]=[P.PreviewToolbarButtonType.PageIndicator],G[T.DocType.spreadsheet]=[],G[T.DocType.html]=[],G);(function(e){e.ClearMouseTracking="clear-mouse-tracking",e.EnableRegionCreation="enable-region-creation",e.EnterFullscreen="enter-fullscreen",e.ExitViewerFullscreen="exit-viewer-fullscreen",e.PageDown="page-down",e.PageUp="page-up",e.PreviewToolbarMounted="preview-toolbar-mounted",e.Print="print",e.ScreenDown="screen-down",e.ScreenUp="screen-up",e.ScrollDown="scroll-down",e.ScrollLeft="scroll-left",e.ScrollRight="scroll-right",e.ScrollUp="scroll-up",e.ZoomIn="zoom-in",e.ZoomOut="zoom-out"})(F||(F={}));var U=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){var e=t.props,o=e.isSidebarOpen,n=e.onClick,r=e.onSidebarClose,i=e.onSidebarOpen;o&&r?r():i&&i(),n&&n()},t}return o.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,o=e.isSidebarOpen;return l.createElement(C.PreviewToolbarButton,{className:B.SIDEBAR,disabled:t,iconName:o?"sidebar_hide":"sidebar_show",tooltip:o?M._("Hide sidebar"):M._("Show sidebar"),onClick:this.handleClick})},t})(l.PureComponent),N=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.previewOpen=!1,t.state={currentPage:1,visible:!1,fadingOut:!1,disabledButtons:{}},t.handleMessageFromChild=function(e){var o={input_method:"child-message",file_ext:t.props.fileExtension},n={context:T.UserActionContext.Unknown};switch(e.action){case"page-change":var r=e.parameters,i=t.isToolbarReadyToShow(),s=t.sanitizePageNumber(r.current_page),a=t.sanitizePageNumber(t.props.pagesCount||r.pages_count);if(s<=0||a<=0)break;var l={pageUp:s<=1,pageDown:s>=a,print:!t.canPrint()};t.setState({currentPage:s,disabledButtons:l},function(){!i&&t.isToolbarReadyToShow()&&(t.fadeIn(),t.startIdleTimeout())});break;case"idle-mouse":t.state.hovering||t.fadeOut(),d.PreviewActivityLogger.log("idle-mouse",o);break;case"active-mouse":t.fadeIn();break;case"exit-parent-fullscreen":t.setFullScreen(!1,n);break;case"keydown":t.onKeydown(e.parameters);break;case"get-keydown-keys-handled-by-parent":t.postKeysHandledByParent()}},t.onSidebarClose=function(){"function"==typeof t.props.onSidebarClose&&t.props.onSidebarClose(T.UserActionContext.Toolbar)},t.onSidebarOpen=function(){"function"==typeof t.props.onSidebarOpen&&t.props.onSidebarOpen(T.UserActionContext.Toolbar)},t.onMouseEnterToolbar=function(){t.frameMessenger.postMessageToChildren(F.ClearMouseTracking),t.setState({hovering:!0}),t.clearIdleTimeout()},t.onMouseLeaveToolbar=function(){t.setState({hovering:!1})},t.onKeydown=function(e){var o=!1;if(t.frameMessenger.childIsValidated()&&"dbmodal"!==a.getScope()&&!S.focus_in_input()&&!S.is_input(e.target)){if(null!=e.target){var n=u("#file-comments");if(1!==n.length&&(n=u("#photo-comments")),1===n.length&&(e.target===n[0]||u.contains(n[0],e.currentTarget)))return}var r={input_method:"keydown",file_ext:t.props.fileExtension,extra:JSON.stringify({keycode:e.keyCode})},i={context:T.UserActionContext.Keyboard},s=e.keyCode;return t.props.docType!==T.DocType.ppt&&[y.KeyCode.EQUALS,y.KeyCode.PLUS_EQUALS_FF,y.KeyCode.PLUS_CHROME,y.KeyCode.PLUS_EQUALS_FF_GERMAN].indexOf(s)>-1?(t.zoomIn(i),o=!0):t.props.docType!==T.DocType.ppt&&[y.KeyCode.MINUS_FF_MAC,y.KeyCode.MINUS_FF,y.KeyCode.MINUS_CHROME].indexOf(s)>-1?(t.zoomOut(i),o=!0):s===y.KeyCode.LEFT?(t.scrollLeft(r),o=!0):s===y.KeyCode.RIGHT?(t.scrollRight(r),o=!0):s===y.KeyCode.PAGE_UP?(t.props.docType===T.DocType.ppt?t.pageUp(r):t.screenUp(r),o=!0):[y.KeyCode.SPACE,y.KeyCode.PAGE_DOWN].indexOf(s)>-1?(t.props.docType===T.DocType.ppt?t.pageDown(r):t.screenDown(r),o=!0):s===y.KeyCode.UP?(t.props.docType===T.DocType.ppt?t.pageUp(r):t.scrollUp(r),o=!0):s===y.KeyCode.DOWN?(t.props.docType===T.DocType.ppt?t.pageDown(r):t.scrollDown(r),o=!0):70!==s||e.ctrlKey||e.metaKey?70===s&&(e.ctrlKey||e.metaKey)?t.searchInline(i):80===s?(t.printDocument(i),o=!0):s===y.KeyCode.ESC&&(t.isViewerFullscreen()?t.exitFullscreen(i):t.props.afterFileViewerExit&&!t.isAnnotationBubbleShown()&&t.exitPreview(r),o=!0):(t.isViewerFullscreen()?t.exitFullscreen(i):t.enterFullscreen(i),o=!0),o&&null!=e.preventDefault&&e.preventDefault(),!o}},t.onIdleTimeout=function(){t.clearIdleTimeout(),t.fadeOut()},t.pageUp=function(e){t.logAndPostMessage(F.PageUp,"page-up",e)},t.pageDown=function(e){t.logAndPostMessage(F.PageDown,"page-down",e)},t.screenUp=function(e){t.logAndPostMessage(F.ScreenUp,"screen-up",e)},t.screenDown=function(e){t.logAndPostMessage(F.ScreenDown,"screen-down",e)},t.scrollUp=function(e){t.logAndPostMessage(F.ScrollUp,"scroll-up",e)},t.scrollDown=function(e){t.logAndPostMessage(F.ScrollDown,"scroll-down",e)},t.scrollRight=function(e){t.logAndPostMessage(F.ScrollRight,"scroll-right",e)},t.scrollLeft=function(e){t.logAndPostMessage(F.ScrollLeft,"scroll-left",e)},t}return o.__extends(t,e),t.prototype.reset=function(){this.clearAllTimeouts(),this.setState({currentPage:0,visible:!1,fadingOut:!1,disabledButtons:{}})},t.prototype.setFullScreen=function(e,t){e?f.enterFullScreen(!0,t.context):f.exitFullScreen(t.context)},t.prototype.isViewerFullscreen=function(){return this.props.isFullscreen||f.isBrowserFullscreen()},t.prototype.postKeysHandledByParent=function(){this.frameMessenger.postMessageToChildren("keydown-keys-handled-by-parent",{keycodes:O})},t.prototype.onPreviewOpen=function(){return!!this.previewOpen||(u(document).on("keydown",this.onKeydown),this.previewOpen=!0,!0)},t.prototype.onPreviewClose=function(){return!this.previewOpen||(u(document).off("keydown",this.onKeydown),this.reset(),this.frameMessenger.resetOriginsForPosting(),this.previewOpen=!1,!0)},t.prototype.componentDidMount=function(){this.props.frameMessenger?this.frameMessenger=this.props.frameMessenger:this.frameMessenger=new v.PreviewFrameMessengerHost,this.frameMessenger.configureChildMessaging(h.getIframeQuery(),this.handleMessageFromChild,["page-change","idle-mouse","active-mouse","exit-parent-fullscreen","keydown","child-focus","get-keydown-keys-handled-by-parent"]),this.frameMessenger.startListening(),this.postKeysHandledByParent(),this.onPreviewOpen(),this.frameMessenger.postMessageToChildren(F.PreviewToolbarMounted),this.fadeIn(),this.startIdleTimeout()},t.prototype.componentWillUnmount=function(){this.clearAllTimeouts(),this.onPreviewClose(),this.frameMessenger.stopListening()},t.prototype.canPrint=function(){return!(this.props.sharePermission&&this.props.sharePermission.canPrintRoles&&0===this.props.sharePermission.canPrintRoles.length)},t.prototype.showButton=function(e){var t=this.props.sizeClass===_.SizeClass.Small?I[this.props.docType]:A[this.props.docType];return this.props.isSendForSignatureMode?t=r.ESIGNATURE_SEND_FOR_SIGNATURE_MODE_TOOLBAR_CONFIGURATION:this.props.isSigningMode&&(t=r.ESIGNATURE_SIGNING_MODE_TOOLBAR_CONFIGURATION),Array.isArray(t)&&t.includes(e)},t.prototype.render=function(){var e,t=this,o=this.props,r=o.docType,i=o.fileExtension,s=o.isArchiveFile,a=o.isFullscreen,p=o.isHidden,u=o.isSidebarOpen,d=o.pagesCount,y=o.shouldDisplayRegionCreationButton,g=o.sizeClass,m=r===T.DocType.ppt?M._("Previous slide"):M._("Page up"),h=r===T.DocType.ppt?M._("Next slide"):M._("Page down");e=this.canPrint()?M._("Print"):M._("Printing is turned off for this file.");var f={input_method:"click",file_ext:i},v={context:T.UserActionContext.Toolbar},_=function(e){return function(){e(),t.frameMessenger.postMessageToChildren(F.ClearMouseTracking)}};return l.createElement("div",{className:c("preview-toolbar-overlay-container",{hide:(!this.state.visible||p)&&!this.props.isSendForSignatureMode,fadeout:this.state.fadingOut&&!this.props.isSendForSignatureMode})},l.createElement(w.KeyboardBindingConnector,{allKeyCallback:this.onKeydown}),l.createElement("div",{className:"preview-toolbar-overlay",onMouseEnter:this.onMouseEnterToolbar,onMouseLeave:this.onMouseLeaveToolbar},l.createElement("div",{className:"preview-toolbar-content"},this.showButton(P.PreviewToolbarButtonType.Sidebar)&&b.isSidebarEnabled(r,g,a)?l.createElement(U,{isSidebarOpen:u,onSidebarClose:this.onSidebarClose,onSidebarOpen:this.onSidebarOpen}):null,this.showButton(P.PreviewToolbarButtonType.PageIndicator)?l.createElement(E,{currentPage:this.state.currentPage,docType:r,pagesCount:d,sizeClass:g}):null,this.showButton(P.PreviewToolbarButtonType.ZoomOut)?l.createElement(C.PreviewToolbarButton,{className:B.ZOOM_OUT,spriteGroup:"web",spriteName:"zoomout",tooltip:M._("Zoom out"),onClick:_(function(){return t.zoomOut(v)})}):null,this.showButton(P.PreviewToolbarButtonType.ZoomIn)?l.createElement(C.PreviewToolbarButton,{className:B.ZOOM_IN,spriteGroup:"web",spriteName:"zoom",tooltip:M._("Zoom in"),onClick:_(function(){return t.zoomIn(v)})}):null,this.showButton(P.PreviewToolbarButtonType.PageUp)?l.createElement(C.PreviewToolbarButton,{disabled:this.state.disabledButtons.pageUp,className:B.PAGE_UP,spriteGroup:"web",spriteName:"up",tooltip:m,onClick:_(function(){return t.pageUp(f)})}):null,this.showButton(P.PreviewToolbarButtonType.PageDown)?l.createElement(C.PreviewToolbarButton,{disabled:this.state.disabledButtons.pageDown,className:B.PAGE_DOWN,spriteGroup:"web",spriteName:"down",tooltip:h,onClick:_(function(){return t.pageDown(f)})}):null,this.showButton(P.PreviewToolbarButtonType.Fullscreen)?l.createElement(C.PreviewToolbarButton,{className:B.FULLSCREEN,spriteGroup:"web",spriteName:"fullscreen",tooltip:M._("Fullscreen"),onClick:_(function(){return t.toggleFullscreen(v)})}):null,this.showButton(P.PreviewToolbarButtonType.Print)&&!s?l.createElement(C.PreviewToolbarButton,{disabled:!this.canPrint(),className:B.PRINT,spriteGroup:"web",spriteName:"print",tooltip:e,onClick:this.canPrint()?_(function(){return t.printDocument(v)}):function(){}}):null,this.showButton(P.PreviewToolbarButtonType.EnableRegionCreation)&&y?l.createElement(C.PreviewToolbarButton,{className:B.ENABLE_REGION_CREATION,spriteGroup:"web",spriteName:"ic_comment_area_large",tooltip:M._("Comment on specific areas"),onClick:_(function(){return t.onRegionCreationClick()})}):null,this.showButton(P.PreviewToolbarButtonType.Sidebar)&&this.props.isSendForSignatureMode?l.createElement(n.EsignatureToolbarSection,{enterFieldCreationMode:this.props.enterFieldCreationMode}):null)))},t.prototype.sanitizePageNumber=function(e){return null==e?0:isNaN(e)?0:e},t.prototype.fadeOut=function(){this.state.fadingOut||this.clearFadeTimeout(),this.setState({fadingOut:!0,tooltipClass:void 0}),this.props.onToolbarHide&&this.props.onToolbarHide(),this.startFadeTimeout()},t.prototype.fadeIn=function(){this.clearIdleTimeout(),this.isViewerFullscreen()||this.isToolbarReadyToShow()&&(this.clearFadeTimeout(),this.setState({visible:!0,fadingOut:!1}),this.props.onToolbarShow&&this.props.onToolbarShow())},t.prototype.isAnnotationBubbleShown=function(){return u(".annotation-bubble-container .bubble-dropdown").length>0},t.prototype.startFadeTimeout=function(){var e=this;this.fadeTimeout=setTimeout(function(){e.fadeTimeout=void 0,e.setState({visible:!1,fadingOut:!1})},400)},t.prototype.clearFadeTimeout=function(){this.fadeTimeout&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=void 0)},t.prototype.startIdleTimeout=function(){this.clearIdleTimeout(),this.idleTimeout=setTimeout(this.onIdleTimeout,1500)},t.prototype.clearIdleTimeout=function(){null!=this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=void 0)},t.prototype.clearAllTimeouts=function(){this.clearFadeTimeout(),this.clearIdleTimeout()},t.prototype.isToolbarReadyToShow=function(){return!!this.state.currentPage&&!!this.props.pagesCount},t.prototype.logData=function(e,t){return"string"==typeof t.input_method?d.PreviewActivityLogger.log(e,t):K.assert(!1,"logData not correctly formed"),"string"==typeof t.input_method},t.prototype.logUserAction=function(e,t){m.logUserAction(e,t)},t.prototype.logAndPostMessage=function(e,t,o){this.logData(t,o)&&this.frameMessenger.postMessageToChildren(e)},t.prototype.zoomIn=function(e){this.frameMessenger.postMessageToChildren(F.ZoomIn),this.logUserAction(T.UserAction.ZoomIn,e.context)},t.prototype.zoomOut=function(e){this.frameMessenger.postMessageToChildren(F.ZoomOut),this.logUserAction(T.UserAction.ZoomOut,e.context)},t.prototype.toggleFullscreen=function(e){this.isViewerFullscreen()?this.exitFullscreen(e):this.enterFullscreen(e)},t.prototype.enterFullscreen=function(e){this.setFullScreen(!0,e)},t.prototype.exitFullscreen=function(e){this.setFullScreen(!1,e)},t.prototype.exitPreview=function(e){if(this.logData("exit-preview",e))return"function"==typeof this.props.afterFileViewerExit?this.props.afterFileViewerExit():void 0},t.prototype.printDocument=function(e){this.frameMessenger.postMessageToChildren(F.Print,{context:e.context})},t.prototype.searchInline=function(e){this.logUserAction(T.UserAction.InlineSearch,e.context)},t.prototype.onRegionCreationClick=function(){this.props.onRegionCreationClick&&this.props.onRegionCreationClick()},t})(l.Component);t._PreviewToolbar=N;var D=function(e){return{isSendForSignatureMode:s.getIsSendForSignatureMode(e),isSigningMode:s.getIsSigningMode(e)}},x={enterFieldCreationMode:i.enterFieldCreationMode},k=p.connect(D,x)(N);k.defaultProps={isSidebarOpen:!1,docType:T.DocType.default};var R=g.requireCssWithComponent(k,["/static/css/preview_toolbar-vfltiivAw.css"]);t.PreviewToolbar=R,t.PageIndicator=E;var L,G});
//# sourceMappingURL=preview_toolbar.min.js-vflms3GE5.map