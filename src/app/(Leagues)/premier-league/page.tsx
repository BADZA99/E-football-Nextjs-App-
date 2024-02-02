import { filterLeague} from "@/api"
import LeagueTable from "@/app/components/LeagueTable";

const English = async () => {
  const getEnglishLeague = await filterLeague('Premier League')

  return (
    <div className='w-[600px]'>
      {getEnglishLeague.map((data) => (
        <div key={data.id}>
          <LeagueTable data={data} />
        </div>
      ))}
    </div>
  )
}

export default English