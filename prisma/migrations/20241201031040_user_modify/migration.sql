/*
  Warnings:

  - You are about to drop the column `email` on the `AppUser` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `AppUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `AppUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nickname` to the `AppUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `AppUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `AppUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AppUser_email_key";

-- AlterTable
ALTER TABLE "AppUser" DROP COLUMN "email",
DROP COLUMN "name",
ADD COLUMN     "nickname" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AppUser_username_key" ON "AppUser"("username");
