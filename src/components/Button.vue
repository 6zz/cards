<template>
    <button class="btn" :class="{primary}">{{label}}</button>
</template>

<script>
export default {
    name: 'btn',
    props: {
        label: String,
        primary: Boolean
    }
}
</script>

<style scoped>
.btn {
    padding: 10px;
    border-radius: 5px;
    border: 2px solid grey;
    border-style: outset;
    outline: none !important;
}

.primary {
    font-weight: bold;
    color: white;
    background-color: rgb(89, 89, 241);
}
</style>