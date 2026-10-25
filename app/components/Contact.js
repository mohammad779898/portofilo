import { Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-3">Let&apos;s work together</h2>
        <p className="text-slate-400 mb-10 max-w-xl">
          Have a project in mind or just want to say hi? Drop me a message — I&apos;ll get back to you as soon as possible.
        </p>

        <div className="grid lg:grid-cols-5 gap-12">
          <ContactForm />

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Contact info</h3>
              <a
                href="mailto:deanj7798@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition"
              >
                <Mail className="w-5 h-5" />
                deanj7798@gmail.com
              </a>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">What happens next</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex gap-2">
                  <span className="text-sky-400">1.</span>
                  Your message is sent securely to my inbox
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">2.</span>
                  I usually reply within 24 hours
                </li>
                <li className="flex gap-2">
                  <span className="text-sky-400">3.</span>
                  We can discuss your project or idea
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
