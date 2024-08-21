import prisma from '../lib/prisma';
import { initialData } from './productData';


async function main() {

    // ELIMINAR TABLAS
    // await prisma.product.deleteMany()
    await prisma.category.deleteMany()

    // CREAR TABLAS

    const categories = initialData.categories.map(category => ({ category }))

    await prisma.category.createMany({
        data: categories
    })



    console.log("seed ejecuto correctamente")

}
(() => {

    if (process.env.NODE_ENV === 'production') return;

    main();
})();
