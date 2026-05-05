/*
  Warnings:

  - Added the required column `nomeTitular` to the `Cartao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cartao" ADD COLUMN     "nomeTitular" TEXT NOT NULL;
