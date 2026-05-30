```tsx
// src/routes/index.tsx

import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Network, Shield, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <MissionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DeveloperSection />
      <FinalCTASection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="text-sm font-medium text-muted-foreground">
            Decentralized Infrastructure
          </span>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight lg:text-6xl">
            Build on Infrastructure That Can't Be Taken Away
          </h1>

          <p className="max-w-xl text-lg text-muted-foreground">
            BLUE is a decentralized infrastructure platform designed to make
            hosting, storage, and digital services more resilient, open, and
            community-owned.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button size="lg" variant="outline">
              Read the Vision
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No lock-in. No single point of failure. Infrastructure designed to
            survive.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative h-96 w-full rounded-3xl border bg-muted/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <Network className="h-24 w-24 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="border-t py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            A Different Model for Infrastructure
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Most internet services rely on centralized infrastructure controlled
            by a small number of providers. BLUE distributes services across a
            network of independent participants, reducing reliance on any single
            operator while improving resilience and transparency.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Resilient"
            description="No single server or provider becomes a critical point of failure."
          />

          <FeatureCard
            icon={<Network className="h-6 w-6" />}
            title="Community-Owned"
            description="Infrastructure is operated by participants rather than controlled by one company."
          />

          <FeatureCard
            icon={<Globe className="h-6 w-6" />}
            title="Open"
            description="Built using open standards and transparent systems."
          />
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        {icon}

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

function HowItWorksSection() {
  return (
    <section className="border-t py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Simple for Users. Distributed Under the Hood.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <Step
            number="01"
            title="Deploy"
            description="Launch applications and services using familiar workflows."
          />

          <Step
            number="02"
            title="Distribute"
            description="BLUE allocates workloads across participating infrastructure."
          />

          <Step
            number="03"
            title="Operate"
            description="Monitor and manage resources from a unified interface."
          />
        </div>
      </div>
    </section>
  );
}

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({
  number,
  title,
  description,
}: StepProps) {
  return (
    <div className="space-y-3">
      <div className="text-sm font-semibold text-primary">
        {number}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function DeveloperSection() {
  return (
    <section className="border-t py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight">
            Built for Developers
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Modern tooling, open standards, and infrastructure designed to be
            extensible from day one.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "API-first architecture",
            "Open standards",
            "Fast deployment workflows",
            "Transparent infrastructure",
            "Extensible integrations",
            "Type-safe developer tooling",
          ].map((feature) => (
            <Card key={feature}>
              <CardContent className="p-4">
                {feature}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="border-t py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Help Build a More Resilient Internet
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Join the early community and help shape the future of decentralized
            infrastructure.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">
              Get Started
            </Button>

            <Button
              size="lg"
              variant="outline"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```
