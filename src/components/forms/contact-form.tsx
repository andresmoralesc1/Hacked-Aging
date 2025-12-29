"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <form className="space-y-6" name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <motion.input
            type="text"
            id="name"
            name="name"
            required
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            whileFocus={{ scale: 1.01 }}
            className="w-full px-4 py-3 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <motion.input
            type="email"
            id="email"
            name="email"
            required
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            whileFocus={{ scale: 1.01 }}
            className="w-full px-4 py-3 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Your Message
          </label>
          <motion.textarea
            id="message"
            name="message"
            rows={4}
            required
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            whileFocus={{ scale: 1.01 }}
            className="w-full px-4 py-3 border border-input bg-background rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Send Message</span>
            <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
