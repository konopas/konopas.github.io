---
layout: default
title: Data formats
---

This is a document defining the data structures to be used with KonOpas, i.e. the format for the JSONP-formatted files that make up the programme database. These file(s) will be included with `<script>` tags, and will need to define up to three variables: `program` (necessary), `people` (optional), and `updates` (not yet implemented).

This is a work in progress, so stuff may still change at any time.

<br>

{% highlight javascript %}
var program = [
	{
		"id": "1234",
		"title": "A Really Cool Item Title",
		"tags": [ "Some track", "Another track" ],
		"date": "2013-12-24",
		"time": "14:30",
		"mins": "90",
		"loc": [ "Some Room", "Some Area" ],
		"people": [
			{ "id": "2345", "name": "Just Sömeguy" },
			{ "id": "4567", "name": "Andhis Friend, Jr." }
		],
		"desc": "Every prögrammé item really ought to have an explanation, unless it's really evident from the title itself what it'll be about."
	},
	{
		"id": "416",
		"title": "An Interview with the Knight of Honour",
		"tags": [ "Another track" ],
		"date": "2013-12-25",
		"time": "23:30",
		"mins": "45",
		"loc": [ "Another Room", "Some Area" ],
		"people": [
			{ "id": "1234", "name": "Sir Galahad" },
			{ "id": "2345", "name": "Just Sömeguy" }
		],
		"desc": ""
	},
	...
];
{% endhighlight %}

"tags" may include any number of programme tracks or other classifying indicators. We may want to add an indicator for those classifiers that should not be listed when the item is viewed in detail, eg. a backtick ` as the first character of the string.

"loc" is similarly expandable.

We should avoid complications related to programme items that go on past midnight, or which have a starting time past midnight, and therefore include "time" for the start time and measure duration in minutes (with 0 for unknown or n/a).

At least "desc" for program.js and "bio" for people.js need to support HTML tags, which may not be supported elsewhere (though they'll probably be fine).

<br>

{% highlight javascript %}
var people = [
	{
		"id": "4567",
		"name": [ "Andhis", "Friend", "", "Jr." ],
		"tags": [],
		"prog": [ "1234", "614", "801" ],
		"links": {},
		"bio": "Prior art for Adams's satirical point – that humans attach such importance to their automobiles that a visiting extraterrestrial might reasonably mistake them for the planet's dominant life form – can be found in a widely reprinted article from <i>The Rockefeller Institute Review</i> titled <i>Life on Earth (by a Martian)</i> by Paul Weiss. The idea was also expounded by Carl Sagan, though this may have postdated Adams's creation of the character of Ford. The 1967 Oscar-nominated animated film <i>What on Earth!</i> from the National Film Board of Canada is also based on this premise."
	},
	{
		"id": "1234",
		"name": [ "Galahad", "", "Sir" ],
		"tags": [ "GoH" ],
		"prog": [ "416" ],
		"links": {
			"img": "/images/galahad.jpg",
			"url": "http://en.wikipedia.org/wiki/Galahad"
		},
		"bio": "Sir Galahad (/ˈɡæləhæd/; Middle Welsh: Gwalchavad, sometimes referred to as Galeas /ɡəˈliːəs/ or Galath /ˈɡæləθ/), in Arthurian legend, is a knight of King Arthur's Round Table and one of the three achievers of the Holy Grail."
	},
	{
		"id": "2345",
		"name": [ "Just", "Sömeguy" ],
		"tags": [],
		"prog": [ "1234", "416", "810" ],
		"links": {
			"twitter": "justsomeguy9999",
			"url": "http://example.com/just-someguys-blog"
		},
		"bio": "He was voted \"Worst Dressed Sentient Being in the Known Universe\" seven consecutive times. He's been described as \"the best Bang since the Big One\" by Eccentrica Gallumbits, and as \"one hoopy frood\" by others. In the seventh episode of the original radio series, the narrator describes Beeblebrox as being the \"owner of the hippest place in the universe\" (his own left cranium), as voted on in a poll of the readers of the fictional magazine Playbeing."
	},
	...
];
{% endhighlight %}

"name" is a different field in program.js's "people" and in people.js; in the former it's ready to print whereas in the latter it's an array `[ "First", "Last", "Prefix", "Suffix" ]` with fields possibly left as empty strings or left out completely.

The possible fields of "links" should not be predetermined.

<br>

{% highlight javascript %}
var updates =  {
	"program": {
		"1234": {
			"title": "A Stupendous Item Title",
			"people": [
				{ "id": "2345", "name": "Just Sömeguy" },
				{ "id": "1234", "name": "Sir Galahad" },
			]
		},
		"416": {
			"time": "20:30",
			"loc": [ "A bigger Room", "Some Area" ]
		},
		"9999": {
			"new": true,
			"id": "9999",
			"title": "The Knight of Honour Reads a Story",
			"tags": [ "Another track" ],
			"date": "2013-12-25",
			"time": "23:30",
			"mins": "45",
			"loc": [ "Another Room", "Some Area" ],
			"people": [
				{ "id": "1234", "name": "Sir Galahad" }
			],
			"desc": ""
		}
	},
	"people": {
		"4567": { },
		"1234": {
			"prog": [ "1234", "416", "9999" ]
		}
	}
};
{% endhighlight %}

Unlike program and people, updates is an associative array, keyed first by the name of the array being modified, and second by the ID of the item in question. Unchanged fields are not included, and deletions are represented by an empty value of the appropriate type ({}, [], or ""). Programme items or participants that were not previously listed should include a value "new" that equates to true.

The example above shows "Andhis Friend, Jr." being removed completely from the programme. In the "A Really Cool Item Title" item he is replaced by "Sir Galahad", which item is also renamed as "A Stupendous Item Title". "An Interview with the Knight of Honour" has also been moved to start earlier, in "A bigger Room" rather than "Another Room". The vacated slot is taken by a new item, "The Knight of Honour Reads a Story".
