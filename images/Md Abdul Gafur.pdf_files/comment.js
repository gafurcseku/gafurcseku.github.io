define(["require","exports","tslib","react","classnames","spectrum/overflow_button","spectrum/popover","moment","spectrum_comments/comment_avatar","spectrum_comments/comment_editor/comment_editor","spectrum_comments/comment_editor/components/post_bar","spectrum_comments/comment_editor/comment_renderer","spectrum_comments/comment/comment_old"],function(e,t,n,o,r,s,c,a,m,i,l,p,d){"use strict";function u(e){return o.createElement(l.PostBar,n.__assign({},e,{postLabel:"Save",cancelLabel:"Cancel",disableCancelButton:!1}))}Object.defineProperty(t,"__esModule",{value:!0});var h=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.defaultProps={isEditing:!1},t.onEdit=function(){t.props.onStartEdit(t.props.comment)},t.onSave=function(e){t.props.actions.onEdited(e),t.props.onEndEdit()},t.onMentionsQueryUpdated=t.props.actions.onMentionsQueryUpdated,t}return n.__extends(t,e),Object.defineProperty(t.prototype,"classNames",{get:function(){var e=this.props,t=e.active,n=void 0!==t&&t,o=e.className,s=e.comment.deleted;return r(o,{"sc-comment":!this.context.readOnlyCommentEditor,"sc-comment-active":n,"sc-comment-deleted":s})},enumerable:!0,configurable:!0}),t.prototype.renderActionsMenu=function(){var e=this.props,t=e.comment.userPermissions,n=t.canEdit,r=t.canDelete,a=e.actions.onDeleted,m=e.isMobile;return!n&&!r||m?null:o.createElement(c.Popover,{className:"sc-comment-actions"},o.createElement(c.PopoverTrigger,{className:"sc-comment-actions-button"},o.createElement(s.OverflowButton,{size:"small",variant:"borderless","aria-label":"Actions"})),o.createElement(c.PopoverContent,{attachment:"right"},n&&o.createElement(c.PopoverContentItem,{onClick:this.onEdit},"Edit"),r&&o.createElement(c.PopoverContentItem,{className:"sc-comment-actions-delete",onClick:a},"Delete")))},t.prototype.renderDeletedMode=function(){return o.createElement("li",{className:this.classNames},o.createElement("div",{className:"sc-comment-avatar"},o.createElement(m.DeletedCommentAvatar,null)),o.createElement("div",{className:"sc-comment-content-container"},o.createElement("div",{className:"sc-comment-content"},this.props.children,o.createElement("span",{className:"sc-comment-text"},"This comment was deleted."))))},t.prototype.renderDisplayMode=function(){var e=this.props,t=e.active,n=void 0!==t&&t,r=e.comment;return o.createElement(p.CommentRenderer,{content:this.props.comment.content,author:this.props.comment.author,className:this.classNames,annotation:this.props.children},n?o.createElement("div",{className:"sc-comment-info"},o.createElement("span",{className:"sc-comment-author"},r.author.name.display),o.createElement("span",{className:"sc-comment-timestamp"},a(r.timestamp).fromNow()),this.renderActionsMenu()):null)},t.prototype.renderContent=function(){var e,t=this.props.comment.content.metadata.filter(function(e){return"sticker"===e.type});if(t.length){var n=t[0].url;e=o.createElement("img",{className:"sc-comment-sticker",src:n})}else e=o.createElement("span",{className:"sc-comment-text"},this.compileContentSpans());return o.createElement("div",{className:"sc-comment-content"},this.props.children,e)},t.prototype.compileContentSpans=function(){var e=this.props.comment.content,t=e.metadata,n=e.text;if(0===n.length)return[];for(var o=this.constructTextIndexToCSSClassNameTable(t,n),r=[],s=0,c=o[s],a=1;a<n.length;a++){var m=o[a];if(c!==m){var i=n.slice(s,a);r.push(this.createSpan(i,c,""+a)),c=m,s=a}}if(s!==n.length){var l=n.slice(s,n.length),p=o[s];r.push(this.createSpan(l,p,""+s))}return r},t.prototype.constructTextIndexToCSSClassNameTable=function(e,t){for(var n=[],o=0;o<t.length;o++)n.push([]);for(var r=[],s=0,o=0;o<t.length;o++){"\n"===t.charAt(o)&&(s+=1);var c=Math.min(o+s,t.length-1);r.push(c)}for(var a=e.filter(function(e){return"sticker"!==e.type}),m=0,i=a;m<i.length;m++)for(var l=i[m],p=l.location,d=p.start,u=p.end,h=r[d],v=r[u-1],f=this.getCSSClassFromMetadatum(l),o=h;o<=v;o++)n[o].push(f);for(var E=[],o=0;o<t.length;o++){n[o].sort();var y=n[o].join(" ");E.push(y)}return E},t.prototype.getCSSClassFromMetadatum=function(e){switch(e.type){case"mention":return"sc-comment-editor-mention";case"style":return"sc-comment-editor-style-"+e.style;default:return"sc-comment-editor-style-other"}},t.prototype.createSpan=function(e,t,n){return void 0===t&&(t=""),o.createElement("span",{className:t},e)},t.prototype.renderEditMode=function(){var e=this.props,t=(e.actions,e.className),n=e.comment,s=e.mentionsMatches,c=e.onEndEdit,a=r(t,"sc-comment-inline-editor");return o.createElement(i.CommentEditor,{author:n.author,className:a,content:n.content,postSignalComponent:u,onCancel:c,onPost:this.onSave,mentionsMatches:s,onMentionsQueryUpdated:this.onMentionsQueryUpdated})},t.prototype.renderOld=function(){return o.createElement(d.Comment,n.__assign({},this.props))},t.prototype.render=function(){return this.context.readOnlyCommentEditor?this.props.comment.deleted?this.renderDeletedMode():this.props.isEditing?this.renderEditMode():this.renderDisplayMode():this.renderOld()},t.contextTypes={readOnlyCommentEditor:o.PropTypes.bool},t})(o.PureComponent);t.Comment=h});
//# sourceMappingURL=comment.min.js-vflEWER59.map