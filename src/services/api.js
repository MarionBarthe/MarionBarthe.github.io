// let response = await fetch('https://www.dnd5eapi.co/api/monsters/')

const getMonstersData = async () => {
    const response = await fetch(
      "https://api.open5e.com/monsters/", 
        {
          method: "GET", // or GET, PUT, DELETE, etc.
          headers: {
            "Content-Type": "application/json" // to have JSON content in body
          },
        }
      )
    const data = await response.json()
    return data.results
  }


export {getMonstersData}