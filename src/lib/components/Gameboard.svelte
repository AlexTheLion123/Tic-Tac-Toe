<script>
    import Gameboard from '$lib/Gameboard'
    const myGame = new Gameboard();
    // myGame.board;

    function tileClickHandler(e, position) {
        try {
            myGame.move(position)
        } catch {
            alert("Someone has already moved there")
        }
        myGame.board = myGame.board
    }

</script>

<div class="board">
    {#each Array(9) as tile, i}
        <div class="tile" on:click={e => tileClickHandler(e,i)}>
            {myGame.board[i]}
        </div>    
    {/each}
</div>

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