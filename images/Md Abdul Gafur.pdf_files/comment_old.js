define(["require","exports","tslib","react","classnames","spectrum/overflow_button","spectrum/popover","spectrum_comments/comment_avatar","spectrum_comments/comment_editor/comment_editor","spectrum_comments/comment_editor/components/post_bar","spectrum_comments/utils/ago"],function(e,t,n,o,r,s,a,c,m,i,l){"use strict";function p(e){return o.createElement(i.PostBar,n.__assign({},e,{postLabel:"Save",cancelLabel:"Cancel",disableCancelButton:!1}))}Object.defineProperty(t,"__esModule",{value:!0});var d=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.defaultProps={isEditing:!1},t.onEdit=function(){t.props.onStartEdit(t.props.comment)},t.onSave=function(e){t.props.actions.onEdited(e),t.props.onEndEdit()},t.onMentionsQueryUpdated=t.props.actions.onMentionsQueryUpdated,t}return n.__extends(t,e),Object.defineProperty(t.prototype,"classNames",{get:function(){var e=this.props,t=e.active,n=void 0!==t&&t;return r(e.className,{"sc-comment":!0,"sc-comment-active":n,"sc-comment-deleted":e.comment.deleted})},enumerable:!0,configurable:!0}),t.prototype.renderActionsMenu=function(){var e=this.props,t=e.comment.userPermissions,n=t.canEdit,r=t.canDelete,c=e.actions.onDeleted,m=e.isMobile;return!n&&!r||m?null:o.createElement(a.Popover,{className:"sc-comment-actions"},o.createElement(a.PopoverTrigger,{className:"sc-comment-actions-button"},o.createElement(s.OverflowButton,{size:"small",variant:"borderless","aria-label":"Actions"})),o.createElement(a.PopoverContent,{attachment:"right"},n&&o.createElement(a.PopoverContentItem,{onClick:this.onEdit},"Edit"),r&&o.createElement(a.PopoverContentItem,{className:"sc-comment-actions-delete",onClick:c},"Delete")))},t.prototype.renderDeletedMode=function(){return o.createElement("li",{className:this.classNames},o.createElement("div",{className:"sc-comment-avatar"},o.createElement(c.DeletedCommentAvatar,null)),o.createElement("div",{className:"sc-comment-content-container"},o.createElement("div",{className:"sc-comment-content"},this.props.children,o.createElement("span",{className:"sc-comment-text"},"This comment was deleted."))))},t.prototype.renderDisplayMode=function(){var e=this.props,t=e.active,n=void 0!==t&&t,r=e.comment;return o.createElement("li",{className:this.classNames},o.createElement("div",{className:"sc-comment-avatar"},o.createElement(c.CommentAvatar,{user:r.author})),o.createElement("div",{className:"sc-comment-content-container"},n&&o.createElement("div",{className:"sc-comment-info"},o.createElement("span",{className:"sc-comment-author"},r.author.name.display),o.createElement("span",{className:"sc-comment-timestamp"},l.ago(r.timestamp)),n&&this.renderActionsMenu()),this.renderContent()))},t.prototype.renderContent=function(){var e,t=this.props.comment.content.metadata.filter(function(e){return"sticker"===e.type});if(t.length){var n=t[0].url;e=o.createElement("img",{className:"sc-comment-sticker",src:n})}else e=o.createElement("span",{className:"sc-comment-text"},this.compileContentSpans());return o.createElement("div",{className:"sc-comment-content"},this.props.children,e)},t.prototype.compileContentSpans=function(){var e=this.props.comment.content,t=e.metadata,n=e.text;if(0===n.length)return[];for(var o=this.constructTextIndexToCSSClassNameTable(t,n),r=[],s=0,a=o[s],c=1;c<n.length;c++){var m=o[c];if(a!==m){var i=n.slice(s,c);r.push(this.createSpan(i,a,""+c)),a=m,s=c}}if(s!==n.length){var l=n.slice(s,n.length),p=o[s];r.push(this.createSpan(l,p,""+s))}return r},t.prototype.constructTextIndexToCSSClassNameTable=function(e,t){for(var n=[],o=0;o<t.length;o++)n.push([]);for(var r=[],s=0,o=0;o<t.length;o++){"\n"===t.charAt(o)&&(s+=1);var a=Math.min(o+s,t.length-1);r.push(a)}for(var c=e.filter(function(e){return"sticker"!==e.type}),m=0,i=c;m<i.length;m++)for(var l=i[m],p=l.location,d=p.start,u=p.end,h=r[d],v=r[u-1],f=this.getCSSClassFromMetadatum(l),o=h;o<=v;o++)n[o].push(f);for(var E=[],o=0;o<t.length;o++){n[o].sort();var y=n[o].join(" ");E.push(y)}return E},t.prototype.getCSSClassFromMetadatum=function(e){switch(e.type){case"mention":return"sc-comment-editor-mention";case"style":return"sc-comment-editor-style-"+e.style;default:return"sc-comment-editor-style-other"}},t.prototype.createSpan=function(e,t,n){return void 0===t&&(t=""),o.createElement("span",{className:t},e)},t.prototype.renderEditMode=function(){var e=this.props,t=(e.actions,e.className),n=e.comment,s=e.mentionsMatches,a=e.onEndEdit,c=r(t,"sc-comment-inline-editor");return o.createElement(m.CommentEditor,{author:n.author,className:c,content:n.content,postSignalComponent:p,onCancel:a,onPost:this.onSave,mentionsMatches:s,onMentionsQueryUpdated:this.onMentionsQueryUpdated})},t.prototype.render=function(){return this.props.comment.deleted?this.renderDeletedMode():this.props.isEditing?this.renderEditMode():this.renderDisplayMode()},t})(o.PureComponent);t.Comment=d});
//# sourceMappingURL=comment_old.min.js-vflC0k73P.map