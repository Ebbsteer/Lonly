<script>
	import '../app.css';

	let allPoints = 1;

	let currentDateTime = new Date();
	function getWeekDay() {
		let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		return daysList[currentDateTime.getDay()];
	}

	//styles
	const headerStyle = 'text-3xl font-mono font-extrabold'
	const toggleButtonStyle = 'w-10 h-10 mx-auto my-2 rounded-lg grid place-items-center'
	const toggleButtonStyleLetter = toggleButtonStyle + ' font-extrabold'
	const toggleButtonStyleText = toggleButtonStyle + ' text-[12px]'
	const getAddColor = 'bg-stone-600';
	const getWeekColor = 'bg-[#B08545]';
	//

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
		<div class="col-span-1 {headerStyle}"></div>
		<h1 class="col-span-2 {headerStyle}">Lonely</h1>
		<h1 class="col-span-1 {headerStyle}">{allPoints}</h1>
	</div>

	<!--Content-->
	<div class="flex">
		<!--Sidebar-->
		<div class="basis-[60px] w-[60px] min-h-screen bg-[#130418] pt-1 font-mono text-white">
			<button
				on:click={toggleToday}
				class="{toggleButtonStyleText} {getWeekDayColor()}"
				>Today</button
			>
			<button
				on:click={toggleWeek}
				class="{toggleButtonStyleText} {getWeekColor}"
				>Week</button
			>
			<button
				on:click={toggleMonday}
				class="{toggleButtonStyleLetter} bg-teal-700"
				>M</button
			>
			<button
				on:click={toggleTuesday}
				class="{toggleButtonStyleLetter} bg-sky-700"
				>T</button
			>
			<button
				on:click={toggleWednesday}
				class="{toggleButtonStyleLetter} bg-indigo-700"
				>W</button
			>
			<button
				on:click={toggleThursday}
				class="{toggleButtonStyleLetter} bg-purple-600"
				>T</button
			>
			<button
				on:click={toggleFriday}
				class="{toggleButtonStyleLetter} bg-pink-700"
				>F</button
			>
			<button
				on:click={toggleSaturday}
				class="{toggleButtonStyleLetter} bg-red-700"
				>S</button
			>
			<button
				on:click={toggleSunday}
				class="{toggleButtonStyleLetter} bg-orange-700"
				>S</button
			>

			<button
				on:click={toggleAllTask}
				class="{toggleButtonStyleText} {getAddColor}"
				>All</button
			>
		</div>

		<!--Lists-->
		<div class="basis-10/12 mx-auto ">
			<slot />
		</div>
	</div>
</div>
