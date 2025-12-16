import React, { useState } from 'react';

interface SubmitPageProps {
  onNavigate?: (view: string) => void;
}

export const SubmitPage: React.FC<SubmitPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    idea: '',
    category: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        instagram: '',
        idea: '',
        category: '',
        description: ''
      });
    }, 3000);
  };

  return (
    <div className="submit-page max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-brand-dark uppercase tracking-[2px] mb-4">
          Join The Platform
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Submit Your Idea</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Got something cunty, cheeky, or sellable? Print ideas, product concepts, brand proposals—we want to see it.
        </p>
      </div>

      {/* Form */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-dark uppercase tracking-[1px] mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-brand-border rounded focus:outline-none focus:border-brand-neon transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-dark uppercase tracking-[1px] mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-brand-border rounded focus:outline-none focus:border-brand-neon transition-colors"
              placeholder="you@email.com"
            />
          </div>

          {/* Instagram */}
          <div>
            <label htmlFor="instagram" className="block text-sm font-semibold text-brand-dark uppercase tracking-[1px] mb-2">
              Instagram Handle
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-brand-border rounded focus:outline-none focus:border-brand-neon transition-colors"
              placeholder="@yourhandle"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-brand-dark uppercase tracking-[1px] mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-brand-border rounded focus:outline-none focus:border-brand-neon transition-colors bg-white"
            >
              <option value="">Select a category...</option>
              <option value="apparel">Apparel</option>
              <option value="prints">Prints & Posters</option>
              <option value="objects">Objects & Home Goods</option>
              <option value="art">Original Art</option>
              <option value="brand">Brand / Storefront</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Idea Title */}
          <div>
            <label htmlFor="idea" className="block text-sm font-semibold text-brand-dark uppercase tracking-[1px] mb-2">
              Idea Title *
            </label>
            <input
              type="text"
              id="idea"
              name="idea"
              value={formData.idea}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-brand-border rounded focus:outline-none focus:border-brand-neon transition-colors"
              placeholder="A short, catchy title for your idea"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-brand-dark uppercase tracking-[1px] mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-brand-border rounded focus:outline-none focus:border-brand-neon transition-colors resize-vertical"
              placeholder="Tell us about your idea. What is it? Why should we make it? Be specific."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-brand-neon text-brand-dark py-4 px-6 text-sm font-bold tracking-[1.5px] uppercase rounded transition-all duration-300 hover:bg-[#00dd77] hover:-translate-y-0.5 shadow-neon hover:shadow-neon-hover"
          >
            Submit Idea
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Selected submissions will be contacted directly. We respond selectively.
          </p>
        </form>
      ) : (
        <div className="text-center py-20">
          <div className="inline-block p-8 bg-brand-light border-l-4 border-brand-neon rounded">
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Submission Received</h3>
            <p className="text-gray-600">We'll review your idea and get back to you if it's a fit.</p>
          </div>
        </div>
      )}
    </div>
  );
};