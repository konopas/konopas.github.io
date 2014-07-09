---
layout: default
title: Utilities
---

We have a few tools that may make working with KonOpas easier:<br><br>

[i18n.js generator](/util/i18n/) (JS)<br>To localize KonOpas to different languages, we need to pre-process the language rules into JavaScript.<br><br>

[CSV to JSON(P) converter](/util/csv2json) (JS)<br>Takes a CSV formatted file, with field names on the first row. Result will be a JSON array of objects, optionally wrapped as a JavaScript variable.<br><br>

[JSONP updates generator](/util/jsonp-updates) (JS)<br>Takes as input Javascript files that define variables such as <tt style="white-space:nowrap">var program = ...;</tt> and <tt style="white-space:nowrap">var people = ...;</tt> and generates an <tt>updates</tt> changeset, as specified by the [KonOpas data format](/data-fmt).<br><br>

[Google Drive Spreadsheet -> KonOpas converter](https://github.com/eemeli/konopas/tree/master/util/) (PHP)<br>A script that allows using a Google Drive/Docs spreadsheet as a data source for KonOpas<br><br>
