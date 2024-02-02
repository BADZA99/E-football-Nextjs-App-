import React from 'react'
import { matchesType } from '../../../type'
import Competition from './Competition';
import Matches from './Matches';

const LeagueTable = ({data}:{data:matchesType}) => {
  return (
    <div className="py-2 px-2 md:px-3 rounded-md flex flex-col bg-[rgb(40,46,58)] mb-2">
      {/* Competiition */}
      <Competition data={data} />
      <Matches data={data}/>
    </div>
  );
}

export default LeagueTable
