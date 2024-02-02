import { apiOptions, matchesType } from "../../type";

const option:apiOptions={
    next:{revalidate:30},
    headers:{
        "X-Auth-Token":process.env.API_TOKEN,
        "Content-Type":"application/json"
    }
}

export const getFootballMatches=async ()=>{
    const matchData=await fetch('https://api.football-data.org/v4/matches',option)
    return matchData.json()
}

const todayDate=new Date();
const getDateMonth=new Date(todayDate.getTime())
getDateMonth.setDate(todayDate.getDate()-1);

const year=getDateMonth.getFullYear();
const month=String(getDateMonth.getMonth()+1).padStart(2,'0');
const date=String(getDateMonth.getDate()).padStart(2,'0');

const yesterday=`${year}-${month}-${date}`;






export const getMatchesFootballFinished= async ()=>{
    const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`)
    return matchData.json()

}

export const getNewsInfo = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=soccer&pageSize=5`,{next:{revalidate:30}})
  return newsData.json()
}

// filter league
export const filterLeague=async (filterData:string)=>{
    const getLeague=await getFootballMatches();
    const filterLeague:matchesType[]=getLeague.matches
    const getData=filterLeague.filter((item)=> item.competition.name === filterData)
    return getData
    
}

