/*
  Warnings:

  - Made the column `ventas` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "ventas" SET NOT NULL,
ALTER COLUMN "ventas" SET DEFAULT 0;
