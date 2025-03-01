import { FavoriteProducts } from "@/ui/favorite/FavoriteProducts";



export default async function FavoritePage() {


    return (
        <div className="max-w-[1600px] mx-auto px-4 my-20">
            <h1 className="text-5xl my-8 font-semibold">Favoritos</h1>

            <FavoriteProducts />
        </div>
    );
}