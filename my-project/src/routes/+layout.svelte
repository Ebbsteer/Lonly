<script>
    import "../app.css";

    const AddTask = () => {
        const AddTask = document.getElementById("AddTask");
        AddTask.classList.toggle("hidden");
    }

    const ToggleToday = () => {
        const Today = document.getElementById("Today");
        Today.classList.toggle("hidden");
    }

    const ToggleWeek = () => {
        const Week = document.getElementById("Week");
        Week.classList.toggle("hidden");
    }

    const ToggleMonday = () => {
        const Monday = document.getElementById("Monday");
        Monday.classList.toggle("hidden");
    }

    const ToggleTuesday = () => {
        const Tuesday = document.getElementById("Tuesday");
        Tuesday.classList.toggle("hidden");
    }

    const ToggleWednesday = () => {
        const Wednesday = document.getElementById("Wednesday");
        Wednesday.classList.toggle("hidden");
    }

    const ToggleThursday = () => {
        const Thursday = document.getElementById("Thursday");
        Thursday.classList.toggle("hidden");
    }

    const ToggleFriday = () => {
        const Friday = document.getElementById("Friday");
        Friday.classList.toggle("hidden");
    }

    const ToggleSaturday = () => {
        const Saturday = document.getElementById("Saturday");
        Saturday.classList.toggle("hidden");
    }

    const ToggleSunday = () => {
        const Sunday = document.getElementById("Sunday");
        Sunday.classList.toggle("hidden");
    }
</script>

<div class="w-full max-w-sm mx-auto bg-black text-sm">
    <!--Header -->
    <div class="w-full h-14 grid place-items-center bg-[#380C47]">
        <h1 class="text-[#130418] text-3xl font-mono font-extrabold">Lonly</h1>
    </div>

    <!--Content-->
    <div class="flex"> 

        <!--Sidebar-->
        <div class="basis-[60px] w-12 h-[600px] bg-[#130418] pt-1 font-mono text-white">
            <button on:click={ToggleToday} class="w-10 h-10 mx-auto my-2 bg-[#B08545] rounded-lg grid place-items-center text-[12px]">Today</button>
            <button on:click={ToggleWeek} class="w-10 h-10 mx-auto my-2 bg-[#B08545] rounded-lg grid place-items-center text-[12px]">Week</button>
            <button on:click={ToggleMonday} class="w-10 h-10 mx-auto my-2 bg-teal-800 rounded-lg font-extrabold grid place-items-center">M</button>
            <button on:click={ToggleTuesday} class="w-10 h-10 mx-auto my-2 bg-sky-800 rounded-lg font-extrabold grid place-items-center">T</button>
            <button on:click={ToggleWednesday} class="w-10 h-10 mx-auto my-2 bg-indigo-800 rounded-lg font-extrabold grid place-items-center">W</button>
            <button on:click={ToggleThursday} class="w-10 h-10 mx-auto my-2 bg-purple-700 rounded-lg font-extrabold grid place-items-center">T</button>
            <button on:click={ToggleFriday} class="w-10 h-10 mx-auto my-2 bg-pink-800 rounded-lg font-extrabold grid place-items-center">F</button>
            <button on:click={ToggleSaturday} class="w-10 h-10 mx-auto my-2 bg-red-800 rounded-lg font-extrabold grid place-items-center">S</button>
            <button on:click={ToggleSunday} class="w-10 h-10 mx-auto my-2 bg-orange-800 rounded-lg font-extrabold grid place-items-center">S</button>

            <button class="w-10 h-10 mx-auto my-2 bg-[#B08545] rounded-lg grid place-items-center text-[12px]" on:click={AddTask}>Add</button>
        </div>

        <!--Lists-->
        <div class="basis-10/12 mx-auto">
            <slot />
        </div>
        
    </div>
</div>
