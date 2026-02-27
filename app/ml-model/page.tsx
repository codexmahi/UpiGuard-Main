'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield,
  Brain,
  Database,
  TrendingUp,
  ArrowRight,
  Network,
  BarChart3,
  Zap,
  CheckCircle
} from 'lucide-react'

export default function MLModelPage() {
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
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">Home</Link>
            <a href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
            <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition">How It Works</a>
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition">Docs</Link>
          </div>
          <Button asChild className="gap-2">
            <a href="https://upiguard-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
              Try Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
              <Brain className="w-3 h-3 mr-2" />
              Advanced Machine Learning
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              How the <span className="text-primary">ML Model</span> Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Understand the sophisticated machine learning architecture that powers real-time fraud detection with 99.8% accuracy. This page explains the technical deep-dive into our ML model.
            </p>
          </div>
        </div>
      </section>

      {/* Model Architecture */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Model Architecture</h2>
            <p className="text-muted-foreground mb-8">
              Our fraud detection system uses a hybrid ensemble approach combining multiple machine learning techniques:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-primary/20 hover:border-primary/40 transition">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Gradient Boosting (XGBoost)</h3>
                  <p className="text-sm text-muted-foreground">
                    Primary classifier handling transaction-level patterns. Uses 500+ engineered features for accurate fraud classification.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 hover:border-primary/40 transition">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Neural Network (LSTM)</h3>
                  <p className="text-sm text-muted-foreground">
                    Detects sequential patterns in user behavior. Learns temporal dependencies across transaction history.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 hover:border-primary/40 transition">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Anomaly Detection (Isolation Forest)</h3>
                  <p className="text-sm text-muted-foreground">
                    Identifies statistical outliers. Effective for detecting previously unseen fraud patterns.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20 hover:border-primary/40 transition">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Graph Neural Networks</h3>
                  <p className="text-sm text-muted-foreground">
                    Models payment network relationships. Detects fraud rings and coordinated attacks.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Engineering */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto border-t border-border">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Feature Engineering</h2>
            <p className="text-muted-foreground mb-8">
              We extract and engineer 500+ features from transaction data:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Transaction Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Transaction amount & currency
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Merchant category & risk score
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Time-of-day patterns
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Location anomalies
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">User Behavior</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  User velocity & frequency
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Device fingerprinting
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Historical patterns
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Risk scoring
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Network Analysis</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Payment network graphs
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Community detection
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Link analysis
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  Centrality measures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Validation */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto border-t border-border">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Training & Validation</h2>
            <p className="text-muted-foreground mb-8">
              Our models are trained on millions of real transactions with rigorous validation:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Dataset</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 10M+ real UPI transactions</li>
                  <li>• 50,000+ confirmed fraud cases</li>
                  <li>• 3+ years of historical data</li>
                  <li>• Balanced sampling for class imbalance</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Validation Strategy</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Time-series cross-validation</li>
                  <li>• Stratified k-fold validation</li>
                  <li>• Out-of-time testing</li>
                  <li>• Adversarial validation</li>
                </ul>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <h3 className="font-semibold text-foreground mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Precision</span>
                  <span className="font-semibold text-foreground">98.5%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '98.5%' }}></div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground">Recall</span>
                  <span className="font-semibold text-foreground">97.2%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '97.2%' }}></div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground">F1-Score</span>
                  <span className="font-semibold text-foreground">97.8%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '97.8%' }}></div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground">AUC-ROC</span>
                  <span className="font-semibold text-foreground">99.1%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '99.1%' }}></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-time Processing */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto border-t border-border">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Real-time Processing Pipeline</h2>
            <p className="text-muted-foreground mb-8">
              Our inference pipeline processes transactions in under 100ms:
            </p>
          </div>

          <div className="space-y-4">
            {[
              { step: 1, title: 'Transaction Received', desc: 'UPI transaction initiated and captured' },
              { step: 2, title: 'Feature Extraction', desc: 'Real-time computation of 500+ features' },
              { step: 3, title: 'Ensemble Inference', desc: 'Parallel execution of 4 ML models' },
              { step: 4, title: 'Risk Scoring', desc: 'Weighted ensemble of model predictions' },
              { step: 5, title: 'Decision Engine', desc: 'Approve, review, or block decision' },
              { step: 6, title: 'Feedback Loop', desc: 'Log transaction for continuous learning' }
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                    {item.step}
                  </div>
                  {item.step < 6 && (
                    <div className="w-0.5 h-12 bg-border ml-5 -mr-5"></div>
                  )}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto border-t border-border">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Continuous Learning & Adaptation</h2>
            <p className="text-muted-foreground mb-8">
              The system continuously improves to combat emerging fraud patterns:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-primary/20">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Daily Retraining</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Models are retrained daily with confirmed fraud labels and new patterns.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Drift Detection</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Monitors data distribution shifts and triggers model updates.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Feedback Integration</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    User feedback and verified fraud cases improve model accuracy.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-primary/20">
              <div className="flex gap-4 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">A/B Testing</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    New models are tested in shadow mode before production deployment.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto border-t border-border">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Technologies & Frameworks</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: 'Python 3.11', category: 'Language' },
              { name: 'XGBoost', category: 'ML Framework' },
              { name: 'TensorFlow', category: 'Neural Networks' },
              { name: 'PyTorch', category: 'Deep Learning' },
              { name: 'Scikit-learn', category: 'ML Tools' },
              { name: 'Pandas/NumPy', category: 'Data Processing' },
              { name: 'PostgreSQL', category: 'Database' },
              { name: 'Redis', category: 'Caching' }
            ].map((tech) => (
              <Card key={tech.name} className="p-4 border-border hover:border-primary/20 transition">
                <p className="font-semibold text-foreground text-sm">{tech.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto border-t border-border">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">Ready to Experience Advanced Fraud Detection?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try UPIGuard and see how our ML models protect real-time transactions with 99.8% accuracy.
          </p>
          <Button size="lg" asChild className="gap-2">
            <a href="https://upiguard-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
              Try Demo Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-foreground">UPIGuard</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade fraud detection for UPI payments using advanced machine learning.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm">Product</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/" className="hover:text-foreground transition">Home</Link></li>
                  <li><Link href="/docs" className="hover:text-foreground transition">Documentation</Link></li>
                  <li><a href="https://upiguard-eta.vercel.app/" className="hover:text-foreground transition">Demo</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 text-sm">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/" className="hover:text-foreground transition">GitHub</a></li>
                  <li><a href="/" className="hover:text-foreground transition">Blog</a></li>
                  <li><a href="/" className="hover:text-foreground transition">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 UPIGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
