export class CatsApi {
    public static async getAll() {
        const data = await fetch(
            "http://localhost:3000/cats/",
            {
                method: "GET"
            }
        )

        const resp = data.json();

        return resp;
    }
}