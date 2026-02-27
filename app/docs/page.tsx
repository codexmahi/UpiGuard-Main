'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  Code, 
  BookOpen, 
  Terminal,
  CheckCircle,
  Copy,
  ArrowRight
} from 'lucide-react'
import { useState } from 'react'

export default function DocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const codeExample1 = `// Initialize UPIGuard API
const client = new UPIGuardClient({
  apiKey: 'your-api-key',
  environment: 'production'
})

// Analyze a transaction
const result = await client.analyzeTransaction({
  amount: 50000,
  phoneNumber: '+91xxxxxxxxxx',
  receiverUPI: 'user@bank',
  timestamp: new Date()
})

console.log(result.riskScore) // 0-100
console.log(result.fraudProbability) // 0-1
console.log(result.details) // Analysis details`

  const codeExample2 = `// Webhook for real-time events
app.post('/webhook/fraud-detected', (req, res) => {
  const { transactionId, riskScore, action } = req.body
  
  if (action === 'block') {
    // Immediately block transaction
    notifyUser(transactionId, 'Transaction blocked')
  } else if (action === 'verify') {
    // Request 2FA from user
    sendOTP(transactionId)
  }
  
  res.json({ received: true })
})`

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
            <Link href="/ml-model" className="text-sm text-muted-foreground hover:text-foreground transition">ML Model</Link>
          </div>
          <Button asChild className="gap-2">
            <a href="https://upiguard-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
              Try Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Getting Started */}
        <section className="space-y-8">
          <div>
            <Badge className="mb-4">Getting Started</Badge>
            <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
            <p className="text-lg text-muted-foreground">
              Integrate UPIGuard fraud detection into your payment system with our comprehensive API. Real-time analysis with &lt;100ms latency.
            </p>
          </div>

          {/* Installation */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Installation</h2>
            </div>
            <p className="text-muted-foreground mb-4">Install the UPIGuard SDK for your platform:</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-2">npm</p>
                <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-between">
                  <code className="font-mono text-sm">npm install @upiguard/sdk</code>
                  <button
                    onClick={() => copyToClipboard('npm install @upiguard/sdk', 'npm')}
                    className="p-2 hover:bg-secondary/30 rounded transition"
                  >
                    {copiedCode === 'npm' ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-semibold mb-2">pip</p>
                <div className="bg-secondary/20 rounded-lg p-4 flex items-center justify-between">
                  <code className="font-mono text-sm">pip install upiguard-python</code>
                  <button
                    onClick={() => copyToClipboard('pip install upiguard-python', 'pip')}
                    className="p-2 hover:bg-secondary/30 rounded transition"
                  >
                    {copiedCode === 'pip' ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Authentication */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Authentication</h2>
            <p className="text-muted-foreground mb-4">All API requests require authentication via API key:</p>
            
            <div className="bg-secondary/20 rounded-lg p-4 mb-4">
              <code className="font-mono text-sm">
                Authorization: Bearer your-api-key
              </code>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">API Keys</p>
                  <p className="text-muted-foreground">Generate API keys from your UPIGuard dashboard</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">HTTPS Required</p>
                  <p className="text-muted-foreground">All API calls must use HTTPS for security</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Rate Limits</p>
                  <p className="text-muted-foreground">Up to 10,000 requests per minute per API key</p>
                </div>
              </div>
            </div>
          </Card>

          {/* API Endpoints */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Core Endpoints</h2>
            
            <div className="space-y-6">
              {/* POST /analyze */}
              <div className="border-b border-border pb-6 last:border-b-0">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-primary/10">POST</Badge>
                  <code className="font-mono text-sm font-semibold">/api/v1/transactions/analyze</code>
                </div>
                <p className="text-muted-foreground mb-4">Analyze a UPI transaction for fraud risk in real-time.</p>
                
                <div className="bg-secondary/10 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold mb-2">Request Body:</p>
                  <code className="font-mono text-xs whitespace-pre-wrap text-foreground">{`{
  "amount": 50000,
  "phoneNumber": "+91xxxxxxxxxx",
  "receiverUPI": "user@bank",
  "deviceInfo": {...},
  "timestamp": "2024-02-27T10:30:00Z"
}`}</code>
                </div>

                <div className="bg-secondary/10 rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">Response:</p>
                  <code className="font-mono text-xs whitespace-pre-wrap text-foreground">{`{
  "transactionId": "txn_abc123",
  "riskScore": 25,
  "fraudProbability": 0.15,
  "action": "allow",
  "details": {...},
  "processingTime": 87
}`}</code>
                </div>
              </div>

              {/* GET /status */}
              <div className="border-b border-border pb-6 last:border-b-0">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-primary/10">GET</Badge>
                  <code className="font-mono text-sm font-semibold">/api/v1/transactions/:id</code>
                </div>
                <p className="text-muted-foreground">Retrieve analysis results for a specific transaction.</p>
              </div>

              {/* GET /analytics */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="bg-primary/10">GET</Badge>
                  <code className="font-mono text-sm font-semibold">/api/v1/analytics</code>
                </div>
                <p className="text-muted-foreground">Get analytics and statistics for your transactions.</p>
              </div>
            </div>
          </Card>

          {/* Code Examples */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Code Examples</h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold mb-3">JavaScript/Node.js Integration</p>
                <div className="bg-secondary/20 rounded-lg p-4 relative">
                  <pre className="font-mono text-xs overflow-x-auto text-foreground">
                    {codeExample1}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(codeExample1, 'js')}
                    className="absolute top-2 right-2 p-2 hover:bg-secondary/30 rounded transition"
                  >
                    {copiedCode === 'js' ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold mb-3">Webhook Integration</p>
                <div className="bg-secondary/20 rounded-lg p-4 relative">
                  <pre className="font-mono text-xs overflow-x-auto text-foreground">
                    {codeExample2}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(codeExample2, 'webhook')}
                    className="absolute top-2 right-2 p-2 hover:bg-secondary/30 rounded transition"
                  >
                    {copiedCode === 'webhook' ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Response Codes */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6">Response Codes</h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-4 pb-3 border-b border-border">
                <Badge className="mt-1">200</Badge>
                <div>
                  <p className="font-semibold">Success</p>
                  <p className="text-sm text-muted-foreground">Transaction analyzed successfully</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-3 border-b border-border">
                <Badge variant="outline" className="mt-1">400</Badge>
                <div>
                  <p className="font-semibold">Bad Request</p>
                  <p className="text-sm text-muted-foreground">Invalid request parameters</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-3 border-b border-border">
                <Badge variant="outline" className="mt-1">401</Badge>
                <div>
                  <p className="font-semibold">Unauthorized</p>
                  <p className="text-sm text-muted-foreground">Invalid or missing API key</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Badge variant="outline" className="mt-1">429</Badge>
                <div>
                  <p className="font-semibold">Rate Limited</p>
                  <p className="text-sm text-muted-foreground">Too many requests - rate limit exceeded</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Support */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Check out our API documentation, explore example projects, or contact our support team.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Examples
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      API Reference
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:support@upiguard.com">
                      Email Support
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-muted-foreground">
            <p>© 2024 UPIGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
