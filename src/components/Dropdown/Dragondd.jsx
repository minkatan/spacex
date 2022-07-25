import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { useGetDragonsQuery } from '../../Services/spaceXAPI'
import Loading from '../Loading'

const Dragondd = ({ dropdown }) => {
    const {data:array, isFetching} = useGetDragonsQuery()

    if(isFetching) return <Loading />

  return (
      <>
         {/* Dragon Dropdown */}
      {dropdown && 
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
          {array?.map((d) => (
            <Menu.Item 
            key={d.id}
            className="py-1 px-2 hover:bg-blue-900"
            >
              <Link 
              to={`/dragon/${d.id}`}
              className=""
              >
                {d.name}
              </Link>
          </Menu.Item>    
          ))}
        </Menu.Items>
      </Transition>
       </Menu>
    }

    {!dropdown &&
      array.map((d) => (
        <>
          <div className="px-4 leading-6 mt-6 w-full py-2 font-semibold">
          <Link 
              to={`/dragon/${d.id}`}
              className=""
              >
            <span className="capitalize text-2xl">{d?.name} </span>
            <span className={d?.active ? 'text-emerald-500 uppercase' : 'text-red-500 uppercase'}>{d?.active ? 'active' : 'inactive'}</span>
            <img src={d.flickr_images[0]} alt="" className='h-1/2' />
          </Link>
          </div>
          <div className="md:py-8 flex flex-col gap-y-2">
          <p className='flex flex-col py-1 px-4'>type
          <span className="text-3xl font-extrabold">{d?.type}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>crew_capacity
          <span className="text-3xl font-extrabold">{d?.crew_capacity}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>first launch
          <span className="text-3xl font-extrabold">{new Date(d?.first_flight).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>sidewall angle
          <span className="text-3xl font-extrabold">{d?.sidewall_angle_deg}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>orbit years
          <span className="text-3xl font-extrabold">{d?.orbit_duration_yr} years</span>
          </p>
          <p className='flex flex-col py-1 px-4'>mass
          <span className="text-3xl font-extrabold">{new Intl.NumberFormat('en-US', {style: 'unit', unit:'kilogram', unitDisplay: "short"}).format(d?.dry_mass_kg)}</span>
          </p>
          </div>
        </>
      ))
    }
  </>
  )
}

export default Dragondd