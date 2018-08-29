define(["require","exports","tslib","spectrum_comments/comment_editor/core/class_decorators","spectrum_comments/comment_editor/layers/scaffold","spectrum_comments/comment_editor/core/types"],function(t,o,e,n,r,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var c=(function(t){function o(o){var e=t.call(this)||this;return e.options=o,e}return e.__extends(o,t),o.prototype.callOnContentChange=function(t){var o=t.status.draft.editorState;t.innerProps.value!==o&&this.options.onContentChange({isEmpty:!o.getCurrentContent().getPlainText().length,isFocused:o.getSelection().getHasFocus()})},o.prototype.callOnPost=function(t){var o=t.innerProps.value.content;this.options.onPost(o)},o.prototype.callOnCancel=function(){this.options.onCancel()},o.prototype.callOnFocus=function(t){this.options.onFocus(t.innerProps.evt)},o.prototype.callOnBlur=function(t){this.options.onBlur(t.innerProps.evt)},e.__decorate([n.plug(r.into.draft.on.change.update.editorState)],o.prototype,"callOnContentChange",null),e.__decorate([n.plug(r.into.comment.on.post)],o.prototype,"callOnPost",null),e.__decorate([n.plug(r.into.comment.on.cancel)],o.prototype,"callOnCancel",null),e.__decorate([n.plug(r.into.draft.on.focus)],o.prototype,"callOnFocus",null),e.__decorate([n.plug(r.into.draft.on.blur)],o.prototype,"callOnBlur",null),o})(l.BaseLayer);o.PublishLayer=c});
//# sourceMappingURL=publish.min.js-vflRLh4DC.map