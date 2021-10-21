-- CreateTable
CREATE TABLE "Medea" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "json" JSONB NOT NULL,

    CONSTRAINT "Medea_pkey" PRIMARY KEY ("id")
);
