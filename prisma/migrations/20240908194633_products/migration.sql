/*
  Warnings:

  - You are about to alter the column `ventas` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "ventas" SET DEFAULT 0,
ALTER COLUMN "ventas" SET DATA TYPE INTEGER;
