/* This example requires Tailwind CSS v2.0+ */
import { forwardRef, Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AlertTriangle } from 'react-feather';
import Button from './Button';

export default function Modal({open=false, title, body, handleClose =()=>{}}) {
  // const [open, setOpen] = useState(isOpen)


  const handleCancel = () => {
    handleClose()
  }

  const handleOk = () => {
    handleClose()
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        open={open}
        onClose={handleClose}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center xs:block xs:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden xs:inline-block xs:align-middle xs:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 xs:translate-y-0 xs:scale-95"
            enterTo="opacity-100 translate-y-0 xs:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 xs:scale-100"
            leaveTo="opacity-0 translate-y-4 xs:translate-y-0 xs:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all xs:align-middle xs:max-w-lg xs:w-full">
              <div className="bg-white px-4 pt-5 pb-4 xs:p-6 xs:pb-4">
                  <div className="mt-3 text-center xs:mt-0 xs:ml-4">
                    <Dialog.Title as="h3" className="text-2xl leading-6 font-normal text-gray-900">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2 text-danger">
                      {body}
                    </div>
                  </div>
              </div>
              <div className="bg-gray-50 px-4 pb-4 xs:px-6 flex sm:flex-row flex-col justify-center">
                <Button onClick={handleCancel} className="sm:mr-4 mb-4 sm:mb-0">
                  Cancel
                </Button>
                <Button onClick={handleOk} outline color="danger">
                  Yes Continue
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
