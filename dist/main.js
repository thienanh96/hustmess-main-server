(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width:420px) {}\r\n\r\n@media screen and (max-width:910px) {\r\n  .roomchat-header-label {\r\n    background-color: red\r\n  }\r\n}\r\n\r\n.custom-modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 10;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  background-color: rgb(0, 0, 0);\r\n  /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /* Black w/ opacity */\r\n  /* overflow: auto; */\r\n}\r\n\r\n.custom-modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  margin-top: 5%;\r\n  border: 1px solid #888;\r\n  width: 35%;\r\n  height: 220px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-size: 17px;\r\n  font-weight: 500\r\n    /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.modal-options-content {\r\n  height: 70px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet>\n  <template ngbModalContainer></template>\n</router-outlet>\n\n<div *ngIf=\"showCallAccept\" id=\"call-accept-modal\" class=\"custom-modal\">\n  <div class=\"custom-modal-content\" style=\"height: 190px\">\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        {{callUsername}} đang gọi bạn !\n      </div>\n    </div>\n    <div class=\"modal-options-content\">\n      <div style=\"font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.50;font-size: 17px;font-weight: 500;text-align: center;padding: 10px;margin-top:5px;display: flex;justify-content: center;align-items: center\">\n        <button (click)=\"acceptCall()\" type=\"button\" class=\"btn btn-info\" style=\"float:left;width:80px;height: 40px;margin:10px\">\n          Đồng ý\n        </button>\n        <button (click)=\"rejectCall()\" type=\"button\" class=\"btn btn-danger\" style=\"float:left;width:80px;height: 40px;margin:10px;margin-right:10px\">\n          Từ chối\n        </button>\n      </div>\n    </div>\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_friend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/friend.service */ "./src/app/services/friend.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(componentCommunicationService, notificationService, router, socketService, friendService, userService, authService) {
        this.componentCommunicationService = componentCommunicationService;
        this.notificationService = notificationService;
        this.router = router;
        this.socketService = socketService;
        this.friendService = friendService;
        this.userService = userService;
        this.authService = authService;
        this.myID = "";
        this.myProfile = {};
        this.timeActive = Date.now();
        this.moveMouseTime = Date.now();
        this.idle = false;
        this.callUsername = "";
        this.showCallAccept = false;
        this.calledUserIDs = [];
        this.connectedUserCall = [];
        this.callRoomchatID = "";
        this.dataTimeActive = [];
        this.peerID = "";
    }
    AppComponent.prototype.onMousemove = function (event) {
        this.moveMouseTime = Date.now();
        if (this.idle) {
            if (this.myID !== "") {
                this.socketService.reActive(this.myID + "_user", this.myID);
                this.idle = false;
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getTokenStatus().subscribe(function (data) {
            if (data) {
                if (data.isAdded === true) {
                    _this.friendService.getFriends("true").subscribe(function (data) {
                        if (data && data.success) {
                            for (var _i = 0, _a = data.friends; _i < _a.length; _i++) {
                                var friend = _a[_i];
                                _this.socketService.joinRoomchat(friend + "_user");
                            }
                            _this.myID = data.myID;
                            _this.socketService.receiveConfirmConnect().subscribe(function (data) {
                                if (data && data.success) {
                                    _this.socketService.sendUserID(_this.myID, _this.myID + "_user");
                                    setInterval(function () {
                                        _this.socketService.sendUserID(_this.myID, _this.myID + "_user");
                                    }, 2000);
                                }
                            });
                        }
                    });
                    _this.socketService.joinRoomchat("world");
                }
            }
        });
        this.componentCommunicationService.getData().subscribe(function (data) {
            if (!data)
                return;
            if (data.type === "confirm-init") {
                _this.userService.getUsers("none").subscribe(function (data) {
                    if (data && data.success) {
                        _this.dataTimeActive = data.users.map(function (el) {
                            return {
                                _id: el._id,
                                timeActive: el.timeActive
                            };
                        });
                        _this.componentCommunicationService.setData({
                            fromComponent: "app",
                            type: "timestamp-on-init",
                            dataTimeActive: _this.dataTimeActive
                        });
                    }
                });
            }
            else if (data.fromComponent === "input" &&
                data.type === "confirm-seen-message") {
                _this.componentCommunicationService.setData({
                    fromComponent: "app",
                    toComponent: "conversation",
                    type: "check-valid-seen",
                    data: data
                });
            }
            else if (data.fromComponent === "conversation" &&
                data.type === "is-valid-seen") {
                _this.socketService.emitSeenMessage(data.roomchatID, data.userID);
            }
            else if (data.fromComponent === "conversation" &&
                data.type === "call-video") {
                _this.calledUserIDs = data.usersInRoomchat;
                _this.socketService.emitCall(_this.myProfile.username, _this.myProfile._id, data.roomchatID);
            }
        });
        this.socketService.receiveCreateRoomchat().subscribe(function (data) {
            if (!data)
                return;
            _this.socketService.joinRoomchat(data.roomchatID);
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                toComponent: "roomchat",
                type: "create-roomchat",
                roomchatID: data.roomchatID
            });
        });
        this.socketService.receiveFriendRequest().subscribe(function (data) {
            if (!data)
                return;
            if (_this.myID + '' !== data.destUserID)
                return;
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                toComponent: "navbar",
                type: "friend-request",
                data: data
            });
        });
        this.socketService.receiveMessage(function (data) {
            if (!data)
                return;
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                type: "receive-message",
                data: data
            });
            if (data.type === "message") {
                _this.socketService.emitReceiveMessage(data.roomchatID);
            }
        });
        this.socketService.receiveCallRequest().subscribe(function (data) {
            if (!data)
                return;
            _this.callUsername = data.username;
            _this.showCallAccept = true;
            _this.callRoomchatID = data.roomchatID;
            console.log("call request", data);
        });
        this.socketService.receiveNotification().subscribe(function (data) {
            if (!data)
                return;
            var notificationObject = data.notification;
            var fromRoomchatID = data.fromRoomchatID;
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                toComponent: "navbar",
                type: "receive-notification",
                notification: notificationObject
            });
        });
        this.socketService.confirmReceiveMessage().subscribe(function (data) {
            if (!data)
                return;
            console.log("da nhan tin nhan!!!!");
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                toComponent: "conversation",
                type: "confirm-received-message",
                data: data
            });
        });
        this.socketService.confirmSeenMessage().subscribe(function (data) {
            console.log("DMMM");
            if (!data)
                return;
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                toComponent: "conversation",
                type: "confirm-seen-message",
                data: data
            });
        });
        this.socketService.receiveTyping(function (data) {
            if (!data)
                return;
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                type: "typing",
                data: data
            });
        });
        this.socketService.receiveTimestamp().subscribe(function (data) {
            if (!data)
                return;
            _this.timeActive = data.time;
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                type: "timestamp",
                fromUserID: data.userID,
                time: data.time
            });
        });
        setInterval(function () {
            if (Math.abs(Date.now() - _this.moveMouseTime) > 1000 * 60) {
                // lon hon 1phut thi idle
                if (_this.myID !== "") {
                    _this.idle = true;
                    _this.socketService.emitIdle(_this.myID + "_user", _this.myID);
                }
            }
        }, 2000);
        this.socketService.receiveIdle().subscribe(function (data) {
            if (!data)
                return;
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                fromUserID: data.userID,
                type: "idle"
            });
        });
        this.socketService.receiveReactive().subscribe(function (data) {
            if (!data)
                return;
            _this.componentCommunicationService.setData({
                fromComponent: "app",
                fromUserID: data.userID,
                type: "reactive"
            });
        });
        this.socketService.receivePeerID().subscribe(function (data) {
            if (!data)
                return;
            if (data.userID === _this.myID)
                return;
            var destUserID = data.userID;
            if (_this.calledUserIDs.includes(destUserID + "")) {
                //xac nhan lai nguoi dc goi
                _this.connectedUserCall.push(destUserID);
            }
            if (_this.connectedUserCall.length === 1) {
                _this.calledUserIDs = [];
                return window.open("services/" + data.roomchatID + "?userid=" + _this.myID);
            }
        });
        this.socketService.receiveAddUsersToGroup().subscribe(function (data) {
            if (!data)
                return;
            if (data.addedUserID.includes(_this.myID + "")) {
                _this.socketService.joinRoomchat(data.roomchatID);
            }
            return _this.componentCommunicationService.setData({
                fromComponent: "app",
                toComponent: "info-conversation",
                roomchatID: data.roomchatID,
                type: "add-users-to-roomchat"
            });
        });
        this.socketService.receiveDeleteUsersFromGroup().subscribe(function (data) {
            if (!data)
                return;
            if (_this.myID + "" === data.deletedUserID + "") {
                _this.socketService.leaveRoomchat(data.roomchatID);
            }
        });
        this.socketService.receiveArrangeRoomchats().subscribe(function (data) {
            if (!data)
                return;
            return _this.componentCommunicationService.setData({
                fromComponent: "app",
                toComponent: "roomchat",
                type: "arrange-roomchat",
                arrangedRoomchat: data
            });
        });
        // this.componentCommunicationService.getData().subscribe(data => {
        //   if (!data) return;
        //   if (data.type === 'resend-timestamp-oninit') {
        //     if(this.dataTimeActive.length === 0) return;
        //     this.componentCommunicationService.setData({
        //       fromComponent: 'app',
        //       type: 'timestamp-on-init',
        //       dataTimeActive: this.dataTimeActive
        //     });
        //   }
        // })
    };
    AppComponent.prototype.openStream = function () {
        var config = {
            audio: false,
            video: true
        };
        return navigator.mediaDevices.getUserMedia(config);
    };
    AppComponent.prototype.acceptCall = function () {
        return window.open("answer/" + this.callRoomchatID + "?userid=" + this.myID);
    };
    AppComponent.prototype.rejectCall = function () { };
    AppComponent.prototype.isCallOrAnswerRoute = function () {
        var url = this.router.routerState.snapshot.url.split("/");
        var el = url[1];
        console.log("iscall::", url);
        if (el === "services" || el === "answer") {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.isInRoomchatID = function (roomchatID) {
        var url = this.router.routerState.snapshot.url;
        return (url === "/home/conversation/" + roomchatID ||
            url === "/conversation/" + roomchatID);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mousemove", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onMousemove", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__["ComponentCommunicationService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            _services_friend_service__WEBPACK_IMPORTED_MODULE_3__["FriendService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, authHttpServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHttpServiceFactory", function() { return authHttpServiceFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/authentication/authentication.component */ "./src/app/components/authentication/authentication.component.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_roomchat_roomchat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/roomchat/roomchat.component */ "./src/app/components/roomchat/roomchat.component.ts");
/* harmony import */ var _components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/conversation/conversation.component */ "./src/app/components/conversation/conversation.component.ts");
/* harmony import */ var _components_lastmessage_lastmessage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/lastmessage/lastmessage.component */ "./src/app/components/lastmessage/lastmessage.component.ts");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _search_roomchat_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./search-roomchat.pipe */ "./src/app/search-roomchat.pipe.ts");
/* harmony import */ var _search_contacts_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./search-contacts.pipe */ "./src/app/search-contacts.pipe.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/components/message/message.component.ts");
/* harmony import */ var ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-textarea-autosize */ "./node_modules/ngx-textarea-autosize/esm5/ngx-textarea-autosize.js");
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./time-ago.pipe */ "./src/app/time-ago.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components//input/input.component */ "./src/app/components/input/input.component.ts");
/* harmony import */ var _timeago_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./timeago.pipe */ "./src/app/timeago.pipe.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/new-message/new-message.component */ "./src/app/components/new-message/new-message.component.ts");
/* harmony import */ var ng4_click_outside__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng4-click-outside */ "./node_modules/ng4-click-outside/lib/index.js");
/* harmony import */ var ng4_click_outside__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(ng4_click_outside__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _components_info_conversation_info_conversation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/info-conversation/info-conversation.component */ "./src/app/components/info-conversation/info-conversation.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/answer/answer.component */ "./src/app/components/answer/answer.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var appRoutes = [
    { path: "", redirectTo: "/home", pathMatch: 'full' },
    { path: "authenticate", component: _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticationComponent"] },
    {
        path: "contacts",
        component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_14__["ContactsComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]],
        data: { key: "homee" },
        children: [
            {
                path: "conversation/:roomchatid",
                component: _components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_17__["ConversationComponent"],
                canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]],
                data: { key: "home-conversation" }
            },
            {
                path: "newmessage",
                component: _components_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_30__["NewMessageComponent"],
                canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]],
                data: { key: "home-newmessage" }
            }
        ]
    },
    {
        path: "conversation/:roomchatid",
        component: _components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_17__["ConversationComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
    },
    { path: "roomchats", component: _components_roomchat_roomchat_component__WEBPACK_IMPORTED_MODULE_16__["RoomchatComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]] },
    {
        path: "conversation/:roomchatid",
        component: _components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_17__["ConversationComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
    },
    {
        path: "infoconversation/:roomchatid",
        component: _components_info_conversation_info_conversation_component__WEBPACK_IMPORTED_MODULE_32__["InfoConversationComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
    },
    {
        path: "newmessage",
        component: _components_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_30__["NewMessageComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
    },
    {
        path: "services/:id",
        component: _components_services_services_component__WEBPACK_IMPORTED_MODULE_33__["ServicesComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]]
    },
    { path: "answer/:id", component: _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_34__["AnswerComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_36__["ProfileComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"]] }
    // {
    //   path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard],children: [{ path: 'post/:postID', component: PostComponent }]
    // }
    // { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_9__["AuthenticationComponent"],
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_14__["ContactsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_roomchat_roomchat_component__WEBPACK_IMPORTED_MODULE_16__["RoomchatComponent"],
                _components_conversation_conversation_component__WEBPACK_IMPORTED_MODULE_17__["ConversationComponent"],
                _components_lastmessage_lastmessage_component__WEBPACK_IMPORTED_MODULE_18__["LastmessageComponent"],
                _search_roomchat_pipe__WEBPACK_IMPORTED_MODULE_20__["SearchRoomchatPipe"],
                _search_contacts_pipe__WEBPACK_IMPORTED_MODULE_21__["SearchContactsPipe"],
                _components_message_message_component__WEBPACK_IMPORTED_MODULE_22__["MessageComponent"],
                _components_input_input_component__WEBPACK_IMPORTED_MODULE_26__["InputComponent"],
                _time_ago_pipe__WEBPACK_IMPORTED_MODULE_24__["TimeAgoPipe"],
                _timeago_pipe__WEBPACK_IMPORTED_MODULE_27__["TimeagoPipe"],
                _components_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_30__["NewMessageComponent"],
                _components_info_conversation_info_conversation_component__WEBPACK_IMPORTED_MODULE_32__["InfoConversationComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_33__["ServicesComponent"],
                _components_answer_answer_component__WEBPACK_IMPORTED_MODULE_34__["AnswerComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_36__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                ngx_textarea_autosize__WEBPACK_IMPORTED_MODULE_23__["TextareaAutosizeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng4_click_outside__WEBPACK_IMPORTED_MODULE_31__["ClickOutsideModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: "never" }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ServiceWorkerModule"].register("ngsw-worker.js", {
                    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].production
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [
                _services_authentication_service__WEBPACK_IMPORTED_MODULE_10__["AuthenticationService"],
                _services_component_communication_service__WEBPACK_IMPORTED_MODULE_19__["ComponentCommunicationService"],
                // { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
                _services_socket_service__WEBPACK_IMPORTED_MODULE_11__["SocketService"],
                {
                    provide: angular2_jwt__WEBPACK_IMPORTED_MODULE_12__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function authHttpServiceFactory(http, options) {
    return new angular2_jwt__WEBPACK_IMPORTED_MODULE_12__["AuthHttp"](new angular2_jwt__WEBPACK_IMPORTED_MODULE_12__["AuthConfig"](), http, options);
}


/***/ }),

/***/ "./src/app/components/answer/answer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/answer/answer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/answer/answer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/answer/answer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;display: flex;justify-content: center;align-items: center\">\n  <video id=\"big-stream\" controls></video>\n</div>\n<div style=\"width:25%;height:300px;position: fixed;bottom:100px\">\n  <video id=\"small-stream\" width=\"100%\" controls></video>\n</div>\n<div (click)='close()' style=\"position:fixed;bottom:20px;width:100%;height:100px;display: flex;justify-content: center;align-items: center\">\n  <i class=\"fas fa-phone\" style=\"font-size: 40px;color:red\"></i>\n</div>"

/***/ }),

/***/ "./src/app/components/answer/answer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/answer/answer.component.ts ***!
  \*******************************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! peerjs */ "./node_modules/peerjs/lib/peer.js");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/roomchat-user.service */ "./src/app/services/roomchat-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(communicationComponentService, userService, socketService, roomchatUserService, router) {
        this.communicationComponentService = communicationComponentService;
        this.userService = userService;
        this.socketService = socketService;
        this.roomchatUserService = roomchatUserService;
        this.router = router;
        this.userID = '';
        this.roomchatID = '';
        this.peerID = '';
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_3__({
            path: '/peerjs',
            host: 'hustmess-peer-server.herokuapp.com',
            port: 443,
            secure: true
        });
        var bigStream = document.getElementById('big-stream');
        bigStream.height = window.innerHeight;
        var bigVideoWidth = bigStream.clientWidth;
        this.roomchatID = this.getParams().params;
        this.userID = this.getParams().query;
        this.peer.on('open', function (id) {
            _this.updatePeerIDSub = _this.userService.updatePeerIDUser(id).subscribe(function (data) {
                console.log("id peer: ", data);
                if (data && data.success) {
                    _this.socketService.emitAcceptCallStatus(true, _this.roomchatID, _this.userID);
                }
                else {
                    _this.socketService.emitAcceptCallStatus(false, _this.roomchatID, _this.userID);
                }
            });
        });
        this.peer.on('call', function (call) {
            console.log("answer co cuoc goi!!!", call.metadata);
            _this.openStream().then(function (stream) {
                call.answer(stream);
                call.on('stream', function (remoteStream) {
                    console.log('check strea: ', remoteStream);
                    var bigVideo = document.getElementById('big-stream');
                    var smallVideo = document.getElementById('small-stream');
                    bigVideo.srcObject = remoteStream;
                    smallVideo.srcObject = stream;
                    smallVideo.play();
                    bigVideo.play();
                });
            });
        });
    };
    AnswerComponent.prototype.ngAfterViewInit = function () {
        this.communicationComponentService.setData({
            fromComponent: 'answer',
            toComponent: 'navbar',
            type: 'hide-navbar'
        });
    };
    AnswerComponent.prototype.openStream = function () {
        var config = {
            audio: true,
            video: true
        };
        return navigator.mediaDevices.getUserMedia(config);
    };
    AnswerComponent.prototype.close = function () {
        window.close();
    };
    AnswerComponent.prototype.getParams = function () {
        var url = this.router.routerState.snapshot.url.split('?');
        var tempLength = url[0].split('/').length;
        return {
            params: url[0].split('/')[tempLength - 1] + '',
            query: url[1].replace('userid=', '')
        };
    };
    AnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.component.html */ "./src/app/components/answer/answer.component.html"),
            styles: [__webpack_require__(/*! ./answer.component.css */ "./src/app/components/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__["ComponentCommunicationService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_6__["RoomchatUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "./src/app/components/authentication/authentication.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\r\n    background-color: dimgrey;\r\n    color: dimgrey;\r\n    border: solid 1px dimgrey;\r\n}\r\n\r\n#iphone-image {\r\n    -webkit-animation: fadein 3s;\r\n    /* Safari, Chrome and Opera > 12.1 */\r\n    /* Firefox < 16 */\r\n    /* Internet Explorer */\r\n    /* Opera < 12.1 */\r\n    animation: fadein 3s;\r\n}\r\n\r\n.loginUI {\r\n    border-style: solid;\r\n    border: none;\r\n    width: 350px;\r\n    border-color: rgb(111, 116, 124);\r\n    /* left: 79px; */\r\n    position: absolute;\r\n    top: 80px;\r\n    background: rgb(230, 232, 237);\r\n    border-radius: 15px;\r\n    box-shadow:  0px 3px 5px 6px rgb(230, 232, 237);\r\n}\r\n\r\n.authenticate-get-the-app {\r\n    position: absolute;\r\n    bottom: 54px;\r\n    width: 100%;\r\n    text-align: center\r\n}\r\n\r\n.authenticate-download-the-app {\r\n    width: 100%;\r\n    bottom: 0px;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    text-align: center\r\n}\r\n\r\n.authenticateUI {\r\n    position: relative;\r\n    padding: 0px;\r\n    height: 730px;\r\n    width: 350px;\r\n}\r\n\r\n.registerUI {\r\n    border-style: solid;\r\n    border: none;\r\n    width: 350px;\r\n    border-color: rgb(111, 116, 124);\r\n    /* left: 79px; */\r\n    position: absolute;\r\n    top: 80px;\r\n    background: rgb(230, 232, 237);\r\n    border-radius: 15px;\r\n    box-shadow:  0px 3px 5px 6px rgb(230, 232, 237);\r\n}\r\n\r\n@-webkit-keyframes fadein {\r\n    from {\r\n        opacity: 0\r\n    }\r\n    to {\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@keyframes fadein {\r\n    from {\r\n        opacity: 0\r\n    }\r\n    to {\r\n        opacity: 1\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    #login-image-1 {\r\n        display: none\r\n    };\r\n    .authenticateUI {\r\n        text-align: center\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 451px) and (max-width: 768px) {\r\n    /* .loginUI {\r\n        left: 25%;\r\n    } */\r\n    .authenticateUI {\r\n        text-align: center\r\n    }\r\n    #root {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 0px) and (max-width: 450px) {\r\n    /* #authenticateUI {\r\n        background-color: blue;\r\n        width: 100%;\r\n    } */\r\n    .authenticateUI {\r\n        width: 100%;\r\n        margin-top: 75px\r\n    }\r\n    .loginUI {\r\n        width: 100%;\r\n        top: 0px;\r\n        left: 0px;\r\n    }\r\n    .registerUI {\r\n        width: 100%;\r\n        top: 0px;\r\n        left: 0px;\r\n    }\r\n    #root {\r\n        margin-left: 0px\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/authentication/authentication.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"root\" class=\"row\" style=\"margin-top:75px;width:100%\">\n  <div class=\"col-sm-6\" id=\"login-image-1\" style=\"position:relative;height:730px\">\n    <img id=\"iphone-image\" src=\"../../../assets/login.png\"\n      style=\"position:absolute;right:0px;top:37px;width:500px\">\n  </div>\n  <div id=\"authenticateUI\" class=\"col-sm-4 authenticateUI\" style=\"text-align: center\">\n    <div id=\"loginUI\" *ngIf=\"switchToLoginUI\" class=\"loginUI\">\n      <form class=\"form-group container-fluid\">\n        <img src=\"../../assets/logo.png\" style=\"height:43%;width:43%\">\n        <div style=\"font-size:25px;font-weight: 600\">Đăng nhập</div>\n        <input [(ngModel)]=\"login.username\" type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Phone number, username, or email\"\n          style=\"margin-top:27px\">\n        <input [(ngModel)]=\"login.password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\"\n          style=\"margin-top:10px\">\n        <button (click)=\"onLogin()\" class=\"btn btn-info form-control\" style=\"margin-top:20px\">Đăng nhập</button>\n        <div style=\"margin-top:30px;position:relative;width:100%;height:46px\">\n          <hr style=\"width:40%;display:inline-block;position:absolute;right:60%\">\n          <div style=\"width:30px;display:inline-block;left:46%;position:absolute\">\n            <h4> OR</h4>\n          </div>\n          <hr style=\"width:40%;display:inline-block;position:absolute;left:60%\">\n        </div>\n        <!-- <button (click)=\"onLoginFacebook()\" class=\"btn btn-info form-control\" style=\"height:47px;margin-top:7%\">\n                  <div style=\"margin-top:2%\">\n                      <i style=\"display:inline-block;font-size:140%\" class=\"fa fa-facebook\"></i>\n                      <p style=\"display:inline-block;font-size:120%\">&nbsp; Log in with Facebook</p>\n                  </div>\n              </button> -->\n        <div style=\"text-align:center;margin-top:4%;margin-bottom:-8%\">\n          <p id=\"msg-error-login\" style=\"color:green\">\n\n          </p>\n        </div>\n        <div style=\"margin-top:16%\">\n          <a style=\"cursor:pointer;text-decoration:none\">Quên mật khẩu?</a>\n        </div>\n        <div style=\"margin-top:10%;margin-left:-31px\">\n          <h5 style=\"margin-left:40px;display:inline-block;font: bold 14px/33px Georgia, serif;\">Chưa có tài khoản?</h5>\n          <a  (click)=\"openRegisterUI()\" style=\"display:inline-block;cursor:pointer;text-decoration:none\">Đăng ký</a>\n        </div>\n      </form>\n    </div>\n    <div id=\"registerUI\" *ngIf=\"switchToRegisterUI\" class=\"registerUI\">\n      <form [formGroup]=\"registerForm\" class=\"form-group container-fluid\">\n        <img src=\"../../assets/logo.png\" style=\"height:43%;width:43%\">\n        <div style=\"font-size:25px;font-weight: 600\">Đăng ký</div>\n        <input formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" style=\"margin-top:27px\">\n        <div *ngIf=\"registerForm.controls.email.hasError('required')\" style=\"text-align:center\">\n          <p style=\"color:red\"> Bắt buộc điền email </p>\n        </div>\n        <div *ngIf=\"registerForm.controls.email.hasError('pattern')\" style=\"text-align:center\">\n          <p style=\"color:red\"> Email không hợp lệ. Vui lòng thử lại </p>\n        </div>\n        <div *ngIf=\"!registerForm.controls.email.hasError('exist')\" style=\"text-align:center\">\n          <p style=\"color: green\"> Email chưa được sử dụng </p>\n        </div>\n\n        <div *ngIf=\"loading\" style=\"text-align:center;display: flex;justify-content: center\">\n          <div>\n            <img style=\"float: left ;width:30px;margin-top:-5px\" src=\"../../../assets/loading.gif\">\n            <p style=\"color:rgb(255, 130, 47); float: left;\"> Đang kiểm tra </p>\n          </div>\n\n        </div>\n\n        <div *ngIf=\"registerForm.controls.email.hasError('exist')\" style=\"text-align:center\">\n          <p style=\"color:red\"> Email đã tồn tại. Xin chọn lại </p>\n        </div>\n        <input formControlName=\"phoneNumber\" type=\"text\" class=\"form-control\" placeholder=\"Mobile Number\" style=\"margin-top:27px\">\n        <div *ngIf=\"registerForm.controls.phoneNumber.hasError('required')\" style=\"text-align:center\">\n          <p style=\"color:red\"> Bắt buộc điền số điện thoại </p>\n        </div>\n        <div *ngIf=\"registerForm.controls.phoneNumber.hasError('pattern')\" style=\"text-align:center\">\n          <p style=\"color:red\"> Số điện thoại không hợp lệ. Vui lòng thử lại </p>\n        </div>\n        <input formControlName=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Username\" style=\"margin-top:10px\">\n        <div *ngIf=\"registerForm.controls.username.hasError('required')\" style=\"text-align:center\">\n          <p style=\"color:red\"> Bắt buộc điền username </p>\n        </div>\n        <input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" style=\"margin-top:10px\">\n        <div *ngIf=\"registerForm.controls.password.hasError('required')\" style=\"text-align:center\">\n          <p style=\"color:red\"> Bắt buộc điền password </p>\n        </div>\n        <div *ngIf=\"registerForm.controls.password.hasError('pattern')\" style=\"text-align:center\">\n          <p style=\"color:red\"> Password có độ dài tối thiểu 8 ký tự, có chữ hóa, chữ thường và chữ số </p>\n        </div>\n        <button id='register-button' (click)=\"onRegister()\" class=\"btn btn-info form-control\" style=\"margin-top:20px\">Đăng ký</button>\n        <div style=\"text-align:center;margin-top:4%;margin-bottom:-8%\">\n          <p id=\"msg-error-register\" style=\"color:red\">\n\n          </p>\n        </div>\n        <div style=\"margin-top:10%;text-align:center;font: 16px/28px Georgia, serif;\">\n          Bằng việc đăng ký, bạn đã đồng ý với\n          <p><a href=\"https://help.instagram.com/155833707900388\"><strong>Điều khoản & Điều kiện</strong></a></p>\n        </div>\n        <div style=\"margin-top:10%;margin-left:-31px\">\n          <h5 style=\"margin-left:40px;display:inline-block;font: bold 14px/33px Georgia, serif;\">Đã có tài khoản?</h5>\n          <a (click)=\"openLoginUI()\" style=\"display:inline-block;cursor:pointer;text-decoration:none\">Đăng nhập</a>\n        </div>\n      </form>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/components/authentication/authentication.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/authentication/authentication.component.ts ***!
  \***********************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
var PHONENUMBER_REGEX = /(0[3|5|7|8|9])+([0-9]{8})\b/;
var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent(authService, cdRef, router) {
        this.authService = authService;
        this.cdRef = cdRef;
        this.router = router;
        this.login = {
            username: '',
            password: ''
        };
        this.register = {
            username: '',
            password: '',
            email: ''
        };
        this.switchToLoginUI = true;
        this.switchToRegisterUI = false;
        this.loading = false;
    }
    // emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)], this.usernameValidator());
    // usernameFormControl = new FormControl('', [Validators.required]);
    // passwordFormControl = new FormControl('', [Validators.required, Validators.pattern(PASSWORD_REGEX)]);
    AuthenticationComponent.prototype.usernameValidator = function () {
        var _this = this;
        return function (control) {
            _this.loading = true;
            return _this.authService.validateExist({ email: _this.registerForm.controls.email.value }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                _this.loading = false;
                if (data.success) {
                    return;
                }
                else {
                    return { 'exist': true };
                }
            }));
        };
    };
    AuthenticationComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(EMAIL_REGEX)], this.usernameValidator()),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(PASSWORD_REGEX)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(PHONENUMBER_REGEX)])
        });
    };
    AuthenticationComponent.prototype.openRegisterUI = function () {
        this.switchToLoginUI = false;
        this.switchToRegisterUI = true;
    };
    AuthenticationComponent.prototype.openLoginUI = function () {
        this.switchToLoginUI = true;
        this.switchToRegisterUI = false;
    };
    AuthenticationComponent.prototype.onLogin = function () {
        var _this = this;
        var user = {
            username: this.login.username,
            password: this.login.password
        };
        this.authService.loginUser(user).subscribe(function (data) {
            _this.cdRef.detectChanges();
            if (data.success) {
                _this.authService.myID = data._id;
                _this.authService.storeToken(data.token);
                var w = window.innerWidth;
                if (w < 900) {
                    _this.router.navigate(['/roomchats']);
                }
                else {
                    _this.router.navigate(['/home']);
                }
            }
            else {
                document.getElementById('msg-error-login').innerHTML = data.msg;
            }
        });
    };
    Object.defineProperty(AuthenticationComponent.prototype, "emailForm", {
        get: function () {
            return this.registerForm.controls.email.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationComponent.prototype, "usernameForm", {
        get: function () {
            return this.registerForm.controls.username.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationComponent.prototype, "phoneNumberForm", {
        get: function () {
            return this.registerForm.controls.phoneNumber.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationComponent.prototype, "passwordForm", {
        get: function () {
            return this.registerForm.controls.password.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationComponent.prototype.onRegister = function () {
        var _this = this;
        var registerButton = document.getElementById('register-button');
        registerButton.disabled = true;
        var user = {
            email: this.emailForm,
            username: this.usernameForm,
            phoneNumber: this.phoneNumberForm,
            password: this.passwordForm
        };
        this.authService.registerUser(user).subscribe(function (data) {
            registerButton.disabled = false;
            if (data.success) {
                _this.openLoginUI();
                _this.cdRef.detectChanges();
                document.getElementById('msg-error-login').innerHTML = 'Đăng ký thành công. Đăng nhập để tiếp tục';
            }
            else {
                document.getElementById('msg-error-register').innerHTML = data.msg;
            }
        });
    };
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/components/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.css */ "./src/app/components/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/components/contacts/contacts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\r\n  width: 50px;\r\n  height: 60px;\r\n  float: left;\r\n}\r\n\r\n.contact-header {\r\n    height: 60px;\r\n    padding: 8px;\r\n    width: 100%;\r\n    border-bottom: solid;\r\n    border-color: #e7e7e7;\r\n    border-width: thin;\r\n  }\r\n\r\n.contact-header-setting {\r\n    width: 32px;\r\n    float: left;\r\n    height: 100%;\r\n  }\r\n\r\n.contact-header-label {\r\n    /* font-size: 16px;\r\n      text-align: center;\r\n      height: 100%;\r\n      flex-basis: 100%; */\r\n    font-size: 16px;\r\n    font-weight: 500;\r\n    overflow: hidden;\r\n    text-align: center;\r\n    float: left;\r\n    margin-left: 32%;\r\n    font-family: SFUIText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n  }\r\n\r\n.contact-header-newmessage {\r\n    min-width: 32px;\r\n    float: right;\r\n    height: 100%;\r\n    width: 40px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.contact-header-next {\r\n    min-width: 32px;\r\n    float: right;\r\n    height: 100%;\r\n    width: 40px;\r\n    cursor: pointer;\r\n  }\r\n\r\n.contact-search {\r\n    width: 100%;\r\n    height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n.contact-body {\r\n    /* padding-left: 10px;\r\n      padding-right: 10px; */\r\n  }\r\n\r\n.contact-body :hover {\r\n    background-color: #e7e7e7\r\n  }\r\n\r\n@media screen and (max-width:420px) {\r\n      \r\n  }\r\n\r\n@media screen and (max-width:910px) {\r\n  \r\n  \r\n  }\r\n  "

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div style=\"margin-top:74px\">\r\n        <div class=\"contact-header\">\r\n          <div class=\"contact-header-setting\">\r\n            <i class=\"fas fa-address-book\" style=\"font-size:30px;margin-top:8px\"></i>\r\n          </div>\r\n          <div class=\"contact-header-label\" id=\"contact-header-label\">\r\n            <h3 style=\"margin-top: 10px\">Liên lạc</h3>\r\n          </div>\r\n          <div id=\"contact-header-next\" class=\"contact-header-next\" style=\"display: none;\">\r\n            <i class=\"fas fa-chevron-right\" style=\"font-size:30px;margin-top:8px\"></i>\r\n          </div>\r\n        </div>\r\n        <div class=\"contact-search\">\r\n          <input [(ngModel)]=\"searchTerm\" class=\"form-control\" style=\"width:100%\" type=\"text\" placeholder=\"Gõ để tìm liên lạc\">\r\n        </div>\r\n          <table class =\"table table-hover table-responsive\">\r\n            <tbody>\r\n                <tr *ngFor=\"let contact of contacts| searchContacts: searchTerm;let i = index\" >\r\n                  \r\n                    <div style=\"width:100%;height:70px;border-bottom: solid thin #e7e7e7;\">\r\n                        <div style=\"width:100%;height:100%;padding:10px\">\r\n                          <div style=\"width:20%;height:100%;float: left;display: flex;justify-content: center;align-items: center;max-width: 50px\">\r\n                            <img src={{contact.profileImage.lowQuality}} style=\"height:75%;border-radius: 50%\">\r\n                          </div>\r\n                          <div style=\"width:70%;height:100%;float: left;display: flex;align-items: center\">\r\n                            <div style=\"margin-left:10px\">\r\n                              {{contact.username}}\r\n                            </div>\r\n                          </div>\r\n                          <button id=\"{{contact._id}}4\" *ngIf=\"contact.notAcceptedFriendFirst\"  (click)=\"accept(contact,4,i)\" type=\"button\" class=\"btn btn-success btn-lg\" >Đồng ý</button>\r\n                          <button id=\"{{contact._id}}3\" *ngIf=\"contact.notAcceptedFriendSecond\"  (click)=\"delete(contact,3,i)\" type=\"button\" class=\"btn btn-info btn-lg\" >Đã yêu cầu</button>\r\n                          <button id=\"{{contact._id}}2\" *ngIf=\"contact.acceptedFriend\" (click)=\"delete(contact,2,i)\" type=\"button\" class=\"btn btn-warning btn-lg\" >Huỷ kết bạn</button>\r\n                          <button id=\"{{contact._id}}1\" *ngIf=\"contact.notFriend\" (click)=\"add(contact,i)\" type=\"button\" class=\"btn btn-primary btn-lg\">Kết bạn</button>\r\n                        </div>\r\n                    </div>\r\n                </tr>\r\n            </tbody>\r\n          </table>\r\n      </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_friend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/friend.service */ "./src/app/services/friend.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(userService, friendService, socketService, notificationService) {
        this.userService = userService;
        this.friendService = friendService;
        this.socketService = socketService;
        this.notificationService = notificationService;
        this.searchTerm = "";
        this.contacts = [];
        this.notAcceptedFriendsFirst = [];
        this.notAcceptedFriendsSecond = [];
        this.acceptedFriends = [];
        this.myInfo = {};
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadContacts();
        this.userService.getMe('low').subscribe(function (me) {
            if (!me)
                return;
            if (me.success) {
                _this.myInfo = me.user;
            }
        });
    };
    ContactsComponent.prototype.loadFriends = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data1, data2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.friendService.getFriends("true").toPromise()];
                    case 1:
                        data1 = _a.sent();
                        this.acceptedFriends = data1.friends;
                        return [4 /*yield*/, this.friendService.getFriends("false").toPromise()];
                    case 2:
                        data2 = _a.sent();
                        this.notAcceptedFriendsFirst = data2.friendsFirst;
                        this.notAcceptedFriendsSecond = data2.friendsSecond;
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsComponent.prototype.loadContacts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadFriends()];
                    case 1:
                        _a.sent();
                        console.log(this.acceptedFriends);
                        return [4 /*yield*/, this.userService.getAllUsers().toPromise()];
                    case 2:
                        data = _a.sent();
                        if (data.success) {
                            this.contacts = data.users;
                            for (i = 0; i < this.contacts.length; i++) {
                                if (this.acceptedFriends.includes(this.contacts[i]._id))
                                    this.contacts[i].acceptedFriend = true;
                                else if (this.notAcceptedFriendsFirst.includes(this.contacts[i]._id))
                                    this.contacts[i].notAcceptedFriendFirst = true;
                                else if (this.notAcceptedFriendsSecond.includes(this.contacts[i]._id))
                                    this.contacts[i].notAcceptedFriendSecond = true;
                                else
                                    this.contacts[i].notFriend = true;
                            }
                        }
                        else {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsComponent.prototype.delete = function (user, x, i) {
        return __awaiter(this, void 0, void 0, function () {
            var data, btn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.friendService.deleteFriend(user._id).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data.success) {
                            this.contacts[i].notFriend = true;
                            this.contacts[i].notAcceptedFriendFirst = false;
                            this.contacts[i].notAcceptedFriendSecond = false;
                            this.contacts[i].acceptedFriend = false;
                            btn = $("#" + user._id + x);
                            console.log(btn);
                            btn.removeClass();
                            btn.addClass("btn btn-lg btn-primary");
                            btn.text("Kết bạn");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsComponent.prototype.accept = function (user, x, i) {
        return __awaiter(this, void 0, void 0, function () {
            var data, btn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.friendService.acceptFriend(user._id).toPromise()];
                    case 1:
                        data = _a.sent();
                        if (data.success) {
                            this.contacts[i].notFriend = false;
                            this.contacts[i].notAcceptedFriendFirst = false;
                            this.contacts[i].notAcceptedFriendSecond = false;
                            this.contacts[i].acceptedFriend = true;
                            btn = $("#" + user._id + x);
                            console.log(btn);
                            btn.removeClass();
                            btn.addClass("btn btn-lg btn-warning");
                            btn.text("Huỷ kết bạn");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsComponent.prototype.add = function (user, i) {
        return __awaiter(this, void 0, void 0, function () {
            var data, btn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.friendService.addFriend(user._id).toPromise()];
                    case 1:
                        data = _a.sent();
                        console.log(data);
                        if (data.success) {
                            this.contacts[i].notAcceptedFriendSecond = true;
                            this.contacts[i].notAcceptedFriendFirst = false;
                            this.contacts[i].notFriend = false;
                            this.contacts[i].acceptedFriend = false;
                            btn = $("#" + user._id + "1");
                            btn.removeClass();
                            btn.addClass("btn btn-lg btn-info");
                            btn.text("Đã gửi lời mời");
                            this.socketService.emitSendFriendRequest(this.myInfo, user._id);
                            this.notificationService.createNotifications(user._id, {
                                typeNotification: 'friend-request'
                            }, Date.now()).subscribe(function (data) { });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-contacts",
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/components/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/components/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_friend_service__WEBPACK_IMPORTED_MODULE_2__["FriendService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/conversation/conversation.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/conversation/conversation.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".conversation-header {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-bottom: solid;\r\n  border-color: #e7e7e7;\r\n  border-width: thin;\r\n}\r\n\r\n.conversation-header-username {\r\n  float: left;\r\n  height: 60px;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\n.conversation-header-call {\r\n  float: left;\r\n  width: 50px;\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.conversation-header-info {\r\n  float: left;\r\n  width: 50px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.conversation-icon {\r\n  float: right;\r\n  width: 100px;\r\n  height: 50px;\r\n}\r\n\r\n.conversation-body {\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.conversation-body::-webkit-scrollbar-thumb {\r\n  border-radius: 13px;\r\n  width: 9px;\r\n  background-color: #79879b;\r\n}\r\n\r\n.conversation-body::-webkit-scrollbar {\r\n  width: 9px;\r\n  border-radius: 13px;\r\n  /* height: 8px; */\r\n  background-color: #eff1f4;\r\n  /* or add it to the track */\r\n  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n    background-color: #F5F5F5;\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n    height:100%; */\r\n}\r\n\r\n.confirm-message {\r\n  border-radius: 20px;\r\n  height: 15px;\r\n  text-align: center;\r\n  font-size: 10px;\r\n  float: right;\r\n  margin-right: 10px;\r\n  border: solid transparent;\r\n  background-color: #f1f0f0;\r\n}\r\n\r\n.custom-modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 10;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  background-color: rgb(0, 0, 0);\r\n  /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /* Black w/ opacity */\r\n  /* overflow: auto; */\r\n}\r\n\r\n.custom-modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  margin-top: 5%;\r\n  border: 1px solid #888;\r\n  width: 35%;\r\n  height: 220px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-size: 17px;\r\n  font-weight: 500\r\n    /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.modal-options-content:hover {\r\n  background-color: #e7e7e7\r\n}\r\n\r\n.info-conversation-component {\r\n  width: 350px;\r\n  float: right;\r\n}\r\n\r\n.loading-messages {\r\n  width: 100%;\r\n  height: 30px;\r\n  position: absolute;\r\n  background-color: transparent;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\n.conversation-header-previous{\r\n  float: left;\r\n  height: 100%;\r\n  width: 40px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n@media screen and (max-width:900px) {\r\n  #seen-modal{\r\n    width: 100%\r\n  }\r\n  \r\n}\r\n"

/***/ }),

/***/ "./src/app/components/conversation/conversation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/conversation/conversation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:74px\">\n  <div id=\"conversation-header\" class=\"conversation-header\">\n    <div (click)='onClickPreviousNav()' id=\"conversation-header-previous\" class=\"conversation-header-previous\" *ngIf='showNavPrevious'>\n      <i class=\"fas fa-chevron-left\" style=\"font-size:30px;margin-top:8px\"></i>\n    </div>\n    <div id=\"conversation-header-username\" class=\"conversation-header-username\">\n      <div style=\"float:left;width:100%;height: 30px;text-align: center;margin-top: 12px;\">\n        {{roomchatName}}\n      </div>\n      <div style=\"float:left;width:100%;height: 30px;text-align: center;margin-top: -12px;display: flex;justify-content: center;align-items: center\">\n        <div *ngIf=\"isActive\" style=\"width:8px;height:8px;border:transparent;border-radius: 50%;background-color: springgreen;margin-right:5px\">\n\n        </div>\n        <div *ngIf=\"isIdle\" style=\"width:8px;height:8px;border:transparent;border-radius: 50%;background-color: red;margin-right:5px\">\n\n        </div>\n        <div *ngIf=\"isLoading\" style=\"font-size:13px;color: rgba(0, 0, 0, .40)\">\n          Đang tải...\n        </div>\n        <div *ngIf=\"!isLoading\" style=\"font-size:13px;color: rgba(0, 0, 0, .40)\">\n          {{timeActive | timeAgo : isIdle}}\n        </div>\n\n      </div>\n      <!-- <div style=\"margin-top: 7px\">{{roomchatName}}</div> -->\n    </div>\n    <div class=\"conversation-icon\">\n      <div id=\"call-icon\" class=\"conversation-header-call\" (click)=\"openCallWindow()\">\n        <i class=\"fas fa-phone\" style=\"font-size:30px;margin-top:6px\"></i>\n      </div>\n      <div (click)=\"showOrHideInfo()\" class=\"conversation-header-info\">\n        <i class=\"fas fa-info-circle\" style=\"font-size:30px;margin-top:6px;cursor: pointer;\"></i>\n      </div>\n    </div>\n\n  </div>\n  <div id=\"conversation-side\" style=\"height:auto;display: inline-block\">\n    <div *ngIf=\"loadingMessages\" id=\"loading-messages\" class=\"loading-messages\">\n      <img src=\"../../../assets//loading-1.gif\" style=\"width:17px\">&nbsp;\n      Đang tải...\n    </div>\n    <div id=\"conversation-body\" class=\"conversation-body\" (scroll)=\"onScrollMessages()\">\n      <div style=\"width: 100%;float:left\" *ngFor=\"let message of messages\">\n        <app-message [roomchatID]=\"roomchatID\" [previousLastMessageID]=\"previousLastMessageID\" style=\"width: 100%;height: 100%\" [message]=\"message\"\n          [myID]=\"myID\" [lastMessageID]=\"lastMessageID\" [previousUserID]=\"previousUserID\" [lastUserID]=\"lastUserID\"></app-message>\n      </div>\n      <div class=\"confirm-message\">\n        <div *ngIf=\"confirmation.sent\" style=\"margin-top:-2px;width: 40px;\" id=\"sent-confirmation\">\n          Đã gửi\n        </div>\n        <div *ngIf=\"confirmation.received\" style=\"margin-top:-2px;width: 50px;\" id=\"sent-confirmation\">\n          Đã nhận\n        </div>\n        <div *ngIf=\"confirmation.sending\" style=\"margin-top:-2px;width: 52px;\" id=\"sent-confirmation\">\n          Đang gửi\n        </div>\n        <div id=\"seen-toggle\" (click)=\"seeWhoSeen()\" *ngIf=\"confirmation.seen\" style=\"margin-top:-2px;width: 52px;cursor: pointer;\" id=\"sent-confirmation\">\n          Đã xem\n        </div>\n      </div>\n      <div *ngIf=\"confirmation.typing\" style=\"font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;line-height: 1.28;font-weight: 400;margin-top:-2px;width: 80px;height:25px;font-size: 13px;float: left;margin-left: 40px;color: rgba(0, 0, 0, .40)\">\n        Đang nhập...\n      </div>\n    </div>\n    <div style=\"width:100%;height:59px\">\n      <app-input [usersInRoomchat]=\"usersInRoomchat\"></app-input>\n    </div>\n  </div>\n\n  <div [hidden]=\"!showConversationInfo\" id=\"info-conversation-component\" class=\"info-conversation-component\">\n    <app-info-conversation></app-info-conversation>\n  </div>\n\n\n  <div (clickOutside)=\"closeSeenModal($event)\" *ngIf=\"showSeenModal\" id=\"seen-modal\" class=\"custom-modal\">\n    <div class=\"custom-modal-content\" style=\"height: auto\">\n      <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\n        <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n          Những người đã xem\n        </div>\n      </div>\n      <div class=\"modal-options-content\">\n        <div *ngFor=\"let seenUser of infoSeenBy\" style=\"font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.50;font-size: 17px;font-weight: 500;text-align: center;padding: 10px;width:100%;height:50px;cursor: pointer;\">\n          <div style=\"width:15%;height:100%;display: flex;justify-content: center;align-items: center\">\n            <img src={{seenUser.profileImage.lowQuality}} style=\"border-radius: 50%;width:30%; height:auto;float:left\">\n          </div>\n          <div style=\"margin-top:-30px;width:85%;height:100%;display: flex;align-items: center;float:right\">\n            {{seenUser.username}}\n          </div>\n        </div>\n      </div>\n      <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\n        <button (click)=\"closeSeenModal()\" type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\n          OK\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/conversation/conversation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/conversation/conversation.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationComponent", function() { return ConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_roomchat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/roomchat.service */ "./src/app/services/roomchat.service.ts");
/* harmony import */ var _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/roomchat-user.service */ "./src/app/services/roomchat-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var urlCallVideo = "http://localhost:3333/services/call?userid=";
var ConversationComponent = /** @class */ (function () {
    function ConversationComponent(componentCommunicationService, messageService, socketService, cdR, roomchatUserService, route, router, userService, roomchatService) {
        this.componentCommunicationService = componentCommunicationService;
        this.messageService = messageService;
        this.socketService = socketService;
        this.cdR = cdR;
        this.roomchatUserService = roomchatUserService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.roomchatService = roomchatService;
        this.roomchatID = "";
        this.roomchatName = "";
        this.messages = [];
        this.lastMessageID = "";
        this.lastUserID = "";
        this.previousLastMessageID = ""; // tin nhan sau tin nhan cuoi cung
        this.previousUserID = "";
        this.IDSeenBy = [];
        this.infoSeenBy = [];
        this.showSeenModal = false;
        this.usersInRoomchat = [];
        this.myID = "";
        this.timeActive = 0;
        this.timeDuration = 10;
        this.isActive = false;
        this.isIdle = false;
        this.moveMouseTime = Date.now();
        this.isLoading = false;
        this.confirmation = {
            sent: false,
            sending: false,
            received: false,
            seen: false,
            typing: false,
            timeConfirm: Date.now()
        };
        this.continueToLoad = true;
        this.previousTimeSeq = Date.now() + 100000;
        this.loadingMessages = false;
        this.showConversationInfo = true;
        this.showNavPrevious = false;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
    }
    ConversationComponent.prototype.onResize = function (event) {
        var inputHeight = document.getElementById("input-component").clientHeight;
        var conversationHeaderHeight = document.getElementById("conversation-header").clientHeight;
        var navbarHeight = document.getElementById("navbar-component").clientHeight;
        var conversationHeight = window.innerHeight - 190;
        document
            .getElementById("conversation-body")
            .setAttribute("style", "height: " + conversationHeight + "px");
        var conversationWidth = document.getElementById("conversation-header").clientWidth - 110;
        if (this.showNavPrevious) {
            conversationWidth -= 40;
        }
        document
            .getElementById("conversation-header-username")
            .setAttribute("style", "width: " + conversationWidth + "px");
        if (this.showConversationInfo) {
            console.log("input-height: ", inputHeight);
            var conversationSideWidth = document.getElementById("conversation-header").clientWidth - 351;
            document.getElementById("conversation-side").style.width =
                conversationSideWidth + "px";
        }
        else {
            var conversationSideWidth = document.getElementById("conversation-header")
                .clientWidth;
            document.getElementById("conversation-side").style.width =
                conversationSideWidth + "px";
        }
        document.getElementById("input-component").style.width =
            document.getElementById("conversation-side").clientWidth + "px";
        // let w = window.innerWidth;
        // if (w >= 900) {
        //   this.showConversationInfo = true;
        //   let conversationSideWidth = document.getElementById('conversation-header').clientWidth - 351;
        //   document.getElementById('conversation-side').style.width = conversationSideWidth + 'px';
        // } else {
        //   this.showConversationInfo = false;
        //   let conversationSideWidth = document.getElementById('conversation-header').clientWidth;
        //   document.getElementById('conversation-side').style.width = conversationSideWidth + 'px';
        // }
    };
    ConversationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomchatID = this.getParams();
        var w = window.innerWidth;
        if (w < 900) {
            this.router.navigate(["conversation", this.roomchatID]);
        }
        else {
            this.router.navigate(["home/conversation", this.roomchatID]);
        }
        this.listenToStopTypingInterval = this.listenToStopTyping();
        this.isLoading = true;
        this.confirmInit();
        this.loadingMessages = true;
        this.cdR.detectChanges();
        this.adjustHTMLResponsive(w);
        this.a = this.roomchatService
            .getRoomchat(this.roomchatID)
            .subscribe(function (data) {
            if (data && data.success) {
                _this.loadingMessages = false;
                _this.messages = [];
                _this.roomchatName = _this.processRoomchatName(data.roomchat.firstUserInRoomchat.username, data.roomchat.numberOfUserInRoomchat - 1, data.roomchat.typeRoomchat);
                _this.IDSeenBy = data.roomchat.roomchat.isSeenBy;
                if (_this.IDSeenBy.length !== 0) {
                    _this.confirmation.seen = true;
                }
                _this.myID = data.myID;
                _this.socketService.confirmCompleteLoad();
                _this.b = _this.roomchatUserService
                    .getRoomchatUsers(_this.roomchatID)
                    .subscribe(function (dataa) {
                    if (dataa && dataa.success) {
                        _this.usersInRoomchat = dataa.roomchatUsers
                            .map(function (el) { return el.userID; })
                            .filter(function (el) { return el !== _this.myID; });
                        if (_this.usersInRoomchat.length > 2) {
                            document.getElementById("call-icon").style.opacity = "0.6";
                        }
                        else {
                            document.getElementById("call-icon").style.cursor = "pointer";
                        }
                    }
                });
                _this.componentCommunicationService.setData({
                    fromComponent: "conversation",
                    roomchatID: _this.roomchatID
                });
                _this.previousTimeSeq = Date.now() + 1000000;
                _this.c = _this.messageService
                    .getMessages(_this.roomchatID, _this.previousTimeSeq, 20)
                    .subscribe(function (data) {
                    if (data.success) {
                        var index = 0;
                        var previousUserID = "";
                        var messagesLength = data.messages.length;
                        if (messagesLength === 0)
                            return;
                        for (var _i = 0, _a = data.messages; _i < _a.length; _i++) {
                            var message = _a[_i];
                            _this.messages.push({
                                userID: message.userProfile._id,
                                username: message.userProfile.username,
                                _id: message.message._id,
                                content: message.message.content,
                                attach: message.message.attach,
                                fileName: message.message.fileName,
                                fileType: message.message.fileType,
                                profileImage: message.userProfile.profileImage.lowQuality,
                                time: message.message.time,
                                displayLastInfo: false
                            });
                            if (index > 0) {
                                if (message.userProfile._id !== previousUserID) {
                                    _this.messages[index - 1].displayLastInfo = true;
                                }
                                if (messagesLength - 1 === index &&
                                    _this.myID !== message.userProfile._id) {
                                    _this.messages[index - 1].displayLastInfo = false;
                                    _this.messages[index].displayLastInfo = true;
                                }
                            }
                            previousUserID = message.userProfile._id;
                            index++;
                        }
                        if (_this.messages[messagesLength - 1].userID + "" === _this.myID &&
                            !_this.confirmation.seen) {
                            console.log("check snt");
                            _this.confirmation.sent = true;
                            _this.confirmation.received = false;
                        }
                        _this.previousTimeSeq = _this.messages[0].time;
                        var scrollElement = document.getElementById("conversation-body");
                        _this.cdR.detectChanges();
                        scrollElement.scrollTop = scrollElement.scrollHeight;
                    }
                });
            }
        });
        this.d = this.componentCommunicationService.getData().subscribe(function (data) {
            if (!data)
                return;
            if (data.fromComponent === "roomchat") {
                if (data.type === "confirm-loadroomchats") {
                    _this.confirmLoadParams(_this.getParams());
                }
            }
            else if (data.fromComponent === "input") {
                if (data.status === "sending") {
                    _this.confirmation.sending = true;
                }
                else if (data.status === "sent") {
                    _this.confirmation.received = false;
                    var contentText = data.contentText;
                    var contentFile = data.contentFile;
                    var fileType = data.fileType;
                    var messageID = data.messageID;
                    var fileName = data.fileName;
                    var username = data.username;
                    _this.messages.push({
                        userID: _this.myID,
                        username: username,
                        _id: messageID,
                        content: contentText,
                        fileType: fileType,
                        fileName: fileName,
                        attach: contentFile,
                        profileImage: "",
                        time: Date.now()
                    });
                    var scrollElement = document.getElementById("conversation-body");
                    _this.cdR.detectChanges();
                    scrollElement.scrollTop = scrollElement.scrollHeight;
                }
                else if (data.type === "adjust-conversation-body") {
                    var conversationHeight = document.getElementById("conversation-body").clientHeight - 100;
                    document
                        .getElementById("conversation-body")
                        .setAttribute("style", "height: " + conversationHeight + "px");
                }
            }
            else if (data.fromComponent === "app" && data.type === "idle") {
                if (_this.usersInRoomchat.length !== 0 &&
                    _this.usersInRoomchat.includes(data.fromUserID + "")) {
                    _this.isActive = false;
                    _this.isIdle = true;
                }
            }
            else if (data.fromComponent === "app" && data.type === "reactive") {
                if (_this.usersInRoomchat.length !== 0 &&
                    _this.usersInRoomchat.includes(data.fromUserID + "")) {
                    _this.isActive = true;
                    _this.isIdle = false;
                }
            }
            else if (data.fromComponent === "app" && data.type === "timestamp") {
                if (_this.usersInRoomchat.length !== 0 &&
                    _this.usersInRoomchat.includes(data.fromUserID + "")) {
                    _this.timeActive = data.time;
                }
            }
            else if (data.fromComponent === "app" &&
                data.type === "timestamp-on-init") {
                console.log("dataaa___ ", data);
                var waitForUsersInRoomchat_1 = setInterval(function () {
                    if (_this.usersInRoomchat.length !== 0) {
                        var mostRecentTime = 0;
                        for (var _i = 0, _a = _this.usersInRoomchat; _i < _a.length; _i++) {
                            var userInRoomchat = _a[_i];
                            for (var _b = 0, _c = data.dataTimeActive; _b < _c.length; _b++) {
                                var timeActive = _c[_b];
                                if (userInRoomchat === timeActive._id + "") {
                                    if (timeActive.timeActive > mostRecentTime) {
                                        mostRecentTime = timeActive.timeActive;
                                    }
                                }
                            }
                        }
                        _this.timeActive = mostRecentTime;
                        _this.isLoading = false;
                        clearInterval(waitForUsersInRoomchat_1);
                    }
                }, 10);
            }
            else if (data.fromComponent === "app" &&
                data.type === "receive-message") {
                if (data.data.roomchatID !== _this.roomchatID)
                    return;
                if (data.data.type === "confirm") {
                    _this.confirmation.sent = true;
                    _this.confirmation.sending = false;
                }
                else if (data.data.type === "message") {
                    //khi co tin nhan moi den
                    _this.roomchatService
                        .resetSeenUsers(_this.roomchatID)
                        .subscribe(function (data) { });
                    if (_this.messages.length !== 0) {
                        _this.messages[_this.messages.length - 1].displayLastInfo = false;
                    }
                    _this.confirmation.sent = false;
                    _this.confirmation.sending = false;
                    _this.confirmation.received = false;
                    _this.confirmation.seen = false;
                    _this.messages.push({
                        userID: data.data.fromUserID,
                        _id: data.data.messageID,
                        username: data.data.username,
                        content: data.data.contentText,
                        attach: data.data.contentFile,
                        fileName: data.data.fileName,
                        fileType: data.data.fileType,
                        profileImage: data.data.profileImage,
                        time: data.data.time,
                        displayLastInfo: true
                    });
                    var scrollElement = document.getElementById("conversation-body");
                    _this.cdR.detectChanges();
                    scrollElement.scrollTop = scrollElement.scrollHeight;
                }
            }
            else if (data.fromComponent === "app" && data.type === "typing") {
                if (data.data.roomchatID !== _this.roomchatID)
                    return;
                if (data.data.status === "typing") {
                    _this.confirmation.typing = true;
                    _this.confirmation.timeConfirm = data.data.time;
                }
            }
            else if (data.fromComponent === "last-message" &&
                data.type === "delete-all-messages") {
                if (data.roomchatID !== _this.roomchatID)
                    return;
                _this.messages = [];
                _this.e = _this.messageService
                    .getMessages(_this.roomchatID, _this.previousTimeSeq, 15)
                    .subscribe(function (data) {
                    if (data.success) {
                        for (var _i = 0, _a = data.messages; _i < _a.length; _i++) {
                            var message = _a[_i];
                            _this.messages.push({
                                userID: message.userProfile._id,
                                username: message.userProfile.username,
                                _id: message.message._id,
                                content: message.message.content,
                                fileName: message.message.fileName,
                                attach: message.message.attach,
                                fileType: message.message.fileType,
                                profileImage: message.userProfile.profileImage.lowQuality,
                                time: message.message.time
                            });
                        }
                        _this.confirmation.sent = false;
                        _this.confirmation.sending = false;
                        _this.previousTimeSeq = _this.messages[0].time;
                        var scrollElement = document.getElementById("conversation-body");
                        _this.cdR.detectChanges();
                        scrollElement.scrollTop = scrollElement.scrollHeight;
                    }
                });
            }
            else if (data.fromComponent === "app" &&
                data.type === "confirm-received-message") {
                if (data.data.roomchatID !== _this.roomchatID)
                    return;
                _this.confirmation.received = true;
                _this.confirmation.sent = false;
                _this.confirmation.sending = false;
                _this.confirmation.seen = false;
            }
            else if (data.fromComponent === "app" &&
                data.type === "confirm-seen-message") {
                if (data.data.roomchatID !== _this.roomchatID)
                    return;
                if (!_this.IDSeenBy.includes(data.data.userID + "")) {
                    _this.IDSeenBy.push(data.data.userID);
                    _this.roomchatService
                        .addSeenUsers(_this.roomchatID, data.data.userID)
                        .subscribe(function (data) {
                        console.log("add_____", data);
                    });
                }
                _this.confirmation.received = false;
                _this.confirmation.sent = false;
                _this.confirmation.sending = false;
                _this.confirmation.seen = true;
            }
            else if (data.fromComponent === "app" &&
                data.type === "check-valid-seen") {
                if (data.data.roomchatID !== _this.roomchatID)
                    return;
                var isSentByOther = void 0;
                if (_this.messages.length !== 0) {
                    isSentByOther =
                        _this.messages[_this.messages.length - 1].userID + "" !==
                            _this.myID + "";
                }
                else {
                    isSentByOther = false;
                }
                if (isSentByOther) {
                    _this.componentCommunicationService.setData({
                        fromComponent: "conversation",
                        toComponent: "app",
                        type: "is-valid-seen",
                        roomchatID: data.data.roomchatID,
                        userID: data.data.userID
                    });
                }
            }
            else if (data.fromComponent === "message" &&
                data.type === "delete-one-message") {
                var deletedMessageID = data.messageID;
                console.log("deref%%%: ", deletedMessageID);
                for (var i = 0; i < _this.messages.length; i++) {
                    if (_this.messages[i]._id === deletedMessageID) {
                        _this.messages.splice(i, 1);
                        break;
                    }
                }
            }
        });
        // this.socketService.receiveMessage(data => {
        //   console.log('data receive: ', data)
        //   if (!data) return;
        //   if (data.type === 'confirm') {
        //     this.confirmation.sent = true;
        //     this.confirmation.sending = false;
        //   } else if (data.type === 'message') {
        //     this.messages.push({
        //       userID: data.fromUserID,
        //       _id: data.messageID,
        //       content: data.contentText,
        //       attach: data.contentFile,
        //       profileImage: data.profileImage,
        //       time: data.time
        //     })
        //     let scrollElement = document.getElementById('conversation-body');
        //     this.cdR.detectChanges();
        //     scrollElement.scrollTop = scrollElement.scrollHeight;
        //   }
        // });
        // this.socketService.receiveTimestamp().subscribe(data => {
        //   if (!data) return;
        //   this.timeActive = data.time;
        this.receiveTimestampInterval = setInterval(function () {
            if (Math.abs(_this.timeActive - Date.now()) < 5000 && !_this.isIdle) {
                _this.isActive = true;
                _this.isIdle = false;
            }
            else if (Math.abs(_this.timeActive - Date.now()) >= 5000) {
                _this.isActive = false;
                _this.isIdle = false;
            }
        }, 2000);
        console.log("run!!");
    };
    ConversationComponent.prototype.ngAfterViewInit = function () { };
    ConversationComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.receiveTimestampInterval);
        this.a.unsubscribe();
        if (this.b) {
            this.b.unsubscribe();
        }
        if (this.c) {
            this.c.unsubscribe();
        }
        this.d.unsubscribe();
        if (this.e) {
            this.e.unsubscribe();
        }
        if (this.listenToStopTypingInterval) {
            clearInterval(this.listenToStopTypingInterval);
        }
        // this.f.unsubscribe();
    };
    ConversationComponent.prototype.confirmInit = function () {
        this.componentCommunicationService.setData({
            fromComponent: "conversation",
            type: "confirm-init"
        });
    };
    ConversationComponent.prototype.confirmLoadParams = function (roomchatID) {
        this.componentCommunicationService.setData({
            fromComponent: "conversation",
            type: "confirm-loadparams",
            roomchatID: roomchatID
        });
    };
    ConversationComponent.prototype.getParams = function () {
        var url = this.router.routerState.snapshot.url;
        var tempLength = url.split("/").length;
        return url.split("/")[tempLength - 1] + "";
    };
    ConversationComponent.prototype.processRoomchatName = function (firstUser, numberOfUsers, typeRoomchat) {
        if (typeRoomchat === "private") {
            return firstUser;
        }
        else if (typeRoomchat === "group") {
            return firstUser + " và " + numberOfUsers + " người khác";
        }
    };
    ConversationComponent.prototype.onClickPreviousNav = function () {
        return this.router.navigate(["roomchats"]);
    };
    ConversationComponent.prototype.seeWhoSeen = function () {
        var _this = this;
        this.showSeenModal = true;
        this.getUserSubscription = this.userService
            .getUsersFromIDs(this.IDSeenBy)
            .subscribe(function (data) {
            console.log("runnn", data);
            if (data && data.success) {
                _this.infoSeenBy = data.users;
                console.log("info: ", _this.infoSeenBy);
            }
        });
        this.cdR.detectChanges();
    };
    ConversationComponent.prototype.closeSeenModal = function ($event) {
        if ($event && $event.target.id === "sent-confirmation")
            return;
        this.showSeenModal = false;
    };
    ConversationComponent.prototype.showOrHideInfo = function () {
        this.showConversationInfo = !this.showConversationInfo;
        var w = window.innerWidth;
        var infoConvWidth;
        var hideInputComp = false;
        if (w < 900) {
            infoConvWidth = document.getElementById("conversation-header")
                .clientWidth;
            document.getElementById("info-conversation-component").style.width =
                infoConvWidth + "px";
        }
        else {
            infoConvWidth = 351;
            document.getElementById("info-conversation-component").style.width =
                infoConvWidth + "px";
        }
        if (this.showConversationInfo) {
            var conversationSideWidth = document.getElementById("conversation-header").clientWidth -
                infoConvWidth;
            if (w < 900) {
                hideInputComp = true;
            }
            document.getElementById("conversation-side").style.width =
                conversationSideWidth + "px";
        }
        else {
            var conversationSideWidth = document.getElementById("conversation-header")
                .clientWidth;
            document.getElementById("conversation-side").style.width =
                conversationSideWidth + "px";
        }
        this.componentCommunicationService.setData({
            fromComponent: "conversation",
            toComponent: "input",
            type: "adjust-input-comp-width",
            conversationSideWidth: document.getElementById("conversation-side").clientWidth + "px",
            hide: hideInputComp
        });
    };
    ConversationComponent.prototype.openCallWindow = function () {
        var _this = this;
        if (this.usersInRoomchat.length > 2)
            return;
        this.componentCommunicationService.setData({
            fromComponent: "conversation",
            type: "call-video",
            roomchatID: this.roomchatID,
            usersInRoomchat: this.usersInRoomchat.filter(function (el) { return el !== _this.myID; })
        });
    };
    ConversationComponent.prototype.listenToStopTyping = function () {
        var _this = this;
        return setInterval(function () {
            if (Math.abs(_this.confirmation.timeConfirm - Date.now()) > 3000) {
                _this.confirmation.typing = false;
            }
        }, 1000);
    };
    ConversationComponent.prototype.adjustHTMLResponsive = function (w) {
        if (w < 900) {
            this.showConversationInfo = false;
            this.showNavPrevious = true;
            var conversationSideWidth = document.getElementById("conversation-header")
                .clientWidth;
            document.getElementById("conversation-side").style.width =
                conversationSideWidth + "px";
            document.getElementById("loading-messages").style.width =
                conversationSideWidth + "px";
            var conversationUsernameWidth = conversationSideWidth - 150;
            document.getElementById("conversation-header-username").style.width =
                conversationUsernameWidth + "px";
        }
        else {
            this.showConversationInfo = true;
            this.showNavPrevious = false;
            var conversationSideWidth = document.getElementById("conversation-header").clientWidth - 351;
            document.getElementById("conversation-side").style.width =
                conversationSideWidth + "px";
            document.getElementById("loading-messages").style.width =
                conversationSideWidth + "px";
            var conversationUsernameWidth = document.getElementById("conversation-header").clientWidth - 110;
            document.getElementById("conversation-header-username").style.width =
                conversationUsernameWidth + "px";
        }
        //Chinh header username
        var conversationHeight = window.innerHeight - 190;
        document
            .getElementById("conversation-body")
            .setAttribute("style", "height: " + conversationHeight + "px");
        //chinh input
        console.log("^&NJ: ", document.getElementById("conversation-side").clientWidth);
        document.getElementById("input-component").style.width =
            document.getElementById("conversation-side").clientWidth + "px";
        var inputFile = document.getElementById("input-file").clientWidth;
        var inputComponent = document.getElementById("input-component").clientWidth;
        var off = inputComponent - inputFile - 20;
        document.getElementById("input-text").style.width = off + "px";
        //chinh info conversation
        var conversationSideHeight = document.getElementById("conversation-side")
            .clientHeight;
        console.log("fggg: ", conversationSideHeight);
        document.getElementById("info-conversation-component").style.height =
            conversationSideHeight + "px";
        var infoConversationBodyHeight = conversationSideHeight - 70;
        document.getElementById("info-conversation-body").style.height =
            infoConversationBodyHeight + "px";
    };
    ConversationComponent.prototype.onScrollMessages = function () {
        var _this = this;
        var scrollTop = document.getElementById("conversation-body").scrollTop;
        var scrollHeight = document.getElementById("conversation-body")
            .scrollHeight;
        var clientHeight = document.getElementById("conversation-body")
            .clientHeight;
        if (scrollTop < 10 && this.continueToLoad) {
            console.log("load new messages");
            this.continueToLoad = false;
            this.loadingMessages = true;
            this.cdR.detectChanges();
            var conversationSideWidth = document.getElementById("conversation-header").clientWidth - 351;
            document.getElementById("loading-messages").style.width =
                conversationSideWidth + "px";
            this.c = this.messageService
                .getMessages(this.roomchatID, this.previousTimeSeq, 4)
                .subscribe(function (data) {
                if (data.success) {
                    _this.loadingMessages = false;
                    _this.continueToLoad = true;
                    var messagesLength = data.messages.length;
                    if (messagesLength === 0) {
                        _this.continueToLoad = false;
                        return;
                    }
                    for (var i = messagesLength - 1; i >= 0; i--) {
                        var previousMessageID = _this.messages[0].userID;
                        var message = data.messages[i];
                        _this.messages.unshift({
                            userID: message.userProfile._id,
                            username: message.userProfile.username,
                            _id: message.message._id,
                            content: message.message.content,
                            attach: message.message.attach,
                            fileName: message.message.fileName,
                            fileType: message.message.fileType,
                            profileImage: message.userProfile.profileImage.lowQuality,
                            time: message.message.time,
                            displayLastInfo: false
                        });
                        if (previousMessageID !== message.userProfile._id) {
                            _this.messages[0].displayLastInfo = true;
                        }
                    }
                    _this.previousTimeSeq = _this.messages[0].time;
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ConversationComponent.prototype, "onResize", null);
    ConversationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-conversation",
            template: __webpack_require__(/*! ./conversation.component.html */ "./src/app/components/conversation/conversation.component.html"),
            styles: [__webpack_require__(/*! ./conversation.component.css */ "./src/app/components/conversation/conversation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__["ComponentCommunicationService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_6__["RoomchatUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_roomchat_service__WEBPACK_IMPORTED_MODULE_5__["RoomchatService"]])
    ], ConversationComponent);
    return ConversationComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".roomchat-component{\r\n    width: 25%;\r\n    float: left;\r\n    border-style: solid;\r\n    border-color: #e7e7e7;\r\n    border-width: thin;\r\n    border-left: none;\r\n}\r\n\r\n.conversation-component{\r\n    width: 75%;\r\n    float: left;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home-component\" style=\"width:100%\">\n  <div id=\"roomchat-component\" class=\"roomchat-component\">\n    <app-roomchat></app-roomchat>\n  </div>\n  <div id=\"conversation-component\" class=\"conversation-component\">\n    <router-outlet></router-outlet>\n    \n    <!-- <app-conversation ></app-conversation>\n    <app-new-message></app-new-message> -->\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(componentCommunicationService) {
        this.componentCommunicationService = componentCommunicationService;
        this.roomchatID = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.componentCommunicationService.getData().subscribe(data => {
        //   if(!data) return;
        //   if((data.fromComponent === 'roomchat'|| data.fromComponent === 'conversation') && data.type === 'responsive-show-roomchat'){
        //     document.getElementById('roomchat-component').style.width = '100%';
        //     document.getElementById('conversation-component').style.display = 'none';
        //   } else if((data.fromComponent === 'roomchat'|| data.fromComponent === 'conversation') && data.type === 'responsive-show-roomchat-revert'){
        //     document.getElementById('roomchat-component').style.display = 'block';
        //     document.getElementById('roomchat-component').style.width = '25%';
        //     document.getElementById('conversation-component').style.display = 'block';
        //     document.getElementById('conversation-component').style.width = '75%';
        //   } else if((data.fromComponent === 'last-message' || data.fromComponent === 'conversation') && data.type === 'responsive-show-conversation'){
        //     document.getElementById('conversation-component').style.display = 'block';
        //     document.getElementById('conversation-component').style.width = '100%';
        //     document.getElementById('roomchat-component').style.display = 'none';
        //   }
        // })
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__["ComponentCommunicationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/info-conversation/info-conversation.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/info-conversation/info-conversation.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 10;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  /* Fallback color */\r\n  background-color: #0e0e0e;\r\n  /* Black w/ opacity */\r\n  /* overflow: auto; */\r\n}\r\n\r\n.custom-modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  margin-top: 5%;\r\n  border: 1px solid #888;\r\n  width: 35%;\r\n  height: 220px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-size: 17px;\r\n  font-weight: 500\r\n    /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.assign-admin-options {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n\r\n.delete-user-from-group-options {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n\r\n.modal-options-body {\r\n  height: 150px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n/* .modal-options-body :hover {\r\n  background-color: #e7e7e7\r\n} */\r\n\r\n.modal-options-content {\r\n  height: 70px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.delete-assign-admin-options {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n\r\n.result-user-search-profileimage {\r\n  width: 60px;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  float: left\r\n}\r\n\r\n.result-user-search-username {\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  float: left;\r\n}\r\n\r\n.result-user-search {\r\n  width: 100%;\r\n  height: 240px;\r\n  /* padding-left: 10px;\r\n  padding-right: 10px; */\r\n  overflow-y: auto;\r\n  overflow-x: hidden\r\n}\r\n\r\n.picked-user-search {\r\n  width: 100%;\r\n  height: 240px;\r\n  /* padding-left: 10px;\r\n  padding-right: 10px; */\r\n  overflow-y: auto;\r\n  overflow-x: hidden\r\n}\r\n\r\n.search-list-info-comp {\r\n  width: 100%;\r\n  height: 60px;\r\n  /* padding-top: 10px;\r\n  padding-bottom: 10px */\r\n}\r\n\r\n.picked-list-info-comp {\r\n  width: 100%;\r\n  height: 60px;\r\n  /* padding-top: 10px;\r\n  padding-bottom: 10px */\r\n}\r\n\r\n.search-list-info-comp:hover{\r\n  background-color: #e7e7e7\r\n}\r\n\r\n.picked-list-info-comp:hover{\r\n  background-color: #e7e7e7\r\n}\r\n\r\n.loading-photos {\r\n  width: 341px;\r\n  height: 30px;\r\n  position: fixed;\r\n  bottom: 0px;\r\n  background-color: white;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n}\r\n\r\n#info-conversation-body::-webkit-scrollbar-thumb {\r\n  border-radius: 13px;\r\n  width: 9px;\r\n  background-color: #79879b;\r\n}\r\n\r\n#info-conversation-body::-webkit-scrollbar {\r\n  width: 9px;\r\n  border-radius: 13px;\r\n  /* height: 8px; */\r\n  background-color: #eff1f4;\r\n  /* or add it to the track */\r\n  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n    background-color: #F5F5F5;\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n    height:100%; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/info-conversation/info-conversation.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/info-conversation/info-conversation.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;height:70px;border-bottom: solid thin #e7e7e7;\">\r\n  <div style=\"width:100%;height:100%;padding:10px\">\r\n    <div style=\"width:20%;height:100%;float: left;display: flex;justify-content: center;align-items: center;max-width: 50px\">\r\n      <img src={{profileImage}} style=\"height:75%;border-radius: 50%\">\r\n    </div>\r\n    <div style=\"width:80%;height:100%;float: left;display: flex;align-items: center\">\r\n      <div style=\"margin-left:10px\">\r\n        {{roomchatName}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"info-conversation-body\" (scroll)=\"onScrollInfoConv()\" style=\"width:100%;overflow-y: auto;overflow-x: hidden;\">\r\n  <div style=\"width:100%;height:200px;border-bottom: solid thin #e7e7e7\">\r\n    <div style=\"padding:15px;width:100%;height:100%\">\r\n      <div style=\"width:100%;height:40px;\">\r\n        Tùy chọn\r\n      </div>\r\n      <div style=\"width:100%;height:100%;padding-left: 15px;padding-right: 15px\">\r\n        <div *ngIf=\"!receiveNotification\" style=\"width:100%;height:50px\" (click)=\"turnOffNotification()\">\r\n          <div style=\"width:20%;height:100%;float:left;display: flex;justify-content: center;align-items: center\">\r\n            <i class=\"fas fa-bell-slash\" style=\"font-size: 25px\"></i>\r\n          </div>\r\n          <div style=\"width:80%;height:100%;float:left;display: flex;align-items: center\">\r\n            <div>\r\n              Tắt thông báo\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"receiveNotification\" style=\"width:100%;height:50px\" (click)=\"turnOnNotification()\">\r\n          <div style=\"width:20%;height:100%;float:left;display: flex;justify-content: center;align-items: center\">\r\n            <i class=\"fas fa-bell\" style=\"font-size: 25px\"></i>\r\n          </div>\r\n          <div style=\"width:80%;height:100%;float:left;display: flex;align-items: center\">\r\n            <div>\r\n              Bật thông báo\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"width:100%;height:auto;border-bottom: solid thin #e7e7e7\">\r\n    <div style=\"padding:15px;width:100%;height:100%\">\r\n      <div style=\"width:100%;height:40px;\">\r\n        Mọi người\r\n      </div>\r\n      <div (click)=\"onClickAddUsers()\" style=\"width:100%;height:40px;cursor: pointer;\">\r\n        <div style=\"width:16%;height:100%;display: flex;justify-content: center;align-items: center;float: left;\">\r\n          <i class=\"fas fa-plus\" style=\"font-size: 26px\"></i>\r\n        </div>\r\n        <div style=\"width:80%;height:100%;display: flex;margin-left:10px;align-items: center\">\r\n          <div>\r\n            Thêm người\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div style=\"width:100%;height:50px\" *ngFor=\"let user of usersInRoomchat\">\r\n        <div style=\"width:20%;height:100%;display: flex;justify-content: center;align-items: center;float: left;max-width: 50px\">\r\n          <img src={{user.profileImage}} style=\"width:50%;border-radius: 50%\">\r\n        </div>\r\n        <div style=\"cursor: pointer;width:44%;height:100%;display: flex;margin-left:10px;align-items: center;float: left\">\r\n          <div>\r\n            {{user.username}}\r\n          </div>\r\n        </div>\r\n        <div style=\"font-size:12px;width:23%;height:100%;display: flex;margin-left:10px;align-items: center;float: left\">\r\n          <div *ngIf=\"user.isAdmin\">\r\n            Quản trị viên\r\n          </div>\r\n        </div>\r\n        <div (click)=\"openManageUserGroupModal(user._id)\" style=\"font-size:12px;width:3%;height:100%;display: flex;margin-left:10px;align-items: center;float: right;cursor: pointer;\">\r\n          <div>\r\n            <i style=\"font-size: 16px\" class=\"fas fa-ellipsis-v\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"width:100%;height:auto;border-bottom: solid thin #e7e7e7\">\r\n    <div style=\"padding:15px;width:100%;height:100%\">\r\n      <div style=\"width:100%;height:40px;\">\r\n        Files\r\n      </div>\r\n      <div style=\"width:100%;height:50px\" *ngFor=\"let file of files\">\r\n        <div style=\"width:20%;height:100%;display: flex;justify-content: center;align-items: center;float: left;\">\r\n          <i class=\"fas fa-arrow-circle-down\" style=\"font-size:20px\"></i>\r\n        </div>\r\n        <div style=\"cursor: pointer;width:75%;height:100%;overflow: hidden;text-overflow: ellipsis; display: flex;margin-left:10px;align-items: center;float: left\">\r\n          <a href={{file.downloadLink}} style=\"text-decoration: none\">\r\n            {{file.fileName}}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"width:100%;height:auto;border-bottom: solid thin #e7e7e7\">\r\n    <div style=\"padding:15px;width:100%;height:100%\">\r\n      <div style=\"width:100%;height:40px;\">\r\n        Ảnh\r\n      </div>\r\n      <div style=\"width:33%;height:100px;float: left;\" *ngFor=\"let image of images;let i = index\">\r\n        <div (click)=\"onClickImage(image.fileID,i)\" style=\"cursor: pointer;width:100%;height:100%;display: flex;justify-content: center;align-items: center\">\r\n          <img src={{image.imageSrc}} style=\"height:100%;\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"loadingPhotos\" id=\"loading-photos\" class=\"loading-photos\">\r\n      <img src=\"../../../assets//loading-1.gif\" style=\"width:17px\">&nbsp;\r\n      Đang tải...\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showManageUserGroup\" id=\"manage-user-group-modal\" class=\"custom-modal\">\r\n  <div id=\"custom-modal-content-manage-user-in-group\" class=\"custom-modal-content\" style=\"height: 270px;\">\r\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\r\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\r\n        Quản lý thành viên nhóm chat\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-options-body\">\r\n      <div class=\"assign-admin-options\" (click)=\"assignAdmin()\">\r\n        <div style=\"margin-top:15px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n        line-height: 1.28;font-size: 17px;font-weight: 500\">\r\n          Bổ nhiệm làm quản trị viên\r\n        </div>\r\n      </div>\r\n      <div class=\"delete-assign-admin-options\" (click)=\"deleteAssignAdmin()\">\r\n        <div style=\"margin-top:15px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n        line-height: 1.28;font-size: 17px;font-weight: 500;color:red\">\r\n          Gỡ vai trò quản trị viên\r\n        </div>\r\n      </div>\r\n      <div class=\"delete-user-from-group-options\" (click)=\"deleteUserFromGroup()\">\r\n        <div style=\"margin-top:15px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n        line-height: 1.28;font-size: 17px;font-weight: 500\">\r\n          Xóa khỏi nhóm chat\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\r\n      <!-- <button type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\r\n        Lưu\r\n      </button> -->\r\n      <button (click)=\"closeManageUserGroupModal()\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;width:80px;height: 40px;margin:10px;margin-right:10px\">\r\n        Hủy\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showAddUserToGroup\" id=\"add-user-to-group\" class=\"custom-modal\">\r\n  <div id=\"custom-modal-content-add-user-to-group\" class=\"custom-modal-content\" style=\"height: 420px;\">\r\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\r\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\r\n        Thêm người vào nhóm chat\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-options-body\" style=\"height:300px\">\r\n      <div style=\"width:100%;height:60px;padding:10px;border-bottom: solid thin;border-color: #e7e7e7\">\r\n        <input type=\"text\" [(ngModel)]=\"searchTerm\" (ngModelChange)='onSearchUser()' placeholder=\"Nhập bạn bè...\" style=\"height: 100%;width: 100%;outline: none;border:transparent;box-shadow: aqua\">\r\n      </div>\r\n      <div *ngIf=\"searchedList.length !== 0\" class=\"result-user-search\" id=\"result-user-search\">\r\n        <div *ngFor='let searchedUser of searchedList' class=\"search-list-info-comp\" (click)=\"onClickSearchResult(searchedUser)\">\r\n          <div style=\"width:100%;height:100%;padding:10px\">\r\n            <div class=\"result-user-search-profileimage\">\r\n              <img src={{searchedUser.profileImage.lowQuality}} style=\"width:30px;border-radius: 50%\">\r\n            </div>\r\n            <div class=\"result-user-search-username\">\r\n              {{searchedUser.username}}\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"searchedList.length === 0\" class=\"picked-user-search\">\r\n        <div *ngFor='let pickedUser of pickedUsersToAdd' class=\"picked-list-info-comp\">\r\n          <div style=\"width:100%;height:100%;padding:10px\">\r\n            <div class=\"result-user-search-profileimage\">\r\n              <img src={{pickedUser.profileImage.lowQuality}} style=\"width:30px;border-radius: 50%\">\r\n            </div>\r\n            <div class=\"result-user-search-username\">\r\n              {{pickedUser.username}}\r\n            </div>\r\n            <div style=\"width:30px;height:40px;float: right;display: flex;justify-content: center;align-items: center\">\r\n              <i class=\"far fa-check-circle\" style=\"font-size:25px;\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\r\n      <button (click)=\"addUsersToGroup()\" type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\r\n        Hoàn tất\r\n      </button>\r\n      <button (click)=\"closeAddUsersModal()\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;width:80px;height: 40px;margin:10px;margin-right:10px\">\r\n        Hủy\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"custom-modal\" *ngIf=\"openViewMode\">\r\n  <div class=\"container\" style=\"display: flex;justify-content: center;align-items: center;height:100%;width:100%\">\r\n    <img id=\"image-in-view-mode\" src={{currentPhotoInViewMode}} style=\"width:0px\">\r\n    <i (click)=\"openNextPhotoViewMode()\" class=\"fas fa-chevron-right\" style=\"font-size:50px;position: absolute;color:wheat;right:0px;cursor: pointer;\"></i>\r\n    <i (click)=\"openPreviousPhotoViewMode()\" class=\"fas fa-chevron-left\" style=\"font-size:50px;position: absolute;color:wheat;left:0px;cursor: pointer;\"></i>\r\n    <i (click)=\"closeViewMode()\" class=\"fas fa-times\" style=\"font-size:40px;position: absolute;color:red;right:5px;top:5px;cursor: pointer;\"></i>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/info-conversation/info-conversation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/info-conversation/info-conversation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InfoConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoConversationComponent", function() { return InfoConversationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_roomchat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/roomchat.service */ "./src/app/services/roomchat.service.ts");
/* harmony import */ var _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/roomchat-user.service */ "./src/app/services/roomchat-user.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfoConversationComponent = /** @class */ (function () {
    function InfoConversationComponent(router, roomchatService, roomchatUserService, userService, cdRef, socketService, componentCommunicationService, uploadService) {
        this.router = router;
        this.roomchatService = roomchatService;
        this.roomchatUserService = roomchatUserService;
        this.userService = userService;
        this.cdRef = cdRef;
        this.socketService = socketService;
        this.componentCommunicationService = componentCommunicationService;
        this.uploadService = uploadService;
        this.roomchatID = "";
        this.roomchatName = "";
        this.profileImage = "";
        this.usersInRoomchat = [];
        this.myID = "";
        this.pickedUserID = "";
        this.showAddUserToGroup = false;
        this.showManageUserGroup = false;
        this.images = [];
        this.files = [];
        this.searchTerm = "";
        this.searchedList = [];
        this.pickedUsersToAdd = [];
        this.continueToLoad = true;
        this.previousTimeSeq = 0;
        this.loadingPhotos = false;
        this.currentPhotoInViewMode = "";
        this.currentPhotoIndexInViewMode = 0;
        this.openViewMode = false;
        this.receiveNotification = false;
    }
    InfoConversationComponent.prototype.onResize = function (event) {
        this.adjustHTML();
    };
    InfoConversationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomchatID = this.getParams();
        this.getRoomchatSubscription = this.roomchatService
            .getRoomchat(this.roomchatID)
            .subscribe(function (data) {
            if (data && data.success) {
                _this.profileImage =
                    data.roomchat.firstUserInRoomchat.profileImage.lowQuality;
                _this.roomchatName = _this.processRoomchatName(data.roomchat.firstUserInRoomchat.username, data.roomchat.numberOfUserInRoomchat - 1, data.roomchat.typeRoomchat);
                _this.myID = data.myID;
            }
        });
        this.getRoomchatSubscription = this.getUsersInRoomchat();
        this.previousTimeSeq = Date.now() + 100000;
        this.loadingPhotos = true;
        this.uploadService
            .getFiles(this.roomchatID, "image", this.previousTimeSeq, 10)
            .subscribe(function (data) {
            if (data && data.success) {
                _this.loadingPhotos = false;
                _this.images = data.files;
                console.log("image array: ", _this.images);
                var filesLength = _this.images.length;
                if (filesLength === 0)
                    return;
                _this.previousTimeSeq = _this.images[filesLength - 1].time;
            }
        });
        this.uploadService
            .getFiles(this.roomchatID, "application", 0, 0)
            .subscribe(function (data) {
            if (data && data.success) {
                _this.files = data.files;
            }
        });
        this.componentCommunicationService.getData().subscribe(function (data) {
            if (data &&
                data.fromComponent === "app" &&
                data.type === "add-users-to-roomchat") {
                if (_this.roomchatID !== data.roomchatID)
                    return;
                _this.usersInRoomchat = [];
                _this.getRoomchatSubscription = _this.getUsersInRoomchat();
            }
        });
    };
    InfoConversationComponent.prototype.getParams = function () {
        var url = this.router.routerState.snapshot.url;
        var tempLength = url.split("/").length;
        return url.split("/")[tempLength - 1] + "";
    };
    InfoConversationComponent.prototype.processRoomchatName = function (firstUser, numberOfUsers, typeRoomchat) {
        if (typeRoomchat === "private") {
            return firstUser;
        }
        else if (typeRoomchat === "group") {
            return firstUser + " và " + numberOfUsers + " người khác";
        }
    };
    InfoConversationComponent.prototype.assignAdmin = function () {
        var _this = this;
        this.roomchatUserService
            .assignAdmin(this.roomchatID, this.pickedUserID)
            .subscribe(function (data) {
            if (data && data.success) {
                for (var _i = 0, _a = _this.usersInRoomchat; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user._id === _this.pickedUserID) {
                        user.isAdmin = true;
                        _this.showManageUserGroup = false;
                        break;
                    }
                }
            }
            else {
                return alert('Error when assigning admin! Maybe you are not permitted');
            }
        });
    };
    InfoConversationComponent.prototype.deleteAssignAdmin = function () {
        var _this = this;
        this.roomchatUserService
            .deleteAssignAdmin(this.roomchatID, this.pickedUserID)
            .subscribe(function (data) {
            if (data && data.success) {
                for (var _i = 0, _a = _this.usersInRoomchat; _i < _a.length; _i++) {
                    var user = _a[_i];
                    if (user._id === _this.pickedUserID) {
                        user.isAdmin = false;
                        _this.showManageUserGroup = false;
                        break;
                    }
                }
            }
            else {
                return alert('Error when removing assigning admin! Maybe you are not permitted');
            }
        });
    };
    InfoConversationComponent.prototype.deleteUserFromGroup = function () {
        var _this = this;
        return this.roomchatUserService
            .deleteUserFromRoomchat(this.roomchatID, this.pickedUserID)
            .subscribe(function (data) {
            if (data && data.success) {
                _this.usersInRoomchat = [];
                _this.getUsersInRoomchat();
                _this.socketService.emitDeleteUsersFromGroup(_this.roomchatID, _this.pickedUserID);
                _this.closeManageUserGroupModal();
                return alert("Delete user in roomchat successfully!");
            }
            else {
                _this.closeManageUserGroupModal();
                return alert("Error occurred when deleting!");
            }
        });
    };
    InfoConversationComponent.prototype.closeManageUserGroupModal = function () {
        this.showManageUserGroup = false;
        this.pickedUserID = "";
    };
    InfoConversationComponent.prototype.openManageUserGroupModal = function (userID) {
        this.showManageUserGroup = true;
        this.pickedUserID = userID;
        console.log("picked user: ", userID);
        this.cdRef.detectChanges();
        var w = window.innerWidth;
        if (w < 900) {
            document.getElementById("custom-modal-content-manage-user-in-group").style.width = "100%";
        }
        else {
            document.getElementById("custom-modal-content-manage-user-in-group").style.width = "35%";
        }
    };
    InfoConversationComponent.prototype.adjustHTML = function () {
        var conversationSideHeight = document.getElementById("conversation-side")
            .clientHeight;
        console.log("fggg: ", conversationSideHeight);
        document.getElementById("info-conversation-component").style.height =
            conversationSideHeight + "px";
        var infoConversationBodyHeight = conversationSideHeight - 70;
        document.getElementById("info-conversation-body").style.height =
            infoConversationBodyHeight + "px";
    };
    InfoConversationComponent.prototype.onSearchUser = function () {
        var _this = this;
        this.userService.searchUsers(this.searchTerm, "friend").subscribe(function (data) {
            if (data && data.success) {
                _this.searchedList = data.users;
            }
        });
    };
    InfoConversationComponent.prototype.onClickAddUsers = function () {
        this.showAddUserToGroup = true;
        this.cdRef.detectChanges();
        var w = window.innerWidth;
        if (w < 900) {
            document.getElementById("custom-modal-content-add-user-to-group").style.width = "100%";
        }
        else {
            document.getElementById("custom-modal-content-add-user-to-group").style.width = "35%";
        }
    };
    InfoConversationComponent.prototype.addUsersToGroup = function () {
        var _this = this;
        var userIDs = this.pickedUsersToAdd.map(function (el) { return el._id; });
        this.getUsersIDInRoomchat(function (userIDsInRoomchat) {
            userIDs = userIDs.filter(function (el) { return !userIDsInRoomchat.includes(el); });
            _this.addUsersToRoomchatSubscription = _this.roomchatUserService
                .addUsersToRoomchat(userIDs, _this.roomchatID)
                .subscribe(function (data) {
                if (data && data.success) {
                    _this.usersInRoomchat = [];
                    _this.getUsersInRoomchatSubscription = _this.getUsersInRoomchat();
                    _this.addUsersToRoomchatSubscription.unsubscribe();
                    _this.closeManageUserGroupModal();
                    _this.closeAddUsersModal();
                    _this.socketService.emitAddUsersToGroup(_this.roomchatID, userIDs);
                    _this.showManageUserGroup = false;
                }
                else {
                    return alert('Fail when adding new user to roomchat');
                }
            });
        });
    };
    InfoConversationComponent.prototype.onClickSearchResult = function (searchedUser) {
        this.pickedUsersToAdd.push(searchedUser);
        this.searchedList = [];
    };
    InfoConversationComponent.prototype.closeAddUsersModal = function () {
        this.searchedList = [];
        this.pickedUsersToAdd = [];
        this.showAddUserToGroup = false;
        if (this.addUsersToRoomchatSubscription) {
            this.addUsersToRoomchatSubscription.unsubscribe();
        }
    };
    InfoConversationComponent.prototype.onScrollInfoConv = function () {
        var _this = this;
        var scrollTop = document.getElementById("info-conversation-body").scrollTop;
        var scrollHeight = document.getElementById("info-conversation-body")
            .scrollHeight;
        var clientHeight = document.getElementById("info-conversation-body")
            .clientHeight;
        this.loadingPhotos = true;
        if (scrollHeight - 10 < clientHeight + scrollTop && this.continueToLoad) {
            this.continueToLoad = false;
            this.cdRef.detectChanges();
            this.uploadService
                .getFiles(this.roomchatID, "image", this.previousTimeSeq, 4)
                .subscribe(function (data) {
                if (data && data.success) {
                    _this.loadingPhotos = false;
                    _this.continueToLoad = true;
                    var images = data.files;
                    var filesLength = images.length;
                    if (filesLength === 0)
                        return;
                    _this.images = _this.images.concat(images);
                    _this.previousTimeSeq = images[filesLength - 1].time;
                    console.log("time-seq: ", _this.previousTimeSeq, images.map(function (el) { return el.time; }));
                }
            });
        }
    };
    InfoConversationComponent.prototype.getUsersInRoomchat = function () {
        var _this = this;
        return this.roomchatUserService
            .getRoomchatUsers(this.roomchatID)
            .subscribe(function (data) {
            if (data && data.success) {
                var userIDsInRoomchat = data.roomchatUsers.map(function (el) { return el.userID; });
                var roleUsersInRoomchat_1 = data.roomchatUsers.map(function (el) { return el.isAdmin; });
                _this.userService
                    .getUsersFromIDs(userIDsInRoomchat)
                    .subscribe(function (dataa) {
                    if (dataa && dataa.success) {
                        var index = 0;
                        for (var _i = 0, _a = dataa.users; _i < _a.length; _i++) {
                            var userInRoomchat = _a[_i];
                            _this.usersInRoomchat.push({
                                _id: userInRoomchat._id,
                                username: userInRoomchat.username,
                                profileImage: userInRoomchat.profileImage.lowQuality,
                                isAdmin: roleUsersInRoomchat_1[index]
                            });
                            index++;
                        }
                    }
                });
            }
        });
    };
    InfoConversationComponent.prototype.getUsersIDInRoomchat = function (cb) {
        return this.roomchatUserService
            .getRoomchatUsers(this.roomchatID)
            .subscribe(function (data) {
            if (data && data.success) {
                var userIDsInRoomchat = data.roomchatUsers.map(function (el) { return el.userID; });
                return cb(userIDsInRoomchat);
            }
            else {
                return cb(null);
            }
        });
    };
    InfoConversationComponent.prototype.onClickImage = function (imageID, i) {
        this.openViewMode = true;
        this.currentPhotoIndexInViewMode = i;
        this.cdRef.detectChanges();
        this.showPhotoInViewMode(imageID);
    };
    InfoConversationComponent.prototype.showPhotoInViewMode = function (imageID) {
        var _this = this;
        this.getPhotoViewModeSubscription = this.uploadService
            .getFile(this.roomchatID, "image", imageID)
            .subscribe(function (data) {
            if (data && data.success) {
                _this.currentPhotoInViewMode = data.imageSrc;
                var photoWidth = data.photoInfo.size.width;
                var photoHeight = data.photoInfo.size.height;
                console.log("Siz::: ", photoWidth, photoHeight);
                if (photoHeight >= photoWidth) {
                    document.getElementById("image-in-view-mode").style.height = "100%";
                    document.getElementById("image-in-view-mode").style.width = "auto";
                }
                else {
                    document.getElementById("image-in-view-mode").style.width = "100%";
                    document.getElementById("image-in-view-mode").style.height = "auto";
                }
            }
        });
    };
    InfoConversationComponent.prototype.openNextPhotoViewMode = function () {
        if (this.currentPhotoIndexInViewMode < this.images.length - 1) {
            this.currentPhotoIndexInViewMode++;
        }
        var nextPhoto = this.images[this.currentPhotoIndexInViewMode];
        if (nextPhoto) {
            var imageID = nextPhoto.fileID;
            this.showPhotoInViewMode(imageID);
        }
    };
    InfoConversationComponent.prototype.openPreviousPhotoViewMode = function () {
        if (this.currentPhotoIndexInViewMode > 0) {
            this.currentPhotoIndexInViewMode--;
        }
        var previousPhoto = this.images[this.currentPhotoIndexInViewMode];
        if (previousPhoto) {
            var imageID = previousPhoto.fileID;
            this.showPhotoInViewMode(imageID);
        }
    };
    InfoConversationComponent.prototype.closeViewMode = function () {
        this.getPhotoViewModeSubscription.unsubscribe();
        this.openViewMode = false;
    };
    InfoConversationComponent.prototype.turnOffNotification = function () {
        this.receiveNotification = true;
        return this.componentCommunicationService.setData({
            fromComponent: "info-conversation",
            toComponent: "navbar",
            type: "turn-off-notification",
            roomchatID: this.roomchatID
        });
    };
    InfoConversationComponent.prototype.turnOnNotification = function () {
        this.receiveNotification = false;
        return this.componentCommunicationService.setData({
            fromComponent: "info-conversation",
            toComponent: "navbar",
            type: "turn-on-notification",
            roomchatID: this.roomchatID
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InfoConversationComponent.prototype, "onResize", null);
    InfoConversationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-info-conversation",
            template: __webpack_require__(/*! ./info-conversation.component.html */ "./src/app/components/info-conversation/info-conversation.component.html"),
            styles: [__webpack_require__(/*! ./info-conversation.component.css */ "./src/app/components/info-conversation/info-conversation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_roomchat_service__WEBPACK_IMPORTED_MODULE_2__["RoomchatService"],
            _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_3__["RoomchatUserService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            _services_component_communication_service__WEBPACK_IMPORTED_MODULE_7__["ComponentCommunicationService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])
    ], InfoConversationComponent);
    return InfoConversationComponent;
}());



/***/ }),

/***/ "./src/app/components/input/input.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/input/input.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-text {\r\n  /* width: 58%; */\r\n  z-index: 0;\r\n  float: left;\r\n}\r\n\r\n.input-file {\r\n  width: 260px;\r\n  height: 100%;\r\n  float: left;\r\n}\r\n\r\n.preview-file {\r\n  max-width: 100%;\r\n  height: 100px;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n  display: flex\r\n}\r\n\r\n.preview-file::-webkit-scrollbar-thumb {\r\n  border-radius: 10px;\r\n  width: 5px;\r\n  background-color: #79879b;\r\n}\r\n\r\n.preview-file::-webkit-scrollbar {\r\n  width: 5px;\r\n  border-radius: 10px;\r\n  /* height: 8px; */\r\n  background-color: #eff1f4;\r\n  /* or add it to the track */\r\n  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n    background-color: #F5F5F5;\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n    height:100%; */\r\n}\r\n\r\n.emoj-modal {\r\n  z-index: 10000;\r\n  box-shadow: 0 0 10px #9ecaed;\r\n  background-color: white;\r\n  right: 5px;\r\n  position: absolute;\r\n  height: 200px;\r\n  border-radius: 10px;\r\n  border: transparent\r\n}\r\n\r\n.emoj-modal-body {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.emoj-type {\r\n  width: 10%;\r\n  height: 100%;\r\n  float: left;\r\n  font-size: 33px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n.emoj-type:hover {\r\n  background-color: #e7e7e7\r\n}\r\n\r\n.emoj-detail {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 10px\r\n}\r\n\r\n#text-area-input::-webkit-scrollbar-thumb {\r\n  border-radius: 13px;\r\n  width: 9px;\r\n  background-color: #79879b;\r\n}\r\n\r\n#text-area-input::-webkit-scrollbar {\r\n  width: 9px;\r\n  border-radius: 13px;\r\n  /* height: 8px; */\r\n  background-color: #eff1f4; /* or add it to the track */\r\n/* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\nborder-radius: 10px;\r\n  background-color: #F5F5F5;\r\n  width: 12px;\r\n  background-color: #F5F5F5;\r\n  height:100%; */\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/input/input.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/input/input.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"input-component\" style=\"z-index:0;width: 100%;height:auto;padding: 10px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\nline-height: 1.28;position:absolute;\">\n  <div class=\"preview-file\" id=\"preview-file\" *ngIf=\"this.previewFiles.length !== 0\">\n    <div *ngFor=\"let file of previewFiles;let i = index;\" style=\"width:auto;height:auto\">\n      <div *ngIf=\"!file.isImage\" style=\"background-color: #0084ff;margin-top:8px;max-width:250px;min-width:250px;height:63px;border:transparent;margin-left: 15px;border: solid;border-color: #e7e7e7;border-width: thin;border-radius: 10px\">\n        <div style=\"width:25%;height:100%;display: flex;justify-content: center;align-items: center;float: left;\">\n          <i class=\"far fa-file\" style=\"font-size:29px;color:white\"></i>\n        </div>\n        <div style=\"width:75%;height:100%;background-color: white;float: left;\">\n          <div style=\"padding:10px;width: 100%;height: 100%;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\">\n            <div style=\"width:100%;height:50%;font-weight: 600\">\n              {{file.ext}}\n            </div>\n            <div style=\"width:100%;height:50%;overflow: hidden; text-overflow: ellipsis\">\n              {{file.file.name}}\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"file.isImage\" style=\"margin-left:10px;border:transparent;border-radius: 10px;height:100%;max-width:250px;\">\n        <img src={{file.imageSrc}} style=\"height:100%;border-radius: 15px;width:100%\">\n      </div>\n      <div style=\"width:250px;height:20px;float:right\">\n        <ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"previewFiles[i].percentUpload\"></ngb-progressbar>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"input-text\" id=\"input-text\">\n    <textarea (click)=\"onClick()\" (keydown)=\"onEnter($event)\" [(ngModel)]=\"contentText\" id=\"text-area-input\" autofocus\n      placeholder=\"Viết tin nhắn...\" (ngModelChange)=\"onChangeTextArea($event)\" rows=\"1\" autosize style=\"z-index: 0;line-height: 1.85;width:95%;overflow: hidden;outline:0cm;border-color:white;margin-top:7px;margin-left:10px;margin-bottom:3px\"></textarea>\n  </div>\n  <div class=\"input-file\" id=\"input-file\">\n    <div style=\"width:45px;height:100%;float:left;display: flex;align-items: center;justify-content: center;cursor: pointer;\">\n      <label for=\"upload-file\" style=\"margin:0px;cursor: pointer;\">\n        <i class=\"far fa-file\" style=\"font-size:29px\"></i>\n        <input (change)=\"showPreviewFiles($event)\" type=\"file\" id=\"upload-file\" style=\"display:none\" multiple>\n      </label>\n\n    </div>\n    <div style=\"width:45px;height:100%;float:left;display: flex;align-items: center;justify-content: center;cursor: pointer;\">\n      <label for=\"upload-image\" style=\"margin:0px;cursor: pointer;\">\n        <i class=\"far fa-images\" style=\"font-size:29px\"></i>\n        <input accept=\"image/*\" (change)=\"showPreviewFiles($event)\" type=\"file\" id=\"upload-image\" style=\"display:none\"\n          multiple>\n      </label>\n    </div>\n    <div (click)=\"openEmojModal()\" style=\"width:45px;height:100%;float:left;display: flex;align-items: center;justify-content: center;cursor: pointer;\"\n      id=\"emoj-choose-div\">\n      <i class=\"far fa-smile\" style=\"font-size:29px\" id=\"emoj-choose-icon\"></i>\n    </div>\n    <div style=\"width:45px;height:100%;float:left;display: flex;align-items: center;justify-content: center;cursor: pointer;\">\n      <i class=\"far fa-thumbs-up\" style=\"font-size:29px;\"></i>\n    </div>\n    <div style=\"width:45px;height:100%;float:left;display: flex;align-items: center;justify-content: center;cursor: pointer;\">\n      <i class=\"far fa-share-square\" style=\"font-size:29px;\"></i>\n    </div>\n  </div>\n  \n</div>\n\n\n<div (clickOutside)=\"closeEmojModal($event)\" id=\"emoj-modal\" class=\"emoj-modal\" *ngIf=\"showEmojModal\">\n  <div class=\"emoj-modal-body\" id='emoj-modal-body'>\n    <div (click)=\"onClickEmoj($event)\" style=\"width:100%;height:70%;border-bottom: solid 1px;overflow-x:hidden;overflow-y: auto\">\n      <div class=\"emoj-detail\" id=\"emoj-detail-1\" style=\"display:block\">\n        <div *ngFor=\"let emoj of emojList.type1;let i=index\" id=\"emoj-{{i}}\" style=\"float:left;font-size:28px;max-width:60px;height:30%\">\n          {{emoj}}\n        </div>\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-2\" style=\"display:none\">\n        <div *ngFor=\"let emoj of emojList.type2\" style=\"float:left;font-size:28px;max-width:60px;height:30%\">\n          {{emoj}}\n        </div>\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-3\" style=\"display:none\">\n\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-4\" style=\"display:none\">\n\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-5\" style=\"display:none\">\n\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-6\" style=\"display:none\">\n\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-7\" style=\"display:none\">\n\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-8\" style=\"display:none\">\n\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-9\" style=\"display:none\">\n\n      </div>\n      <div class=\"emoj-detail\" id=\"emoj-detail-10\" style=\"display:none\">\n\n      </div>\n    </div>\n    <div style=\"width:100%;height:30%\">\n      <div style=\"width:100%;height:100%;cursor: pointer;\" (click)=\"onClickEmojType($event)\">\n        <div class=\"emoj-type\" id=\"emoj-type-1\">\n          <div id=\"emoj-type-1\">\n            😀\n          </div>\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-2\">\n          <div id=\"emoj-type-2\">\n            👶\n          </div>\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-3\">\n          <div id=\"emoj-type-3\">\n            🧥\n          </div>\n\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-4\">\n          <div id=\"emoj-type-4\">\n            👶🏻\n          </div>\n\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-5\">\n          <div id=\"emoj-type-5\">\n            ⚽️\n          </div>\n\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-6\">\n          <div id=\"emoj-type-6\">\n            🚗\n          </div>\n\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-7\">\n          <div id=\"emoj-type-7\">\n            ❤️\n          </div>\n\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-8\">\n          <div id=\"emoj-type-8\">\n            ⌚️\n          </div>\n\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-9\">\n          <div id=\"emoj-type-9\">\n            🐶\n          </div>\n\n        </div>\n        <div class=\"emoj-type\" id=\"emoj-type-10\">\n          <div id=\"emoj-type-10\">\n            🍏\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/input/input.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/input/input.component.ts ***!
  \*****************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var InputComponent = /** @class */ (function () {
    function InputComponent(messageService, componentCommunicationService, socketService, authService, router, userService, uploadService, notificationService, cdR) {
        this.messageService = messageService;
        this.componentCommunicationService = componentCommunicationService;
        this.socketService = socketService;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        this.uploadService = uploadService;
        this.notificationService = notificationService;
        this.cdR = cdR;
        this.myInfo = {
            _id: '',
            profileImage: '',
            username: ''
        };
        this.contentText = '';
        this.heightTextArea = 27;
        this.widthTextArea = 0;
        this.timeTyping = 0;
        this.previewFiles = [];
        this.tempPreviewFile = [];
        this.currentIndexPreviewFile = 0;
        this.showEmojModal = false;
        this.emojList = {
            type1: ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘'],
            type2: ['👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👵', '🧓', '👴', '👲', '👳‍', '👳‍', '🧔', '👱‍', '👱‍', '👨‍'],
            type3: ['🧥', '👚', '👕', '👖', '👔', '👗', '👙', '👘', '👠', '👡', '👢', '👞', '👟']
        };
    }
    InputComponent.prototype.onResize = function (event) {
        var inputFile = document.getElementById('input-file').clientWidth;
        var inputComponent = document.getElementById('input-component').clientWidth;
        var off = inputComponent - inputFile - 20;
        document.getElementById('input-text').style.width = off + 'px';
    };
    InputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomchatID = this.getParams();
        this.componentCommunicationService.getData().subscribe(function (data) {
            if (!data)
                return;
            if (data.type === 'adjust-input-comp-width' && data.fromComponent === 'conversation') {
                if (data.hide) {
                    document.getElementById('input-component').style.display = 'none';
                }
                else {
                    document.getElementById('input-component').style.display = 'block';
                    document.getElementById('input-component').style.width = data.conversationSideWidth;
                    var inputFile = document.getElementById('input-file').clientWidth;
                    var inputComponent = document.getElementById('input-component').clientWidth;
                    var off = inputComponent - inputFile - 20;
                    document.getElementById('input-text').style.width = off + 'px';
                }
            }
        });
        this.userService.getMe('low').subscribe(function (data) {
            if (data && data.success) {
                _this.myInfo._id = data.user._id;
                _this.myInfo.profileImage = data.user.profileImage.lowQuality;
                _this.myInfo.username = data.user.username;
            }
        });
    };
    InputComponent.prototype.onChangeTextArea = function (e) {
        var _this = this;
        this.timeTyping = Date.now();
        if (this.roomchatID) {
            var onTypingInterval_1 = setInterval(function () {
                if (Math.abs(_this.timeTyping - Date.now()) < 3000) {
                    _this.socketService.emitTyping(_this.roomchatID, 'typing');
                }
                else {
                    clearInterval(onTypingInterval_1);
                }
            }, 100);
        }
        var heightTextArea = document.getElementById('text-area-input').clientHeight;
        var widthTextArea = document.getElementById('input-text').clientWidth;
        if (heightTextArea > 190) {
            var textAreaElement = document.getElementById('text-area-input');
            textAreaElement.style.maxHeight = '230px';
            document.getElementById('text-area-input').style['overflowY'] = 'scroll';
            heightTextArea = document.getElementById('text-area-input').clientHeight;
        }
        else {
            document.getElementById('text-area-input').style['overflowY'] = 'hidden';
        }
        var offsetHeight = this.heightTextArea - heightTextArea;
        var offsetWidth = Math.abs(this.widthTextArea - widthTextArea);
        if (offsetHeight !== 0 && offsetWidth === 0) {
            var oldHeight = document.getElementById('conversation-body').style.height;
            var newHeight = parseInt(oldHeight) + offsetHeight;
            document.getElementById('conversation-body').style.height = newHeight + 'px';
        }
        this.widthTextArea = document.getElementById('input-text').clientWidth;
        this.heightTextArea = document.getElementById('text-area-input').clientHeight;
    };
    InputComponent.prototype.onClick = function () {
        if (this.roomchatID) {
            this.componentCommunicationService.setData({
                fromComponent: 'input',
                toComponent: 'app',
                type: 'confirm-seen-message',
                roomchatID: this.roomchatID,
                userID: this.myInfo._id
            });
        }
    };
    InputComponent.prototype.onEnter = function ($event) {
        if ($event.keyCode === 13) {
            $event.preventDefault();
            var textAreaElement = document.getElementById('text-area-input');
            this.componentCommunicationService.setData({
                fromComponent: 'input',
                status: 'sending'
            });
            this.sendMessages(textAreaElement);
        }
        else {
            this.showEmojModal = false;
        }
    };
    InputComponent.prototype.ngAfterViewInit = function () {
        // console.log('side: ::',document.getElementById('conversation-side').clientWidth)
        // document.getElementById('input-component').style.width = document.getElementById('conversation-side').clientWidth + 'px';
        // let inputFile = document.getElementById('input-file').clientWidth;
        // let inputComponent = document.getElementById('input-component').clientWidth;
        // let off = inputComponent - inputFile - 20;
        // document.getElementById('input-text').style.width = off + 'px';
        // this.widthTextArea = document.getElementById('input-text').clientWidth;
        // this.heightTextArea = document.getElementById('text-area-input').clientHeight;
    };
    InputComponent.prototype.showPreviewFiles = function ($event) {
        var _this = this;
        var files = $event.target.files;
        var filesLength = files.length;
        if (this.previewFiles.length === 0) {
            this.componentCommunicationService.setData({
                fromComponent: 'input',
                toComponent: 'conversation',
                type: 'adjust-conversation-body'
            });
        }
        var _loop_1 = function (i) {
            var myReader = new FileReader();
            var ext = files[i].name.split('.')[files[i].name.split('.').length - 1] + '';
            if (!ext || ext === '')
                return "continue";
            var isImage = false;
            if (ext.toLowerCase() + '' === 'png' || ext.toLowerCase() + '' === 'jpeg' || ext.toLowerCase() + '' === 'jpg') {
                isImage = true;
            }
            if (isImage) {
                var imageSrc_1 = undefined;
                // this.tempPreviewFiles.push(files[i]);
                this_1.tempPreviewFile.push(files[i]);
                myReader.onloadend = function (e) {
                    imageSrc_1 = myReader.result;
                    _this.previewFiles.push({
                        file: _this.tempPreviewFile[_this.currentIndexPreviewFile],
                        ext: ext.toUpperCase(),
                        imageSrc: imageSrc_1,
                        isImage: isImage,
                        idPreviewFile: Date.now(),
                        percentUpload: 0
                    });
                    _this.currentIndexPreviewFile++;
                    _this.cdR.detectChanges();
                    document.getElementById('preview-file').style.maxWidth = document.getElementById('input-component').clientWidth + 'px';
                };
                myReader.readAsDataURL(files[i]);
            }
            else {
                this_1.previewFiles.push({
                    file: files[i],
                    ext: ext.toUpperCase(),
                    isImage: isImage,
                    idPreviewFile: Date.now(),
                    percentUpload: 0
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < filesLength; i++) {
            _loop_1(i);
        }
        this.cdR.detectChanges();
        var uploadFileEl = document.getElementById('upload-file');
        var uploadImageEl = document.getElementById('upload-image');
        uploadFileEl.value = null;
        uploadImageEl.value = null;
        this.currentIndexPreviewFile = 0;
    };
    InputComponent.prototype.sendMessages = function (textAreaElement) {
        var _this = this;
        var contentText = textAreaElement.value;
        var filesLength = this.previewFiles.length;
        if (filesLength === 0 && (contentText !== '' && contentText)) {
            this.messageService.sendMessage(this.roomchatID, contentText, '', '', '').subscribe(function (data) {
                _this.contentText = '';
                _this.resizeInputTextArea(textAreaElement);
                console.log('wEEE: ', data);
                _this.socketService.sendMessage({
                    fromUserID: data.newMessage.fromUserID,
                    type: 'message',
                    roomchatID: _this.roomchatID,
                    messageID: data.newMessage._id,
                    username: _this.myInfo.username,
                    time: data.newMessage.time,
                    profileImage: data.userInfo.profileImage.lowQuality,
                    contentText: data.newMessage.content,
                    fileType: '',
                    contentFile: '',
                    fileName: ''
                });
                _this.sendCompCommunicationData(data, contentText, '');
                if (_this.usersInRoomchat) {
                    for (var _i = 0, _a = _this.usersInRoomchat; _i < _a.length; _i++) {
                        var userID = _a[_i];
                        _this.socketService.emitNotification(_this.roomchatID, {
                            type: 'incomming-message',
                            detail: {
                                typeContent: 'text',
                                content: data.newMessage.content,
                                fromRoomchatID: _this.roomchatID
                            },
                            fromUserInfo: _this.myInfo,
                            toUserID: userID,
                            time: Date.now()
                        });
                        _this.notificationService.createNotifications(userID, {
                            typeContent: 'text',
                            typeNotification: 'incomming-message',
                            content: data.newMessage.content,
                            fromRoomchatID: _this.roomchatID
                        }, Date.now()).subscribe(function (data) { return data; });
                    }
                }
            });
        }
        else if (filesLength !== 0) {
            this.tempPreviewFile = [];
            var _loop_2 = function (filePreview) {
                var formData = new FormData();
                formData.append('file', filePreview.file);
                console.log('files: ', filePreview.file);
                var percentUpload;
                var idPreviewFile;
                this_2.uploadService.uploadFile(formData, filePreview.idPreviewFile, this_2.roomchatID).subscribe(function (dataUpload) {
                    if (dataUpload.index) {
                        percentUpload = dataUpload.percentDone;
                        idPreviewFile = dataUpload.index;
                        _this.previewFiles.filter(function (el) { return el.idPreviewFile + '' === idPreviewFile + ''; })[0].percentUpload = percentUpload;
                    }
                    if (dataUpload && dataUpload.success) { //upload xong
                        var attach = '';
                        var dataFile_1 = '';
                        if (dataUpload.fileType + '' === 'image') {
                            attach = dataUpload.fileName;
                            dataFile_1 = dataUpload.imageSource;
                        }
                        else {
                            attach = dataUpload.downloadLink;
                            dataFile_1 = dataUpload.downloadLink;
                        }
                        var fileName = dataUpload.originalName;
                        _this.deleteOneFilePreview(idPreviewFile);
                        _this.messageService.sendMessage(_this.roomchatID, contentText, attach, dataUpload.fileType, fileName).subscribe(function (data) {
                            if (data && data.success) {
                                _this.contentText = '';
                                if (_this.previewFiles.length === 0) { //da gui het tat ca cac files
                                    _this.resizeInputTextArea(textAreaElement);
                                }
                                _this.socketService.sendMessage({
                                    fromUserID: data.newMessage.fromUserID,
                                    type: 'message',
                                    roomchatID: _this.roomchatID,
                                    messageID: data.newMessage._id,
                                    time: data.newMessage.time,
                                    profileImage: data.userInfo.profileImage.lowQuality,
                                    contentText: data.newMessage.content,
                                    contentFile: dataFile_1,
                                    fileType: data.file.fileType,
                                    fileName: data.file.originalName
                                });
                                _this.currentIndexPreviewFile = 0;
                                _this.sendCompCommunicationData(data, contentText, dataFile_1);
                                if (_this.usersInRoomchat) {
                                    for (var _i = 0, _a = _this.usersInRoomchat; _i < _a.length; _i++) {
                                        var userID = _a[_i];
                                        _this.socketService.emitNotification(_this.roomchatID, {
                                            type: 'incomming-message',
                                            fromUserInfo: _this.myInfo,
                                            detail: {
                                                typeContent: 'file',
                                                fromRoomchatID: _this.roomchatID
                                            },
                                            toUserID: userID,
                                            time: Date.now()
                                        });
                                        _this.notificationService.createNotifications(userID, {
                                            typeContent: 'file',
                                            typeNotification: 'incomming-message',
                                            fromRoomchatID: _this.roomchatID
                                        }, Date.now()).subscribe(function (data) { return data; });
                                    }
                                }
                            }
                        });
                    }
                });
            };
            var this_2 = this;
            for (var _i = 0, _a = this.previewFiles; _i < _a.length; _i++) {
                var filePreview = _a[_i];
                _loop_2(filePreview);
            }
        }
    };
    InputComponent.prototype.ngAfterContentChecked = function () {
    };
    InputComponent.prototype.resizeInputTextArea = function (textAreaElement) {
        textAreaElement.style.height = '29px';
        this.heightTextArea = document.getElementById('text-area-input').clientHeight;
        document.getElementById('text-area-input').style['overflowY'] = 'hidden';
        var conversationHeight = window.innerHeight - 192;
        document.getElementById('conversation-body').setAttribute('style', 'height: ' + conversationHeight + 'px');
    };
    InputComponent.prototype.sendCompCommunicationData = function (data, contentText, dataFile) {
        var fileType;
        var fileName;
        if (data.file === null) {
            console.log('log hre');
            fileType = '';
            fileName = '';
        }
        else {
            console.log('log hre^^^^^', data);
            fileType = data.file.fileType;
            fileName = data.file.originalName;
        }
        if (this.myInfo._id) {
            this.componentCommunicationService.setData({
                status: 'sent',
                fromComponent: 'input',
                messageID: data.newMessage._id,
                contentText: data.newMessage.content,
                username: this.myInfo.username,
                contentFile: dataFile,
                fileType: fileType,
                fileName: fileName
            });
            var arrangedRoomchat = {
                fromComponent: 'input',
                type: 'arrange-roomchat',
                lastUserID: this.myInfo._id,
                content: contentText,
                roomchatID: this.roomchatID,
                profileImage: this.myInfo.profileImage
            };
            this.componentCommunicationService.setData(arrangedRoomchat);
            this.socketService.emitArrangeRoomchats(arrangedRoomchat);
        }
    };
    InputComponent.prototype.emojModalConfig = function () {
        var emojEl = document.getElementById('emoj-modal');
        var inputComponentEl = document.getElementById('input-component');
        var offsetWidth = inputComponentEl.clientWidth - 5;
        var offsetHeight = inputComponentEl.clientHeight;
        console.log('bottom: ', emojEl.style.bottom);
        emojEl.style.bottom = offsetHeight + 'px';
        emojEl.style.width = offsetWidth + 'px';
    };
    InputComponent.prototype.onClickEmojType = function ($event) {
        var idEmojType = $event.target.id + '';
        for (var i = 1; i <= 10; i++) {
            var elType = document.getElementById('emoj-type-' + i);
            if (idEmojType === elType.id + '') {
                var elDetail = document.getElementById('emoj-detail-' + i);
                elDetail.style.display = 'block';
                elType.style.backgroundColor = '#e7e7e7';
                for (var j = 1; j <= 10; j++) {
                    var elDetailCheck = document.getElementById('emoj-detail-' + j);
                    var elTypeOther = document.getElementById('emoj-type-' + j);
                    if (i !== j) {
                        elTypeOther.style.backgroundColor = 'white';
                        elDetailCheck.style.display = 'none';
                    }
                }
            }
        }
    };
    InputComponent.prototype.onClickEmoj = function ($event) {
        var emojID = $event.target.id + '';
        var getEmojElement = document.getElementById(emojID);
        var emoj = '';
        if (getEmojElement) {
            emoj = getEmojElement.textContent;
        }
        var textAreaElement = document.getElementById('text-area-input');
        var newValue = textAreaElement.value + emoj;
        textAreaElement.value = newValue;
    };
    InputComponent.prototype.openEmojModal = function () {
        this.showEmojModal = true;
        this.cdR.detectChanges();
        this.emojModalConfig();
    };
    InputComponent.prototype.closeEmojModal = function ($event) {
        console.log('iddd: ', $event.target.id);
        if ($event.target.id + '' !== 'emoj-choose-icon' && $event.target.id + '' !== 'emoj-choose-div') {
            this.showEmojModal = false;
        }
    };
    InputComponent.prototype.deleteOneFilePreview = function (idPreviewFile) {
        if (!idPreviewFile)
            return;
        for (var i = 0; i < this.previewFiles.length; i++) {
            if (this.previewFiles[i].idPreviewFile + '' === idPreviewFile + '') {
                console.log('deleted: ', i);
                return this.previewFiles.splice(i, 1);
            }
        }
    };
    InputComponent.prototype.getParams = function () {
        var url = this.router.routerState.snapshot.url;
        var tempLength = url.split('/').length;
        return url.split('/')[tempLength - 1] + '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputComponent.prototype, "usersInRoomchat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputComponent.prototype, "onResize", null);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/components/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/components/input/input.component.css")]
        }),
        __metadata("design:paramtypes", [_services_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"],
            _services_component_communication_service__WEBPACK_IMPORTED_MODULE_2__["ComponentCommunicationService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/components/lastmessage/lastmessage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/lastmessage/lastmessage.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\r\n  width: 50px;\r\n  height: 60px;\r\n  float: left;\r\n}\r\n\r\n.message-body {\r\n  float: left;\r\n  height: 60px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  padding-left: 10px;\r\n  overflow: hidden; \r\n  text-overflow: ellipsis\r\n}\r\n\r\n.message-body-username {\r\n  text-align: left;\r\n  width:100%;\r\n  height: 30px;\r\n  float: left;\r\n  color: rgba(0, 0, 0, 1);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  line-height: 1.4;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis\r\n\r\n}\r\n\r\n.message-body-content {\r\n  text-align: left;\r\n  width:100%;\r\n  height: 30px;\r\n  float: left;\r\n  color: rgba(153, 153, 153, 1);\r\n  font-size: 13px;\r\n  font-weight: 400;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden; \r\n  /* text-overflow: ellipsis */ \r\n}\r\n\r\n.message-body-setting{\r\n  float: right;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.custom-modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 10;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  background-color: rgb(0, 0, 0);\r\n  /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /* Black w/ opacity */\r\n  /* overflow: auto; */\r\n}\r\n\r\n.custom-modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  margin-top: 5%;\r\n  border: 1px solid #888;\r\n  width: 35%;\r\n  height: 220px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-size: 17px;\r\n  font-weight: 500\r\n    /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.delete-message-modal-options {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n\r\n.unread-modal-options {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n\r\n.modal-options-body {\r\n  height: 150px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-options-body :hover {\r\n  background-color: #e7e7e7\r\n}\r\n\r\n.modal-options-content{\r\n  height: 70px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.delete-roomchat-modal-options{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n\r\n@media screen and (max-width:900px) {\r\n  #manage-roomchat-modal-0{\r\n    width: 100%\r\n  }\r\n  #confirm-delete-modal-0{\r\n    width: 100%\r\n  }\r\n  #manage-roomchat-modal-0{\r\n    width: 100%\r\n  }\r\n  #announce-success-delete-allmessage-0{\r\n    width: 100%\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/lastmessage/lastmessage.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/lastmessage/lastmessage.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='root' style=\"width:100%; height: 70px\">\n  <div id=\"last-message-comp\" style=\"padding:  10px; width: 100%; height:70px\">\n    <div id=\"profile-image\" class=\"profile-image\">\n      <img style=\"border-radius: 50%;width:100%; height:50px\" src={{profileImage}}>\n      <div *ngIf=\"isActive\" style=\"width:8px;height:8px;border:transparent;border-radius: 50%;background-color: springgreen;margin-right:5px\">\n\n      </div>\n      <div *ngIf=\"idle\" style=\"width:8px;height:8px;border:transparent;border-radius: 50%;background-color: red;margin-right:5px\">\n\n      </div>\n    </div>\n    <div #messagebody id=\"message-body\" class=\"message-body\" (click)=\"openConversation()\">\n      <div class=\"message-body-username\">\n        {{roomchatName}}\n      </div>\n      <div class=\"message-body-content\">\n        {{content}}\n      </div>\n    </div>\n    <div (click)=\"openManageRoomchat()\" id=\"message-body-setting\" class=\"message-body-setting\">\n      <i style=\"font-size: 20px\" class=\"fas fa-ellipsis-v\"></i>\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"showManageRoomchatModal\" id=\"manage-roomchat-modal\" class=\"custom-modal\">\n  <div id=\"manage-roomchat-modal-0\" class=\"custom-modal-content\" style=\"height: 270px;\">\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        Quản lý cuộc trò chuyện\n      </div>\n    </div>\n    <div class=\"modal-options-body\">\n      <div class=\"delete-message-modal-options\" (click)=\"showDeleteMessageModalFunc()\">\n        <div style=\"margin-top:15px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.28;font-size: 17px;font-weight: 500\">\n          Xóa tất cả tin nhắn\n        </div>\n      </div>\n      <div class=\"delete-roomchat-modal-options\" (click)=\"showDeleteRoomchatModalFunc()\">\n        <div style=\"margin-top:15px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.28;font-size: 17px;font-weight: 500;color:red\">\n          Xóa phòng chat\n        </div>\n      </div>\n      <div class=\"unread-modal-options\" (click)=\"markAsUnread()\">\n        <div style=\"margin-top:15px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.28;font-size: 17px;font-weight: 500\">\n          Đánh dấu là chưa đọc\n        </div>\n\n      </div>\n    </div>\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\n      <!-- <button type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\n        Lưu\n      </button> -->\n      <button (click)=\"onClickCancelManageRoomchatModal()\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;width:80px;height: 40px;margin:10px;margin-right:10px\">\n        Hủy\n      </button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showDeleteMessageModal\" id=\"confirm-delete-modal\" class=\"custom-modal\">\n  <div id=\"confirm-delete-modal-0\" class=\"custom-modal-content\" style=\"height: 190px\" id=\"confirm-delete-modal-0\">\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        Bạn chắc chắn muốn xóa ?\n      </div>\n    </div>\n    <div class=\"modal-options-content\">\n      <div style=\"font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.50;font-size: 17px;font-weight: 500;text-align: center;padding: 10px;margin-top:5px;display: flex;justify-content: center;align-items: center\">\n        <div>\n          Xóa tất cả tin nhắn trong phòng chat, tuy nhiên những người khác vẫn có thể thấy được.\n\n        </div>\n      </div>\n    </div>\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\n      <button (click)=\"deleteAllMessages()\" type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\n        OK\n      </button>\n      <button (click)=\"onClickCancelDeleteRoomchatModal()\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;width:80px;height: 40px;margin:10px;margin-right:10px\">\n        Hủy\n      </button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showDeleteRoomchatModal\" id=\"confirm-delete-modal\" class=\"custom-modal\">\n  <div id=\"confirm-delete-modal-0\" class=\"custom-modal-content\" style=\"height: 190px\">\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        Bạn chắc chắn muốn xóa ?\n      </div>\n    </div>\n    <div class=\"modal-options-content\">\n      <div style=\"font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.50;font-size: 17px;font-weight: 500;text-align: center;padding: 10px;display: flex;justify-content: center;align-items: center\">\n        <div>\n          Để xóa phòng chat này, bạn phải là người tạo phòng chat\n        </div>\n      </div>\n    </div>\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\n      <button (click)=\"deleteRoomchat()\" type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\n        OK\n      </button>\n      <button (click)=\"onClickCancelDeleteRoomchatModal()\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;width:80px;height: 40px;margin:10px;margin-right:10px\">\n        Hủy\n      </button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"announceModal.deleteAllMessages.show\" id=\"announce-success-delete-allmessage\" class=\"custom-modal\">\n  <div id=\"announce-success-delete-allmessage-0\" class=\"custom-modal-content\" style=\"height: 190px\">\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\n      <div *ngIf=\"announceModal.deleteAllMessages.ok\" style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        Xong\n      </div>\n      <div *ngIf=\"announceModal.deleteAllMessages.fail\" style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        Lỗi\n      </div>\n    </div>\n    <div class=\"modal-options-content\">\n      <div style=\"font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.50;font-size: 17px;font-weight: 500;text-align: center;padding: 10px;margin-top:5px;display: flex;justify-content: center;align-items: center\">\n        <div *ngIf=\"announceModal.deleteAllMessages.ok\">\n          Đã xóa thành công\n\n\n        </div>\n        <div *ngIf=\"announceModal.deleteAllMessages.fail\">\n          Có lỗi xảy ra\n\n        </div>\n      </div>\n    </div>\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\n      <button (click)=\"onClickCancelDeleteRoomchatModal()\" type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\n        OK\n      </button>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"announceModal.deleteRoomchat.show\" id=\"announce-success-delete-roomchat\" class=\"custom-modal\">\n  <div class=\"custom-modal-content\" style=\"height: 190px\">\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\n      <div *ngIf=\"announceModal.deleteRoomchat.ok\" style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        Xong\n      </div>\n      <div *ngIf=\"announceModal.deleteRoomchat.fail\" style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        Lỗi\n      </div>\n    </div>\n    <div class=\"modal-options-content\">\n      <div style=\"font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.50;font-size: 17px;font-weight: 500;text-align: center;padding: 10px;margin-top:5px;display: flex;justify-content: center;align-items: center\">\n        <div *ngIf=\"announceModal.deleteRoomchat.ok\">\n          Đã xóa thành công\n\n        </div>\n        <div *ngIf=\"announceModal.deleteRoomchat.fail\">\n          Bạn không thể xóa cuộc trò chuyện này\n\n        </div>\n      </div>\n    </div>\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\n      <button (click)=\"onClickCancelDeleteRoomchatModal()\" type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\n        OK\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/lastmessage/lastmessage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/lastmessage/lastmessage.component.ts ***!
  \*****************************************************************/
/*! exports provided: LastmessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastmessageComponent", function() { return LastmessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_roomchat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/roomchat.service */ "./src/app/services/roomchat.service.ts");
/* harmony import */ var _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/roomchat-user.service */ "./src/app/services/roomchat-user.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LastmessageComponent = /** @class */ (function () {
    function LastmessageComponent(componentCommunicationService, router, roomchatService, roomchatUserService, messageService, cdRef) {
        this.componentCommunicationService = componentCommunicationService;
        this.router = router;
        this.roomchatService = roomchatService;
        this.roomchatUserService = roomchatUserService;
        this.messageService = messageService;
        this.cdRef = cdRef;
        this.isActive = false;
        this.showManageRoomchatModal = false;
        this.showDeleteRoomchatModal = false;
        this.showDeleteMessageModal = false;
        this.announceModal = {
            deleteAllMessages: {
                show: false,
                ok: false,
                fail: false
            },
            deleteRoomchat: {
                show: false,
                ok: false,
                fail: false
            }
        };
    }
    LastmessageComponent.prototype.onResize = function (event) {
        if (!document.getElementById('last-message-comp'))
            return;
        var lastMessageComp = document.getElementById('last-message-comp').clientWidth;
        var lastMessageProfileImage = document.getElementById('profile-image').clientWidth;
        var lastMessageSetting = document.getElementById('message-body-setting').clientWidth;
        var temp = lastMessageComp - (lastMessageProfileImage + lastMessageSetting + 40);
        this.input.nativeElement.style.width = temp + 'px';
    };
    LastmessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (document.getElementById('last-message-comp')) {
            var lastMessageComp = document.getElementById('last-message-comp').clientWidth;
            var lastMessageProfileImage = document.getElementById('profile-image').clientWidth;
            var lastMessageSetting = document.getElementById('message-body-setting').clientWidth;
            var temp = lastMessageComp - (lastMessageProfileImage + lastMessageSetting + 40);
            this.input.nativeElement.style.width = temp + 'px';
        }
        setInterval(function () {
            if (Math.abs(_this.timeActive - Date.now()) < 5000) {
                _this.isActive = true;
            }
            else {
                if (!_this.idle) {
                    _this.isActive = false;
                }
            }
            if (_this.idle) {
                _this.isActive = false;
            }
        }, 1000);
    };
    LastmessageComponent.prototype.openManageRoomchat = function () {
        this.showManageRoomchatModal = true;
        this.cdRef.detectChanges();
        var w = window.innerWidth;
        if (w < 900) {
            document.getElementById('manage-roomchat-modal-0').style.width = '100%';
        }
        else {
            document.getElementById('manage-roomchat-modal-0').style.width = '35%';
        }
    };
    LastmessageComponent.prototype.onClickCancelManageRoomchatModal = function () {
        this.showManageRoomchatModal = false;
    };
    LastmessageComponent.prototype.onClickCancelDeleteRoomchatModal = function () {
        this.showDeleteRoomchatModal = false;
        this.showDeleteMessageModal = false;
        this.announceModal.deleteAllMessages.show = false;
        this.announceModal.deleteAllMessages.ok = false;
        this.announceModal.deleteAllMessages.fail = false;
        this.announceModal.deleteRoomchat.show = false;
        this.announceModal.deleteRoomchat.ok = false;
        this.announceModal.deleteRoomchat.fail = false;
    };
    LastmessageComponent.prototype.openConversation = function () {
        this.componentCommunicationService.setData({
            fromComponent: 'last-message',
            toComponent: 'roomchat',
            type: 'on-click-lastmessage',
            roomchatID: this.roomchatID
        });
        var w = window.innerWidth;
        if (w < 900) {
            this.router.navigate(['/conversation', this.roomchatID]);
        }
        else {
            this.router.navigate(['/home/conversation', this.roomchatID]);
        }
    };
    LastmessageComponent.prototype.showDeleteMessageModalFunc = function () {
        this.showManageRoomchatModal = false;
        this.showDeleteMessageModal = true;
        this.cdRef.detectChanges();
        var w = window.innerWidth;
        if (w < 900) {
            document.getElementById('confirm-delete-modal-0').style.width = '100%';
        }
        else {
            document.getElementById('confirm-delete-modal-0').style.width = '35%';
        }
    };
    LastmessageComponent.prototype.showDeleteRoomchatModalFunc = function () {
        this.showManageRoomchatModal = false;
        this.showDeleteRoomchatModal = true;
        this.cdRef.detectChanges();
        var w = window.innerWidth;
        if (w < 900) {
            document.getElementById('confirm-delete-modal-0').style.width = '100%';
        }
        else {
            document.getElementById('confirm-delete-modal-0').style.width = '35%';
        }
    };
    LastmessageComponent.prototype.deleteAllMessages = function () {
        var _this = this;
        this.messageService.updateMessages(this.roomchatID).subscribe(function (data) {
            if (data && data.success) {
                _this.showDeleteMessageModal = false;
                _this.announceModal.deleteAllMessages.show = true;
                _this.announceModal.deleteAllMessages.ok = true;
                _this.componentCommunicationService.setData({
                    fromComponent: 'last-message',
                    toComponent: 'conversation',
                    type: 'delete-all-messages',
                    roomchatID: _this.roomchatID
                });
            }
            else {
                _this.showDeleteMessageModal = false;
                _this.announceModal.deleteAllMessages.show = true;
                _this.announceModal.deleteAllMessages.fail = true;
            }
        });
    };
    LastmessageComponent.prototype.deleteRoomchat = function () {
        var _this = this;
        this.roomchatService.deleteRoomchat(this.roomchatID).subscribe(function (data) {
            if (data && data.success) {
                _this.showDeleteRoomchatModal = false;
                _this.announceModal.deleteRoomchat.show = true;
                _this.cdRef.detectChanges();
                _this.announceModal.deleteRoomchat.ok = true;
                _this.componentCommunicationService.setData({
                    fromComponent: 'last-message',
                    toComponent: 'roomchat',
                    type: 'delete-roomchat',
                    roomchatID: _this.roomchatID
                });
                _this.router.navigate(['/home']);
            }
            else {
                console.log(data);
                _this.showDeleteRoomchatModal = false;
                console.log('fail');
                _this.announceModal.deleteRoomchat.show = true;
                _this.announceModal.deleteRoomchat.fail = true;
            }
        });
    };
    LastmessageComponent.prototype.markAsUnread = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LastmessageComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LastmessageComponent.prototype, "profileImage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LastmessageComponent.prototype, "roomchatName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], LastmessageComponent.prototype, "timeActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LastmessageComponent.prototype, "idle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LastmessageComponent.prototype, "reactive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LastmessageComponent.prototype, "roomchatID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LastmessageComponent.prototype, "myID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messagebody'),
        __metadata("design:type", Object)
    ], LastmessageComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LastmessageComponent.prototype, "onResize", null);
    LastmessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lastmessage',
            template: __webpack_require__(/*! ./lastmessage.component.html */ "./src/app/components/lastmessage/lastmessage.component.html"),
            styles: [__webpack_require__(/*! ./lastmessage.component.css */ "./src/app/components/lastmessage/lastmessage.component.css")]
        }),
        __metadata("design:paramtypes", [_services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__["ComponentCommunicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_roomchat_service__WEBPACK_IMPORTED_MODULE_3__["RoomchatService"],
            _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_4__["RoomchatUserService"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], LastmessageComponent);
    return LastmessageComponent;
}());



/***/ }),

/***/ "./src/app/components/message/message.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/message/message.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-message-content {\r\n  float: right;\r\n  max-width: 50%;\r\n  border: solid transparent;\r\n  background-color: #0084ff;\r\n  border-radius: 14px;\r\n  height: 100%;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif\r\n}\r\n\r\n.my-message-profileimage {\r\n  float: right;\r\n  width: 10px;\r\n  height: 50px;\r\n}\r\n\r\n.other-message-content {\r\n  float: left;\r\n  max-width: 50%;\r\n  border: solid transparent;\r\n  background-color: #f1f0f0;\r\n  border-radius: 14px;\r\n  height: 100%;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif\r\n}\r\n\r\n.other-message-profileimage {\r\n  float: left;\r\n  width: 40px;\r\n  height: 50px;\r\n}\r\n\r\n.username-message {\r\n  border: none;\r\n  background-color: transparent;\r\n  border-radius: 0px;\r\n  width: 100%;\r\n  float: left;\r\n  height: 20px;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-size: 13px;\r\n  color: rgba(0, 0, 0, .40)\r\n}\r\n\r\n.message-options {\r\n  float: right;\r\n  width: 40px;\r\n  height: 30px;\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n#my-message:hover .message-options{\r\n  display: block\r\n}\r\n\r\n.custom-modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 10;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  background-color: rgb(0, 0, 0);\r\n  /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /* Black w/ opacity */\r\n  /* overflow: auto; */\r\n}\r\n\r\n.custom-modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  margin-top: 5%;\r\n  border: 1px solid #888;\r\n  width: 35%;\r\n  height: 220px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-size: 17px;\r\n  font-weight: 500\r\n    /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.delete-message-locally {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n\r\n.unread-modal-options {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n\r\n.modal-options-body {\r\n  height: 100px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-options-body :hover {\r\n  background-color: #e7e7e7\r\n}\r\n\r\n.modal-options-content{\r\n  height: 70px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n\r\n.delete-message-permanently{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  height: 50px;\r\n  width: 100%\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/message/message.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/message/message.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isMe()\" id=\"my-message\" style=\"width:100%;margin-top: 5px\">\n  <div class=\"my-message-profileimage\">\n\n  </div>\n  <div *ngIf=\"message.fileType === 'application'\" class=\"my-message-content\">\n    <div style=\"margin-left: 10px;margin-right:8px;width: 100%;height:100%\">\n      <a href={{message.attach}} style=\"color:white\" target=\"_blank\">\n        <div style=\"width:15%;height:30px;float:left;display: flex;justify-content: center;align-items: center\">\n          <i class=\"fas fa-arrow-circle-down\" style=\"font-size:20px\"></i>\n        </div>\n        <div style=\"overflow: hidden;text-overflow: ellipsis;height:22px;line-height: 1.4;font-size:15px;width:85%;height:30px;float:left;display: flex;justify-content: center;align-items: center;overflow: hidden;text-overflow: ellipsis\">\n          <div style=\"overflow: hidden;text-overflow: ellipsis;height:20px;\">\n            {{message.fileName}}\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div *ngIf=\"message.content !== '' && message.fileType === ''\" class=\"my-message-content\">\n    <div style=\"padding: 10px;font-size: 15px; color: white;word-wrap: break-word;line-height: 1.28\">\n      {{message.content}}\n    </div>\n  </div>\n  <div *ngIf=\"message.fileType === 'image'\" class=\"my-message-content\" style=\"background-color: transparent\">\n    <div *ngIf=\"message.content !== ''\" class=\"my-message-content\" style=\"padding: 10px;font-size: 15px; color: white;word-wrap: break-word;line-height: 1.28;margin-bottom: 5px\">\n      {{message.content}}\n    </div>\n    <div style=\"margin-top:5px;width: 100%;height:100%\">\n      <img src={{message.attach}} style=\"width:100%;height:100%;border-radius: 14px\">\n    </div>\n  </div>\n  <div class=\"message-options\" (click)=\"openMessageOptions()\">\n    <i class=\"fas fa-ellipsis-h\" style=\"font-size: 30px\"></i>\n  </div>\n\n</div>\n\n<div *ngIf=\"!isMe()\" id=\"other-message\" style=\"width:100%;margin-top: 5px\">\n  <div class=\"other-message-profileimage\">\n    <img *ngIf=\"displayLastInfo()\" #profileImageMessage src={{message.profileImage}} style=\"border-radius: 50%;width:70%; height:28px;margin-top: 15px;margin-left: 5px;\">\n  </div>\n  <div style=\"margin-left:45px\">\n    <!-- <div style=\"border:none;background-color: transparent;border-radius: 0px;width:100%;float: left;height:20px\">\n      {{message.username}}\n    </div> -->\n    <div class=\"other-message-content\" *ngIf=\"message.content !== ''\">\n      <div style=\"padding: 10px;font-size: 15px; color: black;word-wrap: break-word;line-height: 1.28\">\n        {{message.content}}\n      </div>\n    </div>\n\n    <div *ngIf=\"message.fileType === 'image'\" style=\"width: 100%;height:100%;background-color: transparent;max-width: 50%;\">\n      <img src={{message.attach}} style=\"width:100%;height:100%;border-radius: 14px;margin-top:5px\">\n    </div>\n    <div class=\"other-message-content\" *ngIf=\"message.fileType === 'application'\" style=\"margin-left: 10px;margin-right:8px;width: 100%;height:100%\">\n      <a href={{message.attach}} style=\"color:black\" target=\"_blank\">\n        <div style=\"width:15%;height:30px;float:left;display: flex;justify-content: center;align-items: center\">\n          <i class=\"fas fa-arrow-circle-down\" style=\"font-size:20px\"></i>\n        </div>\n        <div style=\"font-size:15px;width:85%;height:30px;float:left;display: flex;justify-content: center;align-items: center;overflow: hidden;text-overflow: ellipsis\">\n          <div>\n            report.rar\n          </div>\n        </div>\n      </a>\n    </div>\n    <div *ngIf=\"displayLastInfo()\" class=\"username-message\">\n      Gửi từ @{{message.username}}\n    </div>\n  </div>\n</div>\n\n\n<div *ngIf=\"openMessageOptionModal\" class=\"custom-modal\">\n  <div id=\"custom-modal-content-open-message-options\" class=\"custom-modal-content\">\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\n        Quản lý tin nhắn\n      </div>\n    </div>\n    <div class=\"modal-options-body\">\n      <div class=\"delete-message-locally\" (click)=\"deleteMessageLocally()\">\n        <div style=\"margin-top:15px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.28;font-size: 17px;font-weight: 500\">\n          Xóa tin nhắn được lưu trữ trong hộp thư\n        </div>\n      </div>\n      <div class=\"delete-message-permanently\" (click)=\"deleteMessagePermanently()\">\n        <div style=\"margin-top:15px;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\n        line-height: 1.28;font-size: 17px;font-weight: 500;color:red\">\n          Xóa vĩnh viễn tin nhắn \n        </div>\n      </div>\n    </div>\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\n      <!-- <button type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\n        Lưu\n      </button> -->\n      <button (click)=\"closeMessageOptions()\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;width:80px;height: 40px;margin:10px;margin-right:10px\">\n        Hủy\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/message/message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/message/message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(componentCommunicationService, cdRef, messageService) {
        this.componentCommunicationService = componentCommunicationService;
        this.cdRef = cdRef;
        this.messageService = messageService;
        this.openMessageOptionModal = false;
    }
    MessageComponent.prototype.ngOnInit = function () {
        console.log('boolean: ', this.message.displayLastInfo);
    };
    MessageComponent.prototype.ngOnDestroy = function () {
    };
    MessageComponent.prototype.ngAfterViewInit = function () {
        // if(this.lastMessageID + '' === this.message._id + '' && (this.myID !== this.message.userID) && this.message.userID === this.lastUserID){
        //   this.profileImageMessage.nativeElement.style.display = 'block';
        //   this.usernameMessage.nativeElement.style.display = 'block';
        // }
    };
    MessageComponent.prototype.ngAfterContentChecked = function () {
        // if(this.message._id + '' === this.previousLastMessageID + '' && this.message.userID === this.previousUserID){
        //   if(this.profileImageMessage && this.usernameMessage){
        //     this.profileImageMessage.nativeElement.style.display = 'none';
        //     this.usernameMessage.nativeElement.style.display = 'none';
        //   }
        // }
    };
    MessageComponent.prototype.isMe = function () {
        return this.myID === this.message.userID + '';
    };
    MessageComponent.prototype.displayLastInfo = function () {
        return this.message.displayLastInfo;
    };
    MessageComponent.prototype.openMessageOptions = function () {
        this.openMessageOptionModal = true;
        this.cdRef.detectChanges();
        var w = window.innerWidth;
        if (w < 900) {
            document.getElementById('custom-modal-content-open-message-options').style.width = '100%';
        }
        else {
            document.getElementById('custom-modal-content-open-message-options').style.width = '35%';
        }
    };
    MessageComponent.prototype.deleteMessageLocally = function () {
        var _this = this;
        this.messageService.updateOneMessage(this.message._id).subscribe(function (data) {
            if (data && data.success) {
                _this.componentCommunicationService.setData({
                    fromComponent: 'message',
                    toComponent: 'conversation',
                    type: 'delete-one-message',
                    messageID: _this.message._id
                });
                _this.closeMessageOptions();
            }
        });
    };
    MessageComponent.prototype.deleteMessagePermanently = function () {
        var _this = this;
        this.messageService.deleteOneMessage(this.message._id).subscribe(function (data) {
            console.log('delete vinh vien; ', data);
            if (data && data.success) {
                _this.componentCommunicationService.setData({
                    fromComponent: 'message',
                    toComponent: 'conversation',
                    type: 'delete-one-message',
                    messageID: _this.message._id
                });
                _this.closeMessageOptions();
            }
        });
    };
    MessageComponent.prototype.closeMessageOptions = function () {
        this.openMessageOptionModal = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "lastMessageID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "lastUserID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "previousLastMessageID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "previousUserID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "myID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "roomchatID", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('profileImageMessage'),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "profileImageMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('usernameMessage'),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "usernameMessage", void 0);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/components/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/components/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__["ComponentCommunicationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-search {\r\n  position: absolute;\r\n  /* margin-top: 15px; */\r\n  left: 30%;\r\n  width: 280px;\r\n}\r\n\r\n.navbar-search-results {\r\n  position: relative;\r\n  background-color: white;\r\n  box-shadow: 0 0 10px #9ecaed;\r\n  border-top: none;\r\n  height: auto;\r\n  /* z-index: -1; */\r\n}\r\n\r\n.navbar-search-results-each {\r\n  height: 40px;\r\n  cursor: pointer;\r\n}\r\n\r\n.navbar-search-results-each:hover {\r\n  background-color: #f8f8f8;\r\n}\r\n\r\n.navbar-custom-brand {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100px;\r\n  margin-top: -31px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.navbar-icon {\r\n  position: absolute;\r\n  right: 0px;\r\n  width: 272px;\r\n  height: 36px;\r\n}\r\n\r\n.navbar-custom-image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.navbar-custom {\r\n  position: relative;\r\n  /* margin: 18px; */\r\n  margin-top: 18px;\r\n  padding: 0px;\r\n  height: 36px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .navbar-search {\r\n    display: none\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 350px) {\r\n  .navbar-custom-brand {\r\n    display: none\r\n  }\r\n}\r\n\r\n.notification {\r\n  position: absolute;\r\n  height: 300px;\r\n  width: 560px;\r\n  z-index: 10000;\r\n  right: 20px;\r\n  box-shadow: 0 0 10px #9ecaed;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.notification-body {\r\n  width: 560px;\r\n  height: 300px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.notification-profilephoto {\r\n  width: 15%;\r\n  float: left;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n.notification-content {\r\n  width: 85%;\r\n  height: 50px;\r\n  float: left;\r\n  /* display: flex;\r\n    align-items: center; */\r\n  border-bottom: 1px solid #fafafa\r\n}\r\n\r\n.notification-body-each {\r\n  height: 50px;\r\n  width: 100%;\r\n}\r\n\r\n.notification-body-each:hover {\r\n  background-color: #D0F9F7\r\n}\r\n\r\n.loader-notification {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n\r\n.notification-body::-webkit-scrollbar-thumb {\r\n  border-radius: 13px;\r\n  width: 9px;\r\n  background-color: #79879b;\r\n}\r\n\r\n.notification-body::-webkit-scrollbar {\r\n  width: 9px;\r\n  border-radius: 13px;\r\n  /* height: 8px; */\r\n  background-color: #eff1f4;\r\n  /* or add it to the track */\r\n  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n      border-radius: 10px;\r\n      background-color: #F5F5F5;\r\n      width: 12px;\r\n      background-color: #F5F5F5;\r\n      height:100%; */\r\n}\r\n\r\n.custom-modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 10;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  background-color: rgb(0, 0, 0);\r\n  /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /* Black w/ opacity */\r\n  /* overflow: auto; */\r\n}\r\n\r\n.custom-modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  margin-top: 5%;\r\n  border: 1px solid #888;\r\n  width: 35%;\r\n  height: 220px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-size: 17px;\r\n  font-weight: 500\r\n    /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.modal-options-content{\r\n  height: 70px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf='showNavbarComp' id=\"navbar-component\" class=\"navbar navbar-default navbar-fixed-top\" style=\"height:75px;padding:0px;margin:0px;z-index:0\">\r\n  <div class=\"container navbar-custom\">\r\n    <div class=\"navbar-custom-brand\">\r\n      <img href=\"#\" src=\"../../assets/logo.png\" class=\"navbar-custom-image\">\r\n    </div>\r\n    <div *ngIf=\"authService.loggedIn()\" class=\"navbar-icon\">\r\n      <div (click)=\"openNotificationModal()\" style=\"float:left;width:68px;height:36px;display: flex;align-items: center;justify-content: center;cursor: pointer;\">\r\n        <a>\r\n          <i id=\"notification-icon\" class=\"fas fa-globe-africa\" style=\"font-size:170%;margin-top:6px\"></i>\r\n        </a>\r\n        <div id=\"count-notification-icon\" style=\"background-color:red;font-weight: 600;font-size: 12px;color: white;border-radius: 7px;margin-top: -13px;margin-left: -6px\">\r\n          {{numberOfUnreadNotifications}}\r\n        </div>\r\n      </div>\r\n      <div style=\"float:left;width:68px;height:36px;display: flex;align-items: center;justify-content: center;cursor: pointer;\">\r\n        <a (click)=\"onClickNavigateToHome()\">\r\n          <i class=\"fas fa-home\" style=\"font-size:170%;margin-top:6px\"></i>\r\n        </a>\r\n      </div>\r\n      <div style=\"float:left;width:68px;height:36px;display: flex;align-items: center;justify-content: center;cursor: pointer;\">\r\n        <a routerLink=\"/contacts\" routerLinkActive=\"active\">\r\n          <i class=\"fas fa-users\" style=\"font-size:185%;margin-top:6px\"></i>\r\n        </a>\r\n      </div>\r\n\r\n      <div style=\"float:left;width:68px;height:36px;display: flex;align-items: center;justify-content: center;cursor:pointer\">\r\n        <a routerLink=\"/profile\" routerLinkActive=\"active\">\r\n          <i class=\"fas fa-user-circle\" style=\"font-size:170%;margin-top:6px\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</nav>\r\n<!-- <div class=\"container\" style=\"position:relative;cursor:pointer;\" *ngIf=\"openNotification\" (clickOutside)=\"closeNotification($event)\">\r\n  <div class=\"notification\" style=\"margin-top:84px\">\r\n    <div class=\"notification-body\" id='notification-body' (scroll)=\"onScrolNotificationPopover()\">\r\n      <div *ngFor=\"let notification of notifications\" (click)=\"onClickNotification(notification)\" class=\"notification-body-each\">\r\n        <div class=\"notification-profilephoto\">\r\n          <img src={{notification.fromUser.profileImage}} style=\"width:40px;border-radius: 50%\">\r\n        </div>\r\n        <div class=\"notification-content\" [style.font-weight]=\"notification.isSeen ? '' : '600'\">\r\n          {{notification.content}}\r\n        </div>\r\n      </div>\r\n      <div *ngIf='!loadNotificationComplete' id='loader-notification' class=\"loader-notification\">\r\n        <img style=\"height:25px\" src='../../../assets/loader-notification.gif'>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<div (clickOutside)=\"closeNotificationPopover($event)\" class=\"container\" style=\"position:relative;cursor:pointer;\"\r\n  *ngIf=\"openNotification\" (clickOutside)=\"closeNotification($event)\">\r\n  <div class=\"notification\" style=\"margin-top:84px\">\r\n    <div class=\"notification-body\" id='notification-body' (scroll)=\"onScrolNotificationPopover()\">\r\n      <div *ngFor=\"let notification of notifications\" (click)=\"onClickNotification(notification)\" class=\"notification-body-each\">\r\n        <div class=\"notification-profilephoto\">\r\n          <img src={{notification.profileImage}} style=\"width:40px;border-radius: 50%\">\r\n        </div>\r\n        <div class=\"notification-content\">\r\n          <div style=\"width:100%;height:25px;font-weight: 600\">\r\n            @{{notification.username}}\r\n          </div>\r\n          <div style=\"width:100%;height:25px\">\r\n            <div *ngIf=\"notification.type === 'incomming-message'\" style=\"font-weight: 400;text-overflow: ellipsis;overflow: hidden;white-space: nowrap\">\r\n              <div [style.font-weight]=\"notification.seen ? '' : '600'\">\r\n                Tin nhắn mới: {{notification.content}}\r\n              </div>\r\n\r\n            </div>\r\n            <div *ngIf=\"notification.type === 'friend-request'\" style=\"font-weight: 400;text-overflow: ellipsis;overflow: hidden;white-space: nowrap\">\r\n              <div [style.font-weight]=\"notification.seen ? '' : '600'\">\r\n                Lời mời kết bạn: {{notification.content}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf='loadingNotifications' id='loader-notification' class=\"loader-notification\">\r\n        <img style=\"height:25px\" src='../../../assets/loading.gif'>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"showAcceptFriendModal\" id=\"accept-friend-modal\" class=\"custom-modal\">\r\n  <div class=\"custom-modal-content\" style=\"height: 130px\">\r\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\r\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\r\n        Lời mời kết bạn từ @{{friendRequestInfo.fromUserUsername}}\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-options-content\">\r\n      <div style=\"width:100%;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n        line-height: 1.50;font-size: 17px;font-weight: 500;text-align: center;padding: 10px;display: flex;justify-content: center;align-items: center\">\r\n        <div style=\"width:50%;height:100%;float: left;display: flex;justify-content: center;align-items: center\">\r\n          <button (click)=\"acceptFriend()\" class=\"btn btn-primary\">Chấp nhận</button>\r\n        </div>\r\n        <div (click)=\"closeConfirmAcceptFriend()\" style=\"width:50%;height:100%;float: left;display: flex;justify-content: center;align-items: center\">\r\n          <button class=\"btn btn-danger\">Bỏ qua</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\r\n      <button (click)=\"deleteRoomchat()\" type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\r\n        OK\r\n      </button>\r\n      <button (click)=\"onClickCancelDeleteRoomchatModal()\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;width:80px;height: 40px;margin:10px;margin-right:10px\">\r\n        Hủy\r\n      </button>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_friend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/friend.service */ "./src/app/services/friend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(componentCommunicationService, cdRef, router, authService, friendService, notificationService) {
        this.componentCommunicationService = componentCommunicationService;
        this.cdRef = cdRef;
        this.router = router;
        this.authService = authService;
        this.friendService = friendService;
        this.notificationService = notificationService;
        this.notifications = [];
        this.numberOfUnreadNotifications = 0;
        this.showNavbarComp = true;
        this.openNotification = false;
        this.loadNotificationComplete = true;
        this.continueToLoad = true;
        this.previousTimeSeq = 0;
        this.loadingNotifications = false;
        this.roomchatNotifications = [];
        this.showAcceptFriendModal = false;
        this.friendRequestInfo = {
            fromUserID: '',
            fromUserUsername: '',
            destUserID: ''
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getTokenStatus().subscribe(function (data) {
            if (data) {
                if (data.isAdded) {
                    _this.notificationService.getNumberOfUnreadNotifications().subscribe(function (data) {
                        if (data && data.success) {
                            _this.numberOfUnreadNotifications = data.numberOfUnreadNotifications;
                        }
                    });
                }
            }
        });
        this.componentCommunicationService.getData().subscribe(function (data) {
            if (data && data.fromComponent === 'answer' && data.type === 'hide-navbar') {
                _this.showNavbarComp = false;
            }
            else if (data && data.fromComponent === 'app' && data.type === 'receive-notification') {
                var notification = _this.processNotificationObject(data.notification);
                if (!_this.roomchatNotifications.includes(notification.fromRoomchatID)) {
                    _this.notifications.unshift(notification);
                    _this.numberOfUnreadNotifications++;
                }
            }
            else if (data && data.fromComponent === 'info-conversation' && data.type === 'turn-off-notification') {
                _this.roomchatNotifications.push(data.roomchatID);
                console.log('LOG-off: ', _this.roomchatNotifications);
            }
            else if (data && data.fromComponent === 'info-conversation' && data.type === 'turn-on-notification') {
                for (var i = 0; i < _this.roomchatNotifications.length; i++) {
                    if (_this.roomchatNotifications[i] === data.roomchatID) {
                        _this.roomchatNotifications.splice(i, 1);
                        break;
                    }
                }
            }
            else if (data && data.fromComponent === 'app' && data.type === 'friend-request') {
                var preNotification = {
                    detail: {},
                    fromUserInfo: data.data.fromUserInfo,
                    toUserID: data.data.destUserID,
                    time: 0,
                    seen: false,
                    type: 'friend-request'
                };
                var finalNotification = _this.processNotificationObject(preNotification);
                _this.notifications.unshift(finalNotification);
                _this.numberOfUnreadNotifications++;
            }
        });
    };
    NavbarComponent.prototype.closeNotification = function ($event) {
    };
    NavbarComponent.prototype.openNotificationModal = function () {
        var _this = this;
        this.openNotification = true;
        this.cdRef.detectChanges();
        this.loadingNotifications = true;
        if (!this.authService.loggedIn())
            return;
        this.previousTimeSeq = Date.now() + 100000;
        this.notifications = [];
        this.notificationService.getNotifications(this.previousTimeSeq, 10).subscribe(function (data) {
            if (data && data.success) {
                _this.loadingNotifications = false;
                if (data.notifications.length === 0)
                    return;
                for (var _i = 0, _a = data.notifications; _i < _a.length; _i++) {
                    var notificationObj = _a[_i];
                    var preNotification = {
                        detail: notificationObj.notification.detail,
                        fromUserInfo: notificationObj.fromUserInfo,
                        toUserID: notificationObj.notification.toUserID,
                        time: notificationObj.notification.time,
                        seen: notificationObj.notification.seen,
                        type: notificationObj.notification.detail.typeNotification
                    };
                    preNotification.fromUserInfo.profileImage = preNotification.fromUserInfo.profileImage.lowQuality;
                    var finalNotification = _this.processNotificationObject(preNotification);
                    _this.notifications.push(finalNotification);
                }
                _this.numberOfUnreadNotifications = _this.notifications.filter(function (el) { return !el.seen; }).length;
                _this.previousTimeSeq = _this.notifications[_this.notifications.length - 1].time;
            }
        });
    };
    NavbarComponent.prototype.onClickNotification = function (notification) {
        var typeNotification = notification.type;
        var fromRoomchatID = notification.fromRoomchatID;
        this.openNotification = false;
        if (typeNotification === 'incomming-message') {
            if (this.getCurrentDevice() === 'desktop') {
                this.componentCommunicationService.setData({
                    fromComponent: 'navbar',
                    toComponent: 'roomchat',
                    type: 'on-click-lastmessage',
                    roomchatID: notification.fromRoomchatID
                });
                return this.router.navigate(['home/conversation', fromRoomchatID]);
            }
            else if (this.getCurrentDevice() === 'mobile') {
                console.log('mobile');
                return this.router.navigate(['conversation', fromRoomchatID]);
            }
        }
        else if (typeNotification === 'friend-request') {
            this.friendRequestInfo = {
                fromUserID: notification.fromUserID,
                fromUserUsername: notification.username,
                destUserID: notification.toUserID
            };
            this.showAcceptFriendModal = true;
        }
    };
    NavbarComponent.prototype.onClickNavigateToHome = function () {
        return this.router.navigate(["home"]);
    };
    NavbarComponent.prototype.processNotificationObject = function (notificationObject) {
        var typeNotification = notificationObject.type;
        var fromUserInfo = notificationObject.fromUserInfo;
        var toUserID = notificationObject.toUserID;
        var time = notificationObject.time;
        var detail = notificationObject.detail;
        if (typeNotification === 'incomming-message') {
            var content = '';
            if (detail && detail !== {} && detail.typeContent === 'text') {
                content = detail.content;
            }
            else if (detail && detail !== {} && detail.typeContent === 'file') {
                content = fromUserInfo.username + ' đã gửi ảnh cho bạn';
            }
            return {
                content: content,
                username: fromUserInfo.username,
                fromUserID: fromUserInfo._id,
                type: 'incomming-message',
                fromRoomchatID: detail.fromRoomchatID,
                time: time,
                seen: notificationObject.seen,
                toUserID: toUserID,
                profileImage: fromUserInfo.profileImage
            };
        }
        else if (typeNotification === 'friend-request') {
            return {
                content: '@' + fromUserInfo.username + ' vừa gửi lời mới kết bạn, ấn để xem',
                type: 'friend-request',
                username: fromUserInfo.username,
                fromUserID: fromUserInfo._id,
                profileImage: fromUserInfo.profileImage,
                time: time,
                toUserID: toUserID,
                seen: notificationObject.seen
            };
        }
    };
    NavbarComponent.prototype.onScrolNotificationPopover = function () {
        var _this = this;
        var scrollTop = document.getElementById('notification-body').scrollTop;
        var scrollHeight = document.getElementById('notification-body').scrollHeight;
        var clientHeight = document.getElementById('notification-body').clientHeight;
        if (scrollHeight - 10 < clientHeight + scrollTop &&
            this.continueToLoad) {
            this.continueToLoad = false;
            this.loadingNotifications = true;
            this.cdRef.detectChanges();
            this.notificationService.getNotifications(this.previousTimeSeq, 10).subscribe(function (data) {
                if (data && data.success) {
                    _this.loadingNotifications = false;
                    _this.continueToLoad = true;
                    _this.numberOfUnreadNotifications = data.numberOfUnreadNotifications;
                    if (data.notifications.length === 0) {
                        _this.continueToLoad = false;
                        _this.loadingNotifications = false;
                        return;
                    }
                    for (var _i = 0, _a = data.notifications; _i < _a.length; _i++) {
                        var notificationObj = _a[_i];
                        var preNotification = {
                            detail: notificationObj.notification.detail,
                            fromUserInfo: notificationObj.fromUserInfo,
                            toUserID: notificationObj.notification.toUserID,
                            time: notificationObj.notification.time,
                            seen: notificationObj.notification.seen,
                            type: notificationObj.notification.detail.typeNotification
                        };
                        preNotification.fromUserInfo.profileImage = preNotification.fromUserInfo.profileImage.lowQuality;
                        var finalNotification = _this.processNotificationObject(preNotification);
                        _this.notifications.push(finalNotification);
                    }
                    _this.previousTimeSeq = _this.notifications[_this.notifications.length - 1].time;
                }
            });
        }
    };
    NavbarComponent.prototype.acceptFriend = function () {
        var _this = this;
        return this.friendService.acceptFriend(this.friendRequestInfo.fromUserID).subscribe(function (data) {
            if (data && data.success) {
                _this.showAcceptFriendModal = false;
                return alert("Accepted @" + _this.friendRequestInfo.fromUserUsername + "'s friend request successfully!");
            }
            else {
                _this.showAcceptFriendModal = false;
                return alert("Error when accepting @" + _this.friendRequestInfo.fromUserUsername + "'s friend request!");
            }
        });
    };
    NavbarComponent.prototype.closeConfirmAcceptFriend = function () {
        return this.showAcceptFriendModal = false;
    };
    NavbarComponent.prototype.closeNotificationPopover = function ($event) {
        var _this = this;
        var excludeID = $event.target.id;
        if (excludeID === 'notification-icon' || excludeID === 'count-notification-icon')
            return;
        this.openNotification = false;
        if (this.notifications.length === 0)
            return;
        this.notificationService.updateNotifications(Date.now() + 1000, this.notifications[this.notifications.length - 1].time - 1).subscribe(function (data) {
            _this.notificationService.getNumberOfUnreadNotifications().subscribe(function (data) {
                if (data && data.success) {
                    _this.numberOfUnreadNotifications = data.numberOfUnreadNotifications;
                }
            });
        });
    };
    NavbarComponent.prototype.getCurrentDevice = function () {
        var w = window.innerWidth;
        if (w < 900) {
            return 'mobile';
        }
        else {
            return 'desktop';
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__["ComponentCommunicationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_friend_service__WEBPACK_IMPORTED_MODULE_4__["FriendService"],
            _services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-message/new-message.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/new-message/new-message.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newmessage-header {\r\n  width: 100%;\r\n  height: 60px;\r\n  border-bottom: solid;\r\n  border-color: #e7e7e7;\r\n  border-width: thin;\r\n}\r\n\r\n.newmessage-header-label {\r\n  height: 60px;\r\n  padding-left: 8px;\r\n  padding-top: 8px;\r\n  float: left;\r\n  padding-bottom: 8px;\r\n  width: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.newmessage-body {\r\n  width: 100%;\r\n}\r\n\r\n.newmessage-header-search {\r\n  height: 100%;\r\n  float: left;\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 10px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  line-height: 1.28\r\n}\r\n\r\n.newmessage-search-result {\r\n  position: relative;\r\n  background-color: white;\r\n  box-shadow: 0 0 10px #9ecaed;\r\n  border-top: none;\r\n  top: 60px;\r\n  width: 50%;\r\n  height: 50px;\r\n}\r\n\r\n.newmessage-search-results-each {\r\n  height: 50px;\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.newmessage-search-results-each-username {\r\n  height: 50px;\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  float: right;\r\n  left: 60px;\r\n}\r\n\r\n.newmessage-tags {\r\n  width: 100%;\r\n  height: auto;\r\n  float: left;\r\n  border-bottom: solid;\r\n  border-color: #e7e7e7;\r\n  border-width: thin;\r\n}\r\n\r\n.newmessage-header-previous {\r\n  float: left;\r\n  height: 100%;\r\n  width: 40px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/new-message/new-message.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-message/new-message.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:74px\">\n  <div id=\"newmessage-header\" class=\"newmessage-header\">\n    <div (click)='onClickPreviousNav()' id=\"newmessage-header-previous\" class=\"newmessage-header-previous\" *ngIf='showNavPrevious'>\n      <i class=\"fas fa-chevron-left\" style=\"font-size:30px;\"></i>\n    </div>\n    <div class=\"newmessage-header-label\">\n      Đến:\n    </div>\n    <div id=\"newmessage-header-search\" style=\"padding-left: 0px;\" class=\"newmessage-header-search\">\n      <input type=\"text\" [(ngModel)]=\"searchTerm\" (ngModelChange)='onSearchUser()' placeholder=\"Nhập bạn bè...\" style=\"height: 100%;width: 100%;outline: none;border:transparent\">\n    </div>\n    <div (click)=\"createConversation()\" style=\"float:left;width:40px;height:100%;padding-top:8px;padding-right:8px;padding-bottom: 8px;display: flex;justify-content: center;align-items: center;cursor: pointer\">\n      <i class=\"fas fa-plus\" style=\"font-size:20px\"></i>\n    </div>\n    <div class=\"newmessage-tags\" id=\"newmessage-tags\" *ngIf=\"taggedUsers.length !== 0\">\n      <div *ngFor='let taggedUser of taggedUsers' style=\"width:auto;height:50px;float: left;display: block\">\n        <div style=\"float:left;height:50px;text-align: center\">\n          <div style=\"margin-left:10px;margin-top: 6px;font-weight: 600;background-color: palegreen;padding: 8px;border: transparent;border-radius: 15px;float:left\">\n            {{taggedUser.username}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"searchedList.length !== 0\" class=\"newmessage-search-result\" id=\"newmessage-search-result\">\n      <div id=\"newmessage-search-results-each\" name=\"newmessage-search-results\" *ngFor='let searchedUser of searchedList'\n        class=\"newmessage-search-results-each\" (click)=\"onClickSearchResult(searchedUser.username, searchedUser._id)\">\n        <div id=\"newmessage-search-results-each-image\" name=\"newmessage-search-results\" style=\"width: 60px;height:50px;position: absolute;display:flex;justify-content: center;align-items: center;float:left\">\n          <img id=\"newmessage-search-results\" name=\"newmessage-search-results\" src={{searchedUser.profileImage.lowQuality}}\n            style=\"width:30px;border-radius: 50%\">\n        </div>\n        <div id=\"newmessage-search-results-each-username\" name=\"newmessage-search-results\" class=\"newmessage-search-results-each-username\">\n          {{searchedUser.username}}\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"newmessage-body\" class=\"newmessage-body\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-message/new-message.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/new-message/new-message.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageComponent", function() { return NewMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_roomchat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/roomchat.service */ "./src/app/services/roomchat.service.ts");
/* harmony import */ var _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/roomchat-user.service */ "./src/app/services/roomchat-user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewMessageComponent = /** @class */ (function () {
    function NewMessageComponent(userService, cdR, roomchatService, roomchatUserService, socketService, componentCommunicationService, router) {
        this.userService = userService;
        this.cdR = cdR;
        this.roomchatService = roomchatService;
        this.roomchatUserService = roomchatUserService;
        this.socketService = socketService;
        this.componentCommunicationService = componentCommunicationService;
        this.router = router;
        this.searchTerm = "";
        this.searchedList = [];
        this.taggedUsers = [];
        this.showResult = false;
        this.myID = "";
        this.showNavPrevious = false;
    }
    NewMessageComponent.prototype.onResize = function (event) {
        this.adjust();
    };
    NewMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var w = window.innerWidth;
        if (w < 900) {
            this.router.navigate(["newmessage"]);
        }
        else {
            this.router.navigate(["home/newmessage"]);
        }
        this.adjust();
        this.userService.getMe("low").subscribe(function (data) {
            if (data && data.success) {
                _this.myID = data.user._id;
            }
        });
    };
    NewMessageComponent.prototype.adjust = function () {
        var newMessageHeight = window.innerHeight - 185;
        var inputNewMessageWidth = document.getElementById("newmessage-header").clientWidth - 92;
        var w = window.innerWidth;
        if (w < 900) {
            inputNewMessageWidth = inputNewMessageWidth - 40;
            this.showNavPrevious = true;
        }
        else {
            this.showNavPrevious = false;
        }
        document.getElementById("newmessage-header-search").style.width =
            inputNewMessageWidth + "px";
        document
            .getElementById("newmessage-body")
            .setAttribute("style", "height: " + newMessageHeight + "px");
    };
    NewMessageComponent.prototype.onSearchUser = function () {
        var _this = this;
        this.userService.searchUsers(this.searchTerm, "friend").subscribe(function (data) {
            if (data && data.success) {
                _this.searchedList = data.users;
                _this.cdR.detectChanges();
                var a = document.getElementById("newmessage-search-result");
                if (document.getElementById("newmessage-tags")) {
                    var b = document.getElementById("newmessage-tags").clientHeight + 60;
                    _this.cdR.detectChanges();
                    a.style.top = b + "px";
                }
            }
        });
    };
    NewMessageComponent.prototype.onClickPreviousNav = function () {
        return this.router.navigate(["roomchats"]);
    };
    NewMessageComponent.prototype.onClickSearchResult = function (username, userID) {
        var userIDs = this.taggedUsers.map(function (el) { return el.userID; });
        if (!userIDs.includes(userID)) {
            this.taggedUsers.push({
                username: username,
                userID: userID
            });
        }
        this.searchedList = [];
    };
    NewMessageComponent.prototype.createConversation = function () {
        var _this = this;
        if (this.taggedUsers.length === 0)
            return;
        var nameConversation = "";
        if (this.taggedUsers.length <= 2) {
            var head = this.taggedUsers
                .slice(0, 2)
                .map(function (el) { return el.username; })
                .join(" và ")
                .trim();
            console.log("head: ", this.taggedUsers.slice(0, 2).join(" và "));
            nameConversation = head;
        }
        else {
            var head = this.taggedUsers
                .slice(0, 2)
                .map(function (el) { return el.username; })
                .join(", ")
                .trim();
            var offset = this.taggedUsers.length - 2;
            nameConversation = head + " và " + offset + " người khác";
        }
        var userIDs = this.taggedUsers.map(function (el) { return el.userID; });
        this.roomchatService.checkDuplicateRoomchat(userIDs).subscribe(function (dataa) {
            if (dataa && dataa.success) {
                if (dataa.duplicate === true) {
                    var w = window.innerWidth;
                    if (w < 900) {
                        _this.router.navigate(["/conversation", dataa.roomchatID]);
                    }
                    else {
                        _this.router.navigate(["/home/conversation", dataa.roomchatID]);
                    }
                }
                else {
                    _this.roomchatService
                        .createRoomchat(nameConversation)
                        .subscribe(function (data) {
                        if (data && data.success) {
                            var roomchatID_1 = data.roomchat._id;
                            _this.roomchatUserService
                                .addUsersToRoomchat(userIDs, roomchatID_1)
                                .subscribe(function (data) {
                                if (data && data.success) {
                                    _this.socketService.createRoomchat(userIDs, roomchatID_1, _this.myID + "_user");
                                    var w = window.innerWidth;
                                    if (w < 900) {
                                        _this.router.navigate(["/conversation", roomchatID_1]);
                                    }
                                    else {
                                        _this.router.navigate([
                                            "/home/conversation",
                                            roomchatID_1
                                        ]);
                                    }
                                    _this.componentCommunicationService.setData({
                                        fromComponent: "new",
                                        toComponent: "roomchat",
                                        type: "reload-component"
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], NewMessageComponent.prototype, "onResize", null);
    NewMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-new-message",
            template: __webpack_require__(/*! ./new-message.component.html */ "./src/app/components/new-message/new-message.component.html"),
            styles: [__webpack_require__(/*! ./new-message.component.css */ "./src/app/components/new-message/new-message.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_roomchat_service__WEBPACK_IMPORTED_MODULE_2__["RoomchatService"],
            _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_3__["RoomchatUserService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _services_component_communication_service__WEBPACK_IMPORTED_MODULE_6__["ComponentCommunicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NewMessageComponent);
    return NewMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-image {\r\n  width: 50px;\r\n  height: 60px;\r\n  float: left;\r\n}\r\n\r\n.contact-header {\r\n  height: 60px;\r\n  padding: 8px;\r\n  width: 100%;\r\n  border-bottom: solid;\r\n  border-color: #e7e7e7;\r\n  border-width: thin;\r\n}\r\n\r\n.contact-header-label {\r\n  font-size: 22px;\r\n  font-weight: 500;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  float: left;\r\n  margin-left: 40%;\r\n  font-family: SFUIText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.contact-header-newmessage {\r\n  min-width: 32px;\r\n  float: right;\r\n  height: 100%;\r\n  width: 40px;\r\n  cursor: pointer;\r\n}\r\n\r\n.contact-header-next {\r\n  min-width: 32px;\r\n  float: right;\r\n  height: 100%;\r\n  width: 40px;\r\n  cursor: pointer;\r\n}\r\n\r\n.contact-search {\r\n  width: 100%;\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.contact-body {\r\n  /* padding-left: 10px;\r\n        padding-right: 10px; */\r\n}\r\n\r\n.contact-body :hover {\r\n  background-color: #e7e7e7\r\n}\r\n\r\n@media screen and (max-width:420px) {}\r\n\r\n@media screen and (max-width:910px) {}\r\n\r\n.custom-modal {\r\n  display: block;\r\n  /* Hidden by default */\r\n  position: fixed;\r\n  /* Stay in place */\r\n  z-index: 10;\r\n  /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  /* Full width */\r\n  height: 100%;\r\n  /* Full height */\r\n  background-color: rgb(0, 0, 0);\r\n  /* Fallback color */\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  /* Black w/ opacity */\r\n  /* overflow: auto; */\r\n}\r\n\r\n.custom-modal-content {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  margin-top: 5%;\r\n  border: 1px solid #888;\r\n  width: 35%;\r\n  height: 220px;\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n  line-height: 1.28;\r\n  font-size: 17px;\r\n  font-weight: 500\r\n    /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.modal-options-content {\r\n  height: 70px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div style=\"margin-top:74px\">\r\n    <div class=\"contact-header\">\r\n      <div class=\"contact-header-label\" style=\"margin-top: 10px\" id=\"contact-header-label\">\r\n        <i style=\"font-size: 110%\" class=\"fas fa-info-circle\"></i>\r\n        Thông tin cá nhân\r\n      </div>\r\n      <div id=\"contact-header-next\" class=\"contact-header-next\" style=\"display: none;\">\r\n        <i class=\"fas fa-chevron-right\" style=\"font-size:30px;margin-top:8px\"></i>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-md-4 col-lg-4\">\r\n      <img style=\"width: 100%\" src=\"{{avtSrc}}\">\r\n      <a style=\"text-decoration: none;cursor: pointer\" (click)=\"openModifyUserProfileModal()\">\r\n        <i class=\"fas fa-user-edit\"></i>\r\n        Chỉnh sửa\r\n      </a>\r\n    </div>\r\n    <div class=\"col col-md-8 col-lg-8\">\r\n      <table class=\"table table-hover table-responsive\">\r\n        <tbody>\r\n          <tr>\r\n            <div style=\"width:100%;height:70px;border-bottom: solid thin #e7e7e7;\">\r\n              <div style=\"width:70%;font-size:20px;height:100%;margin-left:20px;float: left;display: flex;align-items: center\">\r\n                <i class=\"fas fa-envelope\" style=\"margin-right:10px\"></i> {{email}}\r\n              </div>\r\n            </div>\r\n          </tr>\r\n          <tr>\r\n            <div style=\"width:100%;height:70px;border-bottom: solid thin #e7e7e7;\">\r\n              <div style=\"width:70%;font-size:20px;height:100%;margin-left:22px;float: left;display: flex;align-items: center\">\r\n                <i class=\"fas fa-user\" style=\"margin-right:10px\"></i> {{username}}\r\n              </div>\r\n            </div>\r\n          </tr>\r\n          <tr>\r\n            <div style=\"width:100%;height:70px;border-bottom: solid thin #e7e7e7;\">\r\n              <div style=\"width:70%;font-size:20px;height:100%;margin-left:20px;float: left;display: flex;align-items: center\">\r\n                <i class=\"fas fa-phone\" style=\"margin-right:10px\"></i> {{phoneNumber}}\r\n              </div>\r\n            </div>\r\n          </tr>\r\n          <tr>\r\n            <div style=\"width:100%;height:70px;border-bottom: solid thin #e7e7e7;\">\r\n              <div style=\"width:70%;font-size:20px;height:100%;margin-left:16px;float: left;display: flex;align-items: center\">\r\n                <i class=\"fa fa-users\" style=\"margin-right:10px\"></i> {{class}}\r\n              </div>\r\n            </div>\r\n          </tr>\r\n          <tr>\r\n            <div style=\"width:100%;height:70px;border-bottom: solid thin #e7e7e7;\">\r\n              <div style=\"width:70%;font-size:20px;height:100%;margin-left:20px;float: left;display: flex;align-items: center\">\r\n                <i class=\"fa fa-graduation-cap\" style=\"margin-right:10px\"></i> {{grade}}\r\n              </div>\r\n            </div>\r\n          </tr>\r\n          <tr>\r\n            <div style=\"width:100%;height:70px;border-bottom: solid thin #e7e7e7;\">\r\n              <div style=\"width:70%;font-size:20px;height:100%;margin-left:20px;float: left;display: flex;align-items: center\">\r\n                <i class=\"fa fa-graduation-cap\" style=\"margin-right:10px\"></i> {{mssv}}\r\n              </div>\r\n            </div>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showModifyUserProfile\" id=\"modify-user-profile-modal\" class=\"custom-modal\">\r\n  <div class=\"custom-modal-content\" style=\"height: 444px;width: 45%\">\r\n    <div style=\"background-color: #e7e7e7;border-bottom:1px solid;border-color:#e7e7e7;padding-top:0px;display: flex;align-content: center;width: 100%;height: 57px\">\r\n      <div style=\"margin-left:10px;margin-top:14px;font-size: 20px\">\r\n        Cập nhật thông tin cá nhân\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-options-content\" style=\"height: 323px;\">\r\n      <div style=\"width:100%;font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;\r\n          line-height: 1.50;font-size: 17px;font-weight: 500;text-align: center;padding: 10px\">\r\n        <form style=\"width:100%\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"email\" class=\"col-sm-2 col-form-label\">Email</label>\r\n            <div class=\"col-sm-10\">\r\n              <input disabled type=\"email\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"email\"  class=\"form-control\" id=\"email\" placeholder=\"Email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"username\" class=\"col-sm-2 col-form-label\">Username</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"text\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"username\" id=\"email\" placeholder=\"Username\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"phoneNumber\" class=\"col-sm-2 col-form-label\">Phone Number</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"text\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\"  [(ngModel)]=\"phoneNumber\" id=\"phoneNumber\" placeholder=\"Phone Number\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"mssv\" class=\"col-sm-2 col-form-label\">MSSV</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"text\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"mssv\" id=\"mssv\" placeholder=\"MSSV\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"class\" class=\"col-sm-2 col-form-label\">Lớp</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"text\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"class\" id=\"class\" placeholder=\"Class\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"grade\" class=\"col-sm-2 col-form-label\">Khóa</label>\r\n            <div class=\"col-sm-10\">\r\n              <input type=\"text\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"grade\" id=\"grade\" placeholder=\"grade\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div style=\"width:100%;height: 61px;border-top:1px solid;border-color:#e7e7e7;\">\r\n      <button (click)=\"updateProfile()\" type=\"button\" class=\"btn btn-info\" style=\"float:right;width:80px;height: 40px;margin:10px\">\r\n        Lưu\r\n      </button>\r\n      <button (click)=\"closeModifyUserProfileModal()\" type=\"button\" class=\"btn btn-danger\" style=\"float:right;width:80px;height: 40px;margin:10px;margin-right:10px\">\r\n        Hủy\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.showModifyUserProfile = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfileComponent.prototype.loadProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getMe("low").toPromise()];
                    case 1:
                        data = _a.sent();
                        if ((!data) || !data.success) {
                            return [2 /*return*/, alert('Error happenned! Load fail')];
                        }
                        this.username = data.user.username;
                        this.phoneNumber = data.user.phoneNumber;
                        this.email = data.user.email;
                        this.avtSrc = data.user.profileImage.lowQuality;
                        this.class = data.user.detail.class || '';
                        this.grade = data.user.detail.grade || '';
                        this.mssv = data.user.detail.mssv || '';
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.prototype.openModifyUserProfileModal = function () {
        return this.showModifyUserProfile = true;
    };
    ProfileComponent.prototype.closeModifyUserProfileModal = function () {
        return this.showModifyUserProfile = false;
    };
    ProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        return this.userService.updateUserProfile({
            username: this.username,
            phoneNumber: this.phoneNumber,
            "detail.mssv": this.mssv,
            "detail.grade": this.grade,
            "detail.class": this.class
        }).subscribe(function (data) {
            if (data && data.success) {
                alert('Update profile successfully!');
            }
            _this.closeModifyUserProfileModal();
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/roomchat/roomchat.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/roomchat/roomchat.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".roomchat-header {\r\n  height: 60px;\r\n  padding: 8px;\r\n  width: 100%;\r\n  border-bottom: solid;\r\n  border-color: #e7e7e7;\r\n  border-width: thin;\r\n}\r\n\r\n\r\n.roomchat-header-setting {\r\n  width: 32px;\r\n  float: left;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.roomchat-header-label {\r\n  /* font-size: 16px;\r\n    text-align: center;\r\n    height: 100%;\r\n    flex-basis: 100%; */\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  overflow: hidden;\r\n  text-align: center;\r\n  float: left;\r\n  margin-left: 32%;\r\n  font-family: SFUIText-Regular, Segoe UI, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n\r\n\r\n.roomchat-header-newmessage {\r\n  min-width: 32px;\r\n  float: right;\r\n  height: 100%;\r\n  width: 40px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.roomchat-header-next {\r\n  min-width: 32px;\r\n  float: right;\r\n  height: 100%;\r\n  width: 40px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.roomchat-search {\r\n  padding: 10px;\r\n  width: 100%;\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.roomchat-body {\r\n  /* padding-left: 10px;\r\n    padding-right: 10px; */\r\n}\r\n\r\n\r\n.roomchat-body :hover {\r\n  background-color: #e7e7e7\r\n}\r\n\r\n\r\n@media screen and (max-width:420px) {\r\n    \r\n}\r\n\r\n\r\n@media screen and (max-width:910px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/roomchat/roomchat.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/roomchat/roomchat.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:74px\">\n  <div class=\"roomchat-header\">\n    <div class=\"roomchat-header-setting\">\n      <i class=\"fas fa-cog\" style=\"font-size:30px;margin-top:8px\"></i>\n    </div>\n    <div class=\"roomchat-header-label\" id=\"roomchat-header-label\">\n      <div style=\"margin-top: 10px\">Tin nhắn</div>\n    </div>\n    <div id=\"roomchat-header-next\" class=\"roomchat-header-next\" style=\"display: none;\">\n      <i class=\"fas fa-chevron-right\" style=\"font-size:30px;margin-top:8px\"></i>\n    </div>\n    <div (click)=\"createRoomchat()\" class=\"roomchat-header-newmessage\">\n      <i class=\"far fa-envelope\" style=\"font-size:30px;margin-top:8px\"></i>\n    </div>\n  </div>\n  <div class=\"roomchat-search\">\n    <input [(ngModel)]=\"searchTerm\" class=\"form-control\" style=\"width:100%\" type=\"text\" placeholder=\"Tìm kiếm trên HustMess\">\n  </div>\n  <div class=\"roomchat-body\" id=\"roomchat-body\">\n    <div style=\"cursor: pointer\" *ngFor=\"let roomchat of roomchats| searchRoomchat: searchTerm;let i = index\" id={{roomchat._id}}>\n      <app-lastmessage [myID]=\"myID\" [roomchatID]=\"roomchat._id\" [reactive]=\"roomchat.reactive\" [idle]=\"roomchat.idle\"\n        [timeActive]=\"roomchat.timeActive\" [content]='roomchat.content' [profileImage]='roomchat.profileImage'\n        [roomchatName]='roomchat.roomchatName'></app-lastmessage>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- <div popover=\"content to be shown in the popover\"\n     popoverTitle=\"Popover header\"\n     popoverPlacement=\"top\"\n     [popoverOnHover]=\"false\"\n     [popoverCloseOnClickOutside]=\"true\"\n     [popoverCloseOnMouseOutside]=\"false\"\n     [popoverDisabled]=\"false\"\n     [popoverAnimation]=\"true\"\n     [popoverDismissTimeout]=\"1000\">\n    element on which this popover is applied.\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/roomchat/roomchat.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/roomchat/roomchat.component.ts ***!
  \***********************************************************/
/*! exports provided: RoomchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomchatComponent", function() { return RoomchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_roomchat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/roomchat.service */ "./src/app/services/roomchat.service.ts");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_friend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/friend.service */ "./src/app/services/friend.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomchatComponent = /** @class */ (function () {
    function RoomchatComponent(roomchatService, componentCommunicationService, socketService, friendService, router, cdR) {
        this.roomchatService = roomchatService;
        this.componentCommunicationService = componentCommunicationService;
        this.socketService = socketService;
        this.friendService = friendService;
        this.router = router;
        this.cdR = cdR;
        this.searchTerm = "";
        this.myID = "";
        this.roomchats = [];
        this.showManageRoomchatModal = false;
        this.url = "";
    }
    RoomchatComponent.prototype.onResize = function (event) {
        this.adjust();
        if (this.url === "/home") {
            this.listenResponsive();
        }
    };
    RoomchatComponent.prototype.ngAfterViewInit = function () {
        if (this.url === "/home") {
            console.log("reeeeeeeeeee");
            this.listenResponsive();
        }
    };
    RoomchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        var w = window.innerWidth;
        if (w < 900) {
            this.router.navigate(["roomchats"]);
        }
        else {
            this.router.navigate(["home"]);
        }
        this.confirmInit();
        this.url = this.router.routerState.snapshot.url;
        this.loadRoomchats();
        this.componentCommunicationService.getData().subscribe(function (data) {
            if (!data)
                return;
            if (data.fromComponent === "app" && data.type === "timestamp") {
                for (var _i = 0, _a = _this.roomchats; _i < _a.length; _i++) {
                    var roomchat = _a[_i];
                    if (roomchat.lastUserID === data.fromUserID + "") {
                        roomchat.timeActive = data.time;
                        // break;
                    }
                }
            }
            else if (data.fromComponent === "app" && data.type === "idle") {
                for (var _b = 0, _c = _this.roomchats; _b < _c.length; _b++) {
                    var roomchat = _c[_b];
                    if (roomchat.lastUserID === data.fromUserID + "") {
                        roomchat.idle = true;
                        roomchat.reactive = false;
                        // break;
                    }
                }
            }
            else if (data.fromComponent === "app" && data.type === "reactive") {
                for (var _d = 0, _e = _this.roomchats; _d < _e.length; _d++) {
                    var roomchat = _e[_d];
                    if (roomchat.lastUserID === data.fromUserID + "") {
                        roomchat.idle = false;
                        roomchat.reactive = true;
                        // break;
                    }
                }
            }
            else if (data.fromComponent === "app" &&
                data.type === "timestamp-on-init") {
                for (var _f = 0, _g = _this.roomchats; _f < _g.length; _f++) {
                    var roomchat = _g[_f];
                    for (var _h = 0, _j = data.dataTimeActive; _h < _j.length; _h++) {
                        var timeActive = _j[_h];
                        if (roomchat.lastUserID === timeActive._id + "") {
                            roomchat.timeActive = timeActive.timeActive;
                            // break;
                        }
                    }
                }
            }
            else if (data.fromComponent === "input" &&
                data.type === "arrange-roomchat") {
                _this.arrangeRoomchats({
                    lastUserID: data.lastUserID,
                    content: data.content,
                    roomchatID: data.roomchatID,
                    profileImage: data.profileImage
                });
            }
            else if (data.fromComponent === "app" &&
                data.type === "arrange-roomchat") {
                _this.arrangeRoomchats({
                    lastUserID: data.arrangedRoomchat.lastUserID,
                    content: data.arrangedRoomchat.content,
                    roomchatID: data.arrangedRoomchat.roomchatID,
                    profileImage: data.arrangedRoomchat.profileImage
                });
                if (document.getElementById(data.arrangedRoomchat.roomchatID)) {
                    document.getElementById(data.arrangedRoomchat.roomchatID).style.backgroundColor = "#e7e7e7";
                }
                for (var _k = 0, _l = _this.roomchats; _k < _l.length; _k++) {
                    var roomchat = _l[_k];
                    if (roomchat._id === data.arrangedRoomchat.roomchatID)
                        continue;
                    var el = document.getElementById(roomchat._id);
                    if (el && el.style.backgroundColor === "rgb(231, 231, 231)") {
                        el.style.backgroundColor = "white";
                        break;
                    }
                }
            }
            else if (data.fromComponent === "conversation" &&
                data.type === "confirm-loadparams") {
                _this.cdR.detectChanges();
                if (document.getElementById(data.roomchatID)) {
                    document.getElementById(data.roomchatID).style.backgroundColor =
                        "#e7e7e7";
                }
            }
            else if ((data.fromComponent === "last-message" ||
                data.fromComponent === "navbar") &&
                data.type === "on-click-lastmessage") {
                if (!data.roomchatID)
                    return;
                if (document.getElementById(data.roomchatID)) {
                    document.getElementById(data.roomchatID).style.backgroundColor =
                        "#e7e7e7";
                }
                for (var _m = 0, _o = _this.roomchats; _m < _o.length; _m++) {
                    var roomchat = _o[_m];
                    if (roomchat._id === data.roomchatID)
                        continue;
                    var el = document.getElementById(roomchat._id);
                    if (el && el.style.backgroundColor === "rgb(231, 231, 231)") {
                        el.style.backgroundColor = "white";
                        break;
                    }
                }
            }
            else if (data.fromComponent === "last-message" &&
                data.type === "delete-roomchat") {
                var index = 0;
                for (var _p = 0, _q = _this.roomchats; _p < _q.length; _p++) {
                    var roomchat = _q[_p];
                    if (roomchat._id === data.roomchatID) {
                        _this.roomchats.splice(index, 1);
                        break;
                    }
                    index++;
                }
                _this.router.navigate(["/home/conversation", _this.roomchats[0]._id]);
                _this.socketService.deleteRoomchat(data.roomchatID);
            }
            else if (data.fromComponent === "app" &&
                data.type === "create-roomchat") {
                _this.insertRoomchatViaSocket = _this.roomchatService
                    .getRoomchat(data.roomchatID)
                    .subscribe(function (dataa) {
                    if (dataa && dataa.success) {
                        _this.roomchats.push({
                            lastUserID: dataa.roomchat.firstUserInRoomchat._id + "",
                            lastUserName: dataa.roomchat.firstUserInRoomchat.username,
                            profileImage: dataa.roomchat.firstUserInRoomchat.profileImage.lowQuality,
                            content: dataa.roomchat.roomchat.lastMessage.content,
                            _id: dataa.roomchat.roomchat._id,
                            roomchatName: _this.processRoomchatName(dataa.roomchat.firstUserInRoomchat.username, dataa.roomchat.numberOfUserInRoomchat, dataa.roomchat.typeRoomchat),
                            timeActive: 0,
                            idle: false,
                            reactive: false
                        });
                    }
                });
            }
            else if ((data.fromComponent === "conversation" ||
                data.fromComponent === "new") &&
                data.type === "reload-component") {
                _this.roomchats = [];
                _this.loadRoomchats();
            }
        });
    };
    RoomchatComponent.prototype.createRoomchat = function () {
        var w = window.innerWidth;
        if (w < 900) {
            this.router.navigate(["/newmessage"]);
        }
        else {
            this.router.navigate(["/home/newmessage"]);
        }
    };
    RoomchatComponent.prototype.confirmInit = function () {
        this.componentCommunicationService.setData({
            fromComponent: "conversation",
            type: "confirm-init"
        });
    };
    RoomchatComponent.prototype.arrangeRoomchats = function (newRoomchat) {
        var index = 0;
        for (var _i = 0, _a = this.roomchats; _i < _a.length; _i++) {
            var roomchat = _a[_i];
            if (roomchat._id === newRoomchat.roomchatID) {
                var oldRoomchat = roomchat;
                this.roomchats.splice(index, 1);
                oldRoomchat.lastUserID = newRoomchat.lastUserID;
                oldRoomchat.profileImage = newRoomchat.profileImage;
                oldRoomchat.content = newRoomchat.content;
                console.log("room_: ", oldRoomchat);
                this.roomchats.unshift(oldRoomchat);
                break;
            }
            index++;
        }
    };
    RoomchatComponent.prototype.adjust = function () {
        if (!document.getElementById("last-message-comp"))
            return;
        var lastMessageComp = document.getElementById("last-message-comp")
            .clientWidth;
        var lastMessageProfileImage = document.getElementById("profile-image")
            .clientWidth;
        var lastMessageSetting = document.getElementById("message-body-setting")
            .clientWidth;
        var temp = lastMessageComp - (lastMessageProfileImage + lastMessageSetting + 30);
        document.getElementById("message-body").style.width = temp + "px";
    };
    RoomchatComponent.prototype.processRoomchatName = function (firstUser, numberOfUsers, typeRoomchat) {
        if (typeRoomchat === "private") {
            return firstUser;
        }
        else if (typeRoomchat === "group") {
            return firstUser + " và " + numberOfUsers + " người khác";
        }
    };
    RoomchatComponent.prototype.listenResponsive = function () {
        var width = window.innerWidth;
        if (width < 900) {
            this.componentCommunicationService.setData({
                fromComponent: "roomchat",
                toComponent: "home",
                type: "responsive-show-roomchat"
            });
            document.getElementById("roomchat-header-label").style.display = "none";
            document.getElementById("roomchat-header-next").style.display = "block";
        }
        else {
            this.componentCommunicationService.setData({
                fromComponent: "roomchat",
                toComponent: "home",
                type: "responsive-show-roomchat-revert"
            });
            document.getElementById("roomchat-header-label").style.display = "block";
            document.getElementById("roomchat-header-next").style.display = "none";
        }
    };
    RoomchatComponent.prototype.loadRoomchats = function () {
        var _this = this;
        this.roomchatService.getRoomchats().subscribe(function (data) {
            if (data.success) {
                _this.myID = data.myID;
                for (var _i = 0, _a = data.roomchats; _i < _a.length; _i++) {
                    var roomchat = _a[_i];
                    _this.socketService.joinRoomchat(roomchat.roomchat._id);
                    _this.roomchats.push({
                        lastUserID: roomchat.firstUserInRoomchat._id + "",
                        lastUserName: roomchat.firstUserInRoomchat.username,
                        profileImage: roomchat.firstUserInRoomchat.profileImage.lowQuality,
                        content: roomchat.roomchat.lastMessage.content,
                        _id: roomchat.roomchat._id,
                        roomchatName: _this.processRoomchatName(roomchat.firstUserInRoomchat.username, roomchat.numberOfUserInRoomchat, roomchat.typeRoomchat),
                        timeActive: 0,
                        idle: false,
                        reactive: false
                    });
                }
                if (_this.roomchats[0]) {
                    _this.componentCommunicationService.setData({
                        fromComponent: "roomchat",
                        toComponent: "conversation",
                        type: "confirm-loadroomchats",
                        roomchatID: _this.roomchats[0]._id
                    });
                }
                if (_this.roomchats.length !== 0) {
                    var windowWidth = window.innerWidth;
                    console.log("hceck url: ", _this.router.routerState.snapshot.url);
                    if (_this.url === "/home" || _this.url === "/home/roomchats") {
                        if (windowWidth >= 900) {
                            _this.router.navigate([
                                "/home/conversation",
                                _this.roomchats[0]._id
                            ]);
                            _this.cdR.detectChanges();
                            document.getElementById(_this.roomchats[0]._id).style.backgroundColor = "#e7e7e7";
                        }
                        else {
                        }
                    }
                }
            }
            else {
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], RoomchatComponent.prototype, "onResize", null);
    RoomchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-roomchat",
            template: __webpack_require__(/*! ./roomchat.component.html */ "./src/app/components/roomchat/roomchat.component.html"),
            styles: [__webpack_require__(/*! ./roomchat.component.css */ "./src/app/components/roomchat/roomchat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_roomchat_service__WEBPACK_IMPORTED_MODULE_1__["RoomchatService"],
            _services_component_communication_service__WEBPACK_IMPORTED_MODULE_2__["ComponentCommunicationService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"],
            _services_friend_service__WEBPACK_IMPORTED_MODULE_4__["FriendService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], RoomchatComponent);
    return RoomchatComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;display: flex;justify-content: center;align-items: center\">\n  <video id=\"big-stream\" controls></video>\n</div>\n<div style=\"width:25%;height:300px;position: fixed;bottom:100px\">\n  <video id=\"small-stream\" width=\"100%\" controls></video>\n</div>\n<div (click)='close()' style=\"position:fixed;bottom:20px;width:100%;height:100px;display: flex;justify-content: center;align-items: center\">\n  <i class=\"fas fa-phone\" style=\"font-size: 40px;color:red\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/component-communication.service */ "./src/app/services/component-communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! peerjs */ "./node_modules/peerjs/lib/peer.js");
/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(peerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/roomchat-user.service */ "./src/app/services/roomchat-user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as Peer from 'peerjs';




var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(communicationComponentService, userService, cdRef, socketService, roomchatUserService, router) {
        this.communicationComponentService = communicationComponentService;
        this.userService = userService;
        this.cdRef = cdRef;
        this.socketService = socketService;
        this.roomchatUserService = roomchatUserService;
        this.router = router;
        this.roomchatID = '';
        this.userID = '';
        this.peerIDs = [];
        this.othersStream = [];
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomchatID = this.getParams().params;
        this.userID = this.getParams().query;
        this.peer = new peerjs__WEBPACK_IMPORTED_MODULE_3__({
            path: '/peerjs',
            host: 'hustmess-peer-server.herokuapp.com',
            port: 443,
            secure: true
        });
        var bigStream = document.getElementById('big-stream');
        bigStream.height = window.innerHeight;
        var bigVideoWidth = bigStream.clientWidth;
        this.getUsersInRoomchatSub = this.roomchatUserService.getRoomchatUsers(this.roomchatID).subscribe(function (dataa) {
            if (dataa && dataa.success) {
                var usersInRoomchat = dataa.roomchatUsers.map(function (el) { return el.userID; });
                _this.getUsersDetailSub = _this.userService.getUsersFromIDs(usersInRoomchat).subscribe(function (data) {
                    if (data && data.success) {
                        var users = data.users;
                        users.forEach(function (el) {
                            if (_this.userID !== el._id) {
                                var userDetail = el.detail;
                                if (userDetail && userDetail.peerID && userDetail.peerID !== '') {
                                    _this.peerIDs.push({
                                        userID: el._id,
                                        peerID: userDetail.peerID
                                    });
                                }
                            }
                        });
                        if (_this.peerIDs.length === 1) {
                            _this.othersStream.push('');
                            _this.cdRef.detectChanges();
                            _this.openStream().then(function (stream) {
                                var call = _this.peer.call(_this.peerIDs[0].peerID + '', stream);
                                call.on('stream', function (remoteStream) {
                                    var bigVideoEl = document.getElementById('big-stream');
                                    var smallStream = document.getElementById('small-stream');
                                    bigVideoEl.srcObject = remoteStream;
                                    bigVideoEl.play();
                                    smallStream.srcObject = stream;
                                    smallStream.play();
                                });
                            });
                        }
                        else {
                        }
                        // this.openStream().then(stream => {
                        //   for (let peerID of this.peerIDs) {
                        //     let call = this.peer.call(peerID.peerID + '', stream);
                        //     call.on('stream', remoteStream => {
                        //       console.log('check strea: ', remoteStream)
                        //       let videoEl = <HTMLVideoElement>document.getElementById('localStream');
                        //       videoEl.srcObject = remoteStream;
                        //       videoEl.play();
                        //     });
                        //   }
                        // });
                        //call thoi!
                    }
                });
            }
        });
        // this.peer.on('open', id => {
        //   this.socketService.emitPeerID(id, this.roomchatID, this.userID);
        // })
        // this.openStream().then(stream => {
        //   this.userService.getUser('low', this.userID).subscribe(user => {
        //     if (user && user.success) {
        //       console.log('RTT')
        //       let peerID = user.user.detail.peerID;
        //       let videoEl = <HTMLVideoElement>document.getElementById('localStream');
        //       videoEl.srcObject = stream;
        //       videoEl.play();
        //       let call = this.peer.call(peerID, stream);
        //       call.on('stream', remoteStream => {
        //       });
        //     }
        //   })
        // })
    };
    ServicesComponent.prototype.close = function () {
        window.close();
    };
    ServicesComponent.prototype.openStream = function () {
        var config = {
            audio: true,
            video: true
        };
        return navigator.mediaDevices.getUserMedia(config);
    };
    ServicesComponent.prototype.getParams = function () {
        var url = this.router.routerState.snapshot.url.split('?');
        var tempLength = url[0].split('/').length;
        return {
            params: url[0].split('/')[tempLength - 1] + '',
            query: url[1].replace('userid=', '')
        };
    };
    ServicesComponent.prototype.ngAfterViewInit = function () {
        this.communicationComponentService.setData({
            fromComponent: 'answer',
            toComponent: 'navbar',
            type: 'hide-navbar'
        });
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [_services_component_communication_service__WEBPACK_IMPORTED_MODULE_1__["ComponentCommunicationService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _services_roomchat_user_service__WEBPACK_IMPORTED_MODULE_6__["RoomchatUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.loggedIn()) {
            console.log('Guard:ok');
            return true;
        }
        else {
            console.log('Guard:ok___');
            this.router.navigate(['/authenticate']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/search-contacts.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/search-contacts.pipe.ts ***!
  \*****************************************/
/*! exports provided: SearchContactsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContactsPipe", function() { return SearchContactsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchContactsPipe = /** @class */ (function () {
    function SearchContactsPipe() {
    }
    SearchContactsPipe.prototype.transform = function (contacts, term) {
        if (!contacts)
            return [];
        if (!term)
            return contacts;
        if (term == '' || term == null)
            return [];
        return contacts.filter(function (contact) {
            return contact.username.includes(term);
        });
    };
    SearchContactsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchContacts'
        })
    ], SearchContactsPipe);
    return SearchContactsPipe;
}());



/***/ }),

/***/ "./src/app/search-roomchat.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/search-roomchat.pipe.ts ***!
  \*****************************************/
/*! exports provided: SearchRoomchatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoomchatPipe", function() { return SearchRoomchatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchRoomchatPipe = /** @class */ (function () {
    function SearchRoomchatPipe() {
    }
    SearchRoomchatPipe.prototype.transform = function (roomchats, term) {
        // console.log("RRRRR: ",roomchats)
        if (!roomchats)
            return [];
        if (!term)
            return roomchats;
        if (term == '' || term == null)
            return [];
        return roomchats.filter(function (roomchat) {
            return roomchat.roomchatName.includes(term);
        });
    };
    SearchRoomchatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'searchRoomchat'
        })
    ], SearchRoomchatPipe);
    return SearchRoomchatPipe;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/domain */ "./src/domain.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, location, router) {
        this.http = http;
        this.location = location;
        this.router = router;
        this.tokenStatus = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        if (this.loggedIn()) {
            this.tokenStatus.next({
                isAdded: true
            });
        }
        else {
            this.tokenStatus.next({
                isAdded: false
            });
        }
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        console.log('auth', user);
        headers.append('Content-Type', 'application/json');
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"] + 'register', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }));
    };
    AuthenticationService.prototype.loginUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"] + 'login', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }));
    };
    AuthenticationService.prototype.validateExist = function (info) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"] + 'validate', info, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) { return res.json(); }));
    };
    AuthenticationService.prototype.storeToken = function (token) {
        localStorage.setItem('id_token', token);
        if (this.loggedIn()) {
            this.tokenStatus.next({
                isAdded: true
            });
        }
        else {
            this.tokenStatus.next({
                isAdded: false
            });
        }
    };
    AuthenticationService.prototype.getTokenStatus = function () {
        return this.tokenStatus.asObservable();
    };
    AuthenticationService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_6__["tokenNotExpired"])(null, localStorage.getItem("id_token"));
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', 'false');
        this.authToken = null;
        localStorage.clear();
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/component-communication.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/component-communication.service.ts ***!
  \*************************************************************/
/*! exports provided: ComponentCommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentCommunicationService", function() { return ComponentCommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentCommunicationService = /** @class */ (function () {
    function ComponentCommunicationService() {
        this.data = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    ComponentCommunicationService.prototype.setData = function (data) {
        this.data.next(data);
    };
    ComponentCommunicationService.prototype.getData = function () {
        return this.data.asObservable();
    };
    ComponentCommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ComponentCommunicationService);
    return ComponentCommunicationService;
}());



/***/ }),

/***/ "./src/app/services/friend.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/friend.service.ts ***!
  \********************************************/
/*! exports provided: FriendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendService", function() { return FriendService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _src_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/domain */ "./src/domain.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendService = /** @class */ (function () {
    function FriendService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    FriendService.prototype.getFriends = function (approved) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'friend/many?approved=' + approved, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    FriendService.prototype.addFriend = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        var user = { "secondUser": id };
        headers.append('Authorization', this.authService.authToken);
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'friend/', user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    FriendService.prototype.acceptFriend = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        console.log(id);
        headers.append('Authorization', this.authService.authToken);
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + "friend?id=" + id, { "approved": true }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    FriendService.prototype.deleteFriend = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'friend?firstuser=' + id, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    FriendService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _src_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/domain */ "./src/domain.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessageService = /** @class */ (function () {
    function MessageService(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
    }
    MessageService.prototype.getMessages = function (roomchatID, timeSeq, limit) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'message/many?roomchatid=' + roomchatID + '&time=' + timeSeq + '&limit=' + limit, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    MessageService.prototype.sendMessage = function (roomchatID, content, attach, fileType, fileName) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            roomChatID: roomchatID,
            content: content,
            attach: attach,
            fileType: fileType,
            fileName: fileName
        };
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'message', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    MessageService.prototype.updateMessages = function (roomchatID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'message/many?roomchatid=' + roomchatID, {}, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    MessageService.prototype.deleteOneMessage = function (messageID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'message?messageid=' + messageID, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    MessageService.prototype.updateOneMessage = function (messageID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'message?messageid=' + messageID, {}, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _src_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/domain */ "./src/domain.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationService = /** @class */ (function () {
    function NotificationService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    NotificationService.prototype.getNotifications = function (timeSeq, limit) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'notification/many?time=' + timeSeq + '&limit=' + limit, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NotificationService.prototype.getNumberOfUnreadNotifications = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'notification/many/count', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NotificationService.prototype.updateNotifications = function (topTime, bottomTime) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            topTime: topTime,
            bottomTime: bottomTime
        };
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'notification/', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NotificationService.prototype.createNotifications = function (toUserID, detail, time) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            toUserID: toUserID,
            detail: detail,
            time: time
        };
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'notification/', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/roomchat-user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/roomchat-user.service.ts ***!
  \***************************************************/
/*! exports provided: RoomchatUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomchatUserService", function() { return RoomchatUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _src_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/domain */ "./src/domain.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RoomchatUserService = /** @class */ (function () {
    function RoomchatUserService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    RoomchatUserService.prototype.getRoomchatUsers = function (roomchatID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'roomchatuser/many?roomchatid=' + roomchatID, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RoomchatUserService.prototype.addUsersToRoomchat = function (userIds, roomchatID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            userIDs: userIds,
            roomChatID: roomchatID
        };
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'roomchatuser', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RoomchatUserService.prototype.deleteUserFromRoomchat = function (roomchatID, userID) {
        console.log('delete user_', roomchatID, userID);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'roomchatuser?roomchatid=' + roomchatID + '&userid=' + userID, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RoomchatUserService.prototype.assignAdmin = function (roomchatID, userID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'roomchatuser?roomchatid=' + roomchatID + '&userid=' + userID + '&type=assign-admin', {}, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RoomchatUserService.prototype.deleteAssignAdmin = function (roomchatID, userID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'roomchatuser?roomchatid=' + roomchatID + '&userid=' + userID + '&type=delete-assign-admin', {}, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    RoomchatUserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], RoomchatUserService);
    return RoomchatUserService;
}());



/***/ }),

/***/ "./src/app/services/roomchat.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/roomchat.service.ts ***!
  \**********************************************/
/*! exports provided: RoomchatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomchatService", function() { return RoomchatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _src_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/domain */ "./src/domain.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomchatService = /** @class */ (function () {
    function RoomchatService(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
    }
    RoomchatService.prototype.createRoomchat = function (name) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        console.log('name_', name);
        var body = {
            name: name
        };
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'roomchat', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    RoomchatService.prototype.checkDuplicateRoomchat = function (userIDs) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            userIDs: userIDs
        };
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'roomchat/checkduplicate', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    RoomchatService.prototype.getRoomchats = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'roomchat/many', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    RoomchatService.prototype.getRoomchat = function (roomchatID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'roomchat/one?roomchatid=' + roomchatID, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    RoomchatService.prototype.deleteRoomchat = function (roomchatID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.delete(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'roomchat?roomchatid=' + roomchatID, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    RoomchatService.prototype.addSeenUsers = function (roomchatID, userID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            $push: {
                isSeenBy: userID
            }
        };
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'roomchat?roomchatid=' + roomchatID, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    RoomchatService.prototype.resetSeenUsers = function (roomchatID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            isSeenBy: []
        };
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'roomchat?roomchatid=' + roomchatID, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    RoomchatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], RoomchatService);
    return RoomchatService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = 'https://hustmess-server.herokuapp.com';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    SocketService.prototype.sendUserID = function (userID, roomchatID) {
        this.socket.emit('send-userid', {
            userID: userID,
            roomchatID: roomchatID
        });
    };
    SocketService.prototype.emitIdle = function (roomchatID, userID) {
        this.socket.emit('idle-status', {
            roomchatID: roomchatID,
            userID: userID
        });
    };
    SocketService.prototype.emitReceiveMessage = function (roomchatID) {
        this.socket.emit('confirm-received-message', {
            roomchatID: roomchatID
        });
    };
    SocketService.prototype.emitSeenMessage = function (roomchatID, userID) {
        this.socket.emit('confirm-seen-message', {
            roomchatID: roomchatID,
            userID: userID
        });
    };
    SocketService.prototype.confirmReceiveMessage = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('confirm-received-message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receiveJoinRoomchatConfirm = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('join-roomchat', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.confirmSeenMessage = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('confirm-seen-message', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receiveIdle = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('idle-status', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.reActive = function (roomchatID, userID) {
        this.socket.emit('reactive-status', {
            roomchatID: roomchatID,
            userID: userID
        });
    };
    SocketService.prototype.receiveReactive = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('reactive-status', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    // reconnect(){
    //   this.socket = io(this.url);
    // }
    // onDisconnect(){
    //   let observable = new Observable<any>(observer => {
    //     this.socket.on('disconnect', (data) => {
    //       observer.next(data);
    //     });
    //     return () => {
    //       this.socket.disconnect();
    //     };
    //   })
    //   return observable;
    // }
    SocketService.prototype.deleteRoomchat = function (roomchatID) {
        this.socket.emit('delete-roomchat', { roomchatID: roomchatID });
    };
    SocketService.prototype.confirmCompleteLoad = function () {
        this.socket.emit('complete-load-component', {});
    };
    SocketService.prototype.emitTyping = function (roomchatID, status) {
        this.socket.emit('typing', {
            roomchatID: roomchatID,
            status: status
        });
    };
    SocketService.prototype.receiveTyping = function (cb) {
        return this.socket.on('receive-typing', function (data) {
            return cb(data);
        });
        // let observable = new Observable<any>(observer => {
        //   this.socket.on('receive-typing', (data) => {
        //     observer.next(data);
        //   });
        //   return () => {
        //     this.socket.disconnect();
        //   };
        // })
        // return observable;
    };
    SocketService.prototype.receiveConfirmConnect = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('confirm-connect', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.joinRoomchat = function (roomchatID) {
        this.socket.emit('join-roomchat', {
            roomchatID: roomchatID
        });
    };
    SocketService.prototype.leaveRoomchat = function (roomchatID) {
        this.socket.emit('leave-roomchat', {
            roomchatID: roomchatID
        });
    };
    SocketService.prototype.createRoomchat = function (userIDs, roomchatID, userZone) {
        this.socket.emit('create-roomchat', {
            userIDs: userIDs,
            roomchatID: roomchatID,
            userZone: userZone
        });
    };
    SocketService.prototype.sendMessage = function (messageObj) {
        this.socket.emit('send-message', messageObj);
    };
    SocketService.prototype.receiveMessage = function (cb) {
        return this.socket.on('receive-message', function (data) {
            return cb(data);
        });
        // let observable = new Observable<any>(observer => {
        //   this.socket.on('receive-message', (data) => {
        //     observer.next(data);
        //   });
        //   return () => {
        //     this.socket.disconnect();
        //   };
        // })
        // return observable;
    };
    SocketService.prototype.receiveCreateRoomchat = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('create-roomchat', function (data) {
                console.log('receive');
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receiveTimestamp = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('receive-timestamp', function (data) {
                console.log('receive');
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receiveOpenCallConfirm = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('open-call-confirm', function (data) {
                console.log('receive');
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.emitCall = function (username, userID, roomchatID) {
        this.socket.emit('call-request', {
            username: username,
            userID: userID,
            roomchatID: roomchatID
        });
    };
    SocketService.prototype.emitNotification = function (roomchatID, notificationObject) {
        this.socket.emit('notification', {
            roomchatID: roomchatID,
            notification: notificationObject
        });
    };
    SocketService.prototype.emitAcceptCallStatus = function (accept, roomchatID, userID) {
        this.socket.emit('peerID', {
            accept: accept,
            userID: userID,
            roomchatID: roomchatID
        });
    };
    SocketService.prototype.emitOpenCallConfirm = function (roomchatID) {
        this.socket.emit('open-call-confirm', {
            confirm: true,
            roomchatID: roomchatID
        });
    };
    SocketService.prototype.emitSendFriendRequest = function (fromUserInfo, destUserID) {
        this.socket.emit('friend-request', {
            destUserID: destUserID,
            fromUserInfo: fromUserInfo
        });
    };
    SocketService.prototype.receiveFriendRequest = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('friend-request', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.emitAddUsersToGroup = function (roomchatID, addedUserID) {
        this.socket.emit('add-users-to-roomchat', {
            roomchatID: roomchatID,
            addedUserID: addedUserID
        });
    };
    SocketService.prototype.emitDeleteUsersFromGroup = function (roomchatID, deletedUserID) {
        this.socket.emit('delete-user-from-roomchat', {
            roomchatID: roomchatID,
            deletedUserID: deletedUserID
        });
    };
    SocketService.prototype.receiveDeleteUsersFromGroup = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('delete-user-from-roomchat', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receiveAddUsersToGroup = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('add-users-to-roomchat', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receivePeerID = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('peerID', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receiveNotification = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('notification', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.receiveCallRequest = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('call-request', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.emitArrangeRoomchats = function (arrangedRoomchat) {
        return this.socket.emit('arrange-roomchats', arrangedRoomchat);
    };
    SocketService.prototype.receiveArrangeRoomchats = function () {
        var _this = this;
        var observable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket.on('arrange-roomchats', function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _src_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/domain */ "./src/domain.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadService = /** @class */ (function () {
    function UploadService(http, authService, httpClient) {
        this.http = http;
        this.authService = authService;
        this.httpClient = httpClient;
    }
    UploadService.prototype.uploadFile = function (formData, i, roomchatID) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', _src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'uploads/files', formData, {
            reportProgress: true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', this.authService.authToken),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('roomchatid', roomchatID)
        });
        return this.httpClient.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return _this.getEventMessage(event, i); }));
        // return this.http.post(DOMAIN + 'uploads/files', formData, { headers: headers }).pipe(map(res => res.json()));
    };
    UploadService.prototype.getEventMessage = function (event, index) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                return 0;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                // Compute and show the % done:
                var percentDone = Math.round(100 * event.loaded / event.total);
                console.log('index', index);
                return {
                    percentDone: percentDone,
                    index: index
                };
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                return event.body;
            default:
                return 0;
        }
    };
    UploadService.prototype.getFiles = function (roomchatID, typeFile, timeSeq, limit) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'files/many?roomchatid=' + roomchatID + '&type=' + typeFile + '&time=' + timeSeq + '&limit=' + limit, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UploadService.prototype.getFile = function (roomchatID, typeFile, fileID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"] + 'files?roomchatid=' + roomchatID + '&type=' + typeFile + '&id=' + fileID, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _src_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/domain */ "./src/domain.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    UserService.prototype.getUsers = function (quality) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'user/many?quality=' + quality, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getAllUsers = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'user/all', { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.searchUsers = function (searchTerm, typeUser) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'user/search/friends?termsearch=' + searchTerm + '&typeuser=' + typeUser, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getUser = function (quality, userID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'user/one?quality=' + quality + '&userid=' + userID, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getMe = function (quality) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.get(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'user/me?quality=' + quality, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.getUsersFromIDs = function (IDs) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            userIDs: IDs
        };
        return this.http.post(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'user/many', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.updatePeerIDUser = function (peerID) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        var body = {
            "detail.peerID": peerID
        };
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'user', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.updateUserProfile = function (profile) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        return this.http.put(_src_domain__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"] + 'user', profile, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/time-ago.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/time-ago.pipe.ts ***!
  \**********************************/
/*! exports provided: TimeAgoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe() {
    }
    TimeAgoPipe.prototype.transform = function (value, isIdle) {
        var d = new Date(value);
        var now = new Date();
        var seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        var minutes = Math.round(Math.abs(seconds / 60));
        var hours = Math.round(Math.abs(minutes / 60));
        var days = Math.round(Math.abs(hours / 24));
        var months = Math.round(Math.abs(days / 30.416));
        var years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return '';
        }
        else if (isIdle) {
            return 'Đang bận';
        }
        else if (seconds <= 6) {
            return 'Đang hoạt động';
        }
        else if (seconds <= 90) {
            return 'Hoạt động 1 phút trước';
        }
        else if (minutes <= 45) {
            return 'Hoạt động ' + minutes + ' phút trước';
        }
        else if (minutes <= 90) {
            return 'Hoạt động 1 giờ trước';
        }
        else if (hours <= 22) {
            return 'Hoạt động ' + hours + ' giờ trước';
        }
        else if (hours <= 36) {
            return 'Hoạt động 1 ngày trước';
        }
        else if (days <= 25) {
            return 'Hoạt động ' + days + ' ngày trước';
        }
        else if (days <= 45) {
            return 'Hoạt động 1 tháng trước';
        }
        else if (days <= 345) {
            return 'Hoạt động ' + days + ' tháng trước';
        }
        else if (days <= 545) {
            return 'Hoạt động 1 năm trước';
        }
        else {
            // (days > 545)
            return years + ' years ago';
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var min = 60;
        var hr = min * 60;
        var day = hr * 24;
        if (seconds < min) {
            // less than 1 min, update every 2 secs
            return 2;
        }
        else if (seconds < hr) {
            // less than an hour, update every 30 secs
            return 30;
        }
        else if (seconds < day) {
            // less then a day, update every 5 mins
            return 300;
        }
        else {
            // update every hour
            return 3600;
        }
    };
    ;
    TimeAgoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timeAgo',
            pure: false
        })
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());



/***/ }),

/***/ "./src/app/timeago.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/timeago.pipe.ts ***!
  \*********************************/
/*! exports provided: TimeagoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeagoPipe", function() { return TimeagoPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimeagoPipe = /** @class */ (function () {
    function TimeagoPipe() {
        this.getSecondsUntilUpdate = function (seconds) {
            var min = 60;
            var hr = min * 60;
            var day = hr * 24;
            if (seconds < min) {
                // less than 1 min, update every 2 secs
                return 2;
            }
            else if (seconds < hr) {
                // less than an hour, update every 30 secs
                return 30;
            }
            else if (seconds < day) {
                // less then a day, update every 5 mins
                return 300;
            }
            else {
                // update every hour
                return 3600;
            }
        };
    }
    TimeagoPipe.prototype.transform = function (value, args) {
        var d = new Date(value);
        var now = new Date();
        var seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        console.log('second: ', seconds);
        var timeToUpdate = (Number.isNaN(seconds)) ? 1000 : this.getSecondsUntilUpdate(seconds) * 1000;
        var minutes = Math.round(Math.abs(seconds / 60));
        var hours = Math.round(Math.abs(minutes / 60));
        var days = Math.round(Math.abs(hours / 24));
        var months = Math.round(Math.abs(days / 30.416));
        var years = Math.round(Math.abs(days / 365));
        if (Number.isNaN(seconds)) {
            return;
        }
        else if (seconds <= 45) {
            return 'Đang hoạt động';
        }
        else if (seconds <= 90) {
            return 'Hoạt động 1 phút trước';
        }
        else if (minutes <= 45) {
            return 'Hoạt động ' + minutes + ' phút trước';
        }
        else if (minutes <= 90) {
            return 'Hoạt động 1 giờ trước';
        }
        else if (hours <= 22) {
            return 'Hoạt động ' + hours + ' giờ trước';
        }
        else if (hours <= 36) {
            return 'Hoạt động 1 ngày trước';
        }
        else if (days <= 25) {
            return 'Hoạt động ' + days + ' ngày trước';
        }
        else if (days <= 45) {
            return 'Hoạt động 1 tháng trước';
        }
        else if (days <= 345) {
            return 'Hoạt động ' + days + ' tháng trước';
        }
        else if (days <= 545) {
            return 'Hoạt động 1 năm trước';
        }
        else {
            // (days > 545)
            return years + ' years ago';
        }
    };
    TimeagoPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timeago'
        })
    ], TimeagoPipe);
    return TimeagoPipe;
}());



/***/ }),

/***/ "./src/domain.ts":
/*!***********************!*\
  !*** ./src/domain.ts ***!
  \***********************/
/*! exports provided: DOMAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
var DOMAIN = 'https://hustmess-server.herokuapp.com/';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thien\Projects\web-app-chat-client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map