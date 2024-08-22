import prisma from "@/lib/prisma"

export async function GET(request: Request) {

    try {

        const products = await prisma.product.findMany()
        const categories = await prisma.category.findMany()
        const subCategory = await prisma.subCategory.findMany()

        return Response.json({ products, categories, subCategory })

    } catch (error) {
        console.error("Error fetching data:", error)
    }

}