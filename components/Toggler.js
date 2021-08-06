import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Toggler() {
    const [enabled, setEnabled] = useState(false)
    return (
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-gray-300' : 'bg-gray-300'} mt-3 h-5 w-10 opacity-100 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-5' : 'translate-x-0'} w-5 h-5 -ml-5 border pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
    )
}

export default Toggler