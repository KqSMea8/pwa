<template>
    <div class="page-index">
        <img src="@/static/img/icons/ico.png" alt="">
        <h3>冬阳</h3>
        <p>我是一个PWA应用</p>
        <button @click='go'>跳转</button>
        <div contenteditable='true' class="inp" @input="change($event)">jdhsakf</div>
    </div>
</template>

<script>
import Vue from 'vue';
import Test from '@/components/Test.vue';

function setState(store) {}

export default {
    name: 'index',
    metaInfo: {
        title: 'Home',
        titleTemplate: '%s - Lavas',
        meta: [
            {name: 'keywords', content: 'lavas PWA'},
            {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
        ]
    },
    mounted() {
        // setTimeout(()=>{
        //     this.$loading.set(50)
        // },3000)
        var c = document.querySelector('.inp');
        console.log(c.innerHTML)
    },
    components: {
        Test
    },
    async asyncData({store, route}) {
        setState(store);
    },
    methods: {
        go() {
            this.$router.push({path: '/appshell'})
        },
        change(e) {

            console.log(e.target.innerHTML)
        }
    }
};
</script>

<style lang="stylus" scoped>

.page-index
    display flex
    justify-content center
    align-items center
    flex-direction column
    img 
        margin-top 30px
        width 88px
        height 88px
    h3
        font-size 30px
        font-weight 500
        margin 0
        margin-top 20px
    button 
        width 80px
        height 36px
        font-size 16px
        background-color #3385ff
        border-radius 5px
        color #fff
    .inp {
        width 98%
        height 40px
        line-height 42px
        border 1px solid #cccccc
        border-radius 5px
        outline none
        text-align left
        text-indent 6px
    }
</style>
