<template>
    <transition name="fadeMessage">
        <div class="ckq-message" v-if="isShow">
            {{message}}
        </div>
    </transition>
</template>

<script type="text/javascript">
    export default {
        name: 'ckq-message',
        data () {
            return {
                message: '',
                time: 2000,
                isShow: true
            }
        },
        mounted () {
            this.close()
        },
        created(){
            console.log('sss');
        },
        methods: {
            close () {
                var that = this
                window.setTimeout(function() {
                    that.isShow = false
                }, this.time);
            }
        }
    }
</script>

<style type="text/css">
    .ckq-message { 
        position: fixed;
        padding: 10px;
        border-radius: 2px;
        top: 45%;
        left: 45%;
        z-index: 999999999;
        min-width: 100px;
        filter: alpha(opacity=60);
        background-color: rgba(0,0,0,.6);
        color: #fff;
        border: none;
        text-align: center;
        font-size:14px;
        letter-spacing: 1px;
    }
    .fadeMessage-enter-active,.fadeMessage-leave-active {
        animation-duration: .1s;
        animation-fill-mode: both;
        animation-play-state: paused;
        animation-play-state: running;
        animation-timing-function: linear;
    }
    .fadeMessage-enter-active {
        animation-name: ckq_message_FadeIn;
    }
    .fadeMessage-leave-active {
        animation-name: ckq_message_FadeOut;
    }
    @keyframes ckq_message_FadeIn {
        0% {
            transform: scale(0.5);
        }

        100% {
            transform: scale(1);
        }
    }
    @keyframes ckq_message_FadeOut {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(0.5);
        }
    }
</style>
