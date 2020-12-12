export default {
  // 消息提醒
  findRemindList (query) {
    // return query + 'wuzhan'
    fn(want);
  }

}

function want () {
  console.log('这是你想要执行的代码');
}

function fn (want) {
  // 将想要执行的代码放入队列中，根据事件循环的机制，我们就不用非得将它放到最后面了，由你自由选择
  want && setTimeout(want, 0)
  console.log('这里表示执行了一大堆各种代码');
}
