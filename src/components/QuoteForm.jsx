import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "../supabaseClient";
import { serviceOptions } from "../data/siteData";

const blankForm = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  service_needed: "",
  property_address: "",
  message: ""
};

export default function QuoteForm({ defaultService = "" }) {
  const [formData, setFormData] = useState({
    ...blankForm,
    service_needed: defaultService
  });

  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.phone ||
      !formData.email ||
      !formData.service_needed ||
      !formData.property_address
    ) {
      setSubmitStatus({
        type: "error",
        message:
          "Please complete your first name, last name, phone number, email address, service needed, and property address."
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    if (!supabase) {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "success",
        message:
          "Form is ready. Supabase is not connected yet, so this request was not saved."
      });
      return;
    }

    const { error } = await supabase.from("quote_requests").insert([
      {
        first_name: formData.first_name.trim(),
        last_name: formData.last_name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        service_needed: formData.service_needed,
        property_address: formData.property_address.trim(),
        message: formData.message.trim(),
        status: "New"
      }
    ]);

    setIsSubmitting(false);

    if (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please call 204-668-5518."
      });
      return;
    }

    setFormData({ ...blankForm, service_needed: defaultService });
    setSubmitStatus({
      type: "success",
      message: "Thank you. Your quote request has been submitted."
    });
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="service_needed"
          value={formData.service_needed}
          onChange={handleChange}
          required
        >
          <option value="">Service Needed</option>
          {serviceOptions.map((option) => (
            <option value={option} key={option}>{option}</option>
          ))}
        </select>

        <input
          type="text"
          name="property_address"
          placeholder="Property Address"
          value={formData.property_address}
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        name="message"
        placeholder="Tell us about your project"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Request"}
        <ArrowRight size={16} />
      </button>

      {submitStatus.message && (
        <p className={`form-status ${submitStatus.type}`}>{submitStatus.message}</p>
      )}
    </form>
  );
}
