<script>
	
</script>

<div class="text-white font-mono font-normal">

	<div id="Today" class="hidden grid gap-2 p-4">
		<div class="bg-[#B08545] rounded-lg p-2 w-full text-center">
			Todays Tasks
		</div>

		<div class="bg-[#B08545] rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-[#B08545] rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-[#B08545] rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="Week" class="hidden grid gap-2 p-4">
		<div class="bg-[#B08545] rounded-lg p-2 w-full text-center">
			Weekly Tasks
		</div>

		<div class="bg-[#B08545] rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-[#B08545] rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-[#B08545] rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="Monday" class="hidden grid gap-2 p-4">
		<div class="bg-teal-800 rounded-lg p-2 w-full text-center">
			Mondays Tasks
		</div>

		<div class="bg-teal-800 rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-teal-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-teal-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="Tuesday" class="hidden grid gap-2 p-4">
		<div class="bg-sky-800 rounded-lg p-2 w-full text-center">
			Tuesdays Tasks
		</div>

		<div class="bg-sky-800 rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-sky-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-sky-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="Wednesday" class="hidden grid gap-2 p-4">
		<div class="bg-indigo-800 rounded-lg p-2 w-full text-center">
			Wednesdays Tasks
		</div>

		<div class="bg-indigo-800 rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-indigo-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-indigo-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="Thursday" class="hidden grid gap-2 p-4">
		<div class="bg-purple-800 rounded-lg p-2 w-full text-center">
			Thursdays Tasks
		</div>

		<div class="bg-purple-800 rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-purple-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-purple-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="Friday" class="hidden grid gap-2 p-4">
		<div class="bg-pink-800 rounded-lg p-2 w-full text-center">
			Fridays Tasks
		</div>

		<div class="bg-pink-800 rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-pink-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-pink-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="Saturday" class="hidden grid gap-2 p-4">
		<div class="bg-red-800 rounded-lg p-2 w-full text-center">
			Saturdays Tasks
		</div>

		<div class="bg-red-800 rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-red-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-red-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="Sunday" class="hidden grid gap-2 p-4">
		<div class="bg-orange-800 rounded-lg p-2 w-full text-center">
			Sundays Tasks
		</div>

		<div class="bg-orange-800 rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="bg-orange-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="bg-orange-800 rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>	
			</div>
		</div>
	</div>

	<div id="AddTask" class="hidden grid gap-2 p-4">
		<div class="bg-[#B08545] rounded-lg p-2 w-full text-center">
			Add Task
		</div>

		<div class="bg-[#B08545] rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<form action="/" method="POST" class="grid gap-y-2 grid-cols-1">

					<div class="bg-[#B08545] rounded-lg p-[6px] grid grid-cols-7">
						<input type="text" name="task" id="task" placeholder="Task Name" class="col-span-5 bg-transparent px-1"/>
						<input type="number" name="points" id="points" placeholder="Points" class="col-span-2 bg-transparent px-1 text-center"/>
					</div>

					<div class="bg-[#B08545] rounded-lg p-[6px] grid grid-cols-7 text-center text-[10px]">
						<div>
							<label for="monday">Mon</label>
							<input type="checkbox" name="monday" id="monday">
						</div>

						<div>
							<label for="tuesday">Tue</label>
							<input type="checkbox" name="tuesday" id="tuesday">
						</div>

						<div>
							<label for="wednesday">Wed</label>
							<input type="checkbox" name="wednesday" id="wednesday">
						</div>

						<div>
							<label for="thursday">Thu</label>
							<input type="checkbox" name="thursday" id="thursday">
						</div>

						<div>
							<label for="friday">Fri</label>
							<input type="checkbox" name="friday" id="friday">
						</div>

						<div>
							<label for="saturday">Sat</label>
							<input type="checkbox" name="saturday" id="saturday">
						</div>

						<div>
							<label for="sunday">Sun</label>
							<input type="checkbox" name="sunday" id="sunday">
						</div>
					</div>

					<div class="bg-[#B08545] rounded-lg p-[6px] grid grid-cols-7">
						<input type="submit" name="submit" id="submit" value="Add Task" class="col-span-7 bg-transparent px-1"/>
					</div>	
					
				</form>
			</div>
		</div>
	</div>
	
</div>