<script>
    import Name from "./Name.svelte";
    import SocialsList from "./SocialsList.svelte";

    let socials = [
        {
            service: 'SnapchatSnapchat',
            value: 'cpellens'
        },

        {
            service: 'Instagram',
            value: 'cpellens'
        },

        {
            service: 'Twitter',
            value: 'charles_pellens'
        },

        {
            service: 'Spotify',
            value: 'cpellens'
        },

        {
            service: 'E-mail',
            value: 'contact@charlespellens.com'
        }
    ];
</script>

<Name name="Charles Pellens"/>

<main>
    <h2>Social Media Accounts</h2>

    <SocialsList bind:socials/>
</main>

<style lang="scss">
    :root {
        --primary-color: #984444;
        --secondary-color: #531d1d;
        --spacing: 8px;
        --font-size: 14pt;
        --tile-size: 64px;
        --anim-time: 0.25s;
    }

    main {
        background-color: rgba(white, 0.4);
        backdrop-filter: blur(6px);
        width: 600px;
        padding: var(--spacing);
        margin: 8em auto;
        box-sizing: border-box;
        font-size: var(--font-size);

        h2 {
            color: var(--secondary-color);
            text-align: center;
            margin: 0;
            line-height: 1.5em;
            user-select: none;
            font-weight: bolder;
            font-size: 2em;
        }
    }
</style>