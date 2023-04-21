import { NavBar } from "@/components/navbar";
import "../../styles/globals.css";
import { Footer } from "@/components/footer";
import { stores } from "@/db/schema";
import { db } from "@/db/db";
import React from "react";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function StorefrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const addStore = await db.insert(stores).values({
  //   id: 1,
  //   name: "test",
  // });
  const myStores = await db.select().from(stores);
  console.log(myStores);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      <NavBar />
      <main className="h-full flex-1">{children}</main>
      <Footer />
    </div>
  );
}
