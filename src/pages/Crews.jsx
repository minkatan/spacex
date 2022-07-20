import React from 'react'
import { Link } from 'react-router-dom';
import Loading from '../components/Loading'
import { useGetMemberInfoQuery } from '../Services/spaceXAPI'
import { SiWikipedia } from "react-icons/si";


const Crews = () => {
  const {data:array, isFetching} = useGetMemberInfoQuery()

  if(isFetching) return <Loading />
  return (
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12">
      <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl capitalize">Meet The Crew</h2>
        <p className="text-xl text-gray-300">
         List of Space Crew Members
        </p>
      </div>
      <ul className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
        {array.map((person) => (
          <li key={person.name} className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left">
            <div className="space-y-6 xl:space-y-10">
              <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.image} alt={person.name} />
              <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3 className="text-white">{person.name}</h3>
                  <p className="text-indigo-400">{person.agency}</p>
                  <Link to={`/launch/${person.launches[0]}`}>Launches</Link>
                </div>

                <ul className="flex justify-center space-x-5">
                  <li>
                    <a href={person.wikipedia} className="text-gray-400 hover:text-gray-300">
                      <span className="sr-only">Wikipedia</span>
                      <SiWikipedia />
                    </a>
                  </li>
                  <li className={person.status === 'active' ? 'text-emerald-400' : 'text-red-400'}>
                   {person.status}
                  </li>
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Crews