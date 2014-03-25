---
layout: default
title: Readme
---


[KonOpas] is a front end for the programme of a convention, conference or any
other single- or multi-track event. It's written in JavaScript, and it works in
practically all modern browsers, including those on mobile phones. It can use
HTML5 caching to make itself available even without a live net connection, and
it remembers your item selections across sessions.

The hosting requirements for KonOpas are minimal, as all the processing is done
by the browser; all the files are served statically. Some back-end scripting may
be required if you require live updates of the programme during the event.

The open-source KonOpas client can also talk with a dedicated KonOpas server.
The server enables item sync across different browsers, devices and calendar
apps; item-specific voting and commenting; and allows the event organisers to
track which items were the most popular. To enable server access for your event,
please get in touch with us at: info@konopas.org

[KonOpas]: http://konopas.org/


## Getting Started

As KonOpas is just a front end for your event's programme, you'll need to
actually manage your programme with a different tool. So far we've got built-in
integration with at least [Conference Planner] and [Zambia], with more to come.
For smaller events, a simple [PHP script] is included for fetching data from a
publicly readable Google Drive Spreadsheet and converting it to the KonOpas
format.

Once you've got your programme data in the [proper format][KO-fmt], you can use
our [configurator][KO-cfg] to get you started with customizing KonOpas for your
event. That'll produce snippets of HTML that you can place into the included
`index.html` file, mainly so that you can get the initial filters to match your
programme data (each item's day, location and tags, if any). You should tune
these to your liking, and follow the included examples for second-level menus if
necessary. Don't forget to change the `data/program.js` and/or `data/people.js`
scripts that are included from `index.html`! Accessing the programme database at
a different domain should be fine, provided that it's not served over HTTPS.

KonOpas takes a few optional parameters that you should define with the
`konopas_set` object; to see what's available, take a look at the `src/app.js`
file. To change the gudie's appearance, you should make changes directly into
`index.html`, eg. replacing the title graphics with your own. For more in-depth
changes such as changes to the color scheme or fonts, you'll need to edit the
`skin/*.less` files and recompile them into CSS. For internationalization and
other needs, we have a few other [utilities][KO-util] available.

The HTML5 [cache manifest] is by default not enabled, as it makes testing and
development a bit of a hassle. To enable, you should update the contents of
`cache.manifest` to match your deployment and add a reference to it in the
`<html>` tag. Do check that your server is properly serving it with the
`text/cache-manifest` MIME type, and that the manifest doesn't include itself,
as debugging a bad manifest can be tricky.

[Conference Planner]: http://sourceforge.net/projects/conferenceplan/
[Zambia]: http://sourceforge.net/projects/zambia/
[PHP script]: https://github.com/eemeli/konopas/tree/master/util/gdrive2js
[KO-fmt]: http://konopas.org/data-fmt
[KO-cfg]: http://konopas.org/util/config
[KO-util]: http://konopas.org/util/
[cache manifest]: http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5


## Compilation & Dependencies

For **styling**, KonOpas uses [LESS], which requires compilation into CSS if
modified. This should make it easier for you to tune the default KonOpas skin to
match your needs.

For **internationalization**, we use a [custom branch][MF-fill] of Alex Sexton's
[messageformat.js], with a few features that haven't been included in the master
(yet). If you'd like to implement your own localization, the easiest way is
probably to use our [online i18n.js generator][KO-i18n] and to save the output
as `i18n/i18n.js`.

For **JavaScript minification**, we use the [javascript-minifier.com] service's
HTTP API.

For ease of use during development, all of the above are accessible from the
included `Makefile`. Provided that the above dependencies are installed, `make
dev` should provide a development version of KonOpas and `make prod` a version
that ready to deploy. Note that the appropriate `<script>` tag in `index.html`
will also be updated to reflect the version in use. If you've [Watchman]
installed, `make watch` will start it with triggers for automatically updating
the JS & CSS files during development.

[LESS]: http://lesscss.org/
[MF-fill]: https://github.com/eemeli/messageformat.js/tree/fill
[messageformat.js]: https://github.com/SlexAxton/messageformat.js
[KO-i18n]: http://konopas.org/util/i18n/
[javascript-minifier.com]: http://javascript-minifier.com/
[Watchman]: https://github.com/facebook/watchman


## Discussion

We have a public [mailing list][KO-list] that you're welcome to join, or just
follow online.

[KO-list]: https://groups.google.com/d/forum/konopas-dev

