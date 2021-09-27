<script>
    import Gameboard from '$lib/Gameboard'
    import Button from '$lib/components/Button.svelte'
    import { tick } from 'svelte'
    
    const myGame = new Gameboard();
    
    async function tileClickHandler(position) {
        try {
            myGame.move(position);
            myGame.board = myGame.board;
            await tick();
            if(myGame.checkWon()){
                alert("The game has been won")
                myGame.reset();
            }

        } catch(e) {
            alert(e)
        }
    }

</script>

<div class="board">
    {#each Array(9) as tile, i}
        <div class="tile" on:click={() => tileClickHandler(i)}>
            {myGame.board[i]}
        </div>    
    {/each}
</div>

<Button on:reset={() => {
    myGame.reset();
    myGame.board = myGame.board
}}/>

<style>
    .board {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        border: 1px solid black;

        width: 27rem;
        margin: auto;
        height: 27rem;

    }

    .tile {
        border: 1px solid black;

        display: grid;
        place-items: center;
        font-size: 3em;
    }
</style>