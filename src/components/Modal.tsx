import React from 'react';

interface ModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ id, isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div id={id} className="modal modal-active fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-lg max-w-lg w-full relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl font-bold z-10">&times;</button>
                {children}
            </div>
        </div>
    );
};