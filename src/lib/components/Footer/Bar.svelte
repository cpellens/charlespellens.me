<script lang="ts">
    import { env } from "$env/dynamic/public";
    import dayjs from "dayjs/esm"
</script>

<footer class="container mx-auto mt-4 grid grid-cols-2">
    <aside>
        Created by Charles &bull; Copyright &copy; 2021&ndash;{dayjs().year().toString()} - All rights reserved.
    </aside>

    {#if env.PUBLIC_EMAIL_CONTACT_ME}
        <aside class="text-right">
            <a href="mailto:{env.PUBLIC_EMAIL_CONTACT_ME}">Want a website like this?</a>
        </aside>
    {/if}
</footer>