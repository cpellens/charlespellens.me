<script>
    import AboutMe from "./Profile/AboutMe.svelte";
    import HeaderBar from "./Header/Bar.svelte";
    import FooterBar from "./Footer/Bar.svelte";
    import List from "./Social/List.svelte";

    let config = {
        snapchat: 'https://snapchat.com/add/',
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/',
        spotify: 'https://open.spotify.com/user/',
        envelope: 'mailto:',
        world: 'https://charlespellens.com/#'
    };

    let profile = {
        name: 'Charles Pellens',
        profilePic: '/dist/assets/images/profile.jpg',
        bio: 'Hey, I\'m Charles! I\'m always up to something new so be sure to connect with me on my socials below to see what I\'m creating next!',
        showAboutMe: false
    };

    let socials = [
        {
            type: 'service',
            service: 'Snapchat',
            value: 'cpellens'
        },

        {
            type: 'service',
            service: 'Instagram',
            value: 'cpellens'
        },

        {
            type: 'service',
            service: 'Twitter',
            value: 'charles_pellens'
        },

        {
            type: 'service',
            service: 'Spotify',
            value: '1214513760',
            label: 'Charles on Spotify'
        },

        {
            type: 'general',
            service: 'envelope',
            value: 'contact@charlespellens.com'
        },

        {
            type: 'general',
            service: 'world',
            value: 'via-atsignme',
            label: 'www.charlespellens.com'
        }
    ];

    $: document.title = `${profile.name} - Socials`;
</script>

<HeaderBar text="{profile.name}"/>
<main>
    <AboutMe bind:profile/>
    <List bind:socials bind:config/>
</main>
<FooterBar/>

<style lang="scss">
    @import '../main';

    main {
        margin-top: calc(var(--header-height) + var(--spacing));
    }
</style>