<script lang="ts">
	export let classes = '';
</script>

<h1 class={classes}><slot /></h1>

<style lang="scss">
	h1 {
		font-size: 2.7em;
		font-family: var(--title-f);
		font-weight: 800;
		letter-spacing: 4px;
		text-align: center;
	}
</style>
