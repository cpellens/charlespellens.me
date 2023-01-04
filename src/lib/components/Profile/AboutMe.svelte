<script lang="ts">
    import type { Profile } from "$lib/types/profile";
    import { getMixpanel } from "../mixpanel";

    export const ssr = false;
    export let profile: Profile;

    let innerHeight: number;

    $: showAboutMe = profile?.showAboutMe || innerHeight >= 1000;
    $: showProfilePic = showAboutMe && (typeof profile.profilePic !== 'undefined');
    $: showBioSection = showAboutMe && !!profile.bio;

    const showAboutMeSection = async () => {
      profile.showAboutMe = true;

      const mixpanel = await getMixpanel();
      mixpanel?.track('show-about-me');
    }
</script>

<svelte:window bind:innerHeight/>

<section>
    {#if showProfilePic}
        <aside class="profile-pic">
            <!--suppress HtmlUnknownTarget -->
            <img src="{profile.profilePic}" alt="Photo of {profile.name}"/>
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
    margin: var(--half-big-spacing) auto;
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
          @include fadeIn;

          color: white;
          padding: var(--spacing);
          margin: 0;
          box-sizing: border-box;
          flex: 1;
          display: flex;
          text-align: left;
          letter-spacing: 0.05em;
          align-items: center;
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