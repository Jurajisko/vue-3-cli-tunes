<template>
    
        <ul class="tunes-list">
            <li>
                <tunes-song
                    v-for="song in songs" 
                    :key="song.id"
                    :song="song"
                />
            </li>
        </ul>

</template>

<script>
import TunesSong from '@/components/tunes/TunesSong.vue'

    export default {
        components: {
            TunesSong,
        },
        //props: ['new-songs',],
        data() {
            return {
                songs: [],
            }
        },
        mounted() {
            window.eventBus.on( 'add-new-songs', data => ( this.songs = data ) )
        }
       
    }
</script>

<style lang="scss" scoped>
ul {
	margin-top: 3em;
	padding-left: 0;
	list-style: none;
}
</style>