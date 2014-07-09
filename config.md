---
layout: default
title: Configuration
---

KonOpas is controlled and configured by setting values in a `konopas_set` array before including the `konopas.min.js` file. The only required field is `id`, a unique alphanumeric identifier for each particular instance of the guide, like `finncon2014`. Everything else has decent default values.

A slightly more complex `konopas_set` definition is included below, tailored to the sample data included with KonOpas.

<br>

{% highlight javascript %}
var konopas_set = {
	'id': 'sample',
	'default_duration': 75,
	'tag_categories': ['track', 'type'],
	'time_show_am_pm': true,
	'show_all_days_by_default': false,
	'people_per_screen': 120,
	'use_server': true,
	'filters': {
		'day': {},
		'area': {
			'loc_level': 0,
			'labels': {
				'all_areas': 'Everywhere',
				'area': 'Other location',
				'Galleria': 'Galleria (1E)',
				'1W': 'Concourse (1W)',
				'2':  'Lobby (2)',
				'3E': 'Conference (3E)',
				'3W': 'Mezzanine (3W)',
				'ArisiaTV': '$ArisiaTV',
				'Commonwealth Ballroom ABC': 'Commonwealth Ballroom',
			},
			'regexp': { 'Galleria': '^Galleria' },
			'promote': ['3W', '3E', '2', '1W', 'Galleria'],
			'exclude': ['^Galleria -', '^Gaming Table', '^Grand Prefunction$']
		},
		'tag': {
			'categories': ['track', 'type'],
			'labels': {
				'all_tags': 'All tracks & types',
				'Featured': 'Featured items',
				'track': 'Track',
				'type': 'Type'
			},
			'promote': ['Featured'],
		}
	}
};
{% endhighlight %}
