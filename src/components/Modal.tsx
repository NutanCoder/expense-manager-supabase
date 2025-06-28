import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

function Modal(props: ModalProps) {
  const { isOpen, onClose, children, title } = props;
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="text-2xl font-bold">{title}</div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
          >
            <X className="w-8 h-8" />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
