import { dev } from "$app/environment";
import { PUBLIC_MIXPANEL_API_KEY } from "$env/static/public";
import {init, type Mixpanel} from "mixpanel-browser";

let mixpanel: Mixpanel;

export async function getMixpanel(): Promise<Mixpanel|null> {
    if (dev) {
        console.info('Dev Environment - No Analytics');
        return null;
    }

    if (mixpanel) {
        return mixpanel;
    }

    mixpanel = init(PUBLIC_MIXPANEL_API_KEY, {}, "charlespellens.me");

    return mixpanel
}