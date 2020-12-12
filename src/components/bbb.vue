<template>
  <div>我是bbb
    <button @click="back">点我返回</button>
  </div>

</template>

<script>
  export default {
    name: 'bbb',
    /*data () {
      return {
        msg: '哈哈'
      }
    },*/
    methods:{
      back(){
        this.$router.push('/')
      }
    }
  }
</script>
