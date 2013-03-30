/*
 * Copyright 2011-2013 Lukas Vlcek
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * @author Lukas Vlcek (lukas.vlcek@gmail.com)
 */

goog.provide('org.bigdesk.net.JsonpService');

goog.require('org.bigdesk.net.Service');

/**
 * TODO will be implemented later
 * Consider using goog.ds.JsonDataSource
 * @constructor
 * @implements {org.bigdesk.net.Service}
 */
org.bigdesk.net.JsonpService = function(){};

/** @inheritDoc */
org.bigdesk.net.JsonpService.prototype.getNodesStats = function (callback, opt_errback, opt_timestamp) {
    var timestamp = opt_timestamp || goog.now();
    var data = {};
    callback(timestamp, data);
};

/** @inheritDoc */
org.bigdesk.net.JsonpService.prototype.getNodesInfo = function (callback, opt_errback, opt_timestamp) {
    var timestamp = opt_timestamp || goog.now();
    var data = {};
    callback(timestamp, data);
};

/** @inheritDoc */
org.bigdesk.net.JsonpService.prototype.getClusterStates = function(callback, opt_errback, opt_timestamp) {
    var timestamp = opt_timestamp || goog.now();
    var data = {};
    callback(timestamp, data);
};

/** @inheritDoc */
org.bigdesk.net.JsonpService.prototype.getClusterHealth = function(callback, opt_errback, opt_timestamp) {
    var timestamp = opt_timestamp || goog.now();
    var data = {};
    callback(timestamp, data);
};

/** @inheritDoc */
org.bigdesk.net.JsonpService.prototype.getIndexSegments = function(callback, opt_errback, opt_timestamp) {
    var timestamp = opt_timestamp || goog.now();
    var data = {};
    callback(timestamp, data);
};

/** @inheritDoc */
org.bigdesk.net.JsonpService.prototype.getHotThreads = function(callback, opt_errback, opt_timestamp) {
    var timestamp = opt_timestamp || goog.now();
    var data = "";
    callback(timestamp, data);
};
