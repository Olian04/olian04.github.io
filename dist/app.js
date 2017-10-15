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
var target = {};
global_1.ReactDOM.render((global_1.React.createElement("div", null,
    global_1.React.createElement(navigation_1.Navigation, { target: target, style: {
            padding: 0,
            margin: 0
        } }),
    global_1.React.createElement("iframe", { src: 'https://github.com/Olian04/olian04.github.io' }))), document.getElementById('root'));


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
                global_1.React.createElement(react_bootstrap_1.NavItem, { eventKey: 1, href: "#" }, "Rock Paper Trace"),
                global_1.React.createElement(react_bootstrap_1.NavItem, { eventKey: 2, href: "#" }, "Link"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9uYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFFN0MsNENBQStDO0FBRS9DLElBQUksTUFBTSxHQUVOLEVBQUUsQ0FBQztBQUVQLGlCQUFRLENBQUMsTUFBTSxDQUNYLENBQ0k7SUFDSSw2QkFBQyx1QkFBVSxJQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQy9CLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7U0FDWixHQUFJO0lBQ0wseUNBQVEsR0FBRyxFQUFDLDhDQUE4QyxHQUFXLENBQ25FLENBQ1QsRUFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkYsdUNBQThDO0FBQzlDLGdEQUF1RDtBQVN2RDtJQUFnQyw4QkFBdUI7SUFBdkQ7O0lBZ0JBLENBQUM7SUFmRywyQkFBTSxHQUFOO1FBQ0ksTUFBTSxDQUFDLENBQ0gsNkJBQUMsd0JBQU0sSUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQzNCLDZCQUFDLHdCQUFNLENBQUMsTUFBTTtnQkFDZCw2QkFBQyx3QkFBTSxDQUFDLEtBQUs7b0JBQ1Qsb0NBQUcsSUFBSSxFQUFDLDRCQUE0QixjQUFZLENBQ3JDLENBQ0M7WUFDaEIsNkJBQUMscUJBQUc7Z0JBQ0osNkJBQUMseUJBQU8sSUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxHQUFHLHVCQUEyQjtnQkFDekQsNkJBQUMseUJBQU8sSUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxHQUFHLFdBQWUsQ0FDdkMsQ0FDSCxDQUNWLENBQUM7SUFDTixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLENBaEIrQixjQUFLLENBQUMsU0FBUyxHQWdCOUM7QUFoQlksZ0NBQVU7Ozs7Ozs7Ozs7O0FDVnZCLG9DQUFnQztBQUNoQyx3Q0FBdUM7QUFDdkMsaUNBQTZCO0FBRWhCLGFBQUssR0FBRyxNQUFNLENBQUM7QUFDZixnQkFBUSxHQUFHLFNBQVMsQ0FBQztBQUNyQixTQUFDLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6Ii9kaXN0L2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSwgX30gZnJvbSAnLi9nbG9iYWwnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJy4vdmlldy9uYXZpZ2F0aW9uJztcblxubGV0IHRhcmdldDoge1xuICAgIHVybD86IHN0cmluZ1xufSA9IHt9O1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE5hdmlnYXRpb24gdGFyZ2V0PXt0YXJnZXR9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8aWZyYW1lIHNyYz0naHR0cHM6Ly9naXRodWIuY29tL09saWFuMDQvb2xpYW4wNC5naXRodWIuaW8nID48L2lmcmFtZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAudHN4IiwiaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NLCBffSBmcm9tICcuLi9nbG9iYWwnO1xuaW1wb3J0IHsgTmF2YmFyLCBOYXYsIE5hdkl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICB0YXJnZXQ6IHtcbiAgICAgICAgdXJsPzogc3RyaW5nXG4gICAgfSxcbiAgICBzdHlsZVxufVxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHM+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2YmFyIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL09saWFuMDRcIj5PbGlhbjA0PC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfSBocmVmPVwiI1wiPlJvY2sgUGFwZXIgVHJhY2U8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezJ9IGhyZWY9XCIjXCI+TGluazwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9uYXZpZ2F0aW9uLnRzeCIsImltcG9ydCAqIGFzIF9SZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIF9fIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBSZWFjdCA9IF9SZWFjdDtcbmV4cG9ydCBjb25zdCBSZWFjdERPTSA9IF9SZWFjdERPTTtcbmV4cG9ydCBjb25zdCBfID0gX187XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2xvYmFsLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==