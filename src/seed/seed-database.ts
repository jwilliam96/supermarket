import prisma from '../lib/prisma';
import { initialData } from './productData';

async function main() {
    try {
        // ELIMINAR TABLAS
        await prisma.user.deleteMany()
        await prisma.favorite.deleteMany()
        await prisma.product.deleteMany();
        await prisma.subCategory.deleteMany();
        await prisma.category.deleteMany();

        const { categoriesData, productsData } = initialData;

        // CREAR CATEGORÍAS
        const categories = categoriesData.map((category) => ({ category }));

        await prisma.category.createMany({
            data: categories,
        });

        // CREAR PRODUCTOS Y SUB CATEGORÍAS
        for (const product of productsData) {
            const { subCategory, category, ...rest } = product;

            // Encontrar la categoría
            const getCategoryId = await prisma.category.findFirst({
                where: { category },
            });

            // Verificar si la sub categoría ya existe
            let getSubcategory = await prisma.subCategory.findUnique({
                where: { subcategory: subCategory },
            });

            // Crear la sub categoría si no existe
            if (!getSubcategory && getCategoryId) {
                const createSubcategory = await prisma.subCategory.create({
                    data: { subcategory: subCategory, categoryId: getCategoryId?.id },
                });

                getSubcategory = createSubcategory
            }


            // Crear el producto (opcional)
            if (getCategoryId?.id && getSubcategory) {
                await prisma.product.create({
                    data: { ...rest, categoryId: getCategoryId?.id, subCategoryId: getSubcategory?.id },
                });
            }
        }

        console.log('Seed ejecutado correctamente');
    } catch (error) {
        console.error('Error durante la ejecución del seed:', error);
    }
}

(() => {
    if (process.env.NODE_ENV === 'production') return;
    main();
})();
