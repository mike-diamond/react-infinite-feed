"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),Feed=function(a){function b(){var a,c;(0,_classCallCheck2.default)(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(0,_possibleConstructorReturn2.default)(this,(a=(0,_getPrototypeOf3.default)(b)).call.apply(a,[this].concat(e))),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(c)),"node",null),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(c)),"nodeScrollOffset",{scrollTop:null,scrollHeight:null}),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(c)),"setNode",function(a){var b=c.props.isScrollUp;a&&(c.node=a,c.node.addEventListener("scroll",c.onScroll),b&&window.addEventListener("resize",c.scrollDown))}),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(c)),"scrollDown",function(){return c.node.scrollTop=c.node.scrollHeight}),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(c)),"scrollUp",function(){var a=c.nodeScrollOffset,b=a.scrollTop,d=a.scrollHeight;c.node.scrollTop=c.node.scrollHeight-d+b}),(0,_defineProperty2.default)((0,_assertThisInitialized2.default)((0,_assertThisInitialized2.default)(c)),"onScroll",function(){var a=c.props,b=a.loadOffset,d=a.isScrollUp,e=a.onReachOffset,f=c.node,g=f.scrollTop,h=f.scrollHeight,i=f.offsetHeight;c.nodeScrollOffset={scrollTop:g,scrollHeight:h},d?b>=g&&e():b>=h-g-i&&e()}),c}return(0,_inherits2.default)(b,a),(0,_createClass2.default)(b,[{key:"componentWillReceiveProps",value:function(a){var b=a.shouldScrollUp,c=a.shouldScrollDown;b?this.scrollUp():c&&this.scrollDown()}},{key:"componentWillUnmount",value:function(){var a=this.props.isScrollUp;this.node&&(this.node.removeEventListener("scroll",this.onScroll),a&&window.removeEventListener("resize",this.scrollDown))}},{key:"render",value:function(){var a=this.props,b=a.className,c=a.children;return _react.default.createElement("div",{className:b,ref:this.setNode},c)}}]),b}(_react.PureComponent);exports.default=Feed,(0,_defineProperty2.default)(Feed,"propTypes",{isScrollUp:_propTypes.default.bool,shouldScrollUp:_propTypes.default.bool,shouldScrollDown:_propTypes.default.bool,loadOffset:_propTypes.default.number.isRequired,onReachOffset:_propTypes.default.func.isRequired});