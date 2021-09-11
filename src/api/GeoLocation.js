export const getLocation =  async (getCoords) => {
    if (navigator.geolocation) {
     await navigator.geolocation.getCurrentPosition(getCoords)
    } else {
      alert('GeoLocation not enabled')
    }
  }

  