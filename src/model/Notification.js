'use strict';
import ApiClient from '../ApiClient';
import NotificationCondition from './NotificationCondition';
import NotificationAction from './NotificationAction';

/**
 * Constructs a new <code>Notification</code>.
 * @alias module:model/Notification
 * @class
 * @param condition {module:model/NotificationCondition} 
 * @param action {module:model/SocialMessageBatch} 
 */
var exports = function(condition, description, action) {
  var _this = this;

  _this['condition'] = condition;
  _this['action'] = action;
  _this['description'] = description;

};

/**
 * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Notification} obj Optional instance to populate.
 * @return {module:model/Notification} The populated <code>Notification</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  console.log(JSON.stringify(data));
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('description')) {
      obj['description'] = ApiClient.convertToType(data['description'], 'String');
    }
    if (data.hasOwnProperty('condition')) {
      obj['condition'] = NotificationCondition.constructFromObject(data['condition']);
    }
    if (data.hasOwnProperty('action')) {
      obj['action'] = NotificationAction.constructFromObject(data['action']);
    }
    if (data.hasOwnProperty('expires')) {
      obj['expires'] = ApiClient.convertToType(data['expires'], 'String');
    }
    if (data.hasOwnProperty('throttling')) {
      obj['throttling'] = ApiClient.convertToType(data['throttling'], 'Number');
    }
    if (data.hasOwnProperty('times_sent')) {
      obj['times_sent'] = ApiClient.convertToType(data['times_sent'], 'String');
    }
    if (data.hasOwnProperty('last_notif')) {
      obj['last_notif'] = ApiClient.convertToType(data['last_notif'], 'String');
    }
    if (data.hasOwnProperty('last_success')) {
      obj['last_success'] = ApiClient.convertToType(data['last_success'], 'String');
    }
    if (data.hasOwnProperty('last_success_code')) {
      obj['last_success_code'] = ApiClient.convertToType(data['last_success_code'], 'String');
    }
    if (data.hasOwnProperty('last_failure')) {
      obj['last_failure'] = ApiClient.convertToType(data['last_failure'], 'String');
    }
    if (data.hasOwnProperty('last_failure_reason')) {
      obj['last_failure_reason'] = ApiClient.convertToType(data['last_failure_reason'], 'String');
    }
    if (data.hasOwnProperty('status')) {
      obj['status'] = ApiClient.convertToType(data['status'], 'String');
    }
  }
  return obj;
}

/**
 * Id of the notification
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * Description of the notification
 * @member {String} description
 */
exports.prototype['description'] = undefined;
/**
 * @member {module:model/NotificationCondition} condition
 */
exports.prototype['condition'] = undefined;
/**
 * @member {module:model/NotificationAction} action
 */
exports.prototype['action'] = undefined;
/**
 * @member {Number} expires
 */
exports.prototype['expires'] = undefined;
/**
 * minimum interval between two messages in seconds
 * @member {Number} throttling
 */
exports.prototype['throttling'] = undefined;
/**
 * times_sent of the notification
 * @member {String} times_sent
 */
exports.prototype['times_sent'] = undefined;
/**
 * last_notification of the notification
 * @member {String} last_notification
 */
exports.prototype['last_notification'] = undefined;
/**
 * last_success of the notification
 * @member {String} last_success
 */
exports.prototype['last_success'] = undefined;
/**
 * last_success_code of the notification
 * @member {String} last_success_code
 */
exports.prototype['last_success_code'] = undefined;
/**
 * last_failure of the notification
 * @member {String} last_failure
 */
exports.prototype['last_failure'] = undefined;
/**
 * last_failure_reason of the notification
 * @member {String} last_failure_reason
 */
exports.prototype['last_failure_reason'] = undefined;
/**
 * status of the notification
 * @member {String} status
 */
exports.prototype['status'] = undefined;

export default exports;
