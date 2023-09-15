import React from 'react'
import Nav from './components/Nav'
import Input from './components/Input'
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firbase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactCard from './components/ContactCard';
import Modal from './components/Modal';



const App = () => {


  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }


  useEffect(() => {
    const getContactFromFireBase = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactRef);

        onSnapshot(contactRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })


      } catch (error) {
        console.log(error);
      }
    };

    getContactFromFireBase();
  }, []);

  const filterContacts = async (e) => {
    const value = e.target.value;
    const contactRef = collection(db, "contacts");

    onSnapshot(contactRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.
        filter(contacts => contacts.name.toLowerCase()
          .includes(value.toLowerCase()))


      setContacts(filteredContacts);
      return contactLists;
    })


  }

  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Nav />
        <Input onOpen={onOpen} filterContacts={filterContacts} />
        <div className='mt-4 '>
          {
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          }
        </div>
        <Modal isOpen={isOpen} onClose={onClose} />
      </div>

      <ToastContainer position='bottom-center' />

    </>

  )
}

export default App
