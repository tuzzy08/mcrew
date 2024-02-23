-- CreateEnum
CREATE TYPE "CrewStatus" AS ENUM ('ONBOARD', 'ONSHORE', 'INACIVE');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('NORMAL_USER', 'ADMIN', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "VesselStatus" AS ENUM ('DOCKED', 'INACTIVE', 'OFFSHORE', 'UNSET');

-- CreateEnum
CREATE TYPE "CrewChangeStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "DocumentStatus" AS ENUM ('VALID', 'EXPIRED', 'EXPIRING');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT,
    "passportURI" TEXT,
    "role" "Role" NOT NULL DEFAULT 'NORMAL_USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Crew" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT,
    "passportURI" TEXT,
    "position" TEXT NOT NULL,
    "vesselId" INTEGER NOT NULL,
    "currentStatus" "CrewStatus" NOT NULL DEFAULT 'ONSHORE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Crew_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vessels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "currentField" TEXT,
    "currentClient" TEXT,
    "imsiNo" TEXT,
    "currentStatus" "VesselStatus" NOT NULL DEFAULT 'UNSET',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vessels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrewChanges" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "vesselId" INTEGER NOT NULL,
    "currentStatus" "CrewChangeStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CrewChanges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parentId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "issueDate" TEXT NOT NULL,
    "expiryDate" TEXT NOT NULL,
    "certificateNumber" TEXT NOT NULL,
    "documentURI" TEXT NOT NULL,
    "currentStatus" "DocumentStatus" NOT NULL DEFAULT 'VALID',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Incoming" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_Outgoing" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_passportURI_key" ON "Users"("passportURI");

-- CreateIndex
CREATE UNIQUE INDEX "Crew_email_key" ON "Crew"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Crew_passportURI_key" ON "Crew"("passportURI");

-- CreateIndex
CREATE UNIQUE INDEX "Crew_vesselId_key" ON "Crew"("vesselId");

-- CreateIndex
CREATE UNIQUE INDEX "CrewChanges_vesselId_key" ON "CrewChanges"("vesselId");

-- CreateIndex
CREATE UNIQUE INDEX "Documents_categoryId_key" ON "Documents"("categoryId");

-- CreateIndex
CREATE UNIQUE INDEX "Documents_ownerId_key" ON "Documents"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "_Incoming_AB_unique" ON "_Incoming"("A", "B");

-- CreateIndex
CREATE INDEX "_Incoming_B_index" ON "_Incoming"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Outgoing_AB_unique" ON "_Outgoing"("A", "B");

-- CreateIndex
CREATE INDEX "_Outgoing_B_index" ON "_Outgoing"("B");

-- AddForeignKey
ALTER TABLE "Crew" ADD CONSTRAINT "Crew_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrewChanges" ADD CONSTRAINT "CrewChanges_vesselId_fkey" FOREIGN KEY ("vesselId") REFERENCES "Vessels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Crew"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Incoming" ADD CONSTRAINT "_Incoming_A_fkey" FOREIGN KEY ("A") REFERENCES "Crew"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Incoming" ADD CONSTRAINT "_Incoming_B_fkey" FOREIGN KEY ("B") REFERENCES "CrewChanges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Outgoing" ADD CONSTRAINT "_Outgoing_A_fkey" FOREIGN KEY ("A") REFERENCES "Crew"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Outgoing" ADD CONSTRAINT "_Outgoing_B_fkey" FOREIGN KEY ("B") REFERENCES "CrewChanges"("id") ON DELETE CASCADE ON UPDATE CASCADE;
