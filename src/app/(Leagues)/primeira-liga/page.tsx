import { filterLeague } from '@/api'
import LeagueTable from "@/app/components/LeagueTable";

const PrimeiraLiga = async () => {
  const getPrimeiraLiga = await filterLeague('Primeira Liga')
  return (
    <div className='w-[600px]'>
      {getPrimeiraLiga.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default PrimeiraLiga