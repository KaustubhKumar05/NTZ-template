import { useRef, useEffect } from 'react';
import { CrossIcon } from '@100mslive/react-icons';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Modal = ({ innerContent = '', setModal, modal }) => {
    const modalRef = useRef(null);
    useOnClickOutside(modalRef, () => setModal(() => false));

    return modal ? (
        <div
            style={{ backdropFilter: 'blur(2px)' }}
            className="absolute z-10 h-screen w-screen top-0 left-0 flex items-center justify-center">
            <div className="bg-slate-800 p-5 rounded-md" ref={modalRef}>
                <div className="text-primary-default hover:text-primary-lighter w-max ml-auto">
                    <CrossIcon
                        style={{ color: 'inherit', cursor: 'pointer' }}
                        onClick={() => setModal(false)}
                    />
                </div>
                {innerContent}
            </div>
        </div>
    ) : null;
};

export default Modal;
