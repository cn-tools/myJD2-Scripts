// Restart & Update when JD is idle, or after 'x' hours.
// Trigger: Interval (Recommended 600000 or more).
// https://support.jdownloader.org/de/knowledgebase/article/auto-update-jd-in-idle

var hours = 0; // Update after 'x' hours, even if JD is not idle. (0 = Disabled)

if (callAPI("update", "isUpdateAvailable")) {
    var updateNow = false;
    if (hours > 0) {
        if (!getProperty("date", false)) {
            setProperty("date", new Date(Date.now() + hours * 60 * 60 * 1000), false);
        }

        if (Date.now() > getProperty("date", false)) {
            updateNow = true;
        }
    }

    if (!updateNow) {
        var idle = isDownloadControllerIdle() &&
            !callAPI("linkcrawler", "isCrawling") &&
            !callAPI("linkgrabberv2", "isCollecting") &&
            !callAPI("extraction", "getQueue").length > 0;

        if (idle) {
            updateNow = true;
        }
    }

    if (updateNow) {
        callAPI("update", "restartAndUpdate");
    }
}
