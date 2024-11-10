/*
  Warnings:

  - You are about to drop the `_UserToUserClass` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Books" DROP CONSTRAINT "Books_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserClass" DROP CONSTRAINT "UserClass_authorUserId_fkey";

-- DropForeignKey
ALTER TABLE "UserClass" DROP CONSTRAINT "UserClass_whitelistId_fkey";

-- DropForeignKey
ALTER TABLE "Whitelist" DROP CONSTRAINT "Whitelist_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Whitelist" DROP CONSTRAINT "Whitelist_readerUserId_fkey";

-- DropForeignKey
ALTER TABLE "_UserToUserClass" DROP CONSTRAINT "_UserToUserClass_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserToUserClass" DROP CONSTRAINT "_UserToUserClass_B_fkey";

-- AlterTable
ALTER TABLE "Books" ALTER COLUMN "userId" DROP NOT NULL;

-- DropTable
DROP TABLE "_UserToUserClass";
