<template>
    <div id="ckq_scroll">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name: 'ckq-scroll',
        props: {
            listen: { //是否监听
                type: Boolean,
                default: false
            },
            bottom:{//距离底部多远作为到底部    默认0 px;
                type: Number,
                default: 0
            }
        },
        data(){
            return {
                activeBoxOffsetTop: 0,
                windowScroll: 0,
                inBottom:false,//到底部了
            }
        },
        watch: {},
        created(){
        },
        watch: {
            'windowScroll'(n){
                let config = {
                    windowScroll: n,
                    activeBoxOffsetTop: this.activeBoxOffsetTop,
                    inBottom:this.inBottom
                }
                this.$emit('scroll', config);
            }
        },
        methods: {},
        mounted(){
            let that = this;
            if(!this.listen)return;
            this.activeBoxOffsetTop = document.getElementById('ckq_scroll').offsetTop || 0;
            window.onscroll = function () {
                let b = window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;  //当前滚动条的位置
                let c = window.innerHeight || document.documentElement.clientHeight; // 页面对象高度（即BODY对象高度加上Margin高）
                let e = document.body.scrollHeight;  //真实滚动条的高度
                if(b + c >= e - that.bottom) {
                    that.inBottom = true;
                }
                else {
                    that.inBottom = false;
                }
                that.windowScroll = b;
            }
        }
    }
</script>
