(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(19)},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(2),c=n(4),a=n(3),u=n(5),i=n(6),l=n(0),s=n.n(l),h=n(9),p=n.n(h),b=n(7),f=n.n(b),m=function(t,e){return function(n){var h=function(l){function h(){var t;return Object(r.a)(this,h),(t=Object(c.a)(this,Object(a.a)(h).call(this))).state={allProps:{}},t}return Object(u.a)(h,l),Object(o.a)(h,[{key:"componentWillMount",value:function(){var t=this,e=this.context.store;this._updateProps(),e.subscribe(function(){return t._updateProps()})}},{key:"_updateProps",value:function(){var n=this.context.store,r=t?t(n.getState(),this.props):{},o=e?e(n.dispatch,this.props):{};this.setState({allProps:Object(i.a)({},r,o,this.props)})}},{key:"render",value:function(){return s.a.createElement(n,this.state.allProps)}}]),h}(l.Component);return h.contextTypes={store:f.a.object},h}},j=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"getChildContext",value:function(){return{store:this.props.store}}},{key:"render",value:function(){return s.a.createElement("div",null,this.props.children)}}]),e}(l.Component);j.childContextTypes={store:f.a.object};var O=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("h1",{style:{color:this.props.themeColor}},"React.js \u5c0f\u4e66")}}]),e}(l.Component),C=O=m(function(t){return{themeColor:t.themeColor}})(O),d=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"handleSwitchColor",value:function(t){this.props.onSwitchColor&&this.props.onSwitchColor(t)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("button",{style:{color:this.props.themeColor},onClick:this.handleSwitchColor.bind(this,"red")},"Red"),s.a.createElement("button",{style:{color:this.props.themeColor},onClick:this.handleSwitchColor.bind(this,"blue")},"Blue"))}}]),e}(l.Component),y=d=m(function(t){return{themeColor:t.themeColor}},function(t){return{onSwitchColor:function(e){t({type:"CHANGE_COLOR",themeColor:e})}}})(d),v=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",{style:{color:this.props.themeColor}},"React.js \u5c0f\u4e66\u5185\u5bb9"),s.a.createElement(y,null))}}]),e}(l.Component),E=v=m(function(t){return{themeColor:t.themeColor}})(v);n(18);var k=function(t){var e=null,n=[],r=function(r){e=t(e,r),n.forEach(function(t){return t()})};return r({}),{getState:function(){return e},dispatch:r,subscribe:function(t){return n.push(t)}}}(function(t,e){if(!t)return{themeColor:"red"};switch(e.type){case"CHANGE_COLOR":return Object(i.a)({},t,{themeColor:e.themeColor});default:return t}}),w=function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(C,null),s.a.createElement(E,null))}}]),e}(l.Component);p.a.render(s.a.createElement(j,{store:k},s.a.createElement(w,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.87614450.chunk.js.map