"use client"
import React from 'react'
import { FiSend } from 'react-icons/fi'
import { ImAttachment } from 'react-icons/im'


const ChatArea = () => {
    return (
        <div className="h-[600px] bg-gray-100 dark:bg-slate-700 p-4 rounded-2xl">
            <div className="relative h-full max-w-[1000px] mx-auto py-3">
                <div className='sm:px-2 h-[480px] overflow-auto'>
                    <div className="chat chat-start">
                         <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
                    </div>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
                    </div>
                    <div className="chat chat-end">
                         <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                    </div>
                    <div className="chat chat-end">
                      <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
                    </div>
                    <div className="chat chat-end">
                      <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
                    </div>
                    <div className="chat chat-start">
                      <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
                    </div>
                </div>

                <form className='absolute bottom-1 left-0 bg-white dark:bg-slate-800 shadow-xl flex justify-between items-center gap-2 p-2 rounded-xl sm:w-full'>
                    <div className='w-full flex items-center gap-2'>
                        <button className='p-2 hover:scale-125 transition text-xl text-gray-400'>
                            <ImAttachment/>
                        </button>
                        <input type='text' placeholder='Type a message' className='w-full bg-transparent rounded-xl p-2'/>
                    </div>
                    <button className='p-2 hover:scale-125 transition text-2xl'>
                        <FiSend />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ChatArea;