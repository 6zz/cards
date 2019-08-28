<template>
    <div :class="[top? 'top':'bottom', suite]">
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
    }
}
</script>