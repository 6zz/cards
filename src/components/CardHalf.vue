<template>
    <div :class="classObj">
        <span>{{value}}</span>
    </div>
</template>

<script>
export default {
    name: 'CardHalf',
    props: {
        top: Boolean,
        suite: String,
        value: String
    },
    computed: {
        classObj: function() {
            return {
                top: this.top,
                bottom: !this.top,
                [this.suite]: true
            }
        }
    }
}
</script>