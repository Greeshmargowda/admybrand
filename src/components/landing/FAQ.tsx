import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer: "Our AI engine uses advanced machine learning models trained on billions of marketing materials. Simply input your brand guidelines, target audience, and campaign objectives, and our AI will generate compelling copy, visuals, and complete campaign strategies tailored to your needs."
  },
  {
    question: "Can I integrate ADmyBRAND with my existing tools?",
    answer: "Absolutely! ADmyBRAND AI Suite offers seamless integrations with over 50+ popular marketing tools including HubSpot, Salesforce, Google Analytics, Facebook Ads, LinkedIn, Mailchimp, and many more. We also provide robust API access for custom integrations."
  },
  {
    question: "What kind of analytics and reporting do you provide?",
    answer: "Our platform offers comprehensive real-time analytics including campaign performance metrics, ROI tracking, audience insights, conversion funnels, and predictive analytics. You'll get automated reports, custom dashboards, and AI-powered recommendations for optimization."
  },
  {
    question: "Is my data secure with ADmyBRAND?",
    answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, and follow GDPR/CCPA regulations. Your data is stored in secure, geo-distributed data centers with 24/7 monitoring and regular security audits."
  },
  {
    question: "How quickly can I see results?",
    answer: "Most customers see immediate improvements in workflow efficiency within the first week. Marketing performance improvements typically become apparent within 2-4 weeks as our AI learns your brand and optimizes campaigns. Many users report 150-300% productivity increases within the first month."
  },
  {
    question: "Do you offer training and support?",
    answer: "Yes! We provide comprehensive onboarding, live training sessions, extensive documentation, video tutorials, and 24/7 customer support. Enterprise customers get dedicated account managers and custom training programs for their teams."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely. There are no long-term contracts or cancellation fees. You can upgrade, downgrade, or cancel your subscription at any time. If you cancel, you'll retain access to your account until the end of your current billing period."
  },
  {
    question: "What makes ADmyBRAND different from other marketing tools?",
    answer: "ADmyBRAND combines multiple marketing functions into one AI-powered platform. Unlike point solutions, we offer end-to-end marketing automation with predictive analytics, brand protection, and creative assistance - all powered by cutting-edge AI that learns and adapts to your specific brand needs."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16 fade-up">
            <Badge variant="glass" className="inline-flex">
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            
            <h2 className="text-4xl lg:text-6xl font-bold">
              Frequently Asked
              <span className="gradient-text block">
                Questions
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers. If you can't find what you're looking for, 
              feel free to reach out to our support team.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4 fade-up" style={{ animationDelay: '0.2s' }}>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-xl border-glass-border px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12 fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass rounded-2xl p-8 inline-block">
              <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Our support team is here to help 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:support@admybrand.ai" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  support@admybrand.ai
                </a>
                <span className="hidden sm:block text-muted-foreground">•</span>
                <a 
                  href="tel:+1-800-ADMYBRAND" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  1-800-ADMYBRAND
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}