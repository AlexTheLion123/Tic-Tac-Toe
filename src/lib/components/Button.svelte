<script>
    import { createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    function resetBoard() {
        dispatch('reset')
    }
</script>

<button on:click={resetBoard}>Reset</button>

<style>
    button {
        border: 1px solid black;
        padding: 10px;
        margin: 30px;
    }
</style>