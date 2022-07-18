

export const goToHome = (navigate) => {
    navigate('/')
}
export const goBack = (navigate) => {
    navigate('-1')
}
export const goToAdminHomePage = (navigate) => {
    navigate('/admin')
}
export const goToApplicationFormPage = (navigate, tripId) => {
    navigate(`/application/${tripId}`)
}
export const goToCreateTripPage = (navigate) => {
    navigate('/create')
}
export const goToListTripsPage = (navigate) => {
    navigate('/list')
}
export const goToLoginPage = (navigate) => {
    navigate('/login')
}
export const goToTripDetailsPage = (navigate, tripId) => {
    navigate(`/details/${tripId}`)
}
