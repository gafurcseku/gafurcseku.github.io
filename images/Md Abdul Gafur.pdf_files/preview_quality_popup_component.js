define(["require","exports","tslib","external/react","modules/clean/filepath","modules/clean/loggers/file_preview_logger","modules/clean/react/css_timing","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/models","modules/clean/react/previews/quality_popup/constants","modules/clean/react/previews/quality_popup/questions","modules/clean/react/previews/quality_popup/feedback_modal","modules/clean/file_store/utils","modules/clean/react/sprite","modules/clean/react/file_viewer/file_preview_event_emitter","modules/core/i18n","modules/core/notify"],function(e,t,i,o,s,n,r,l,a,p,u,c,d,m,v,f,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var w=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={closed:!1},t.handleDismissPopup=function(){t.recordDismissed(p.QualityPopupStage.POPUP),t.hidePopup()},t.handleAnswerYes=function(){t.recordAnswer(t.state.question,p.BooleanAnswers.YES),t.feedbackReceived()},t.handleAnswerNo=function(){t.recordAnswer(t.state.question,p.BooleanAnswers.NO),u.shouldShowFeedbackModal(t.state.question)?t.showFeedbackModal():t.feedbackReceived()},t.handleModalDone=function(e,i){var o={};o[u.Questions.FEEDBACK]=i||"",o[u.Questions.DONATE]=e?p.BooleanAnswers.YES:p.BooleanAnswers.NO;var s={};e&&(s._file_nsid=t.props.file.ns_id,s._file_sjid=t.props.file.sjid),t.recordMultipleAnswers(o,s),t.feedbackReceived()},t.handleModalDismiss=function(){t.recordDismissed(p.QualityPopupStage.FEEDBACK_MODAL)},t}return i.__extends(t,e),t.prototype.componentDidMount=function(){var e=this.props.file,t=s.file_extension(s.filename(e.fq_path));this.popupLogger=new n.FilePreviewQualityPopupLogger,this.popupLogger.listenTo(v.filePreviewEventEmitter),this.handlePreviewOpen(t)},t.prototype.componentWillUnmount=function(){this.popupLogger.unlistenTo(v.filePreviewEventEmitter)},t.prototype.recordQuestions=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=a.FilePreviewSession.currentSession;v.filePreviewEventEmitter.emit(l.EventType.FilePreviewQualityPopupAsked,i,e)},t.prototype.recordAnswer=function(e,t){var i={};i[e]=t,this.recordMultipleAnswers(i)},t.prototype.recordMultipleAnswers=function(e,t){void 0===t&&(t={});var i=a.FilePreviewSession.currentSession;v.filePreviewEventEmitter.emit(l.EventType.FilePreviewQualityPopupAnswered,i,e,t)},t.prototype.recordDismissed=function(e){var t=a.FilePreviewSession.currentSession;v.filePreviewEventEmitter.emit(l.EventType.FilePreviewQualityPopupDismissed,t,e)},t.prototype.showFeedbackModal=function(){var e=o.createElement(c.PreviewFeedbackModal,{filename:s.filename(this.props.file.fq_path),allowFileDonation:this.props.allowFileDonation,onDone:this.handleModalDone,onDismiss:this.handleModalDismiss});this.recordQuestions(u.Questions.FEEDBACK,u.Questions.DONATE),c.PreviewFeedbackModal.showInstance(e)},t.prototype.feedbackReceived=function(){h.Notify.success(f._("Thanks! Your feedback will help improve Dropbox."),3),this.hidePopup()},t.prototype.hidePopup=function(){this.setState({closed:!0,question:void 0})},t.prototype.randomNum=function(e,t){return void 0===t&&(t=0),Math.random()*(e-t)+t},t.prototype.handlePreviewOpen=function(e){if(!(this.randomNum(100)>this.props.showProbability)){var t=u.getQuestionToAsk(e);null!==t&&(this.setState({question:t}),this.recordQuestions(t))}},t.prototype.render=function(){return void 0===this.state.question||this.state.closed?null:o.createElement("div",{id:"preview-quality-popup",className:"preview-quality-bar fadeout"},o.createElement("div",{className:"container"},o.createElement("div",{className:"title"},u.getQuestionWording(this.state.question,d.getExtension(this.props.file)),o.createElement("div",{className:"resolution"},o.createElement("button",{className:"button-as-link looks-good-link",onClick:this.handleAnswerYes},f._("Yes")),o.createElement("span",{className:""},f._("•")),o.createElement("button",{className:"button-as-link something-wrong-link",onClick:this.handleAnswerNo},f._("No")))),o.createElement("div",{className:"hide_button"},o.createElement("button",{className:"button-as-link dismiss-link",onClick:this.handleDismissPopup},o.createElement(m.Sprite,{group:"web",name:"x",alt:f._("Close")})))),o.createElement("hr",{className:"separator"}))},t})(o.Component);t._PreviewQualityPopup=w;var E=r.requireCssWithComponent(w,["/static/css/preview_quality_popup-vflyrlOUZ.css"]);t.PreviewQualityPopup=E});
//# sourceMappingURL=preview_quality_popup_component.min.js-vfld3-L_g.map