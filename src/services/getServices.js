
export async function getServices() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/get-all`)
        const services = res.json()
        return services
    } catch (err) {
        console.error(err);
    }
}
export async function getServiceDetails(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`)
        const services = res.json()
        return services
    } catch (err) {
        console.error(err);
    }
}