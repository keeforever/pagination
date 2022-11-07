import ProfileCard from "./ProfileCard";
import PageNav from "./PageNav";
import useFetch from "../useFetch";
import { getPageCards,buttonCounts } from "../utils";
import { useState} from "react";

const ProfileCardContainer = () => {
  const [slicePage,setSlicePage] =useState({first:0,last:10});
  const {isError,isLoading,apiData} = useFetch();

  const setPage=(pageIndex)=>{
    const {first,last}=getPageCards(pageIndex,10)
    setSlicePage({first,last})
  }
  // forward and backward
  const {buttonArr} = buttonCounts(apiData,10)

  const nextPage=()=>{
    if(slicePage.last>buttonArr[buttonArr.length-1]*10-10){
      setSlicePage({first:0,last:10})
      return ;
    }
    // concept is here:) next click woul on first page,if its last btn
    setSlicePage({...slicePage,last:slicePage.last+10,first:(slicePage.first)+10})
  }
  const prevPage=()=>{
    if(slicePage.first<1){
      setSlicePage({first:buttonArr[buttonArr.length-1]*10-10,last:buttonArr[buttonArr.length-1]*10})
      return ;
    }
    setSlicePage({...slicePage,last:slicePage.last-10,first:(slicePage.first)-10})
  }
  // loader and error
  if(isLoading){
      return (<h1 className="head-gear api-info">Loading...</h1>)
  }
  if(isError){
    return (<h1 className="head-gear api-info">Error...</h1>)
  }

  return (
    <>
    <section id="profile__cards-container">
      {
        // <ProfileCard/>
        apiData.slice(slicePage.first,slicePage.last).map((profile)=>{
          const {id}=profile
          return <ProfileCard key={id} profile={profile}/>
        })
      }
    </section>
      <PageNav  setPage={setPage} nextPage={nextPage} prevPage={prevPage} lastIndex={slicePage.last}/>
    </>
  )
}

export default ProfileCardContainer
