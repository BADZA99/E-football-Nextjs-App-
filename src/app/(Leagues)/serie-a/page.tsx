import { filterLeague } from '@/api'
import LeagueTable from "@/app/components/LeagueTable";

const SerieA= async () => {
  const getSerieA= await filterLeague('Serie A')
  return (
    <div className='w-[600px]'>
      {getSerieA.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default SerieA