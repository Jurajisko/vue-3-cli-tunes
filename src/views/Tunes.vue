<template>

    <section class="tunes">
        <h1>iTunes</h1>
        <tunes-search-form />
        <tunes-list />
    </section>

</template>

<script>
import TunesSearchForm from '@/components/tunes/TunesSearchForm.vue'
import TunesList from '@/components/tunes/TunesList.vue'

    export default {
        components: {
            TunesSearchForm, TunesList,
        },

    }
</script>

<style lang="scss" scoped>

    ul {
        padding-left: 0;
        margin-top: 2em;
    }

</style>