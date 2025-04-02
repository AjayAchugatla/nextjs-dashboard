import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page() {
    const customers = await fetchFilteredCustomers("")
    return <Table customers={customers} />
}
