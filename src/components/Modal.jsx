import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firbase";
import { toast } from "react-toastify";

const Modal = ({ onClose, isOpen, contact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Populate the form fields with existing contact data when editing
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    }
  }, [contact]);

  const addContact = async () => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, { name, email });
      onClose(); // Close the modal after adding the contact
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async () => {
    try {
      const contactRef = doc(db, "contacts", contact.id);
      await updateDoc(contactRef, { name, email });
      onClose(); // Close the modal after updating the contact
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact) {
      // If contact exists, update it
      //e.preventDefault();
      updateContact();
      toast.success('Contact Updated Succesfully');

    } else {
      // If contact doesn't exist, add a new one
      addContact();
      toast.success('Contact Added Succesfully');
      setEmail('');
      setName('');

    }
  };

  return (
    <>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <div className="fixed inset-0 z-40 backdrop-blur backdrop-filter backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-lg shadow-md max-w-[80%] w-4/5 md:w-[50%] lg:w-[40%] xl:w-[30%]">
            <div className="text-black flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            <div className="py-4 text-black flex flex-col">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    req
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-black-500 bg-yellow-500 rounded-lg p-2"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-black-500 bg-yellow-500 rounded-lg p-2"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-500 px-3 py-1.5 rounded-lg mt-3 self-end font-bold"
                >
                  {contact ? "Update Contact" : "Add Contact"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
