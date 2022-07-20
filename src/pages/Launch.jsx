import { useParams } from 'react-router-dom'
import { useGetLaunchInfoQuery } from '../Services/spaceXAPI'

import Loading from '../components/Loading'

const Launch = () => {
  const {id} = useParams()
  const {data: launch, isFetching} = useGetLaunchInfoQuery(id)

  if(isFetching) return <Loading />

  return (
    <div>{launch.name}</div>
  )
}

export default Launch