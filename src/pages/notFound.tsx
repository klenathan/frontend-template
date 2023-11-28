const NotFound = () => {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center">
			<div className="flex flex-col gap-5 items-center justify-center">
				<h1 className="font-bold text-6xl">Status 404: Not Found!</h1>
				<a href="/" className="hover:underline">
					Back to homepage
				</a>
			</div>
		</div>
	)
}

export default NotFound
