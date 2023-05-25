import { Client, Account, Databases } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("646dee02b418bc59c8af");

export const account = new Account(client);
// export const databases = new Databases(client, "6452283d88c7b601db1b");
