-- CreateEnum
CREATE TYPE "Categories" AS ENUM ('comida', 'bebidas', 'limpieza', 'cuidado personal');

-- CreateEnum
CREATE TYPE "SubCategory" AS ENUM ('vegetales', 'frutas', 'vino', 'te', 'cafe', 'cerveza', 'bebes', 'higiene personal', 'casa y cocina', 'panadería', 'lácteos y huevos', 'carne y aves', 'bebidas sin alcohol', 'productos de limpieza', 'cereales y botanas', 'pescados y mariscos');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "Categories" NOT NULL,
    "subCategory" "SubCategory" NOT NULL,
    "offer" BOOLEAN NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "stock" INTEGER NOT NULL,
    "ventas" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
