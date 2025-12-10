import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { SocialProof } from "../sections/SocialProof";
import { ProblemNarrative } from "../sections/ProblemNarrative";
import { ROI } from "../sections/ROI";
import { HowItWorks } from "../sections/HowItWorks";
import { Features } from "../sections/Features";
import { Integrations } from "../sections/Integrations";
import { UseCases } from "../sections/UseCases";
import { Security } from "../sections/Security";
import { Pricing } from "../sections/Pricing";
import { FAQ } from "../sections/FAQ";
import { Footer } from "../sections/Footer";

// Root layout - wraps all pages
export const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-primary selection:text-black">
      <Outlet />
    </div>
  ),
});

// Home page
export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemNarrative />
      <ROI />
      <HowItWorks />
      <Features />
      <Integrations />
      <UseCases />
      <Security />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  ),
});

export const routeTree = rootRoute.addChildren([indexRoute]);
