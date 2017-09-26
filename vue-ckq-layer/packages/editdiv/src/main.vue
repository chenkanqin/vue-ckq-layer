<template>
    <div class="ckq_edit-div"
         v-html="innerText"
         :contenteditable="canEdit"
         @focus="isLocked = true"
         @blur="isLocked = false"
         @input="changeText" :style="style">
    </div>
</template>

<script>
    export default{
        name: 'ckq-editDiv',
        props: {
            value: {
                type: String,
                default: ''
            },
            canEdit: {
                type: Boolean,
                default: true
            },
            minHeight: {
                type: String,
                default: '50'
            },
        },
        data(){
            return {
                innerText: this.value,
                isLocked: false,
                style:{
                    'min-height':this.minHeight+'px'
                }
            }
        },
        watch: {
            'value'(){
                if (!this.isLocked || !this.innerText) {
                    this.innerText = this.value;
                }
            }
        },
        methods: {
            changeText(){
                this.$emit('input', this.$el.innerText);
            }
        }
    }
</script>
<style type="text/css">
    .ckq_edit-div {
        width: 100%;
        height: 100%;
        word-break: break-all;
        outline: none;
        user-select: text;
        white-space: pre-wrap;
        text-align: left;
    }
    .ckq_edit-div[contenteditable=true]{
         user-modify: read-write-plaintext-only;
    }
    .ckq_edit-div.edit-divempty:before {
         content: attr(placeholder);
         display: block;
         color: #ccc;
     }
</style>
