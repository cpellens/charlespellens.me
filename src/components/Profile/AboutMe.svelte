<script>
    export let profile = {};

    $: showAboutMe = profile.showAboutMe || window.innerHeight >= 1000;
    $: showProfilePic = showAboutMe && (typeof profile.profilePic !== 'undefined');
    $: showBioSection = showAboutMe && !!profile.bio;

    const showAboutMeSection = () => {
        if (typeof window.mixpanel !== 'undefined') {
            profile.showAboutMe = true;
            window.mixpanel.track('show-about-me');
        } else {
            profile.showAboutMe = true;
        }
    };
</script>

<section>
    {#if showProfilePic}
        <aside class="profile-pic">
            <!--suppress HtmlUnknownTarget -->
            <img src="{profile.profilePic}" alt="Profile Pic"/>
        </aside>
    {/if}

    {#if showBioSection}
        <aside class="bio">
            <p>{@html (profile.bio || 'Hey! Check out my socials below!')}</p>
        </aside>
    {/if}

    {#if !showAboutMe}
        <button on:click={showAboutMeSection}>More About Me...</button>
    {/if}
</section>

<style lang="scss">
    @import '../../styles/animations/fade-in.scss';

    section {
        display: flex;
        flex-direction: row;
        width: var(--width);
        margin: var(--spacing) auto;
        padding: 0;
        background-color: rgba(white, var(--glass-opacity));
        backdrop-filter: blur(var(--glass-blur));

        aside {
            @include fadeIn;

            flex: 1;
            display: flex;
            flex-direction: column;

            &.profile-pic {
                overflow: hidden;
                text-align: center;

                img {
                    max-width: 100%;
                    user-select: none;
                    pointer-events: none;
                }
            }

            &.bio {
                flex: 2;

                p {
                    color: white;
                    padding: var(--spacing);
                    margin: 0;
                    box-sizing: border-box;
                    flex: 1;
                    text-align: justify;
                }
            }
        }

        button {
            margin: var(--spacing);
            font-family: inherit;
            outline: none;
            border-radius: 0;
            cursor: pointer;
            padding: var(--spacing);
            background: transparent;
            border: solid rgba(white, var(--glass-opacity)) calc(var(--spacing) * 0.25);
            color: white;
            font-size: inherit;
            flex: 1;
        }
    }
</style>