webpackJsonp([3],{60:function(e,t,n){var s=n(6)(n(76),n(77),!1,null,null,null);e.exports=s.exports},76:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{service:this.$app.make("ServiceInstance")}},methods:{swapImplementation:function(){var e=this.$app.make("swapper");this.service=e(this.service)}}}},77:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"p-3"},[n("h3",[e._v("Swapable Service Implementation ")]),e._v(" "),n("p",{staticClass:"text-muted"},[e._v("Current Version: "+e._s(e.service.getVersion()))]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.service.content,expression:"service.content"}],staticClass:"form-control",domProps:{value:e.service.content},on:{input:function(t){t.target.composing||e.$set(e.service,"content",t.target.value)}}}),e._v(" "),n("button",{staticClass:"btn btn-primary",on:{click:e.swapImplementation}},[e._v("\n        Swap Implementation\n    ")])])},staticRenderFns:[]}}});
//# sourceMappingURL=3.cd8e1e70dcc033ee2a87.js.map