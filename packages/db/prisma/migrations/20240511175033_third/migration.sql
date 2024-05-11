/*
  Warnings:

  - Added the required column `DOB` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "DOB" DATE NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "number" INTEGER NOT NULL,
ALTER COLUMN "role" DROP NOT NULL;
