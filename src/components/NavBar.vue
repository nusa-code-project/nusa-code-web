<script lang="ts" setup>
</script>

<template>
    <nav class="navbar bg-white text-black fixed top-0 left-0 w-full z-50">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href="/ai-learning-hub">AI Learning Hub</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/roadmap-belajar">Roadmap Belajar</a></li>
                </ul>
            </div>
            <img src="/Logo.png" width="150" class="ps-8" alt="logo">
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="flex flex-row gap-5 px-1">
                <li><a class="hover:bg-transparent hover:text-current" href="/ai-learning-hub">AI Learning Hub</a></li>
                <li><a class="hover:bg-transparent hover:text-current" href="/">Home</a></li>
                <li><a class="hover:bg-transparent hover:text-current" href="/roadmap-belajar">Roadmap Belajar</a></li>
            </ul>
        </div>
        <div class="navbar-end gap-2 pe-8">
            <img src="/Frame 1618869483.png" width="30" alt="">
            <img src="/Frame 1618869484.png" width="30" alt="">
            <div class="w-6 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="/Ellipse 17.png" />
            </div>
        </div>
    </nav>
</template>