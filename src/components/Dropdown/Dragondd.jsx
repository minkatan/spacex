import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { useGetDragonsQuery } from '../../Services/spaceXAPI'
import Loading from '../Loading'

const Dragondd = () => {
    const {data:array, isFetching} = useGetDragonsQuery()

    if(isFetching) return <Loading />

  return (
      <>
     {/* Dragon Dropdown */}
     <Menu as="div" className="relative">
     <div>
       <Menu.Button className="flex rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
         Dragon
       </Menu.Button>
     </div>
     <Transition
       as={Fragment}
       enter="transition ease-out duration-100"
       enterFrom="transform opacity-0 scale-95"
       enterTo="transform opacity-100 scale-100"
       leave="transition ease-in duration-75"
       leaveFrom="transform opacity-100 scale-100"
       leaveTo="transform opacity-0 scale-95"
     >
       <Menu.Items className="absolute left-36 -top-2 w-full flex flex-col gap-y-1 mt-2 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
           {array?.map((r) => (
             <Menu.Item 
             key={r.id}
             className="py-1 px-2 hover:bg-blue-900"
              >
               <Link 
               to={`/dragon/${r.id}`}
               className=""
               >
                 {r.name}
               </Link>
           </Menu.Item>    
           ))}
       </Menu.Items>
     </Transition>
   </Menu>
      </>
  )
}

export default Dragondd