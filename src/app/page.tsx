import { getServerSession } from "next-auth";
import { GET } from "./api/auth/[...nextauth]/route";
import Dashboard from "./_components/Dashboard";
import UnloadedDashboard from "./_components/UnloadedDashboard";

export const dynamic = "force-dynamic";

export default async function Home() {
	const session = await getServerSession(GET);

	if (session) {
		return (
			<Dashboard />
		)
	} else {
		return (
			<UnloadedDashboard />
		)
	}
}
