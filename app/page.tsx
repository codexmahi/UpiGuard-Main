"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  Lock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Smartphone,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">UPIGuard</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              How It Works
            </a>
            <Link
              href="/ml-model"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              ML Model
            </Link>
            <Link
              href="/docs"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Docs
            </Link>
          </div>
          <Button asChild className="gap-2">
            <a
              href="https://upiguard-eta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="">
                <Zap className="" />
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Real-time <span className="text-primary">Fraud Protection</span>{" "}
                for UPI Transactions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Protect your digital payments with enterprise-grade machine
                learning. Detect and prevent fraud in real-time across all
                transaction types.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild className="gap-2">
                <a
                  href="https://upiguard-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Demo
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              <div>
                <div className="text-2xl font-bold text-foreground">99.8%</div>
                <div className="text-sm text-muted-foreground">
                  Fraud Detection Rate
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">
                  &lt;100ms
                </div>
                <div className="text-sm text-muted-foreground">
                  Processing Time
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
            <img
              src="/upiguard-hero.jpg"
              alt="UPIGuard Fraud Detection"
              className="w-full h-auto rounded-2xl shadow-lg border border-primary/10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-4 sm:px-6 lg:px-8 py-20 bg-secondary/5 border-t border-border"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mx-auto mb-4">
              Powerful Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Advanced Fraud Detection Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our multi-layered approach combines multiple detection methods to
              catch fraud before it happens
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Real-Time Analysis",
                description:
                  "Process transactions in milliseconds with our lightning-fast ML models",
              },
              {
                icon: BarChart3,
                title: "Pattern Recognition",
                description:
                  "Identify suspicious behavior patterns across millions of transactions",
              },
              {
                icon: Lock,
                title: "Device Fingerprinting",
                description:
                  "Track device signatures to detect account takeovers and unauthorized access",
              },
              {
                icon: TrendingUp,
                title: "Behavioral Analytics",
                description:
                  "Learn user patterns and flag deviations from normal activity",
              },
              {
                icon: Smartphone,
                title: "Multi-Channel Detection",
                description:
                  "Protect transactions across mobile, web, ATM, and in-store channels",
              },
              {
                icon: Users,
                title: "Network Analysis",
                description:
                  "Detect fraud rings and coordinated attacks across multiple accounts",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:border-primary/50 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mx-auto mb-4">
              Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How UPIGuard Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A sophisticated multi-step process to ensure maximum protection
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Transaction Initiated",
                description:
                  "User initiates a UPI payment with transaction details",
              },
              {
                number: "02",
                title: "Data Collection",
                description:
                  "System collects device, network, and user behavior data",
              },
              {
                number: "03",
                title: "ML Analysis",
                description:
                  "Multiple models analyze the transaction against fraud patterns",
              },
              {
                number: "04",
                title: "Decision & Alert",
                description:
                  "Real-time decision with risk score and automated response",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full">
                  <div className="text-3xl font-bold text-primary mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
                {index < 3 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Dashboard Preview */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-secondary/5 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Analytics Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor, analyze, and optimize your fraud detection in real-time
            </p>
          </div>

          <Card className="p-8 border-primary/20">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-sm text-muted-foreground mb-2">
                  Transactions Analyzed
                </div>
                <div className="text-3xl font-bold text-foreground">2.4M</div>
                <div className="text-xs text-green-500 mt-2">
                  ↑ 23% this week
                </div>
              </div>
              <div className="p-6 bg-accent/5 rounded-lg border border-accent/10">
                <div className="text-sm text-muted-foreground mb-2">
                  Fraud Detected
                </div>
                <div className="text-3xl font-bold text-foreground">18.2K</div>
                <div className="text-xs text-accent mt-2">₹4.2Cr prevented</div>
              </div>
              <div className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-sm text-muted-foreground mb-2">
                  Detection Accuracy
                </div>
                <div className="text-3xl font-bold text-foreground">99.8%</div>
                <div className="text-xs text-green-500 mt-2">
                  False positive: 0.1%
                </div>
              </div>
            </div>
            <Button asChild className="w-full" variant="outline">
              <a
                href="https://upiguard-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Full Dashboard
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Start Protecting Your Transactions Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of fintech companies using UPIGuard to prevent fraud
            and protect their customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
            >
              <a
                href="https://upiguard-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Free Demo
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/5 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">UPIGuard</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade fraud detection for UPI payments
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 UPIGuard. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
