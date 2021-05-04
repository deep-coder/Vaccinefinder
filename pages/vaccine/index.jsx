import React, { useEffect, useState } from 'react'
const BASE_URL =
  'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=294&date=04-05-2021'
const Vaccine = () => {
  const [center,setCenter] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((r) => {
        const paid = r.centers.filter(v => v.fee_type === 'Paid');
        const totalAvailableCovain = [];
        for(let i = 0 ; i < paid.length ; i++){
          const sess = paid[i].sessions;
          for(let j = 0 ; j < sess.length ; j++){
            if(sess[j].min_age_limit === 18 && sess[j].available_capacity > 0){
              totalAvailableCovain.push(paid[i])
            }
          }
        }
        setCenter(totalAvailableCovain)
        console.log("Available covidShield", totalAvailableCovain)
      })
  },[])
  const renderDate = (sessions) => {
    if(sessions.available_capacity > 0){
      return (<span>{sessions.date}-->  </span>)
    }
  }
  return <div>
    <div>Centers Availble(bangalore)</div>
    {center.length === 0 && <div>No center Availble</div>}
    {center.map((c) => <div>Name: {c.name}, Pincode: {c.pincode} Available on :{c.sessions.map(c1 => renderDate(c1))}</div>)}

    </div>
}

export default Vaccine
