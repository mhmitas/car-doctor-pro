import axios from "axios";

export async function getServices() {
    try {
        const res = await fetch(`http://localhost:3000/services/api/get-all`, {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        });
        const data = await res.json();
        // console.log('getServices:', { services: data });
        return data;
    } catch (err) {
        console.error(err);
    }
}
export async function getServiceDetails(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services/api/${id}`)
        const services = await res.json()
        return services
    } catch (err) {
        console.error(err);
    }
}