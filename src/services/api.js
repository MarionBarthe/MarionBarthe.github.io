
const getDndData = async (search) => {
    const response = await fetch(
      "https://api.open5e.com/search/?text="+search, 
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


export {getDndData}