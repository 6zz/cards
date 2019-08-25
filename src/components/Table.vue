<template>
    <div class="table">
        <ul class="slots">
            <li v-for="(card, index) in cards"
                :key="index"
                class="slot"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CardTable',
    props: {
        cards: Array
    }
}
</script>

<style scoped>
.slots {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 5px;
    padding: 5%;
    list-style: none;
    border-style: groove;
    border: 3px solid goldenrod;
    background: rgb(38, 100, 48)
}
.slot {
    width: 50px;
    height: 60px;
    border: 1px solid rgb(240, 231, 231);
    border-style: dashed;
    border-radius: 5px;
    margin: 5px;
}
</style>