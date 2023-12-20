<script>
	import '../app.css';

	let allPoints = 1;

	let currentDateTime = new Date();
	function getWeekDay() {
		let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return daysList[currentDateTime.getDay()];
	}

	function getWeekDayColor() {
		let daysList = [
			'bg-orange-700',
			'bg-teal-700',
			'bg-sky-700',
			'bg-indigo-700',
			'bg-purple-600',
			'bg-pink-700',
			'bg-red-700'
		];
		return daysList[currentDateTime.getDay()];
	}

	const toggleAllTask = () => {
		const AllTask = document.getElementById('AllTask');
		AllTask.classList.toggle('hidden');
	};

	const toggleAddTask = () => {
		const AddTask = document.getElementById('AddTask');
		const HiddenAllTask = document.getElementById('AllTask');
		if (!HiddenAllTask.classList.contains('hidden')){
			AddTask.classList.toggle('hidden');
		};
		
	};

	const toggleToday = () => {
		const Today = document.getElementById(getWeekDay());
		Today.classList.toggle('hidden');
	};

	const toggleWeek = () => {
		const Week = document.getElementById('Week');
		Week.classList.toggle('hidden');
	};

	const toggleDay = (day) => {
		const element = document.getElementById(day);
		element.classList.toggle('hidden');
	};

	const toggleMonday = () => toggleDay('Monday');
	const toggleTuesday = () => toggleDay('Tuesday');
	const toggleWednesday = () => toggleDay('Wednesday');
	const toggleThursday = () => toggleDay('Thursday');
	const toggleFriday = () => toggleDay('Friday');
	const toggleSaturday = () => toggleDay('Saturday');
	const toggleSunday = () => toggleDay('Sunday');
</script>

<div class="w-screen max-w-md mx-auto min-h-screen bg-black text-sm">
	<!--Header -->
	<div class="w-full h-14 grid grid-cols-4 place-items-center bg-[#380C47] text-[#130418]">
		<div class="col-span-1 text-3xl font-mono font-extrabold"></div>
		<h1 class="col-span-2 text-3xl font-mono font-extrabold">Lonely</h1>
		<h1 class="col-span-1 text-3xl font-mono font-extrabold">{allPoints}</h1>
	</div>

	<!--Content-->
	<div class="flex">
		<!--Sidebar-->
		<div class="basis-[60px] w-[60px] min-h-screen bg-[#130418] pt-1 font-mono text-white">
			<button
				on:click={toggleToday}
				class="w-10 h-10 mx-auto my-2 {getWeekDayColor()} rounded-lg grid place-items-center text-[12px]"
				>Today</button
			>
			<button
				on:click={toggleWeek}
				class="w-10 h-10 mx-auto my-2 bg-[#B08545] rounded-lg grid place-items-center text-[12px]"
				>Week</button
			>
			<button
				on:click={toggleMonday}
				class="w-10 h-10 mx-auto my-2 bg-teal-700 rounded-lg font-extrabold grid place-items-center"
				>M</button
			>
			<button
				on:click={toggleTuesday}
				class="w-10 h-10 mx-auto my-2 bg-sky-700 rounded-lg font-extrabold grid place-items-center"
				>T</button
			>
			<button
				on:click={toggleWednesday}
				class="w-10 h-10 mx-auto my-2 bg-indigo-700 rounded-lg font-extrabold grid place-items-center"
				>W</button
			>
			<button
				on:click={toggleThursday}
				class="w-10 h-10 mx-auto my-2 bg-purple-600 rounded-lg font-extrabold grid place-items-center"
				>T</button
			>
			<button
				on:click={toggleFriday}
				class="w-10 h-10 mx-auto my-2 bg-pink-700 rounded-lg font-extrabold grid place-items-center"
				>F</button
			>
			<button
				on:click={toggleSaturday}
				class="w-10 h-10 mx-auto my-2 bg-red-700 rounded-lg font-extrabold grid place-items-center"
				>S</button
			>
			<button
				on:click={toggleSunday}
				class="w-10 h-10 mx-auto my-2 bg-orange-700 rounded-lg font-extrabold grid place-items-center"
				>S</button
			>

			<button
				on:click={toggleAllTask}
				class="w-10 h-10 mx-auto my-2 bg-[#b08545] rounded-lg grid place-items-center text-[12px]"
				>All</button
			>
		</div>

		<!--Lists-->
		<div class="basis-10/12 mx-auto">
			<slot />
		</div>
	</div>
</div>
