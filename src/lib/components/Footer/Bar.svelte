<script lang="ts">
    import { PUBLIC_EMAIL_CONTACT_ME } from "$env/static/public";
</script>

<footer>
    <aside>
        Created by <strong>Charles M. Pellens</strong> &copy; 2021 - All rights reserved.
    </aside>

    {#if PUBLIC_EMAIL_CONTACT_ME}
    <aside>
        <a href="mailto:{PUBLIC_EMAIL_CONTACT_ME}">Want a website like this?</a>
    </aside>
    {/if}
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