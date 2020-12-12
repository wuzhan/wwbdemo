<!--
<template>
  <div class="hello">
    <button @click="add">加1</button>
    <button @click="reduce">减2</button>
    <button @click="change">change</button>

    <h1>{{ count }}</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {};
    },
    computed: {
      ...mapState(['count'])
    },

    methods: {
      add () {
        // 以相应的 type 调用 store.commit 方法
        this.$store.commit('increment');
        console.log(this.$store.state.count);
      },
      reduce () {
        // 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
        this.$store.commit('reduce', 2);
      },
      change () {
        // 注意：只可以向 store.commit 传入额外的一个参数
        // 如果要传多个参数，就传一个对象作为参数，即大多数情况下，载荷应是一个对象
        this.$store.commit('change', {a: 4, b: 6});
      }
    }

  };
</script>
-->


<!--<template>
  <div class="hello">
    <button @click="add">加1</button>
    <button @click="reduce">减2</button>
    <button @click="change">change</button>

    <h1>{{ count }}</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    data () {
      return {};
    },
    computed: {
      ...mapState(['count'])
    },

    methods: {
      add () {
        // 以相应的 type 调用 store.commit 方法
        this.$store.commit({
          type: 'increment'
        });
      },
      reduce () {
        // 这种没法改用对象风格提交mutation
        // 因为第二个参数必须是对象才能使用对象风格提交mutation
        this.$store.commit('reduce', 2);
      },
      change () {
        this.$store.commit({
          type: 'change',
          a: 4,
          b: 6
        });
      }
    }

  };
</script>-->


<!--<template>
  <div class="hello">
    <button @click="increment">加1</button>
    <button @click="reduce(2)">减2</button>
    <button @click="change({a:4, b:6})">change</button>

    <h1>{{ count }}</h1>
  </div>
</template>

<script>
  // 导入mapState和mapMutations函数
  import { mapState, mapMutations } from 'vuex';

  export default {
    data () {
      return {};
    },
    computed: {
      ...mapState(['count'])
    },

    methods: {
      // 展开运算符+mapMutations辅助函数
      ...mapMutations(['increment', 'reduce', 'change'])
    }
  };
</script>-->

<!--<template>
  <div>
    <button @click="increment">加1</button>

    <h1>{{ count }}</h1>

  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data () {
      return {};
    },
    computed: {
      ...mapState(['count'])
    },
    methods: {
      increment () {
        return this.$store.dispatch('increment');
      }
    }
  };
</script>-->



<template>
  <div>
    <button @click="increment">加1</button>

    <h1>{{ count }}</h1>

  </div>
</template>

<script>
  // 导入mapActions函数
  import { mapState, mapActions } from 'vuex';

  export default {
    data () {
      return {};
    },
    computed: {
      ...mapState(['count'])
    },
    methods: {
      // 展开运算符+mapActions辅助函数
      ...mapActions(['increment'])
    }
  };
</script>
