---
layout: default
title: Utilities
---

We have a few tools that may make working with KonOpas easier:<br><br>

[Configurator](/util/config) (JS)<br>Reads your <tt>program</tt> and/or <tt>people</tt> data and generates a starting filter configuration to use in your HTML.<br><br>

[CSV to JSON(P) converter](/util/csv2json) (JS)<br>Takes a CSV formatted file, with field names on the first row. Result will be a JSON array of objects, optionally wrapped as a JavaScript variable.<br><br>

[JSONP updates generator](/util/csv2json) (JS)<br>Takes as input Javascript files that define variables such as <tt style="white-space:nowrap">var program = ...;</tt> and <tt style="white-space:nowrap">var people = ...;</tt> and generates an <tt>updates</tt> changeset, as specified by the [KonOpas data format](/data-fmt).<br><br>

[Google Drive Spreadsheet -> KonOpas converter](https://github.com/eemeli/konopas/tree/master/util/gdrive2js) (PHP)<br>A script that allows using a Google Drive/Docs spreadsheet as a data source for KonOpas<br><br>