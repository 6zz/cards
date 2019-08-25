<template>
    <div class="table">
        <ul class="slots">
            <li v-for="(card, index) in dealtCards"
                :key="index"
                class="slot"
                @shuffle-deck="shuffle"
                @deal-five="dealFive"
            ></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CardTable',
    data: function() {
        return {
            dealtCards: new Array(5),
        }
    },
    methods: {
        dealFive: function(e) {
            // eslint-disable-next-line
            console.log('dealfivecards', e)
        },
        shuffle: function() {
            // eslint-disable-next-line
            console.log('shuffling');
        }
    }
}
</script>

<style scoped>
.slots {
    display: flex;
    justify-content: space-evenly;
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
}
</style>