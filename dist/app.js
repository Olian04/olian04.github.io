webpackJsonp([1],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var global_1 = __webpack_require__(82);
var navigation_1 = __webpack_require__(152);
var targetUrl = 'https://olian04.github.io/RockPaperTracer/';
global_1.ReactDOM.render((global_1.React.createElement("div", null,
    global_1.React.createElement(navigation_1.Navigation, { onNavigate: function (url) {
            targetUrl = url;
        }, style: {
            padding: 0,
            margin: 0
        } }),
    global_1.React.createElement("iframe", { src: targetUrl, style: {
            position: 'relative',
            left: 0,
            top: 0,
            padding: 0,
            margin: 0,
            border: 'none',
            width: '100%',
            height: '94.6666666vh'
        } }))), document.getElementById('root'));


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var global_1 = __webpack_require__(82);
var react_bootstrap_1 = __webpack_require__(87);
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Navigation.prototype.render = function () {
        return (global_1.React.createElement(react_bootstrap_1.Navbar, { style: this.props.style },
            global_1.React.createElement(react_bootstrap_1.Navbar.Header, null,
                global_1.React.createElement(react_bootstrap_1.Navbar.Brand, null,
                    global_1.React.createElement("a", { href: "https://github.com/Olian04" }, "Olian04"))),
            global_1.React.createElement(react_bootstrap_1.Nav, null,
                global_1.React.createElement(react_bootstrap_1.NavItem, { eventKey: 0, href: "https://olian04.github.io/TheMatrix/" }, "The Matrix"),
                global_1.React.createElement(react_bootstrap_1.NavItem, { eventKey: 1, href: "https://olian04.github.io/RockPaperTracer/" }, "Rock Paper Trace"),
                global_1.React.createElement(react_bootstrap_1.NavItem, { eventKey: 2, href: "https://olian04.github.io/Turing.js/" }, "Turing.js"),
                global_1.React.createElement(react_bootstrap_1.NavItem, { eventKey: 3, href: "https://pypi.python.org/pypi/peekiter" }, "PyPeekIter"),
                global_1.React.createElement(react_bootstrap_1.NavItem, { eventKey: 4, href: "https://chrome.google.com/webstore/detail/imggenie/ledidodlffonochbejoldpombnlhfdhh" }, "ImgGenie"))));
    };
    return Navigation;
}(global_1.React.Component));
exports.Navigation = Navigation;


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var _React = __webpack_require__(0);
var _ReactDOM = __webpack_require__(12);
var __ = __webpack_require__(86);
exports.React = _React;
exports.ReactDOM = _ReactDOM;
exports._ = __;


/***/ })

},[132]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9uYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFFN0MsNENBQStDO0FBRS9DLElBQUksU0FBUyxHQUFHLDRDQUE0QyxDQUFDO0FBRTdELGlCQUFRLENBQUMsTUFBTSxDQUNYLENBQ0k7SUFDSSw2QkFBQyx1QkFBVSxJQUFDLFVBQVUsRUFBRSxhQUFHO1lBQ3ZCLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEtBQUssRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7U0FDWixHQUFJO0lBQ0wseUNBQVEsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7WUFDM0IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLGNBQWM7U0FDekIsR0FBVyxDQUNWLENBQ1QsRUFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkYsdUNBQThDO0FBQzlDLGdEQUF1RDtBQU92RDtJQUFnQyw4QkFBdUI7SUFBdkQ7O0lBbUJBLENBQUM7SUFsQkcsMkJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxDQUNILDZCQUFDLHdCQUFNLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUMzQiw2QkFBQyx3QkFBTSxDQUFDLE1BQU07Z0JBQ2QsNkJBQUMsd0JBQU0sQ0FBQyxLQUFLO29CQUNULG9DQUFHLElBQUksRUFBQyw0QkFBNEIsY0FBWSxDQUNyQyxDQUNDO1lBQ2hCLDZCQUFDLHFCQUFHO2dCQUNKLDZCQUFDLHlCQUFPLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMsc0NBQXNDLGlCQUFxQjtnQkFDdEYsNkJBQUMseUJBQU8sSUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyw0Q0FBNEMsdUJBQTJCO2dCQUNsRyw2QkFBQyx5QkFBTyxJQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLHNDQUFzQyxnQkFBb0I7Z0JBQ3JGLDZCQUFDLHlCQUFPLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMsdUNBQXVDLGlCQUFzQjtnQkFDeEYsNkJBQUMseUJBQU8sSUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxxRkFBcUYsZUFBb0IsQ0FDOUgsQ0FDSCxDQUNWLENBQUM7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBbkIrQixjQUFLLENBQUMsU0FBUyxHQW1COUM7QUFuQlksZ0NBQVU7Ozs7Ozs7Ozs7O0FDUnZCLG9DQUFnQztBQUNoQyx3Q0FBdUM7QUFDdkMsaUNBQTZCO0FBRWhCLGFBQUssR0FBRyxNQUFNLENBQUM7QUFDZixnQkFBUSxHQUFHLFNBQVMsQ0FBQztBQUNyQixTQUFDLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6Ii9kaXN0L2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSwgX30gZnJvbSAnLi9nbG9iYWwnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4vdmlldy9uYXZpZ2F0aW9uJztcblxubGV0IHRhcmdldFVybCA9ICdodHRwczovL29saWFuMDQuZ2l0aHViLmlvL1JvY2tQYXBlclRyYWNlci8nO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24gb25OYXZpZ2F0ZT17dXJsID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRVcmwgPSB1cmw7XG4gICAgICAgICAgICB9fSBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgPGlmcmFtZSBzcmM9e3RhcmdldFVybH0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzk0LjY2NjY2NjZ2aCcgXG4gICAgICAgICAgICB9fT48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAudHN4IiwiaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NLCBffSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBvbk5hdmlnYXRlOiAodXJsOiBzdHJpbmcpID0+IHZvaWQsIFxuICAgIHN0eWxlXG59XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcz4ge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxOYXZiYXIgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vT2xpYW4wNFwiPk9saWFuMDQ8L2E+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezB9IGhyZWY9XCJodHRwczovL29saWFuMDQuZ2l0aHViLmlvL1RoZU1hdHJpeC9cIj5UaGUgTWF0cml4PC9OYXZJdGVtPiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezF9IGhyZWY9XCJodHRwczovL29saWFuMDQuZ2l0aHViLmlvL1JvY2tQYXBlclRyYWNlci9cIj5Sb2NrIFBhcGVyIFRyYWNlPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsyfSBocmVmPVwiaHR0cHM6Ly9vbGlhbjA0LmdpdGh1Yi5pby9UdXJpbmcuanMvXCI+VHVyaW5nLmpzPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXszfSBocmVmPVwiaHR0cHM6Ly9weXBpLnB5dGhvbi5vcmcvcHlwaS9wZWVraXRlclwiID5QeVBlZWtJdGVyPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXs0fSBocmVmPVwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvaW1nZ2VuaWUvbGVkaWRvZGxmZm9ub2NoYmVqb2xkcG9tYm5saGZkaGhcIiA+SW1nR2VuaWU8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgPC9OYXZiYXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvbmF2aWdhdGlvbi50c3giLCJpbXBvcnQgKiBhcyBfUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgX1JlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyBfXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgUmVhY3QgPSBfUmVhY3Q7XG5leHBvcnQgY29uc3QgUmVhY3RET00gPSBfUmVhY3RET007XG5leHBvcnQgY29uc3QgXyA9IF9fO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dsb2JhbC50cyJdLCJzb3VyY2VSb290IjoiIn0=