import { UserProfileWrapper } from "@/components/user-profile-wrapper";
import { ContentWrapper } from "@/components/content-wrapper";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Heading } from "@/components/ui/heading";
import { PropsWithChildren } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import SignInWrapper from "@/components/sign-in";
import { singleLevelNestedRoutes } from "@/lib/routes";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <NavBar showSecondAnnouncementBar={false} />
      <ContentWrapper>
        <SignedIn>
          <div>
            <Heading size="h3">Admin Dashboard</Heading>
            <div className="grid grid-cols-9 gap-8 mt-6">
              <div className="col-span-2 flex flex-col gap-6">
                <Sidebar menuItems={menuItems} />
                <UserProfileWrapper />
              </div>
              <main className="h-full flex-1 w-full col-span-7">
                {children}
              </main>
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <SignInWrapper />
        </SignedOut>
      </ContentWrapper>
      <Footer />
    </div>
  );
}

const menuItems = [
  {
    name: "Selling",
    href: "/",
    heading: true,
  },
  {
    name: "Selling profile",
    href: singleLevelNestedRoutes.account["selling-profile"],
    heading: false,
  },
  {
    name: "Products",
    href: singleLevelNestedRoutes.account.products,
    heading: false,
  },
  {
    name: "Orders",
    href: singleLevelNestedRoutes.account.orders,
    heading: false,
  },
  {
    name: "Buying",
    href: "/",
    heading: true,
  },
  {
    name: "Your purchases",
    href: singleLevelNestedRoutes.account["your-purchases"],
    heading: false,
  },
];