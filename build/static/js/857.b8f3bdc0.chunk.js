"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[857],{857:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s=n(791),c=n(880),r=n(523),o=n(152),a=n(995),m=n(853),d="NewCommentForm_form__C3cQf",i="NewCommentForm_control__iR6jS",l="NewCommentForm_actions__NC323",u=n(556),x=n(184),h=function(e){var t=(0,s.useRef)(),n=(0,a.Z)(m.Ir),c=n.sendRequest,r=n.status,o=n.error,h=e.onAddedComment;(0,s.useEffect)((function(){"completed"!==r||o||h()}),[r,o,h]);var j=function(n){n.preventDefault();var s=t.current.value;c({commentData:{text:s},quoteId:e.quoteId})};return(0,x.jsxs)("form",{className:d,onSubmit:j,children:["pending"===r&&(0,x.jsx)("div",{className:"centered",children:(0,x.jsx)(u.Z,{})}),(0,x.jsxs)("div",{className:i,onSubmit:j,children:[(0,x.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),(0,x.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),(0,x.jsx)("div",{className:l,children:(0,x.jsx)("button",{className:"btn",children:"Add Comment"})})]})},j="CommentItem_item__+vwzS",f=function(e){return(0,x.jsx)("li",{className:j,children:(0,x.jsx)("p",{children:e.text})})},_="CommentsList_comments__UVWAR",N=function(e){return(0,x.jsx)("ul",{className:_,children:e.comments.map((function(e){return(0,x.jsx)(f,{text:e.text},e.id)}))})},p="Comments_comments__9cxIN",C=function(){var e=(0,s.useState)(!1),t=(0,o.Z)(e,2),n=t[0],r=t[1],d=(0,c.UO)().quoteId,i=(0,a.Z)(m.h_),l=i.sendRequest,j=i.status,f=i.data;(0,s.useEffect)((function(){l(d)}),[l,d]);var _,C=(0,s.useCallback)((function(){l(d)}),[l,d]);return"pending"===j&&(_=(0,x.jsx)("div",{className:"centered",children:(0,x.jsx)(u.Z,{})})),"completed"===j&&f&&f.length>0&&(_=(0,x.jsx)(N,{comments:f})),"completed"!==j||f&&0!==f.lenth||(_=(0,x.jsx)("p",{className:"centered",children:"No comments were added yet!"})),(0,x.jsxs)("section",{className:p,children:[(0,x.jsx)("h2",{children:"User Comments"}),!n&&(0,x.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),n&&(0,x.jsx)(h,{quoteId:d,onAddedComment:C}),_]})},v="HighlightedQuote_quote__dE8qA",b=function(e){return(0,x.jsxs)("figure",{className:v,children:[(0,x.jsx)("p",{children:e.text}),(0,x.jsx)("figcaption",{children:e.author})]})},g=function(){var e=(0,c.$B)(),t=(0,c.UO)().quoteId,n=(0,a.Z)(m.jR,!0),o=n.sendRequest,d=n.status,i=n.data,l=n.error;return(0,s.useEffect)((function(){o(t)}),[o,t]),"pending"===d?(0,x.jsx)("div",{className:"centered",children:(0,x.jsx)(u.Z,{})}):"error"===d?(0,x.jsx)("div",{className:"centered",children:l}):i.text?(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)(b,{text:i.text,author:i.author}),(0,x.jsx)(c.AW,{path:e.path,exact:!0,children:(0,x.jsx)("div",{className:"centered",children:(0,x.jsx)(r.rU,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),(0,x.jsx)(c.AW,{path:"".concat(e.path,"/comments"),children:(0,x.jsx)(C,{})})]}):(0,x.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=857.b8f3bdc0.chunk.js.map