"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "../data/data";
import {
  fadeInRight,
  fadeInUp,
  fadeInUpLarge,
  rotateYVariant,
} from "../data/variants";
import GlobeDemo from "./GlobeDemo";
import emailjs from "@emailjs/browser";

const Contact = React.forwardRef<HTMLElement, unknown>((_, ref) => {
  const [status, setStatus] = useState<string | null>(null);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const message = form.message.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      setTimeout(() => {
        setEmailError("");
      }, 4000);
      return;
    } else {
      setEmailError("");
    }
    if (message.trim().length < 10) {
      setMessageError("Please enter atleast 10 characters.");
      setTimeout(() => {
        setMessageError("");
      }, 4000);
      return;
    } else {
      setMessageError("");
    }

    try {
      setLoading(true);
      
      const templateParams = {
        from_email: email,
        message: message,
        to_email: "tinkuteja740@gmail.com"
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
    setTimeout(() => {
      setStatus(null);
    }, 4000);
  }

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      ref={ref}
      className="bg-white dark:bg-neutral-950 flex flex-col justify-center items-center text-neutral-900 dark:text-neutral-100 py-16 px-6"
    >
      <motion.h4
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        className="text-[15px] text-center text-neutral-600 dark:text-neutral-300 font-medium"
      >
        GET IN TOUCH
      </motion.h4>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 mb-6 md:mb-10 text-neutral-900 dark:text-neutral-100"
      >
        Contact Me
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl items-stretch">
        <div className="min-h-[520px] flex items-center justify-center border border-neutral-300 dark:border-neutral-700 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <GlobeDemo />
        </div>
        <div className="min-h-[520px]">
          <div className="h-full w-full border border-neutral-300 dark:border-neutral-600 p-4 md:p-8 rounded-2xl shadow-md text-neutral-900 dark:text-neutral-100 overflow-hidden">
        <div className="flex max-md:flex-col gap-4">
          <motion.a
            href={`mailto:${contactInfo.email}`}
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium"
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            whileHover={{ scale: 1.01 }}
          >
            <FiMail className="text-sm" /> {contactInfo.email}
          </motion.a>

          <motion.a
            href={`https://wa.me/${
              contactInfo.whatsappNumber
            }?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            variants={rotateYVariant}
            initial="initial"
            whileInView="whileInView"
            className="flex flex-1 items-center text-sm justify-center gap-1 py-2 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium"
            whileHover={{ scale: 1.01 }}
          >
            <FaWhatsapp className="text-sm" /> WhatsApp
          </motion.a>
        </div>

        <motion.p
          variants={fadeInUpLarge}
          initial="hidden"
          whileInView="visible"
          className="p-6 text-neutral-600 dark:text-neutral-300 text-xs font-medium text-center"
        >
          Or send a message
        </motion.p>

        <motion.form className="w-full space-y-4" onSubmit={handleSubmit} noValidate>
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            className="space-y-1"
          >
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none"
              required
              suppressHydrationWarning
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </motion.div>
          <motion.div
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
          >
            <motion.textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 border placeholder:text-sm bg-neutral-100 dark:bg-neutral-900 border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none resize-none"
              required
              suppressHydrationWarning
            />
            {messageError && (
              <p className="text-red-500 text-xs">{messageError}</p>
            )}
          </motion.div>
          <motion.button
            type="submit"
            variants={fadeInUpLarge}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.01 }}
            className="w-full bg-neutral-200 dark:bg-neutral-950 cursor-pointer px-4 py-2 rounded-lg text-sm font-medium border border-neutral-300 dark:border-neutral-600 flex justify-center"
            suppressHydrationWarning
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

          {status && (
            <p className="mt-4 text-center text-sm font-medium text-blue-600">
              {status}
            </p>
          )}
          </div>
        </div>
      </div>
    </motion.section>
  );
});

Contact.displayName = "Contact";
export default Contact;
