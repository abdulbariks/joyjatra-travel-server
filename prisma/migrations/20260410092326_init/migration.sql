/*
  Warnings:

  - You are about to drop the column `appointmentFee` on the `moderator` table. All the data in the column will be lost.
  - You are about to drop the column `averageRating` on the `moderator` table. All the data in the column will be lost.
  - You are about to drop the column `currentWorkingPlace` on the `moderator` table. All the data in the column will be lost.
  - You are about to drop the column `designation` on the `moderator` table. All the data in the column will be lost.
  - You are about to drop the column `registrationNumber` on the `moderator` table. All the data in the column will be lost.
  - You are about to drop the column `moderatorId` on the `review` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "review" DROP CONSTRAINT "review_blogId_fkey";

-- DropIndex
DROP INDEX "moderator_registrationNumber_key";

-- AlterTable
ALTER TABLE "moderator" DROP COLUMN "appointmentFee",
DROP COLUMN "averageRating",
DROP COLUMN "currentWorkingPlace",
DROP COLUMN "designation",
DROP COLUMN "registrationNumber",
ALTER COLUMN "experience" DROP NOT NULL,
ALTER COLUMN "qualification" DROP NOT NULL;

-- AlterTable
ALTER TABLE "review" DROP COLUMN "moderatorId",
ALTER COLUMN "eventId" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "review_touristId_idx" ON "review"("touristId");

-- CreateIndex
CREATE INDEX "review_blogId_idx" ON "review"("blogId");

-- CreateIndex
CREATE INDEX "review_eventId_idx" ON "review"("eventId");

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_moderatorId_fkey" FOREIGN KEY ("moderatorId") REFERENCES "moderator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_touristId_fkey" FOREIGN KEY ("touristId") REFERENCES "tourist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
