define("modules/clean/api_v2/root_aware_client",["require","exports","tslib","external/lodash","modules/clean/api_v2/client","modules/clean/viewer","modules/core/html","modules/core/i18n","modules/core/notify"],function(e,t,n,r,o,s,a,i,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype._rpc=function(t,n,o){var a={},i=s.Viewer.get_viewer().get_user_by_id(o.subjectUserId);return i&&i.root_ns_id&&(a["X-Dropbox-Path-Root"]=String(i.root_ns_id)),r.assignIn(a,o.headers),e.prototype._rpc.call(this,t,n,{subjectUserId:o.subjectUserId,headers:a})},t})(o.ApiV2Client);t.ApiV2RootAwareClient=l;var u=(function(e){function t(){return e.call(this)||this}return n.__extends(t,e),t.prototype._rpc=function(t,n,r){return e.prototype._rpc.call(this,t,n,r).catch(function(e){if(r.flashError){var t=e.message instanceof a.HTML?e.message.toHTML():e.message;c.Notify.error(t||i._("There was a problem completing this request."))}return Promise.reject(e)})},t})(l);t.UserActionsRootAwareClient=u}),define("modules/clean/avatar/overflow_count_pill",["require","exports","tslib","external/react","external/react-dom-factories","external/prop-types","modules/clean/avatar/size","modules/clean/avatar/style","modules/clean/css","modules/core/i18n"],function(e,t,n,r,o,s,a,i,c,l){"use strict";return(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.componentDidMount=function(){return c.require_css("/static/css/scooter/scooter-scoped-vflrM1SRf.css")},t.prototype.render=function(){var e=" +"+this.props.count+" ",t=l.ungettext("%(count)s more member","%(count)s more members",this.props.count).format({count:this.props.count});return null!=this.props.onClick?o.button({className:i.getClassName(this.props.dimension,["overflow-pill c-avatar--meta u-unbutton"]),onClick:this.props.onClick},o.span({"aria-hidden":!0},e),o.span({className:"ax-visually-hidden"},t)):o.div({className:i.getClassName(this.props.dimension,["overflow-pill c-avatar--meta"])},o.span({"aria-hidden":!0},e),o.span({className:"ax-visually-hidden"},t))},t.displayName="OverflowCountPill",t.propTypes={dimension:s.oneOf(a.VALID_AVATAR_DIMENSIONS).isRequired,count:s.number.isRequired,onClick:s.func},t})(r.Component)}),define("modules/clean/react/snackbar",["require","exports","tslib","external/react","external/react-dom","modules/clean/react/css","spectrum/snackbar","modules/core/i18n"],function(e,t,n,r,o,s,a,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=(function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n.state={progress:0},n.handleTimeout=function(){n.props.onTimeout&&n.props.onTimeout()},n.handleProgressLoop=function(){n.setState(function(e){return{progress:(e.progress+t.LOOP_UPDATE_STEP)%(t.MAX_PROGRESS+1)}})},n}return n.__extends(t,e),t.prototype.componentDidMount=function(){var e=this.props,n=e.syncProgressLoop,r=e.timeoutDelayMs;r&&(this.timer=setTimeout(this.handleTimeout,r)),n&&(this.progressLoop=setInterval(this.handleProgressLoop,t.LOOP_UPDATE_RATE)),this.props.onShown&&this.props.onShown()},t.prototype.componentWillUnmount=function(){this.timer&&clearTimeout(this.timer),this.progressLoop&&clearInterval(this.progressLoop),this.props.onClosed&&this.props.onClosed()},t.prototype.render=function(){var e=this.props,t=e.title,n=e.variant,o=e.actionButtonText,s=e.closeButtonText,i=e.externalProgress,c=i||this.state.progress;return r.createElement(a.Snackbar,{progress:c,variant:n,title:t},this.props.children,o&&r.createElement(a.SnackbarAction,{onClick:this.props.onActionClick},o),s&&r.createElement(a.SnackbarAction,{onClick:this.props.onCloseClick},s))},t.displayName="ControlledSnackbar",t.LOOP_UPDATE_RATE=16,t.LOOP_UPDATE_STEP=.2,t.MAX_PROGRESS=100,t.defaultProps={syncProgressLoop:!1},t})(r.Component);t.ControlledSnackbar=s(c,["/static/css/snackbar-vflLtw9Um.css","/static/css/spectrum/index.web-vflu1RHct.css"]);var l=(function(e){function s(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleActionClick=function(e){var n=t.props.onActionClick;n&&n(e)},t.handleCloseClick=function(){var e=t.props.onCloseClick;s.close(),e&&e()},t.handleTimeout=function(){var e=t.props.onTimeout;s.close(),e&&e()},t}return n.__extends(s,e),s.show=function(e){var t=s.getOrCreateContainer();return s.close(),o.render(e,t)},s.update=function(e){var t=s.getOrCreateContainer();return o.render(e,t)},s.close=function(){var e=s.getOrCreateContainer();o.unmountComponentAtNode(e)},s.generic=function(e){return s.show(r.createElement(s,{closeButtonText:i._("Close"),timeoutDelayMs:5e3,title:e,variant:"generic"}))},s.sync=function(e,t){return s.show(r.createElement(s,{syncProgressLoop:t,timeoutDelayMs:void 0,title:e,variant:"sync"}))},s.complete=function(e){return s.show(r.createElement(s,{closeButtonText:i._("Close"),timeoutDelayMs:5e3,title:e,variant:"complete"}))},s.warn=function(e){return s.show(r.createElement(s,{closeButtonText:i._("Close"),timeoutDelayMs:5e3,title:e,variant:"warn"}))},s.fail=function(e){return s.show(r.createElement(s,{closeButtonText:i._("Close"),timeoutDelayMs:5e3,title:e,variant:"fail"}))},s.getOrCreateContainer=function(){var e=document.getElementById(s.SNACKBAR_ROOT_ID);return e||(e=document.createElement("div"),e.id=s.SNACKBAR_ROOT_ID,e.className=s.SNACKBAR_CONTAINER_CLASSNAME,document.body.insertBefore(e,document.body.firstChild)),e},s.prototype.render=function(){return r.createElement(t.ControlledSnackbar,n.__assign({},this.props,{onActionClick:this.handleActionClick,onCloseClick:this.handleCloseClick,onTimeout:this.handleTimeout}))},s.SNACKBAR_ROOT_ID="react-snackbar-root",s.SNACKBAR_CONTAINER_CLASSNAME="snackbar-container",s.snackbarTypes=["generic","sync","complete","warn","fail"],s})(r.Component);t.Snackbar=l}),define("modules/clean/sharing/ui_notifications_util",["require","exports","external/react","modules/clean/em_string","modules/clean/react_format","modules/clean/react/snackbar","modules/clean/sharing/constants","modules/core/i18n"],function(e,t,n,r,o,s,a,i){"use strict";function c(e){s.Snackbar.complete(o.reactFormat(l("Shared <st>%(folder_name)s</st>."),{st:n.createElement("strong",null),folder_name:r.Emstring.em_snippet(e,a.SNIPPET_SIZES.FILENAME)}))}Object.defineProperty(t,"__esModule",{value:!0});var l=i.i18n_default_project("sharing")._,u=function(e){return s.Snackbar.fail(e)};t.sharingNotificationError=u;var p=function(e){return s.Snackbar.generic(e)};t.sharingNotificationInfo=p;var m=function(e){return s.Snackbar.complete(e)};t.sharingNotificationSuccess=m,t.showInBandShareSuccessSnackbar=c}),define("modules/clean/sharing/views/hover_close_button",["require","exports","tslib","external/classnames","external/react","external/react-dom-factories","external/prop-types","external/lodash","modules/clean/react/sprite","modules/core/i18n"],function(e,t,n,r,o,s,a,i,c,l){"use strict";var u,p=l.i18n_default_project("sharing")._,m=o.createElement;d=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={hover:!1},t}return n.__extends(t,e),t.prototype.render=function(){var e=this,t={className:r("c-borderless-button",this.props.className),onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}};return s.button(i.assignIn(t,i.omit(this.props,Object.keys(t))),m(c.Sprite,{group:"web",name:this.state.hover?"xclose":"xclose_light_gray",alt:p("Close Modal")}))},t})(o.Component),d.displayName="HoverCloseButton",d.propTypes={className:a.string},u=d;var d;return u});
//# sourceMappingURL=pkg-sharing-sync-and-share-page.min.js-vflOhj1cJ.map