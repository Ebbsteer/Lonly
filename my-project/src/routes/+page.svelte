<script>
	import { tasks } from '$lib/store.js';

	const toggleAddTask = () => {
		const AddTask = document.getElementById('AddTask');
		const HiddenAllTask = document.getElementById('AllTask');
		if (!HiddenAllTask.classList.contains('hidden')) {
			AddTask.classList.toggle('hidden');
		}
	};

	const toggleEditTask = () => {
		const EditTask = document.getElementById('EditTask');
		const HiddenAllTask = document.getElementById('AllTask');
		if (!HiddenAllTask.classList.contains('hidden')) {
			EditTask.classList.toggle('hidden');
		}
	};

	let allPoints = 1;

	let getAddColor = 'bg-stone-600';
	let getWeekColor = 'bg-[#B08545]';

	function getDayColor(day) {
		switch (day) {
			case 'Monday':
				return 'teal-700';
			case 'Tuesday':
				return 'sky-700';
			case 'Wednesday':
				return 'indigo-700';
			case 'Thursday':
				return 'purple-600';
			case 'Friday':
				return 'pink-700';
			case 'Saturday':
				return 'red-700';
			case 'Sunday':
				return 'orange-700';
			default:
				return '[#B08545]';
		}
	}

	function getCheckColor(day) {
		switch (day) {
			case 'Monday':
				return 'text-teal-900';
			case 'Tuesday':
				return 'text-sky-900';
			case 'Wednesday':
				return 'text-indigo-900';
			case 'Thursday':
				return 'text-purple-900';
			case 'Friday':
				return 'text-pink-900';
			case 'Saturday':
				return 'text-red-900';
			case 'Sunday':
				return 'text-orange-900';
			default:
				return 'text-[#B08545]';
		}
	}
</script>

<div class="text-white font-mono font-normal">
	<div id="AllTask" class="grid gap-2 p-4">
		<div class="flex justify-between {getAddColor} rounded-lg p-2 w-full text-center">
			<button
				on:click={toggleAddTask}
				class="text-[10px] shadow-sm shadow-stone-800 rounded px-2 h-fit">Add</button
			>
			<span class="col-span-2">All Tasks</span>
			<button class="text-[10px] shadow-sm shadow-stone-800 rounded px-2 h-fit">Edit</button>
		</div>

		<div id="AddTask" class="{getAddColor} hidden rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<form
					action="/"
					method="POST"
					class="grid gap-y-2 grid-cols-1"
					on:submit|preventDefault={(event) => {
						const dataForm = new FormData(event.currentTarget);
						const data = Object.fromEntries(dataForm.entries());

						tasks.update((tasks) => {
							return {
								allTasks: [
									{
										task: 'Task Name1',
										points: 10,
										mon: true,
										tue: false,
										wed: true,
										thu: true,
										fri: true,
										sat: true,
										sun: true
									},
									{
										task: 'Task Name2',
										points: 20,
										completed: false
									}
								]
							};
						});

						event.currentTarget.reset();
					}}
				>
					<div class="{getAddColor} rounded-lg p-[6px] grid grid-cols-7 text-[10px]">
						<input
							type="text"
							name="task"
							id="task"
							placeholder="'Task Name'"
							class="col-span-5 bg-transparent px-1 focus:outline-white focus:ring-transparent"
						/>
						<input
							type="number"
							name="points"
							id="points"
							placeholder="'20p'"
							class="col-span-2 bg-transparent px-1 text-center text-xs"
						/>

						{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
							<label for={day.toLowerCase()} class="grid grid-cols-1 place-items-center py-1">
								<span class="">{day}</span>
								<input
									type="checkbox"
									name={day.toLowerCase()}
									id={day.toLowerCase()}
									class="peer relative appearance-none w-[16px] h-[16px] border rounded border-white border-opacity-70 transition-all checked:bg-white checked:bg-opacity-20 checked:border-white checked:border-opacity-50"
								/>
								<span
									class="grid place-content-center mt-[-16px] z-10 text-white transition-opacity opacity-0 peer-checked:opacity-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-3 h-3"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</span>
							</label>
						{/each}
					</div>

					<div class="{getAddColor} rounded-lg p-[6px] grid">
						<input
							type="submit"
							name="submit"
							id="submit"
							value="Add Task"
							class="col-span-7 bg-transparent px-1"
						/>
					</div>
				</form>
			</div>
		</div>

		<div class="{getAddColor} rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				{#each $tasks['allTasks'] as task}
					<div class="{getAddColor} rounded-lg p-[6px] grid grid-cols-7 text-center">
						<span class="text-white col-span-6 text-left pl-[2%]">{task.task}</span>
						<span class="text-white col-span-1 grid place-items-center pr-[5%]">{task.points}p</span
						>

						{#each ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as day}
							<label
								for={day.toLowerCase()}
								class="grid grid-cols-1 place-items-center pb-1 text-[10px]"
							>
								<span class="">{day}</span>
								<input
									checked={$tasks['allTasks'][1][day.toLowerCase()]}
									type="checkbox"
									name={day.toLowerCase()}
									id={day.toLowerCase()}
									class="peer relative z-10 appearance-none w-[16px] h-[16px] border rounded border-white border-opacity-70 transition-all checked:bg-white checked:bg-opacity-20 checked:border-white checked:border-opacity-50"
								/>
								<span
									class="grid place-content-center mt-[-16px] text-white transition-opacity opacity-0 peer-checked:opacity-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-3 h-3"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</span>
							</label>
						{/each}
						<label for=""></label>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div id="Week" class="grid gap-2 p-4">
		<div class="{getWeekColor} rounded-lg p-2 w-full text-center">Weekly Tasks</div>

		<div class="{getWeekColor} rounded-lg p-[4px]">
			<div class="bg-black rounded-md p-[6px] grid gap-2">
				<div class="{getWeekColor} rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
				<div class="{getWeekColor} rounded-lg p-[6px]">
					<p class="text-white">Task Name</p>
				</div>
			</div>
		</div>
	</div>

	{#each ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as day}
		<div id={day} class=" grid gap-2 p-4">
			<div class={`bg-${getDayColor(day)} rounded-lg p-2 w-full text-center`}>
				{day}s Tasks
			</div>

			<div class={`bg-${getDayColor(day)} rounded-lg p-[4px]`}>
				<div class="bg-black rounded-md p-[6px] grid gap-2">
					{#each $tasks['allTasks'] ?? [] as task}
						<div class={`bg-${getDayColor(day)} rounded-lg p-[6px] grid grid-cols-8`}>
							<label
								class="relative grid place-content-start rounded-full"
								For={task.task + day + 'check'}
							>
								<input
									type="checkbox"
									id={task.task + day + 'check'}
									bind:checked={task.completed}
									class="peer relative appearance-none w-[20px] h-[20px] border-2 rounded-md border-white border-opacity-70 transition-all checked:bg-white checked:bg-opacity-20 checked:border-white checked:border-opacity-50"
								/>
								<span
									class="grid place-content-center mt-[-20px] z-10 {getCheckColor(
										day
									)} transition-opacity opacity-0 peer-checked:opacity-100"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-3 h-3"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"
										></path>
									</svg>
								</span>
							</label>
							<span class="text-white col-span-6">{task.task}</span>
							<span class="text-white col-span-1 grid place-items-center">{task.points}p</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
