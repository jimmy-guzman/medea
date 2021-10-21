-- AlterTable
ALTER TABLE "MedeaNote" ADD COLUMN     "medeaUserId" TEXT;

-- AddForeignKey
ALTER TABLE "MedeaNote" ADD CONSTRAINT "MedeaNote_medeaUserId_fkey" FOREIGN KEY ("medeaUserId") REFERENCES "MedeaUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
