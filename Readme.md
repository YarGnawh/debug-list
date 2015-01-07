# debug-list

  Small utility for managing multiple visionmedia/debug

## Installation

```bash
$ npm install debug-list --save
```

## Usage


Example _app.js_:

```js
var notepad = require('debug-list');

// fake app

notepad('booting %s', name);

notepad.add('http');
notepad.add('worker');
notepad.add('process');

http.createServer(function(req, res){
  notepad.http(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function(){
  notepad.http('listening');
});

// fake worker of some kind

require('./worker');
require('./process');
```

Example _worker.js_:

```js
var notepad = require('debug-list');

setInterval(function(){
  notepad.worker('doing some work');
}, 1000);
```

Example _process.js_:

```js
var debug = require('debug')('process');

setInterval(function(){
  debug('processing.... still works');
}, 1000);
```