<nav>
    <h1>Tic Tac Toe</h1>
</nav>

<slot></slot>

<style>
    nav {
        background: #fafafa;
        height: 3rem;
        font-size: 1.5rem;
        border-bottom: 0.05rem solid #a8a8a8;
        width: 70%;
        
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 2rem;

    }

    :global(html) {
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

    :global(body) {
        margin: 0;
        background: #fafafa
    }
</style>