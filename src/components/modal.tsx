import React from 'react';

interface ModalProps {
    children: React.ReactNode
    title: string
}

export default function Modal({children, title}: ModalProps) {
    return (
        <>
        
        <div
        className='fixed top-0 right-0 bottom-0 left-0 bg-black/50'
        >

        </div>
        <div className='w-[600px] p-5 rounded bg-slate-100 absolute top-20 left-1/2 -translate-x-1/2'>
            <h2 className='mb-2'>{ title }</h2>
            {children}
        </div>
        </>
    )
}