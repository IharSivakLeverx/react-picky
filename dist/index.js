"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React);require("prop-types");var jss=_interopDefault(require("react-jss")),classNames=_interopDefault(require("classnames")),debounce=function(r,n){var o=null;return function(){clearTimeout(o);var e=arguments,t=this;o=setTimeout(function(){r.apply(t,e)},n)}};function includes(e,t,r){return r?-1<String(e).indexOf(String(t)):-1<String(e).toLowerCase().indexOf(String(t).toLowerCase())}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var isDataObject=function(e,t,r){return"object"===_typeof(e)&&e.hasOwnProperty(t)&&e.hasOwnProperty(r)},hasItem=function(e,t,r,n,o){if(!e||!t)return!1;if(Array.isArray(e)){if(isDataObject(t,r,n)){var l=e.findIndex(function(e){return e[r]===t[r]});return o?l:-1<l}var i=e.indexOf(t);return o?i:-1<i}return isDataObject(t,r,n)?e[r]===t[r]:e===t},hasItemIndex=function(e,t,r,n){return hasItem(e,t,r,n,!0)},keyExtractor=function(e,t,r){return isDataObject(e,t,r)?e[t]:e},sortCollection=function(e,r){return r?e.sort(function(e,t){return e[r]<t[r]?-1:1}):e.sort(function(e,t){return e<t?-1:1})};function arraysEqual(e,t){if(e.length!==t.length)return!1;for(var r=e.length;r;){if(e[r]!==t[r])return!1;r--}return!0}function split(e){var t=1,r="",n=e.split("%"),o=n.length;0<o&&(r+=n[0]);for(var l=1;l<o;l++){if("s"===n[l][0]||"d"===n[l][0]){var i=arguments[t++];r+="d"===n[l][0]?Math.floor(i):i}else n[l][0]?r+="%"+n[l][0]:r+="%"+n[++l][0];r+=n[l].substring(1)}return r}var regex=/%[sdj]/;function format(e){return regex.test(e)?split.apply(null,arguments):Array.from(arguments).join(" ")}var hasOwnProperty=Object.prototype.hasOwnProperty;function is(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function shallowEqual(e,t){if(is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!hasOwnProperty.call(t,r[o])||!is(e[r[o]],t[r[o]]))return!1;return!0}var shallowEqual_1=shallowEqual;function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function unwrapExports(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var lib=createCommonjsModule(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.createChangeEmitter=function(){var r=[],n=r;function o(){n===r&&(n=r.slice())}return{listen:function(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var r=!0;return o(),n.push(t),function(){if(r){r=!1,o();var e=n.indexOf(t);n.splice(e,1)}}},emit:function(){for(var e=r=n,t=0;t<e.length;t++)e[t].apply(e,arguments)}}}});unwrapExports(lib);var root,lib_1=lib.createChangeEmitter;function symbolObservablePonyfill(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}var result=symbolObservablePonyfill(root="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),setStatic=function(t,r){return function(e){return e[t]=r,e}},setDisplayName=function(e){return setStatic("displayName",e)},getDisplayName=function(e){return"string"==typeof e?e:e?e.displayName||e.name||"Component":void 0},wrapDisplayName=function(e,t){return t+"("+getDisplayName(e)+")"},pick=function(e,t){for(var r={},n=0;n<t.length;n++){var o=t[n];e.hasOwnProperty(o)&&(r[o]=e[o])}return r},shouldUpdate=function(o){return function(e){var n=React.createFactory(e),t=function(e){function t(){return e.apply(this,arguments)||this}_inheritsLoose(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(e){return o(this.props,e)},r.render=function(){return n(this.props)},t}(React.Component);return"production"!==process.env.NODE_ENV?setDisplayName(wrapDisplayName(e,"shouldUpdate"))(t):t}},onlyUpdateForKeys=function(r){var t=shouldUpdate(function(e,t){return!shallowEqual_1(pick(t,r),pick(e,r))});return"production"!==process.env.NODE_ENV?function(e){return setDisplayName(wrapDisplayName(e,"onlyUpdateForKeys"))(t(e))}:t},isEmptyValue=function(e){return null==e||Array.isArray(e)&&!e.length},Placeholder=function(e){var t=e.placeholder,r=e.value,n=e.numberDisplayed,o=e.multiple,l=e.valueKey,i=e.labelKey,a=e.manySelectedPlaceholder,s=e.allSelectedPlaceholder,c=e.allSelected,u="";if(isEmptyValue(r))u=t;else if(Array.isArray(r)&&o)r.length<=n?u=r.map(function(e){return isDataObject(e,l,i)?e[i]:e}).join(", "):a&&!c?u=includes(a,"%s")?format(a,r.length):a:c&&s&&(u=includes(s,"%s")?format(s,r.length):s);else{var p=Array.isArray(r)?r[0]:r;u=isDataObject(p,l,i)?p[i]:p}return React__default.createElement("span",{className:"picky__placeholder"},u)};Placeholder.defaultProps={placeholder:"None selected",allSelectedPlaceholder:"%s selected",manySelectedPlaceholder:"%s selected",allSelected:!1};var Placeholder$1=onlyUpdateForKeys(["multiple","value","numberDisplayed","allSelected","allSelectedPlaceholder"])(Placeholder);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var r,n,o=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}var styles=function(e){return{reset:{border:"none",outline:"none",padding:0,margin:0,font:"inherit",backgroundColor:"transparent","&:disabled":{opacity:.7,cursor:"not-allowed"}},default:{cursor:"pointer",textAlign:"center",borderRadius:44,display:"flex",alignItems:"center",justifyContent:"center"},grey:{backgroundColor:"#4C5568",color:"#FFFFFF","&:hover":{backgroundColor:"#414A5D"},"&:active":{backgroundColor:"#303A4E"}},accent:{backgroundColor:e.palette.accent,color:"#ffffff","&:hover":{backgroundColor:e.palette.accentHover},"&:active":{backgroundColor:e.palette.accentActive},"&:focus":{boxShadow:"0px 0px 0px 3px #fff, 0px 0px 0px 5px ".concat(e.palette.accentHover),backgroundColor:e.palette.accentHover}},neutral:{backgroundColor:"#f7f8fc",color:"#626c83","&:hover":{backgroundColor:"#e6e8f3"},"&:active":{backgroundColor:"#cacfe0"},"&:focus":{boxShadow:"0px 0px 0px 3px #fff, 0px 0px 0px 5px #e6e8f3",backgroundColor:"#e6e8f3"}},small:{width:24,height:24,flex:"0 0 24px",fontSize:18,lineHeight:"18px"},medium:{width:36,height:36,flex:"0 0 36px",fontSize:24,lineHeight:"24px"},big:{width:40,height:40,flex:"0 0 40px",fontSize:24,lineHeight:"24px"},large:{width:44,height:44,flex:"0 0 44px",fontSize:24,lineHeight:"24px"},huge:{width:48,height:48,flex:"0 0 48px",fontSize:40,lineHeight:"26px"}}},IconButton=function(e){var t=e.classes,r=e.onClick,n=e.className,o=e.size,l=void 0===o?"medium":o,i=e.variant,a=void 0===i?"accent":i,s=e.disabled,c=e.name,u=(e.theme,_objectWithoutProperties(e,["classes","onClick","className","size","variant","disabled","name","theme"])),p=classNames(t.reset,t.default,t[l],t[a],n);return React__default.createElement("button",_extends({className:p,onClick:r,disabled:s},u),React__default.createElement("span",{className:"iconm-".concat(c)}))},IconButton$1=jss(styles)(IconButton);function _typeof$1(e){return(_typeof$1="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof$1(t)&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Filter=function(){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,React.Component),_createClass(e,[{key:"shouldComponentUpdate",value:function(e){return this.props.placeholder!==e.placeholder||this.props.tabIndex!==e.tabIndex}},{key:"render",value:function(){var t=this;return React__default.createElement("div",{className:"picky__filter"},React__default.createElement(IconButton$1,{name:"search",size:"medium",variant:"default",style:{color:"#818BA3"}}),React__default.createElement("input",{type:"text",ref:function(e){return t.filterInput=e},className:"picky__filter__input",placeholder:this.props.placeholder,tabIndex:this.props.tabIndex,"aria-label":"filter options",onChange:function(e){return t.props.onFilterChange(e.target.value)}}))}}]),e}();Filter.defaultProps={placeholder:"Filter..."};var Option=function(e){var t=e.id,r=e.item,n=e.isSelected,o=e.labelKey,l=e.valueKey,i=e.selectValue,a=e.style,s=e.multiple,c=e.tabIndex,u=e.disabled,p=n?"option selected":"option",f=isDataObject(r,o,l)?r[o]:r,d=s?"checkbox":"radio";return React__default.createElement("div",{tabIndex:c,id:t,role:"option",style:a,"data-selected":n?"selected":"","aria-selected":n,className:p,onClick:function(){return!u&&i(r)},onKeyPress:function(e){e.preventDefault(),u||i(r)}},React__default.createElement("input",{type:d,readOnly:!0,tabIndex:-1,disabled:u,checked:n,"aria-label":f}),f)},Option$1=onlyUpdateForKeys(["multiple","isSelected","id","item","tabIndex"])(Option);function FilterSelect(e){var t=e.tabIndex,r=e.disabled,n=e.allSelected,o=e.id,l=e.selectAllText,i=e.toggleSelectAll;return e.visible?React__default.createElement("label",{tabIndex:t,role:"option",id:o+"-option-selectall","data-selectall":"true","aria-selected":n,className:n?"selected wrapperCheckbox":"wrapperCheckbox",onClick:i,disabled:r,onKeyPress:i,style:{width:"100%",marginTop:"20px",marginLeft:"11px"}},l,React__default.createElement("input",{type:"checkbox",readOnly:!0,tabIndex:-1,checked:n,"aria-label":"select all",disabled:r,className:n?"selected":"",onClick:function(e){e.stopPropagation()}}),React__default.createElement("span",{className:"wrapperCheckbox_label"})):null}var FilterSelect$1=onlyUpdateForKeys(["tabIndex","disabled","allSelected","selectAllText","visible"])(FilterSelect);function _extends$1(){return(_extends$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _objectWithoutProperties$1(e,t){if(null==e)return{};var r,n,o=_objectWithoutPropertiesLoose$1(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],0<=t.indexOf(r)||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function _objectWithoutPropertiesLoose$1(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],0<=t.indexOf(r)||(o[r]=e[r]);return o}function Button(e){var t=e.id,r=e.disabled,n=e.onClick,o=e.children,l=e.className,i=_objectWithoutProperties$1(e,["id","disabled","onClick","children","className"]),a="".concat(t,"__button"),s=["picky__input",r?"picky__input--disabled":"",l].join(" ");return React__default.createElement("button",_extends$1({id:a,type:"button",className:s,onClick:n},i),o)}Button.displayName="Button";var Button$1=onlyUpdateForKeys(["disabled","children"])(Button);function _typeof$2(e){return(_typeof$2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _extends$2(){return(_extends$2=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _classCallCheck$1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties$1(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass$1(e,t,r){return t&&_defineProperties$1(e.prototype,t),r&&_defineProperties$1(e,r),e}function _possibleConstructorReturn$1(e,t){return!t||"object"!==_typeof$2(t)&&"function"!=typeof t?_assertThisInitialized$1(e):t}function _getPrototypeOf$1(e){return(_getPrototypeOf$1=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _assertThisInitialized$1(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _inherits$1(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf$1(e,t)}function _setPrototypeOf$1(e,t){return(_setPrototypeOf$1=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Picky=function(){function r(e){var t;return _classCallCheck$1(this,r),(t=_possibleConstructorReturn$1(this,_getPrototypeOf$1(r).call(this,e))).state={selectedValue:e.value||(e.multiple?[]:null),open:e.open,filtered:!1,filteredOptions:[],allSelected:!1,groupsFilteringData:null},t.toggleDropDown=t.toggleDropDown.bind(_assertThisInitialized$1(t)),t.toggleSelectAll=t.toggleSelectAll.bind(_assertThisInitialized$1(t)),t.onFilterChange=t.onFilterChange.bind(_assertThisInitialized$1(t)),t.selectValue=t.selectValue.bind(_assertThisInitialized$1(t)),t.allSelected=t.allSelected.bind(_assertThisInitialized$1(t)),t.handleOutsideClick=t.handleOutsideClick.bind(_assertThisInitialized$1(t)),t.isItemSelected=t.isItemSelected.bind(_assertThisInitialized$1(t)),t.focusFilterInput=t.focusFilterInput.bind(_assertThisInitialized$1(t)),t.getValue=t.getValue.bind(_assertThisInitialized$1(t)),t.filterOnGroup=t.filterOnGroup.bind(_assertThisInitialized$1(t)),t}return _inherits$1(r,React__default.PureComponent),_createClass$1(r,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({allSelected:this.allSelected()})}},{key:"componentDidMount",value:function(){this.props.multiple&&this.setGroupData(this.props),this.focusFilterInput(this.state.open)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleOutsideClick,!1)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(this.props.options!==e.options||this.props.value!==e.value){var t=Array.isArray(e.value)?arraysEqual(e.value,this.props.value):e.value===this.props.value,r=arraysEqual(e.options,this.props.options);this.setState({allSelected:t&&r?this.allSelected():this.allSelected(e.value,e.options)})}!e.updateData&&this.props.multiple&&this.setGroupData(e)}},{key:"setGroupData",value:function(e){var r={};e.options.forEach(function(e){e.group&&(r[e.group]?r[e.group].options=[].concat(_toConsumableArray(r[e.group].options),[e]):r[e.group]={options:[e],selected:[]})}),e.groupsFiltering.forEach(function(t){r[t].selected=e.value.filter(function(e){return e.group===t})}),this.setState({groupsFilteringData:r})}},{key:"selectValue",value:function(t,e){if("checkbox"!==e.target.type){var r=this.props.value;if(this.props.multiple&&Array.isArray(r)){var n=hasItemIndex(r,t,this.props.valueKey,this.props.labelKey),o=this.state.groupsFilteringData,l=[];console.log(o),l=-1<n?(console.log(1),console.log(t),t.group&&(o[t.group].selected=o[t.group].selected.filter(function(e){return String(e.key)!==String(t.key)})),console.log(o),[].concat(_toConsumableArray(r.slice(0,n)),_toConsumableArray(r.slice(n+1)))):(console.log(2),t.group&&(o[t.group].selected=[].concat(_toConsumableArray(o[t.group].selected),[t])),[].concat(_toConsumableArray(this.props.value),[t])),this.setState({allSelected:l.length===this.props.options.length,groupsFilteringData:o}),this.props.onChange(l,t)}else this.props.onChange(t)}}},{key:"getValue",value:function(e){return void 0!==this.props.valueKey?e[this.props.valueKey]:e}},{key:"allSelected",value:function(e,t){var r=this.props,n=r.value,o=r.options,l=e||n,i=t||o;if(i&&0===i.length)return!1;var a=i.map(this.getValue),s=Array.isArray(l)?l.map(this.getValue):[];return arraysEqual(sortCollection(s),sortCollection(a))}},{key:"toggleSelectAll",value:function(e){if(!this.props.disabled&&"checkbox"!==e.target.type)if(this.state.allSelected){var t=this.state.groupsFilteringData;this.props.groupsFiltering.forEach(function(e){t[e].selected=[]}),this.setState({allSelected:!1}),this.props.onChange([])}else{var r=this.state.groupsFilteringData;this.props.groupsFiltering.forEach(function(e){r[e].selected=r[e].options}),this.setState({allSelected:!0}),this.props.onChange(this.props.options)}}},{key:"isItemSelected",value:function(t){return Array.isArray(t.key)&&this.props.value&&this.props.value.length?!!this.props.value.find(function(e){return e.value==t.value}):hasItem(this.props.value,t,this.props.valueKey,this.props.labelKey)}},{key:"renderOptions",value:function(){var o=this,e=this.state.filtered?this.state.filteredOptions:this.props.options,t=this.props,l=t.labelKey,i=t.valueKey,a=t.multiple,s=t.render,c=t.tabIndex,r=t.renderList,u=t.disabled;return r?r({items:e,selected:this.props.value,multiple:a,tabIndex:c,getIsSelected:this.isItemSelected,selectValue:this.selectValue,disabled:u}):e.map(function(e,t){var r=keyExtractor(e,i,l),n=o.isItemSelected(e);return"function"==typeof s?s({index:t,item:e,isSelected:n,selectValue:o.selectValue,labelKey:l,valueKey:i,multiple:a,disabled:u}):React__default.createElement(Option$1,{key:r,item:e,isSelected:n,selectValue:o.selectValue,labelKey:l,valueKey:i,multiple:a,tabIndex:c,disabled:u,id:o.props.id+"-option-"+t})})}},{key:"onFilterChange",value:function(t){var r=this;if(this.props.getFilterValue&&this.props.getFilterValue(t),!t.trim())return this.setState({filtered:!1,filteredOptions:[]});var n=isDataObject(this.props.options&&this.props.options[0],this.props.valueKey,this.props.labelKey),e=this.props.options.filter(function(e){return includes(n?e[r.props.labelKey]:e,t,r.props.caseSensitiveFilter)});this.setState({filtered:!0,filteredOptions:e},function(){r.props.onFiltered&&r.props.onFiltered(e)})}},{key:"handleOutsideClick",value:function(e){var t=this.props.keepOpen||this.props.multiple;this.node&&this.node.contains(e.target)&&t||this.filter&&this.filter.filterInput&&this.filter.filterInput.contains(e.target)||this.toggleDropDown()}},{key:"focusFilterInput",value:function(e){e&&this.props.defaultFocusFilter&&this.filter&&this.filter.filterInput&&this.filter.filterInput.focus()}},{key:"toggleDropDown",value:function(e){var t=this;this.state.open?document.removeEventListener("click",this.handleOutsideClick,!1):(this.props.setPosition(e),document.addEventListener("click",this.handleOutsideClick,!1)),this.setState(function(e){return _objectSpread({},e,{open:!e.open})},function(){var e=t.state.open;t.focusFilterInput(e),e&&t.props.onOpen?t.props.onOpen():!e&&t.props.onClose&&t.props.onClose()})}},{key:"filterOnGroup",value:function(t){var r=_objectSpread({},this.state.groupsFilteringData);r[t].selected.length!==r[t].options.length?(this.props.groupsFiltering.forEach(function(e){r[e].selected=t===e?r[e].options:[]}),this.setState({value:r[t].options,groupsFilteringData:r}),this.props.onChange(r[t].options)):(this.props.groupsFiltering.forEach(function(e){t===e&&(r[e].selected=[])}),this.setState({groupsFilteringData:r}),this.props.onChange(this.props.value.filter(function(e){return e.group!==t})))}},{key:"render",value:function(){var r=this,e=this.props,t=e.className,n=e.placeholder,o=e.value,l=e.multiple,i=e.numberDisplayed,a=e.includeFilter,s=e.valueKey,c=e.labelKey,u=e.tabIndex,p=e.dropdownHeight,f=e.renderSelectAll,d=e.filterPlaceholder,h=e.disabled,y=e.buttonProps,b=this.state.open,g="";b&&(g+=this.props.id+"-list");var m="".concat(this.props.id,"__button"),v={maxHeight:p,overflowY:"scroll"};return React__default.createElement("div",{ref:function(e){r.node=e},className:["picky",t].join(" "),id:this.props.id,role:"combobox","aria-controls":m,"aria-expanded":b,"aria-haspopup":b,"aria-owns":g,"data-typeview":this.props.typeView,tabIndex:u},React__default.createElement(Button$1,_extends$2({id:"".concat(this.props.id,"__button"),disabled:h,onClick:!h&&this.toggleDropDown},y),React__default.createElement(Placeholder$1,{allSelected:this.state.allSelected,placeholder:n,manySelectedPlaceholder:this.props.manySelectedPlaceholder,allSelectedPlaceholder:this.props.allSelectedPlaceholder,value:o,multiple:l,numberDisplayed:i,valueKey:s,labelKey:c})),React__default.createElement("div",{className:"picky__dropdown",id:this.props.id+"-list","aria-hidden":!b,hidden:!b,style:b?v:{visibility:"hidden"}},a&&React__default.createElement(Filter,{ref:function(e){return r.filter=e},placeholder:d,onFilterChange:this.filterDebounce}),f?f({allSelected:this.state.allSelected,toggleSelectAll:this.toggleSelectAll,tabIndex:u,multiple:l,disabled:h}):React__default.createElement("div",{className:this.props.multiple&&"picky__wrapperFilters"},React__default.createElement(FilterSelect$1,{visible:this.props.multiple,tabIndex:u,allSelected:this.state.allSelected,id:this.props.id,selectAllText:this.props.selectAllText,toggleSelectAll:this.toggleSelectAll}),!!this.state.groupsFilteringData&&!!this.props.groupsFiltering&&this.props.groupsFiltering.map(function(e,t){return React__default.createElement(FilterSelect$1,{key:t,visible:!0,tabIndex:t,allSelected:r.state.groupsFilteringData[e].options.length===r.state.groupsFilteringData[e].selected.length,selectAllText:e,toggleSelectAll:function(){r.filterOnGroup(e)}})})),b&&React__default.createElement("div",null,this.renderOptions())))}},{key:"filterDebounce",get:function(){var e=this.props.filterDebounce;return 0<e?debounce(this.onFilterChange,e):this.onFilterChange}},{key:"showSelectAll",get:function(){var e=this.props,t=e.renderSelectAll,r=e.multiple,n=e.includeSelectAll;return!t&&n&&r&&!this.state.filtered}}]),r}();Picky.defaultProps={numberDisplayed:3,options:[],filterDebounce:150,dropdownHeight:300,onChange:function(){},tabIndex:0,keepOpen:!0,selectAllText:"Select all"},Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),n=r.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var o=t,l=0;l<n;){var i=r[l];if(e.call(o,i,l,r))return l;l++}return-1}}),module.exports=Picky;
