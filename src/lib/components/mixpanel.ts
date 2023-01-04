import { dev } from "$app/environment";
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

    mixpanel = init("fb16d05bbe2c8ee0949a9f2112eea62b", {}, "charlespellens.me");

    return mixpanel
}