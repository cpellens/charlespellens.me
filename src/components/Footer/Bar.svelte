<footer>
    <aside>
        <strong>Michigan Web Development</strong> &copy; 2021 - All rights reserved.
    </aside>

    <aside>
        <a href="mailto:contact@michiganwebdev.com">Want a website like this?</a>
    </aside>
</footer>

<style lang="scss">
    footer {
        background-color: var(--secondary-color);
        color: white;
        padding: var(--spacing);
        min-height: var(--header-height);
        margin-top: var(--spacing);
        width: 100%;
        box-sizing: border-box;
        font-size: 0.8em;
        display: flex;
        flex-direction: column;

        strong {
            color: var(--primary-color);
        }

        aside {
            text-align: center;
            padding: var(--spacing);
            box-sizing: border-box;
        }
    }
</style>