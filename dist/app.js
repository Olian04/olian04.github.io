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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9uYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFFN0MsNENBQStDO0FBRS9DLElBQUksU0FBUyxHQUFHLDRDQUE0QyxDQUFDO0FBRTdELGlCQUFRLENBQUMsTUFBTSxDQUNYLENBQ0k7SUFDSSw2QkFBQyx1QkFBVSxJQUFDLFVBQVUsRUFBRSxhQUFHO1lBQ3ZCLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEtBQUssRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7U0FDWixHQUFJO0lBQ0wseUNBQVEsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7WUFDM0IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLGNBQWM7U0FDekIsR0FBVyxDQUNWLENBQ1QsRUFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkYsdUNBQThDO0FBQzlDLGdEQUF1RDtBQU92RDtJQUFnQyw4QkFBdUI7SUFBdkQ7O0lBa0JBLENBQUM7SUFqQkcsMkJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxDQUNILDZCQUFDLHdCQUFNLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUMzQiw2QkFBQyx3QkFBTSxDQUFDLE1BQU07Z0JBQ2QsNkJBQUMsd0JBQU0sQ0FBQyxLQUFLO29CQUNULG9DQUFHLElBQUksRUFBQyw0QkFBNEIsY0FBWSxDQUNyQyxDQUNDO1lBQ2hCLDZCQUFDLHFCQUFHO2dCQUNKLDZCQUFDLHlCQUFPLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMsNENBQTRDLHVCQUEyQjtnQkFDbEcsNkJBQUMseUJBQU8sSUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxzQ0FBc0MsZ0JBQW9CO2dCQUNyRiw2QkFBQyx5QkFBTyxJQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLHVDQUF1QyxpQkFBc0I7Z0JBQ3hGLDZCQUFDLHlCQUFPLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMscUZBQXFGLGVBQW9CLENBQzlILENBQ0gsQ0FDVixDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxDQWxCK0IsY0FBSyxDQUFDLFNBQVMsR0FrQjlDO0FBbEJZLGdDQUFVOzs7Ozs7Ozs7OztBQ1J2QixvQ0FBZ0M7QUFDaEMsd0NBQXVDO0FBQ3ZDLGlDQUE2QjtBQUVoQixhQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ2YsZ0JBQVEsR0FBRyxTQUFTLENBQUM7QUFDckIsU0FBQyxHQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiIvZGlzdC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgUmVhY3RET00sIF99IGZyb20gJy4vZ2xvYmFsJztcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBOYXZJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuL3ZpZXcvbmF2aWdhdGlvbic7XG5cbmxldCB0YXJnZXRVcmwgPSAnaHR0cHM6Ly9vbGlhbjA0LmdpdGh1Yi5pby9Sb2NrUGFwZXJUcmFjZXIvJztcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIG9uTmF2aWdhdGU9e3VybCA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VXJsID0gdXJsO1xuICAgICAgICAgICAgfX0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDxpZnJhbWUgc3JjPXt0YXJnZXRVcmx9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc5NC42NjY2NjY2dmgnIFxuICAgICAgICAgICAgfX0+PC9pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLnRzeCIsImltcG9ydCB7IFJlYWN0LCBSZWFjdERPTSwgX30gZnJvbSAnLi4vZ2xvYmFsJztcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBOYXZJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgb25OYXZpZ2F0ZTogKHVybDogc3RyaW5nKSA9PiB2b2lkLCBcbiAgICBzdHlsZVxufVxuXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHM+IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2YmFyIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL09saWFuMDRcIj5PbGlhbjA0PC9hPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsxfSBocmVmPVwiaHR0cHM6Ly9vbGlhbjA0LmdpdGh1Yi5pby9Sb2NrUGFwZXJUcmFjZXIvXCI+Um9jayBQYXBlciBUcmFjZTwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17Mn0gaHJlZj1cImh0dHBzOi8vb2xpYW4wNC5naXRodWIuaW8vVHVyaW5nLmpzL1wiPlR1cmluZy5qczwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17M30gaHJlZj1cImh0dHBzOi8vcHlwaS5weXRob24ub3JnL3B5cGkvcGVla2l0ZXJcIiA+UHlQZWVrSXRlcjwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17NH0gaHJlZj1cImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL2ltZ2dlbmllL2xlZGlkb2RsZmZvbm9jaGJlam9sZHBvbWJubGhmZGhoXCIgPkltZ0dlbmllPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L25hdmlnYXRpb24udHN4IiwiaW1wb3J0ICogYXMgX1JlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIF9SZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICogYXMgX18gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGNvbnN0IFJlYWN0ID0gX1JlYWN0O1xuZXhwb3J0IGNvbnN0IFJlYWN0RE9NID0gX1JlYWN0RE9NO1xuZXhwb3J0IGNvbnN0IF8gPSBfXztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nbG9iYWwudHMiXSwic291cmNlUm9vdCI6IiJ9