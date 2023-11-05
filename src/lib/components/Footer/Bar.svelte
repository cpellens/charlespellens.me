<script lang="ts">
    import { PUBLIC_EMAIL_CONTACT_ME } from "$env/static/public";
    import dayjs from "dayjs"
</script>

<footer class="container mx-auto mt-4 grid grid-cols-2">
    <aside>
        Created by Charles &bull; Copyright &copy; 2021&ndash;{dayjs().year().toString()} - All rights reserved.
    </aside>

    {#if PUBLIC_EMAIL_CONTACT_ME}
        <aside class="text-right">
            <a href="mailto:{PUBLIC_EMAIL_CONTACT_ME}">Want a website like this?</a>
        </aside>
    {/if}
</footer>