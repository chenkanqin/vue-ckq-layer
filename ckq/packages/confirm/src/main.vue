<template>
    <transition name="fadeConfirm">
        <div class="ckq-confirm" v-if="visible">
            <div class="bg"></div>
            <div class="ckq-modal-wrap">
                <div class="ckq-modal" :style="{width: width}">
                    <div class="ckq-modal-content">
                        <div class="ckq-modal-header">
                            <div class="ckq-modal-header-inner">
                                {{title}}
                            </div>
                            <i @click="close" class="ckq_icon-close" v-if="closeVisible"></i>
                        </div>
                        <div class="content">
                            <slot></slot>
                        </div>
                        <div class="ckq-modal-footer">
                            <button @click="cancel" type="button" class="ckq-btn ckq-btn-text ckq-btn-large">
                                <span>取消</span>
                            </button>
                            <button @click="ok" type="button" class="ckq-btn ckq-btn-primary ckq-btn-large">
                                <span>确定</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>

<script type="text/javascript">
    export default {
        name: 'ckq-confirm',
        props: {
            width: {
                type: String,
                default: '500px'
            },
            title: {
                type: String,
                default: '信息'
            },
            visible: {
                type: Boolean,
                default: false
            },
            closeVisible: {
                type: Boolean,
                default: true
            },
        },
        data () {
            return {}
        },
        methods: {
            close () {
                this.$emit('update:visible', false)
            },
            ok(){
                this.$emit('ok', 1);
                this.close();
            },
            cancel(){
                this.$emit('cancel', 2);
                this.close();
            },
        }
    }
</script>

<style type="text/css">
    .ckq-modal-content {
        position: relative;
        background-color: #fff;
        border: 0;
        border-radius: 6px;
        background-clip: padding-box;
    }

    .ckq-confirm .bg {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(55, 55, 55, .6);
        height: 100%;
        z-index: 1000;
    }

    .ckq-modal-wrap {
        position: fixed;
        overflow: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        -webkit-overflow-scrolling: touch;
        outline: 0;
    }

    .ckq-confirm * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    .ckq-confirm .ckq-modal {
        width: auto;
        margin: 0 auto;
        position: relative;
        outline: 0;
        top: 100px;
        z-index: 10001;
    }

    .ckq-modal-header {
        border-bottom: 1px solid #e9eaec;
        padding: 14px 16px;
        line-height: 1;
    }

    .ckq-modal-header-inner {
        display: inline-block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #1c2438;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ckq-confirm .content {
        padding: 16px;
        font-size: 12px;
        line-height: 1.5;
    }

    .ckq-modal-footer {
        border-top: 1px solid #e9eaec;
        padding: 12px 18px 12px 18px;
        text-align: right;
    }

    .ckq-btn {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        line-height: 1.5;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 6px 15px;
        font-size: 12px;
        border-radius: 4px;
        transition: color .2s linear, background-color .2s linear, border .2s linear;
        color: #495060;
        background-color: #f7f7f7;
        border-color: #dddee1;
    }

    .ckq-btn-text {
        color: #495060;
        background-color: transparent;
        border-color: transparent;
    }

    .ckq-btn-large {
        padding: 6px 15px 7px 15px;
        font-size: 14px;
        border-radius: 4px;
    }

    .ckq-btn, .ckq-btn:active, .ckq-btn:focus {
        outline: 0;
    }

    .ckq-btn-primary {
        color: #fff;
        background-color: #2d8cf0;
        border-color: #2d8cf0;
    }

    .ckq-modal-footer button + button {
        margin-left: 8px;
        margin-bottom: 0;
    }

    .ckq-btn:hover {
        color: #57a3f3;
        background-color: #fff;
        border-color: #57a3f3;
    }

    .ckq-btn:hover {
        color: #6d7380;
        background-color: #f9f9f9;
        border-color: #e4e5e7;
    }

    .ckq-btn:not([disabled]):hover {
        text-decoration: none;
    }

    .ckq-btn-primary.active, .ckq-btn-primary:active, .ckq-btn-primary:hover {
        color: #fff;
    }

    .ckq-btn-primary:hover {
        color: #fff;
        background-color: #57a3f3;
        border-color: #57a3f3;
    }

    .ckq-btn-text:hover {
        color: #57a3f3;
        background-color: transparent;
        border-color: transparent;
    }

    i.ckq_icon-close {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 16px;
        top: 16px;
        cursor: pointer;
    }

    i.ckq_icon-close:after, i.ckq_icon-close:before {
        position: absolute;
        content: '';
        width: 1px;
        height: 20px;
        background: #999;
        top: 0;
        left: 50%;
        transform: rotate(-45deg);
        transition: color .2s ease;
    }

    i.ckq_icon-close:before {
        transform: rotate(45deg);
    }

    i.ckq_icon-close:hover:after, i.ckq_icon-close:hover:before {
        background: #444;
    }

    .fadeConfirm-enter-active, .fadeConfirm-leave-active {
        animation-duration: .3s;
        animation-fill-mode: both;
        animation-play-state: paused;
        animation-play-state: running;
        animation-timing-function: linear;
    }

    .fadeConfirm-enter-active {
        animation-name: ckqFadeIn;
    }

    .fadeConfirm-leave-active {
        animation-name: ckqFadeOut;
    }

    .fadeConfirm-enter-active {
        opacity: 0;
    }

    @keyframes ckqFadeIn {
        0% {
            opacity: 0
        }

        100% {
            opacity: 1
        }
    }

    @keyframes ckqFadeOut {
        0% {
            opacity: 1
        }

        100% {
            opacity: 0
        }
    }
</style>
