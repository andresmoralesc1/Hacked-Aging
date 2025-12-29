import { Metadata } from 'next';
import ContactForm from '@/components/forms/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us | Hacked Aging',
  description: 'Get in touch with the Hacked Aging team. We are here to answer your questions.',
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to learn more? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p>
                      <a href="mailto:hello@hackedaging.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                        hello@hackedaging.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Follow Us</h3>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://twitter.com/hackedaging"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Twitter
                      </a>
                      <a
                        href="https://linkedin.com/company/hacked-aging"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://www.youtube.com/@hackedaging"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}