import prisma from "@/lib/prisma"

export async function GET(request: Request) {

    try {

        const products = await prisma.product.findMany()

        return Response.json(products)

    } catch (error) {
        console.error("Error fetching data:", error)
    }

}