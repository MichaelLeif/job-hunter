import React from 'react'
import NavBar from './NavBar'

export default function UnloadedDashboard() {
	return (
		<div className="flex flex-col w-screen">
				<NavBar />
				<div className="flex flex-col items-center justify-center text-center h-screen">
					<span className="text-lg font-semibold">	
						The better way to track your jobs
						<br />
						Sign up to start now!
					</span>
				</div>
		</div>
	)
}