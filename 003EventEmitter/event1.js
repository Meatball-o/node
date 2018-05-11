/**
 * Created by 丸子 on 2018/5/11.
 */
// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。
// 对于每个事件，EventEmitter 支持若干个事件监听器。
// 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

// emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。
// on 函数用于绑定事件函数，emit 属性用于触
// 发一个事件