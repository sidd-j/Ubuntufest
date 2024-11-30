import React, { useState } from "react";
import "../Styles/EventRegister.css";
import Layout from "../../layout";


const App = () => {
    const [form, setForm] = useState({
        name: "",
        college: "",
        email: "",
        branch: "",
        year: "",
        whatsapp: "",
    });

    const [selectedEvents, setSelectedEvents] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false); // To track form submission

    const events = [
        { name: "Suron ki Mehfil (Solo)", price: 50 },
        { name: "Suron ki Mehfil (Group)", price: 150 },
        { name: "Aparichit (Mono Act)", price: 150 },
        { name: "Naadbrahma (Instrumental Solo)", price: 50 },
        { name: "Naadbrahma (Instrumental Group)", price: 200 },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleCheckboxChange = (event, price) => {
        const eventName = event.target.name;

        if (event.target.checked) {
            setSelectedEvents([...selectedEvents, eventName]);
            setTotalAmount(totalAmount + price);
        } else {
            setSelectedEvents(selectedEvents.filter((e) => e !== eventName));
            setTotalAmount(totalAmount - price);
        }
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const whatsappRegex = /^[0-9]{10}$/;

        if (!form.name || !form.whatsapp || totalAmount === 0) {
            alert("Please fill all required fields and select at least one event.");
            return false;
        }
        if (!emailRegex.test(form.email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (!whatsappRegex.test(form.whatsapp)) {
            alert("Please enter a valid 10-digit WhatsApp number.");
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (!validateForm()) return;

        setIsSubmitting(true);

        const upiId = "example@upi";
        const registrationId = generateUniqueId();
        const upiLink = `upi://pay?pa=${upiId}&pn=UBUNTU2024&am=${totalAmount}&cu=INR&tn=Event+Registration+${form.name}`;
        window.open(upiLink, "_blank");

        setTimeout(() => {
            const message = `Hi ${form.name}, your registration for UBUNTU 2024 is confirmed!\n\nRegistration ID: ${registrationId}\nEvents: ${selectedEvents.join(
                ", "
            )}\nTotal Amount: ₹${totalAmount}\n\nThank you for participating!`;
            const encodedMessage = encodeURIComponent(message);
            const whatsappLink = `https://wa.me/${form.whatsapp}?text=${encodedMessage}`;
            window.open(whatsappLink, "_blank");

            setIsSubmitting(false);
        }, 3000);
    };

    const generateUniqueId = () => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let id = "";
        for (let i = 0; i < 8; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    return (
        <Layout>
            <div className="EventRegister-App">
                <header className="EventRegister-header">
                    <h1>UBUNTU 2024 College Fest Registration</h1>
                </header>

                <section className="EventRegister-form-section">
                    <form>
                        <h2>Participant Information</h2>
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Participant Name"
                            value={form.name}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="college">College Name</label>
                        <input
                            type="text"
                            id="college"
                            name="college"
                            placeholder="College Name"
                            value={form.college}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="email">Email ID *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email ID"
                            value={form.email}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="whatsapp">WhatsApp Number *</label>
                        <input
                            type="text"
                            id="whatsapp"
                            name="whatsapp"
                            placeholder="WhatsApp Number"
                            value={form.whatsapp}
                            onChange={handleInputChange}
                            maxLength={10}
                            required
                        />

                        <h2>Select Events</h2>
                        <fieldset className="EventRegister-fieldset">
                            {events.map((event, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        name={event.name}
                                        onChange={(e) => handleCheckboxChange(e, event.price)}
                                    />
                                    {event.name} - ₹{event.price}
                                </label>
                            ))}
                        </fieldset>

                        <p>Total Amount: ₹{totalAmount}</p>
                        <button className="EventRegister-button" onClick={handleSubmit} disabled={isSubmitting}>
                            {isSubmitting ? "Processing..." : "Proceed to Pay"}
                        </button>
                    </form>
                </section>
            </div>

        </Layout>
    );
};

export default App;
