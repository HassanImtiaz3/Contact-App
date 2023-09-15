import React, { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import { db } from "../config/firbase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal";
import { toast } from "react-toastify";

function ContactCard({ contact, onUpdate }) {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      // Update the local state to remove the deleted contact
      onUpdate(id);
      //toast.success('Contact Deleted Succesfully');
    } catch (error) {
      console.log(error);
    }
    toast.success('Contact Deleted Succesfully');

  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow-500 flex items-center justify-between p-2 rounded-lg mt-3"
      >
        <div className="flex gap-3">
          <FaUserAstronaut className={`text-black-600 text-4xl `} />
          <div className="text-black">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex text-2xl gap-1">
          <AiTwotoneEdit onClick={onOpen} className="cursor-pointer" />
          <FaTrash
            className="cursor-pointer"
            onClick={() => deleteContact(contact.id)}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} contact={contact} />
    </>
  );
}

export default ContactCard;
