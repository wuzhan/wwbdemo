export default {
  // 消息提醒
  findRemindList (query) {

    /*runAsync1()
      .then(function(data){
        console.log(data);
        return runAsync2();
      })
      // .then(function(data){
      //   console.log(data);
      //   return runAsync3();
      // })
      // .then(function(data){
      //   console.log(data);
      // });

      .then(function(data){
        console.log(data);
        return '直接返回数据';  //这里直接返回数据
      })
      .then(function(data){
        console.log(data);
      });*/

    /*Promise
      .all([runAsync1(), runAsync2(), runAsync3()])
      .then(function(results){
        console.log(results);
      });*/

    Promise
      .race([runAsync1(), runAsync2(), runAsync3()])
      .then(function(results){
        debugger
        console.log(results);
      });

  }

}


function runAsync1(){
  var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
      console.log('异步任务1执行完成');
      resolve('随便什么数据1');
    }, 1000);
  });
  return p;
}
function runAsync2(){
  var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
      console.log('异步任务2执行完成');
      resolve('随便什么数据2');
    }, 2000);
  });
  return p;
}
function runAsync3(){
  var p = new Promise(function(resolve, reject){
    //做一些异步操作
    setTimeout(function(){
      console.log('异步任务3执行完成');
      resolve('随便什么数据3');
    }, 2000);
  });
  return p;
}
