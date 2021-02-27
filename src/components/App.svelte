<script>
    import Name from "./Name.svelte";
    import SocialsList from "./SocialsList.svelte";

    let config = {
        snapchat: 'https://snapchat.com/add/',
        instagram: 'https://instagram.com/',
        twitter: 'https://twitter.com/',
        spotify: 'https://open.spotify.com/user/',
        envelope: 'mailto:'
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
        }
    ];
</script>

<Name name="Charles Pellens"/>

<main>
    <SocialsList bind:socials bind:config/>
</main>