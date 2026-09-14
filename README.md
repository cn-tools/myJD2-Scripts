# myJD2 Scripts

Event Scripter scripts for jDownloader2. They can send a notification after a
package has finished, automatically update JDownloader when an update is
available, and write a text file containing package details.

## Provided as-is

> These scripts are provided as-is, without any guarantee, warranty, or
> liability of any kind. They are offered for use in their current form only,
> and each user uses them at their own risk.

## Included Scripts

### `000-notify_over_telegram.js`

Sends a message through a Telegram bot when a package has finished.

Set these values in the script before using it:

```javascript
var lBotID = "<enter-your-botID>";
var lChatID = "<enter-your-chatID>";
```

The bot must be able to access the target chat. The message includes the name
of the completed package.

Recommended trigger: `Package Finished`

### `001-auto_updater.js`

Checks whether a JDownloader update is available and starts the update when
JDownloader is idle. It also checks for active crawling, LinkGrabber
collection, and the extraction queue.

Run this script with the `Interval` trigger. An interval of at least `600000`
milliseconds (10 minutes) is recommended.

The optional `hours` variable can be changed in the script:

```javascript
var hours = 0;
```

`0` disables the timed override. A value greater than `0` allows the update
after the specified number of hours, even if JDownloader is not idle yet.

### `002-write_info_file.js`

Creates a `JDinfo.txt` file in the package's download folder after the package
has finished. The file can contain:

- Package name, download folder, and size information
- Status and details for all included parts
- URLs and comments, when available
- Used archive passwords, when available
- Information about detected archives

Recommended trigger: `Package Finished`

If the file already exists, new information is appended. For very long paths,
the script automatically falls back to a shorter file name.

## Installation

1. Enable `Event Scripter` in jDownloader2 under `Settings`.
2. Create a new script in Event Scripter.
3. Paste the contents of the desired `.js` file into the script editor.
4. Select the appropriate trigger and enable the script.
5. For `000-notify_over_telegram.js`, enter the bot ID and chat ID.

The scripts use JDownloader APIs such as `package`, `callAPI`,
`isDownloadControllerIdle()`, and `writeFile()`. They are intended to run in
the JDownloader Event Scripter environment, not in Node.js.

## Notes

- Do not share the Telegram bot ID or chat ID publicly.
- `001-auto_updater.js` only starts an update when one is actually available.
- The scripts require the Event Scripter environment included with JDownloader2.
