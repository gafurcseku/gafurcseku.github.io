define(["require","exports","tslib","react","classnames","spectrum_comments/thread","spectrum_comments/comment","spectrum_comments/comment_editor/comment_utils","spectrum_comments/comment_editor/comment_editor","spectrum_comments/comment_editor/components/post_bar","spectrum_comments/utils/scroll_list","spectrum_comments/experiments_provider/experiments_provider"],function(e,t,n,o,r,i,a,d,s,c,m,l){"use strict";function u(e){return e.isEmpty?null:o.createElement(c.PostBar,n.__assign({},e,{postLabel:"Post",cancelLabel:"Cancel",disableCancelButton:e.isEmpty}))}Object.defineProperty(t,"__esModule",{value:!0});var p=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={content:d.createEmptyContent(),editedComment:void 0},t.onThreadActivated=function(e){return function(){t.props.actionsAdapter.onThreadActivated(e)}},t.onStartEdit=function(e){t.setState({editedComment:e})},t.onEndEdit=function(){t.setState({editedComment:void 0})},t.handleClick=function(e){e.currentTarget===e.target&&t.props.actionsAdapter.onAllThreadsDeactivated()},t.onThreadReplyCancel=function(){t.onTopEditorCancel(),t.props.actionsAdapter.onAllThreadsDeactivated()},t.onTopEditorCancel=function(){t.setState({content:d.createEmptyContent(),editedComment:void 0})},t.onEditorFocus=function(){t.props.actionsAdapter.onAllThreadsDeactivated(),t.props.actionsAdapter.onEditorFocused()},t}return n.__extends(t,e),t.prototype.render=function(){var e=this,t=this.props,d=t.actionsAdapter,c=d.onCommentDeleted,p=d.onCommentEdited,h=d.onClickTimeCode,C=d.onEditorFocused,E=d.onMentionsQueryUpdated,v=d.onThreadCreated,f=d.onThreadMarkedAsRead,_=d.onThreadMarkedAsUnread,T=d.onThreadRepliedTo,y=d.onThreadResolved,A=d.onThreadUnresolved,M=t.className,b=void 0===M?"":M,k=t.commentComponent,S=void 0===k?function(e){return o.createElement(a.Comment,n.__assign({},e))}:k,R=t.editorComponent,g=void 0===R?function(e){return o.createElement(s.CommentEditor,n.__assign({},e))}:R,U=t.enabled,D=t.user,F=t.mentionsMatches,P=t.activeThreadID,x=t.isMobile,N=t.threads,L=N.every(function(e){return void 0===e.pending}),Q=r(b,{"sc-comment-stream":!0,"sc-comment-stream-enabled":U,"sc-comment-stream-all-threads-complete":L}),B=null;D&&(B=g({author:D,className:"sc-comment-stream-editor",content:this.state.content,placeholder:"Write a comment",postSignalComponent:u,onCancel:this.onTopEditorCancel,onPost:v,mentionsMatches:F,onMentionsQueryUpdated:E,onFocus:this.onEditorFocus}));var O=N.map(function(t){return o.createElement(i.Thread,{key:t.id,actions:{onClickTimeCode:h,onReply:function(e){return T(t.id,e)},onMarkAsRead:function(){return f(t.id)},onMarkAsUnread:function(){return _(t.id)},onResolve:function(){return y(t.id)},onUnresolve:function(){return A(t.id)},onEditorFocused:function(){return C(t.id)},onCommentDeleted:function(e){return c(e,t.id)},onCommentEdited:function(e,n){return p(e,n,t.id)},onMentionsQueryUpdated:E},active:t.id===P,commentComponent:S,editedComment:e.state.editedComment,onActivated:e.onThreadActivated(t),onCancel:e.onThreadReplyCancel,onStartEdit:e.onStartEdit,onEndEdit:e.onEndEdit,isMobile:x,thread:t,user:D,mentionsMatches:F})});return o.createElement(l.ExperimentsProvider,{className:Q,readOnlyCommentEditor:this.props.readonlyEditor||!1},!x&&B,o.createElement(m.ScrollList,{className:"sc-comment-stream-threads",onClick:this.handleClick},O))},t})(o.PureComponent);t.CommentStream=p,i.Thread.displayName="Thread"});
//# sourceMappingURL=comment_stream.min.js-vflkZuYbK.map