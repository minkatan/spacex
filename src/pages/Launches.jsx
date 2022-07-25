import React from 'react'
import { useGetLaunchesInfoQuery } from '../Services/spaceXAPI'
import Loading from '../components/Loading'

const Launches = () => {
    const {data: launches, isFetching} = useGetLaunchesInfoQuery()

    if(isFetching) return <Loading />
  return (
      <>
      {launches?.map((launch) => (
        <div>{launch?.name}</div>
      ))}
      </>
  )
}

export default Launches