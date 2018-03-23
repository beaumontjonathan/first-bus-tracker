var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
var ServerProvider = (function () {
    function ServerProvider(http) {
        this.http = http;
        this._url = 'http://localhost:8080/buses';
    }
    ServerProvider.prototype.getLocations = function () {
        return this.http.get(this._url).catch(this.errorHandler);
    };
    ServerProvider.prototype.errorHandler = function (error) {
        return Observable.throw(error.message || "Server Error");
    };
    ServerProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ServerProvider);
    return ServerProvider;
}());
export { ServerProvider };
//# sourceMappingURL=server-provider.js.map