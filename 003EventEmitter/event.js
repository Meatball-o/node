/**
 * Created by 丸子 on 2018/5/11.
 */
// events 模块只提供了一个对象： events.EventEmitter。EventEmitter 的核心就是事件触发与事件监听器功能的封装。
// EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。
// 当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
  console.log('some_event 事件触发');
});
setTimeout(function() {
  event.emit('some_event');
}, 1000);
// 运行这段代码
// 1 秒后控制台输出了 'some_event 事件触发'。
// 其原理是 event 对象注册了事件 some_event 的一个监听器，
// 然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，
// 此时会调用some_event 的监听器。