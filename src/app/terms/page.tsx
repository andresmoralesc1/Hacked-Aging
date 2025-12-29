import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Hacked Aging',
  description: 'Read the Terms of Service for Hacked Aging to understand the rules and guidelines for using our site.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-extrabold text-center mb-4 text-white">Terms of Service</h1>
        <p className="text-sm text-zinc-500 text-center mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-white">Agreement to Terms</h2>
            <p>Welcome to Hacked Aging. By accessing our website and any of its pages, you agree to be bound by these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Hacked Aging for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            <ul>
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose or for any public display;</li>
              <li>attempt to reverse engineer any software contained on the website;</li>
              <li>remove any copyright or other proprietary notations from the materials.</li>
            </ul>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Disclaimer</h2>
            <p>The materials on Hacked Aging are provided on an 'as is' basis. Hacked Aging makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Limitations</h2>
            <p>In no event shall Hacked Aging or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Hacked Aging, even if Hacked Aging or a Hacked Aging authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Accuracy of Materials</h2>
            <p>The materials appearing on Hacked Aging's website could include technical, typographical, or photographic errors. Hacked Aging does not warrant that any of the materials on its website are accurate, complete, or current. Hacked Aging may make changes to the materials contained on its website at any time without notice.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Links</h2>
            <p>Hacked Aging has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Hacked Aging of the site. Use of any such linked website is at the user's own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Modifications</h2>
            <p>Hacked Aging may revise these terms of service for its website at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these terms of service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">Governing Law</h2>
            <p>These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </section>
        </div>
      </div>
    </div>
  );
}