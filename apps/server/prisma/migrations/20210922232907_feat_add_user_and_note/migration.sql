/*
  Warnings:

  - You are about to drop the `Medea` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Medea";

-- CreateTable
CREATE TABLE "MedeaUser" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "MedeaUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedeaTag" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "medeaNoteId" TEXT,

    CONSTRAINT "MedeaTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MedeaNote" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "text" TEXT NOT NULL,

    CONSTRAINT "MedeaNote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MedeaUser_email_key" ON "MedeaUser"("email");

-- AddForeignKey
ALTER TABLE "MedeaTag" ADD CONSTRAINT "MedeaTag_medeaNoteId_fkey" FOREIGN KEY ("medeaNoteId") REFERENCES "MedeaNote"("id") ON DELETE SET NULL ON UPDATE CASCADE;
