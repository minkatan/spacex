import { useParams } from 'react-router-dom'
import { useGetDragonDetailsQuery } from '../Services/spaceXAPI'
import { SiWikipedia } from "react-icons/si";
import Loading from '../components/Loading'

const Dragon = () => {
  const {id} = useParams()
  const {data: dragon, isFetching} = useGetDragonDetailsQuery(id)
  const thrusters = dragon?.thrusters
  const imagelist = dragon?.flickr_images

  if(isFetching) return <Loading/>

  return (
      <div className="container mx-auto space-y-8">
        <div className="px-4 leading-6 mt-6 border-b border-gray-200 w-full py-2 font-semibold text-white hover:bg-gray-900">
          <span className="capitalize text-2xl">{dragon?.name} </span>
        <a href={dragon?.wikipedia} className="flex flex-row items-center gap-x-4 text-sm">
          <span className={dragon?.active ? 'text-emerald-500 uppercase' : 'text-red-500 uppercase'}>{dragon?.active ? 'active' : 'inactive'}</span>
          <span><SiWikipedia /></span>
        </a>
        </div>
          <p className="text-sm text-gray-300">{dragon?.description}</p>
        <div className="md:py-8 grid lg:grid-cols-3 md:grid-cols-2">
          <p className='flex flex-col py-1 px-4'>type
          <span className="text-4xl font-extrabold">{dragon?.type}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>crew_capacity
          <span className="text-4xl font-extrabold">{dragon?.crew_capacity}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>first launch
          <span className="text-4xl font-extrabold">{new Date(dragon?.first_flight).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>sidewall angle
          <span className="text-4xl font-extrabold">{dragon?.sidewall_angle_deg}</span>
          </p>
          <p className='flex flex-col py-1 px-4'>orbit years
          <span className="text-4xl font-extrabold">{dragon?.orbit_duration_yr} years</span>
          </p>
          <p className='flex flex-col py-1 px-4'>mass
          <span className="text-4xl font-extrabold">{new Intl.NumberFormat('en-US', {style: 'unit', unit:'kilogram', unitDisplay: "short"}).format(dragon?.dry_mass_kg)}</span>
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 border-b border-gray-200 py-6'>
          {
            imagelist.map((img) => (
              <img key={img} src={img} alt=""/>
            ))
          }
        </div>
        <div className='flex flex-row'>
          <h1 className='text-2xl text-gray-300 flex items-center pr-4  border-r-2'>Thrusters</h1> 
        <div className='flex flex-col gap-y-4'>
          {thrusters.map((t) => (
            <div key={t.type} className='grid md:grid-cols-2 border-b-2 py-4'>
            <p className='flex flex-col py-1 px-4'>type
              <span className="text-xl font-bold">{t.type}</span>
            </p>
            <p className='flex flex-col py-1 px-4'>amount
                <span className="text-xl font-bold">{t.amount}</span>
              </p>
              <p className='flex flex-col py-1 px-4'>pods
                <span className="text-xl font-bold">{t.pods}</span>
              </p>
              <p className='flex flex-col py-1 px-4'>isp
                <span className="text-xl font-bold">{t.isp}</span>
              </p>
              <p className='flex flex-col py-1 px-4'>fuel
                <span className="text-xl font-bold">{t.fuel_1} / {t.fuel_2}</span>
              </p>
              <p className='flex flex-col py-1 px-4'>thrust
                <span className="text-xl font-bold">{t?.thrust?.kN} N / {t?.thrust?.lbf} lbf </span>
              </p>
            </div>
          ))}
        </div>   
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1'>
          <p className='flex flex-col py-4 px-2 border-2'>heat shield
            <span className="text-xl font-bold"><strong>material : </strong>{dragon?.heat_shield?.material}</span>
            <span className="text-xl font-bold"><strong>size : </strong>{dragon?.heat_shield?.size_meters} meters</span>
            <span className="text-xl font-bold"><strong>temperature : </strong>{dragon?.heat_shield?.temp_degrees}</span>
            <span className="text-xl font-bold"><strong>partner : </strong>{dragon?.heat_shield?.dev_partner}</span>
          </p>
          <p className='flex flex-col py-4 px-2 border-2'>paylod
            <span className="text-xl font-bold"><strong>launch mass : </strong>{new Intl.NumberFormat('en-US', {style: 'unit', unit:'kilogram', unitDisplay: "short"}).format(dragon?.launch_payload_mass?.kg)}</span>
            <span className="text-xl font-bold"><strong>launch volume : </strong>{new Intl.NumberFormat('en-US', {style: 'unit', unit:'meter', unitDisplay: "short"}).format(dragon?.launch_payload_vol?.cubic_meters)}</span>
            <span className="text-xl font-bold"><strong>return mass : </strong>{new Intl.NumberFormat('en-US', {style: 'unit', unit:'kilogram', unitDisplay: "short"}).format(dragon?.return_payload_mass?.kg)}</span>
            <span className="text-xl font-bold"><strong>return volume : </strong>{new Intl.NumberFormat('en-US', {style: 'unit', unit:'meter', unitDisplay: "short"}).format(dragon?.return_payload_vol?.cubic_meters)}</span>
          </p>
          <p className='flex flex-col py-4 px-2 border-2'>trunk
            <span className="text-xl font-bold"><strong>trunk : </strong>{dragon?.trunk?.cubic_meters} cbm</span>
            <span className="text-xl font-bold"><strong>trunk - height : </strong>{dragon?.height_w_trunk?.meters} m</span>
            <span className="text-xl font-bold"><strong>solar array : </strong>{dragon?.cargo?.solar_array} m</span>
            <span className="text-xl font-bold"><strong>diameter : </strong>{dragon?.diameter?.meters} m</span>
          </p>
        </div>
      </div>

  )
}

export default Dragon