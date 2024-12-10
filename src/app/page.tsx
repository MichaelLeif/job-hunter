import JobCards from "@/components/JobCards";
import NavBar from "@/components/NavBar";
import SubBar from "@/components/SubBar";
import { db } from "@/db/index"

export const dynamic = "force-dynamic";

export default async function Home() {
	const jobs = await db.query.jobs.findMany();
	return (
		<div className="flex flex-col w-screen">
			<NavBar />
			<div className="flex items-end justify-end px-10">
				<SubBar />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
				{
					jobs.map((job, index) => (
						<JobCards key={index} job={job} />
					))
				}
			</div>
		</div>
	)
}
