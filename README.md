# word-diff

word-diff is a word based inline string diff library, based on John Resig's [Javascript Diff Algorithm][0]. Focus is put on producing comprehensible diff instead of a compact one.
The diff consists of the minimal count of items describing changes in the string. Both the original and the changed string can be reproduced from the diff. Whitespace-only differences are ignored.

## Installation

### Installing word-diff
``` bash
  $ [sudo] npm install word-diff
```
  
## Usage
This module can be used to generate word based diff for two strings.

``` js
    var worddiff = require('word-diff');

    worddiff.diffString(
        'what a great time to be alive',
        'how great it is to be alive'
    )

    // returns:
    [
        {'remove': 'what a ', 'add': 'how '},
        {'text': 'great '},
        {'remove': 'time ', 'add': 'it is '},
        {'text': 'to be alive'}
    ]
```

For more examples, have a look at the [tests][2].

#### Author: [Laszlo Megyer][1]

[0]: http://ejohn.org/projects/javascript-diff-algorithm
[1]: mailto:lezlands@gmail.com
[2]: https://github.com/lez/word-diff/blob/master/test.js
