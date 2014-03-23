
var exec = require("cordova/exec");

function SocialMessage() {
    this.name = "SocialMessage";
};

var allActivityTypes = ["PostToFacebook", "PostToTwitter", "PostToWeibo", "Message", "Mail", "Print", "CopyToPasteboard", "AssignToContact", "SaveToCameraRoll", "AddToReadingList", "PostToFlickr", "PostToVimeo", "TencentWeibo", "AirDrop"];

SocialMessage.prototype.send = function (message) {
    if (!message) {
        return;
    }
    if (typeof (message.activityTypes) === "undefined" || message.activityTypes === null || message.activityTypes.length === 0) {
        message.activityTypes = allActivityTypes;
    }
    message.activityTypes = message.activityTypes.join(",");
    exec(null, null, "SocialMessage", "send", [message]);
};

module.exports = new SocialMessage();
