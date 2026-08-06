import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const Form = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[6-9]\d{9}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter valid Email Id");
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid Indian mobile number");
      return;
    }

    alert("Form Submitted Thankyou");
  };

  return (
    <form
      className="space-y-6 w-full h-full max-lg:w-full"
      onSubmit={handleSubmit}
    >
      <Input
        label="Your Name"
        type="text"
        name="name"
        placeholder="Enter Your Name"
        required
      />

      <Input
        label="Phone Number"
        placeholder="98765 54321"
        value={phone}
        type="tel"
        required
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Company Name"
        placeholder="Your Company Name"
        name="Company name"
        type="text"
        placeholder="Enter Company Name"
      />

      <Textarea
        label="Enter Your Message"
        placeholder="Enter your Message"
        className="w-full border-b resize-none"
        type="text"
      />

      <button className="w-full h-12 font-semibold rounded-lg bg-tertiary text-primary">
        Send Message
      </button>
    </form>
  );
};

export default Form;
