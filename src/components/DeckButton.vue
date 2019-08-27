<template>
    <div class="deck-holder">
        <button class="shuffler" @click="$emit('shuffle-deck')">shuffle</button>
        <div class="deck-of-cards" v-if="hasCard" @click="$emit('deal-five')">
            <div 
                class="btn-deck" 
                :class="'deck-card' + n" 
                :key="'card' + n" 
                :style="{left: 2*n + 'px'}"
                v-for="n in 5"
            >
                <div class="inner-thin">
                    <div class="inner-cover"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DeckButton',
    props: {
        hasCard: Boolean
    }
}
</script>

<style scoped>
.deck-holder {
    position: relative;
    border: 1px solid blue;
    width: 50px;
    height: 67px;
    border-style: dashed;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
}
.shuffler {
    background-color: transparent;
    border-style: none;
    font-size: xx-small;
    padding: 2px;
}
.shuffler:hover {
    cursor: pointer;
}
.btn-deck {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 50px;
    background-color: white;
    padding: 1px;
    border-radius: 5px;
}

.btn-deck:hover {
    cursor: pointer;
}

.inner-thin {
    border: 1px solid red;
    padding: 1px;
    border-radius: 5px;
}

.inner-cover {
    height: 60px;
    background-color: red;
    border-radius: 5px;
}
</style>