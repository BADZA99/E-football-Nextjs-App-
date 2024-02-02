import React from 'react'
import { matchesType } from '../../../type'
import Image from 'next/image'

const Matches = ({data}:{data:matchesType}) => {
    const getDate = new Date(data?.utcDate).toLocaleTimeString('en-US',{
        hour:'2-digit',
        minute:'2-digit'

    });
  return (
    <div className="grid grid-cols-3">
      <div className="w-full flex items-center">
        <div className="w-[20px] h-[32px] relative mr-2">
          {/* ! pour indique à TypeScript que vous êtes sûr que data?.homeTeam?.crest et data?.homeTeam?.name ne seront jamais null ou undefined. */}
          <Image src={data?.homeTeam?.crest!} alt={data?.homeTeam?.name!} fill className='object-cover' />
        </div>
        <p className="text-xs md:text-sm">{data?.homeTeam?.name}</p>
      </div>
      <div className='px-2 m-auto flex justify-center items-center bg-slate-600 rounded-md' >
        {
            data?.status==='FINISHED' ? <p className='text-xs md:text-sm text-white'> {data?.score?.fullTime?.home} - {data?.score?.fullTime?.away}</p>:(
                <p className='py-2 text-teal-400 text-xs'>{getDate}</p>
            )
        }
      </div>
        <div className="w-full flex items-center justify-end">
            <p className="text-sm text-right">{data?.awayTeam?.name}</p>
            <div className="w-[20px] h-[32px] relative ml-2">
            <Image src={data?.awayTeam?.crest!} alt={data?.awayTeam?.name!} fill className='object-cover' />
            </div>
        </div>
    </div>
  );
}

export default Matches
