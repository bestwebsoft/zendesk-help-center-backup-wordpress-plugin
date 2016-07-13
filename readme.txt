=== Zendesk Help Center by BestWebSoft ===
Contributors: bestwebsoft
Donate link: http://bestwebsoft.com/donate/
Tags: backup, backup data, database, zendesk, zendesk plugin, zendesk help center, zendesk help center backup, zendesk backup log, zendesk data to database, backup time, help center, save zendesk center data
Requires at least: 4.0
Tested up to: 4.5.3
Stable tag: 1.0.2
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Backup and export Zendesk Help Center content automatically to your WordPress website database.

== Description ==

Zendesk Help Center is a simple yet highly convenient plugin that allows to backup&export your Zendesk Help Center data. The backup is made through the cron within the time frame specified in the settings. The time of the last backup, as well as logs, are displayed on the plugin settings page. Also, if backup error occurs, the plugin sends a message to the email, which is also specified in the settings.

http://www.youtube.com/watch?v=7YT3dlsx0iQ

<a href="http://www.youtube.com/watch?v=0QatAvYLxMM" target="_blank">Zendesk Help Center by BestWebSoft Video instruction on Installation</a>

<a href="http://wordpress.org/plugins/zendesk-help-center/faq/" target="_blank">Zendesk Help Center by BestWebSoft FAQ</a>

<a href="http://support.bestwebsoft.com" target="_blank">Zendesk Help Center by BestWebSoft Support</a>

<a href="http://bestwebsoft.com/products/zendesk-help-center/?k=bd5514f32d2c5691ebcad50c03ab3139" target="_blank">Upgrade to Zendesk Help Center Pro by BestWebSoft</a>

= Features =

* Backup your Zendesk Help Center data
* Export current backup

If you have a feature, suggestion or idea you'd like to see in the plugin, we'd love to hear about it! <a href="http://support.bestwebsoft.com/hc/en-us/requests/new" target="_blank">Suggest a Feature</a>

= Translation =

* Russian (ru_RU)
* Ukrainian (uk)

If you create your own language pack or update an existing one, you can send <a href="http://codex.wordpress.org/Translating_WordPress" target="_blank">the text of PO and MO files</a> to <a href="http://support.bestwebsoft.com/hc/en-us/requests/new" target="_blank">BestWebSoft</a> and we'll add it to the plugin. You can download the latest version of the program for working with PO and MO files <a href="http://www.poedit.net/download.php" target="_blank">Poedit</a>.

= Technical support =

Dear users, our plugins are available for free download. If you have any questions or recommendations regarding the functionality of our plugins (existing options, new options, current issues), please feel free to contact us. Please note that we accept requests in English only. All messages in other languages won't be accepted.

If you notice any bugs in the plugin's work, you can notify us about it and we'll then investigate and fix the issue. Your request should contain URL of the website, issues description and WordPress admin panel credentials.
Moreover, we can customize the plugin according to your requirements. It's a paid service (as a rule it costs $40, but the price can vary depending on the amount of the necessary changes and their complexity). Please note that we could also include this or that feature (developed for you) in the next release and then share it with other users.
We can fix some things for free for the users who provide a translation of our plugin into their native language (this should be a new translation of a certain plugin, you can check available translations on the official plugin page).

== Installation ==

1. Upload `zendesk-help-center` folder to `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Plugin settings are located in 'BWS Panel', 'Zendesk HC'.

<a href="https://docs.google.com/document/d/1Y-eA3oEO_Z1GW0jK8uXGpW3qnxzPIQ2jMBP6ylcWKwo/edit" target="_blank">View a Step-by-step Instruction on Zendesk HC Installation</a>.

http://www.youtube.com/watch?v=0QatAvYLxMM

== Frequently Asked Questions ==

= What exactly will be backed up? =

The plugin creates a backup of the following Zendesk Help Center data:

- Categories
- Sections
- Articles
- Article Comments
- Article Labels
- Article Attachments

= Are Article Attachments saved? = 

Yes, Article Attachments are located in WordPress Downloads folder in zendesk_hc_attachments folder. 

= Does the plugin store backups by versions? =

No, solely the current (pending) backup version is kept. For instance, if some elements were deleted from your Zendesk Help Center, when synchronizing (creating a backup) this data will also be removed. 

= Does the plugin display the data from Zendesk HC? =

No, the plugin merely creates a backup of your data from Zendesk HC you specified to the database. 

= I have some problems with the plugin's work. What Information should I provide to receive proper support? =

Please make sure that the problem hasn't been discussed yet on our forum (<a href="http://support.bestwebsoft.com" target="_blank">http://support.bestwebsoft.com</a>). If no, please provide the following data along with your problem's description:

1. the link to the page where the problem occurs
2. the name of the plugin and its version. If you are using a pro version - your order number.
3. the version of your WordPress installation
4. copy and paste into the message your system status report. Please read more here: <a href="https://docs.google.com/document/d/1Wi2X8RdRGXk9kMszQy1xItJrpN0ncXgioH935MaBKtc/edit" target="_blank">Instuction on System Status</a>

== Screenshots ==

1. Plugin main page.
2. Plugin settings page.

== Changelog ==

= V1.0.2 - 13.07.2016 =
* Update : BWS panel section was updated.
* Pro : Preloader was added for help widget.
* Pro : The information about IP and User Agent has been added to Widget statistic.

= V1.0.1 - 11.04.2016 =
* Update : Notifications was added.

= V1.0.0 - 29.02.2016 =
* Update : We updated all functionality for wordpress 4.4.2.

= V0.1.5 - 21.01.2016 =
* NEW: Ability to export current backup was added.

= V0.1.4 - 09.12.2015 =
* Bugfix : The bug with plugin menu duplicating was fixed.

= V0.1.3 - 05.11.2015 =
* NEW: Current backup info.
* Update : Textdomain was changed.
* Bugfix : The error with the articles backup (if there is a pagination) was fixed.

= V0.1.2 - 09.07.2015 =
* NEW : Ability to restore settings to defaults.

= V0.1.1 - 26.05.2015 =
* Update : We updated all functionality for wordpress 4.2.2.

= V0.1 - 16.04.2015 =
* Bugfix : The code refactoring was performed.

== Upgrade Notice ==

= V1.0.2 =
BWS panel section was updated. Preloader was added for help widget. The information about IP and User Agent has been added to Widget statistic.

= V1.0.1 =
Notifications was added.

= V1.0.0 =
We updated all functionality for wordpress 4.4.2.

= V0.1.5 - 21.01.2016 =
Ability to export current backup was added.

= V0.1.4 =
The bug with plugin menu duplicating was fixed.

= V0.1.3 =
Current backup info was added. Textdomain was changed. The error with the articles backup (if there is a pagination) was fixed.

= V0.1.2 =
Ability to restore settings to defaults.

= V0.1.1 =
We updated all functionality for wordpress 4.2.2.

= V0.1 =
The code refactoring was performed.
