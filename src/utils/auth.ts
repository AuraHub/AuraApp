export const checkAuth = async () => {
  try {
    const response = await fetch('http://localhost:3000/validate', {
      method: 'GET',
      credentials: 'include', // Ensures cookies are sent with the request
    })

    if (response.status === 200) {
      return true // User is logged in
    } else {
      return false // User is not logged in
    }
  } catch (error) {
    console.error('Error during authentication check', error)
    return false // Consider as not logged in in case of an error
  }
}
