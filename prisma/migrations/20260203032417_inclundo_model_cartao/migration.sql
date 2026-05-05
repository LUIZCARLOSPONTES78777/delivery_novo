/*
  Warnings:

  - Added the required column `cardNumber` to the `Cartao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cvv` to the `Cartao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Cartao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cartao" ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "cvv" TEXT NOT NULL,
ADD COLUMN     "date" TEXT NOT NULL;
