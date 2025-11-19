import axios from 'axios';
import { notFound } from 'next/navigation';
import ServiceDetail from './ServiceDetail';

const BASE_URL = 'https://al-batel-team-data-default-rtdb.firebaseio.com/';


async function getServiceDetail( ) {
  try {
    const response = await axios.get(`${BASE_URL}/serviceDetail.json`);
    const data = response.data;

    if (!data) {
      return [];
    }

    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data.serviceDetail)) {
      return data.serviceDetail;
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch serviceDetail:", error);
    return []; 
  }
}


export default async function ServiceDetailPage({ params }) {
  const { id } = params; 
  const allServices = await getServiceDetail();

  
  const service = allServices.find((b) => b.id == id);


  if (!service) {
    notFound();
  }


  return <ServiceDetail service={service} />;
}


//  (Static Site Generation - SSG).
export async function generateStaticParams() {
  const branches = await getServiceDetail();

  return branches.map((service) => ({
    id: service.id.toString(),
  }));
}
