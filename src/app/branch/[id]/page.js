import axios from 'axios';
import { notFound } from 'next/navigation';
import BranchDetails from './BranchDetails';

const BASE_URL = 'https://al-batel-team-data-default-rtdb.firebaseio.com/';


async function getBranches( ) {
  try {
    const response = await axios.get(`${BASE_URL}/branches.json`);
    return response.data || [];
  } catch (error) {
    console.error("Failed to fetch branches:", error);
    return []; 
  }
}


export default async function BranchPage({ params }) {
  const { id } = params; 
  const allBranches = await getBranches();

  
  const branch = allBranches.find((b) => b.id == id);


  if (!branch) {
    notFound();
  }


  return <BranchDetails branch={branch} />;
}


//  (Static Site Generation - SSG).
export async function generateStaticParams() {
  const branches = await getBranches();

  return branches.map((branch) => ({
    id: branch.id.toString(),
  }));
}
