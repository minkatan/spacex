import { useParams } from 'react-router-dom'
import { useGetRocketDetailsQuery } from '../Services/spaceXAPI'
import { SiWikipedia } from "react-icons/si";
import Loading from '../components/Loading'

const Rocket = () => {
  const {id} = useParams()
  const {data: rocket, isFetching} = useGetRocketDetailsQuery(id)
  const engines = rocket?.engines
  const imagelist = rocket?.flickr_images
  
  if(isFetching) return <Loading/>

  return (
      <div className="container mx-auto space-y-8">
        <div className="px-4 leading-6 mt-6 border-b border-gray-200 w-full py-2 font-semibold text-white hover:bg-gray-900">
          <span className="capitalize text-2xl">{rocket?.name} </span>
        <a href={rocket?.wikipedia} className="flex flex-row items-center gap-x-4 text-sm">
          <span className={rocket?.active ? 'text-emerald-500 uppercase' : 'text-red-500 uppercase'}>{rocket?.active ? 'active' : 'inactive'}</span>
          <span><SiWikipedia /></span>
        </a>
        </div>
          <p className="text-sm text-gray-300">{rocket?.description}</p>
        <div className="md:py-8 grid lg:grid-cols-3 md:grid-cols-2">
          <p className='flex flex-col py-1 px-4'>cost per launch
            <span className="text-4xl font-extrabold">{new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD', notation: "compact",compactDisplay: "long"}).format(rocket?.cost_per_launch)}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>success %
          <span className="text-4xl font-extrabold">{rocket?.success_rate_pct}%</span>
          </p>
          <p className='flex flex-col py-1 px-4'>first launch
          <span className="text-4xl font-extrabold">{new Date(rocket?.first_flight).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>height
          <span className="text-4xl font-extrabold">{rocket?.height?.meters} meters</span>
          </p>
          <p className='flex flex-col py-1 px-4'>diameter
          <span className="text-4xl font-extrabold">{rocket?.diameter?.meters} meters</span>
          </p>
          <p className='flex flex-col py-1 px-4'>mass
          <span className="text-4xl font-extrabold">{new Intl.NumberFormat('en-US', {style: 'unit', unit:'kilogram', unitDisplay: "short"}).format(rocket?.mass?.kg)}</span>
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 border-b border-gray-200 py-6'>
          {
            imagelist.map((img) => (
              <img src={img} alt=""/>
            ))
          }
        </div>
        <div className='flex flex-row'>
        <h1 className='text-2xl text-gray-300 flex items-center pr-4 mb-4  border-r-2'>Engine</h1> 
        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 py-8'>
          <p className='flex flex-col py-1 px-4'>type
            <span className="text-xl font-bold">{engines?.type}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>thrust
            <span className="text-xl font-bold">{engines?.thrust_to_weight}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>layout
            <span className="text-xl font-bold">{engines?.layout}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>engine_loss
            <span className="text-xl font-bold">{engines?.engine_loss_max}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>propellant 1
            <span className="text-xl font-bold">{engines?.propellant_1}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>propellant 2
            <span className="text-xl font-bold">{engines?.propellant_2}</span>
          </p>
        </div>
        </div>
      </div>

  )
}

export default Rocket