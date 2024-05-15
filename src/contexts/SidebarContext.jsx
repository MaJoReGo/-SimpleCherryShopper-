import React, { useState, createContext } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => { // Agrega children como un parámetro de la función
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children} {/* Pasar children al SidebarContext.Provider */}
    </SidebarContext.Provider>
  );
};
