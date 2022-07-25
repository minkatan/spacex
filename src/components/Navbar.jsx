import { Disclosure} from '@headlessui/react'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import Rocketdd from './Dropdown/Rocketdd'
import Dragondd from './Dropdown/Dragondd'
import Switcher from './Switcher'



export default function Navbar() {

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-4 lg:px-6 py-4">
            <div className="flex">
              <div className="sm:ml-6 sm:block">
                <div className="flex flex-row justify-start items-center">
                <div className="mr-2 flex">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                </div>
                <Link 
               to='/'
               className=""
               >
                Home
               </Link>
               <Switcher />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="../company"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About SpaceX
              </Disclosure.Button>
              <Disclosure.Button
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                <Rocketdd dropdown />
              </Disclosure.Button>
              <Disclosure.Button
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                 <Dragondd dropdown />
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="../launches"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
               Launches 
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="../crews"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Space Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="../pod"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Picture of the Day
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
