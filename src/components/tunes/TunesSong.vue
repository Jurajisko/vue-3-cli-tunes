<template>

	<transition name="fade">
		<article 
			v-cloak 
			class="tunes-song"
		>
			<div class="inside">
				<h2>{{ songify(song) }}</h2>
				<div class="player-wrapper">
					<img 
						v-if="song.cover"
						:src="song.cover" 
						alt="album cover image">
					<audio
						controls
						:src="song.audioFile"
					/>
				</div>
			</div>
			<footer class="meta">
				{{ song.album }}
			</footer>
		</article>
	</transition>

</template>

<script>
    export default {
        props: {
            song: {
                type: Object,
            }
        },
        methods: {
            songify(song) {
                return song.artist + ' - ' + song.name
            },
            //shorten(str) { return truncate(str, { length: 55 }) },
        },
        
    }
</script>

<style lang="scss" scoped>
@import ' ~@/assets/scss/_variables.scss';

.tunes-song {
	color: $color;
	text-align: left;

	max-width: 24em;
	margin: 0 auto 2em;
	position: relative;

	box-sizing: border-box;
	background-color: #262626;
	border-radius: 0.75em;
}

.inside {
	padding: 1.35em 1.75em 1.75em;
}

h2 {
	font-size: inherit;
	line-height: 1.5em;
	margin: 0;
}

.player-wrapper {
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 1.5em;
}

img {
	width: 5em;
	border: 3px solid white;
	border-radius: 0.5em;
}

audio {
	outline: none;
	max-width: 14em;
}

audio::-webkit-media-controls-panel {
	background: #fff;
}

.meta {
	font-size: 0.75em;
	font-weight: 800;
	line-height: 1.5;
	color: rgba(255, 255, 255, 0.6);

	padding: 1.5em 2.25em;
	background: rgba(0, 0, 0, 0.2);
	border-bottom-left-radius: 1em;
	border-bottom-right-radius: 1em;
}

// animation
[v-cloak] {
	display: none;
}

.fade-enter-active {
	transition: all 5s ease;
}

.fade-enter-from {
	transform: scale(0.9);
}

// responsive
@media screen and (max-width: 520px) {
	.player-wrapper {
		audio {
			margin-top: 1.5em;
		}

		flex-direction: column;
	}
}

</style>