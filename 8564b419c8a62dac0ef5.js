function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import ReactDOM from 'react-dom';

var Contact = /*#__PURE__*/function (_React$Component) {
  _inherits(Contact, _React$Component);

  var _super = _createSuper(Contact);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _super.call(this, props);
    _this.state = {
      password: 'swordfish',
      authorized: false
    };
    _this.authorize = _this.authorize.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Contact, [{
    key: "authorize",
    value: function authorize(e) {
      var password = e.target.querySelector('input[type="password"]').value;
      var auth = password == this.state.password;
      console.log("auth " + auth);
      this.setState({
        authorized: auth
      });
    }
  }, {
    key: "render",
    value: function render() {
      var login = /*#__PURE__*/React.createElement("form", {
        action: "#",
        onSubmit: this.authorize
      }, /*#__PURE__*/React.createElement("input", {
        type: "password",
        placeholder: "Password"
      }), " ", /*#__PURE__*/React.createElement("input", {
        type: "submit"
      }));
      var contactInfo = /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "client@example.com"), /*#__PURE__*/React.createElement("li", null, "555.555.5555"));
      console.log("here");
      var ContactHere = "Enter the Password";
      console.log("this.state.authorized " + this.state.authorized);

      if (this.state.authorized == true) {
        console.log("you made it");
        return contactInfo;
      } else {
        console.log("bad");
        return login;
      }
    }
  }]);

  return Contact;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Contact, null), document.getElementById('app'));