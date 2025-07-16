 // src/components/ContactForm.jsx
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await emailjs.sendForm(
        'service_6l7srer',
        'template_wmslata',
        formRef.current,
        {
          publicKey: 'e0yAuqrGb9BJIty5O',
        }
      );

      console.log('Email sent successfully:', result.text);
      setSubmitMessage('✅ Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitMessage('❌ Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeIn}
      className="w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Get In <span className="text-purple-300">Touch</span>
      </h2>
      <p className="text-gray-400 mb-10 text-center">
        Have a project in mind or want to chat? Feel free to reach out!
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
              errors.name ? 'border-red-500' : 'border-gray-700'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
              errors.email ? 'border-red-500' : 'border-gray-700'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-gray-800 border ${
              errors.message ? 'border-red-500' : 'border-gray-700'
            } focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all`}
            placeholder="Hello, I'd like to talk about..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 font-medium ${
            isSubmitting
              ? 'opacity-70'
              : 'hover:from-purple-700 hover:to-indigo-700'
          } transition-all transform hover:scale-[1.02]`}
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              <FiSend className="mr-2" />
              Send Message
            </>
          )}
        </button>

        {submitMessage && (
          <p
            className={`mt-4 text-center ${
              submitMessage.includes('Thank') ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {submitMessage}
          </p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
