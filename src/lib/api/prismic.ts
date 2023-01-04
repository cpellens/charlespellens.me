import { PRISMIC_ENDPOINT_API, PRISMIC_TOKEN } from "$env/static/private";
import { createClient, type Client } from "@prismicio/client";

let client: Client;

export async function getPrismicClient(): Promise<Client> {
    if (client) {
        return client;
    }

    client = createClient(PRISMIC_ENDPOINT_API, {
        accessToken: PRISMIC_TOKEN
    });

    return client;
}