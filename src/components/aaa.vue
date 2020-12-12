<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="go">点我跳转</button>
    <button @click="fetchList">点我执行</button>
  </div>
</template>

<script>
  import noticeAction from '@/actions/notice';
  import noticeAction2 from '@/actions/notice2';
  export default {
    name: 'aaa',
    data () {
      return {
        msg: '我是aaa，哈哈'
      }
    },
    mounted() {
    },
    methods:{
      go(){
        this.$router.push('/bbb')
      },
      fetchList() {
        debugger
        var payload = "wenbo";
        // var result = noticeAction.findRemindList(payload);
        var result2 = noticeAction2.findRemindList(payload);
        console.log(result2);
      },

    }
  }
</script>
