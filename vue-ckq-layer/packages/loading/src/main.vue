<template>
    <transition name="fadeLoading">
        <div class="ckq-loading" v-if="visible" :style="{'top': top, 'left': left, 'width': width, 'height': height}">
            <div class="ckq-container">
                <div class="loading-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script type="text/javascript">
    export default {
        name: 'ckq-loading',
        props: {
            visible: {
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }
        }
    }
</script>

<style type="text/css">
    .ckq-loading {
        color: #45B0FF;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .ckq-loading .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.53);
        z-index: 999;
    }

    .ckq-loading .ckq-container {
        position: absolute;
        display: inline-block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999999;
    }

    .loading-icon {

    }

    .loading-icon span {
        display: inline-block;
        width: 6px;
        height: 100%;
        border-radius: 4px;
        background: lightgreen;
        -webkit-animation: load 1s ease infinite;
    }

    @-webkit-keyframes load {
        0%, 100% {
            height: 20px;
            background: lightgreen;
        }
        50% {
            height: 30px;
            background: lightblue;
        }
    }

    .loading-icon span:nth-child(2) {
        -webkit-animation-delay: 0.2s;
    }

    .loading-icon span:nth-child(3) {
        -webkit-animation-delay: 0.4s;
    }

    .loading-icon span:nth-child(4) {
        -webkit-animation-delay: 0.6s;
    }

    .loading-icon span:nth-child(5) {
        -webkit-animation-delay: 0.8s;
    }
    .fadeLoading-enter-active, .fadeLoading-leave-active {
        animation-duration: .3s;
        animation-fill-mode: both;
        animation-play-state: paused;
        animation-play-state: running;
        animation-timing-function: linear;
    }

    .fadeLoading-enter-active {
        animation-name: ckq_loading_FadeIn;
    }

    .fadeLoading-leave-active {
        animation-name: ckq_loading_FadeOut;
    }

    .fadeLoading-enter-active {
        opacity: 0;
    }

    @keyframes ckq_loading_FadeIn {
        0% {
            opacity: 0
        }

        100% {
            opacity: 1
        }
    }

    @keyframes ckq_loading_FadeOut {
        0% {
            opacity: 1
        }

        100% {
            opacity: 0
        }
    }
</style>
