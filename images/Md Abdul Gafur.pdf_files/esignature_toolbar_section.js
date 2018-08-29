define(["require","exports","tslib","esignature_prototype/components/esignature_callout","esignature_prototype/constants","esignature_prototype/utils","esignature_prototype/components/esignature_field_selector","esignature_prototype/data/types","external/react","modules/clean/react/bubble_dropdown_v2","modules/clean/react/css","modules/clean/react/previews/preview_toolbar_button","modules/core/i18n"],function(e,t,i,a,o,n,l,s,r,u,c,d,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={calloutDismissed:!1,ref:void 0},t.setRef=function(e){t.setState({ref:e})},t.handleTextClick=function(){t.handleDismissCallout(),t.props.enterFieldCreationMode(s.FieldType.Text)},t.handleSignatureClick=function(){t.handleDismissCallout(),t.props.enterFieldCreationMode(s.FieldType.Signature)},t.handleDateClick=function(){t.handleDismissCallout(),t.props.enterFieldCreationMode(s.FieldType.Date)},t.handleDismissCallout=function(){t.setState({calloutDismissed:!0})},t}return i.__extends(t,e),t.prototype.render=function(){return r.createElement("div",{ref:this.setRef,className:"esignature-toolbar-section-container"},r.createElement("div",{className:"esignature-toolbar-section"},r.createElement("div",{className:"esignature-toolbar-divider"}),r.createElement(l.EsignatureFieldSelector,null),r.createElement(d.PreviewToolbarButton,{className:"esignature-toolbar-entry esignature-text-field",iconName:"ic_text_field",tooltip:p._("Create a text field"),onClick:this.handleTextClick}),r.createElement(d.PreviewToolbarButton,{className:"esignature-toolbar-entry esignature-signature-field",iconName:"ic_sign_field",tooltip:p._("Create a signature field"),onClick:this.handleSignatureClick}),r.createElement(d.PreviewToolbarButton,{className:"esignature-toolbar-entry esignature-date-field",iconName:"ic_date_field",tooltip:p._("Create a date field"),onClick:this.handleDateClick})),!this.state.calloutDismissed&&n.shouldShowEsignatureCreateFieldCallout()?r.createElement(a.EsignatureCallout,{className:"esignature-create-field-callout-container",title:o.ESIGNATURE_CREATE_FIELD_TITLE,message:o.ESIGNATURE_CREATE_FIELD_MESSAGE,onDismiss:this.handleDismissCallout,targetNode:this.state.ref,position:u.BubbleDropdownPositions.TOP}):null)},t})(r.PureComponent);t.EsignatureToolbarSectionWithoutCSS=m,t.EsignatureToolbarSection=c(m,["/static/css/esignature_prototype/toolbar-vfl6azq6t.css"])});
//# sourceMappingURL=esignature_toolbar_section.min.js-vflLjeD99.map