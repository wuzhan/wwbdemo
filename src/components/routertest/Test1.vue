
<template>
  <div>
    test1
    <el-button @click="goto">跳转</el-button>
  </div>
</template>

<script>
  export default {
    name: "Test1",
    methods: {
      goto() {
        this.$router.push({name: "test2", query:{type: false}})
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log("****************Test1****Enter**************");
      console.log('to', to);
      console.log('from', from);
      console.log('next', next);
      next(vm => {
        //因为当钩子执行前，组件实例还没被创建
        // vm 就是当前组件的实例相当于上面的 this，所以在 next 方法里你就可以把 vm 当 this 来用了。
        console.log(vm);//当前组件的实例
      });
    },
    beforeRouteUpdate(to, from, next) {
      //在当前路由改变，但是该组件被复用时调用
      //对于一个带有动态参数的路径 /good/:id，在 /good/1 和 /good/2 之间跳转的时候，
      // 由于会渲染同样的good组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log("****************Test1*******Update***********");
      console.log(this, 'Update'); //当前组件实例
      console.log('to', to);
      console.log('from', from);
      console.log('next', next);
      next();
    },
    beforeRouteLeave(to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
      console.log("****************Test1****Leave**************");
      console.log(this, 'Leave'); //当前组件实例
      console.log('to', to);
      console.log('from', from);
      console.log('next', next);
      next();
    }
  }
</script>

<style scoped>

</style>
