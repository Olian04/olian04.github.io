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
            width: '99.5vw',
            height: '100vh'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9uYXZpZ2F0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFFN0MsNENBQStDO0FBRS9DLElBQUksU0FBUyxHQUFHLDRDQUE0QyxDQUFDO0FBRTdELGlCQUFRLENBQUMsTUFBTSxDQUNYLENBQ0k7SUFDSSw2QkFBQyx1QkFBVSxJQUFDLFVBQVUsRUFBRSxhQUFHO1lBQ3ZCLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEtBQUssRUFBRTtZQUNOLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7U0FDWixHQUFJO0lBQ0wseUNBQVEsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7WUFDM0IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7WUFDVCxNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxRQUFRO1lBQ2YsTUFBTSxFQUFFLE9BQU87U0FDbEIsR0FBVyxDQUNWLENBQ1QsRUFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNsQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkYsdUNBQThDO0FBQzlDLGdEQUF1RDtBQU92RDtJQUFnQyw4QkFBdUI7SUFBdkQ7O0lBa0JBLENBQUM7SUFqQkcsMkJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxDQUNILDZCQUFDLHdCQUFNLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUMzQiw2QkFBQyx3QkFBTSxDQUFDLE1BQU07Z0JBQ2QsNkJBQUMsd0JBQU0sQ0FBQyxLQUFLO29CQUNULG9DQUFHLElBQUksRUFBQyw0QkFBNEIsY0FBWSxDQUNyQyxDQUNDO1lBQ2hCLDZCQUFDLHFCQUFHO2dCQUNKLDZCQUFDLHlCQUFPLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMsNENBQTRDLHVCQUEyQjtnQkFDbEcsNkJBQUMseUJBQU8sSUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBQyxzQ0FBc0MsZ0JBQW9CO2dCQUNyRiw2QkFBQyx5QkFBTyxJQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFDLHVDQUF1QyxpQkFBc0I7Z0JBQ3hGLDZCQUFDLHlCQUFPLElBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUMscUZBQXFGLGVBQW9CLENBQzlILENBQ0gsQ0FDVixDQUFDO0lBQ04sQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxDQWxCK0IsY0FBSyxDQUFDLFNBQVMsR0FrQjlDO0FBbEJZLGdDQUFVOzs7Ozs7Ozs7OztBQ1J2QixvQ0FBZ0M7QUFDaEMsd0NBQXVDO0FBQ3ZDLGlDQUE2QjtBQUVoQixhQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ2YsZ0JBQVEsR0FBRyxTQUFTLENBQUM7QUFDckIsU0FBQyxHQUFHLEVBQUUsQ0FBQyIsImZpbGUiOiIvZGlzdC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdCwgUmVhY3RET00sIF99IGZyb20gJy4vZ2xvYmFsJztcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBOYXZJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuL3ZpZXcvbmF2aWdhdGlvbic7XG5cbmxldCB0YXJnZXRVcmwgPSAnaHR0cHM6Ly9vbGlhbjA0LmdpdGh1Yi5pby9Sb2NrUGFwZXJUcmFjZXIvJztcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uIG9uTmF2aWdhdGU9e3VybCA9PiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0VXJsID0gdXJsO1xuICAgICAgICAgICAgfX0gc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDxpZnJhbWUgc3JjPXt0YXJnZXRVcmx9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc5OS41dncnLFxuICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyBcbiAgICAgICAgICAgIH19PjwvaWZyYW1lPlxuICAgICAgICA8L2Rpdj5cbiAgICApLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC50c3giLCJpbXBvcnQgeyBSZWFjdCwgUmVhY3RET00sIF99IGZyb20gJy4uL2dsb2JhbCc7XG5pbXBvcnQgeyBOYXZiYXIsIE5hdiwgTmF2SXRlbSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uTmF2aWdhdGU6ICh1cmw6IHN0cmluZykgPT4gdm9pZCwgXG4gICAgc3R5bGVcbn1cblxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5hdmJhciBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9PbGlhbjA0XCI+T2xpYW4wNDwvYT5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE5hdj5cbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0gaHJlZj1cImh0dHBzOi8vb2xpYW4wNC5naXRodWIuaW8vUm9ja1BhcGVyVHJhY2VyL1wiPlJvY2sgUGFwZXIgVHJhY2U8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezJ9IGhyZWY9XCJodHRwczovL29saWFuMDQuZ2l0aHViLmlvL1R1cmluZy5qcy9cIj5UdXJpbmcuanM8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezN9IGhyZWY9XCJodHRwczovL3B5cGkucHl0aG9uLm9yZy9weXBpL3BlZWtpdGVyXCIgPlB5UGVla0l0ZXI8L05hdkl0ZW0+XG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezR9IGhyZWY9XCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9pbWdnZW5pZS9sZWRpZG9kbGZmb25vY2hiZWpvbGRwb21ibmxoZmRoaFwiID5JbWdHZW5pZTwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9uYXZpZ2F0aW9uLnRzeCIsImltcG9ydCAqIGFzIF9SZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBfUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIF9fIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBSZWFjdCA9IF9SZWFjdDtcbmV4cG9ydCBjb25zdCBSZWFjdERPTSA9IF9SZWFjdERPTTtcbmV4cG9ydCBjb25zdCBfID0gX187XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2xvYmFsLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==