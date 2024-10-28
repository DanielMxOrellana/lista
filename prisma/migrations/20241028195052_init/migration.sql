-- CreateTable
CREATE TABLE "SpaceWishlist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lastObserved" TEXT NOT NULL,
    "observationCount" INTEGER NOT NULL,
    "isExtinct" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SpaceWishlist_pkey" PRIMARY KEY ("id")
);
