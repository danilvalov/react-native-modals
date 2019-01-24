Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/components/DialogFooter.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var babelPluginFlowReactPropTypes_proptype_DialogFooterProps=require('../type').babelPluginFlowReactPropTypes_proptype_DialogFooterProps||require('prop-types').any;var styles=_reactNative.StyleSheet.create({border:{borderColor:'#CCD0D5',borderTopWidth:0.2},actionsVertical:{height:200,flexDirection:'column'},actionsHorizontal:{flexDirection:'row'}});function DialogActionList(_ref){var style=_ref.style,bordered=_ref.bordered,children=_ref.children;var containerStyle=children.length>2?styles.actionsVertical:styles.actionsHorizontal;var border=bordered?styles.border:null;var content=children.length===2?_react.Children.map(children,function(child,index){return(0,_react.cloneElement)(child,{bordered:1%index===0&&bordered});}):children;return _react2.default.createElement(_reactNative.View,{style:[containerStyle,border,style],__source:{fileName:_jsxFileName,lineNumber:42}},content);}DialogActionList.propTypes=babelPluginFlowReactPropTypes_proptype_DialogFooterProps===require('prop-types').any?{}:babelPluginFlowReactPropTypes_proptype_DialogFooterProps;DialogActionList.defaultProps={style:null,bordered:true};exports.default=DialogActionList;