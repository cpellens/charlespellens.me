import { env } from "$env/dynamic/private";
import { createClient, type Client } from "@prismicio/client";

let client: Client;

export async function getPrismicClient(): Promise<Client> {
    if (client) {
        return client;
    }

    client = createClient(env.PRISMIC_ENDPOINT_API, {
        accessToken: env.PRISMIC_TOKEN
    });

    return client;
}