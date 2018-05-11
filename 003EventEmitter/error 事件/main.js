/**
 * Created by 丸子 on 2018/5/11.
 */
var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');