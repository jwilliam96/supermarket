import { productsData } from "./productData";
import prisma from '../lib/prisma';


async function main() {

    await prisma.product.createMany({
        data: productsData
    })
    console.log("seed ejecuto correctamente")

}
(() => {

    if (process.env.NODE_ENV === 'production') return;

    main();
})();
