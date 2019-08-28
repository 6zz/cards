<template>
    <div class="card">
        <CardHalf :top=true :value="value" :suite="suite"/>
        <CardHalf :top=false :value="value" :suite="suite"/>
    </div>
</template>

<script>
import CardHalf from './CardHalf.vue'

export default {
    name: 'Card',
    components: {
        CardHalf
    },
    props: {
        card: Object
    },
    computed: {
        value: function() {
            const o = this.card || {};
            const val = {
                ace: 'A',
                king: 'K',
                queen: 'Q',
                jack: 'J'
            }[o.v || ''];

            return '' + (val || o.v || '');
        },
        suite: function() {
            const o = this.card || {}
            return o.suite || '';
        }
    }
}
</script>

<style scoped>
.card {
    background-color: #fff;
    font-size: 10px;
    border: 1px solid;
    border-radius: 3px;
}
.top,
.bottom {
    box-sizing: border-box;
    padding: 2px;
    height: 30px;
}
.bottom {
    transform: rotate(180deg);
}
.diamonds,
.hearts {
    color: red;
}
.spades::after {
    content: '♠︎';
}
.clubs::after {
    content: '♣︎';
}
.diamonds::after {
    content: '♦︎';
}
.hearts::after {
    content: '♥︎';
}
</style>