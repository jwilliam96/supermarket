import { fetchFilterProducts } from "@/actions/search/fetchFilterProducts"

export async function ListSearch({ query }: { query: string }) {

    const filterProducts = await fetchFilterProducts(query)

    return (
        <div>
        </div>
    )
}
