<script lang="ts">
    import { slide } from "svelte/transition";
    import { base } from "$app/paths";

    export let current: string = "";
    let mobileMenuOpen = false;

    let defaultMobileClass = "text-white hover:bg-rose-100 hover:text-gray-600 block rounded-md px-3 py-2 text-base font-medium";
    let currentMobileClass = "bg-red-300 text-gray-500 hover:text-gray-500 block rounded-md px-3 py-2 text-base font-medium";

    let defaultDesktopClass = "text-white hover:bg-rose-100 hover:text-gray-600 px-2 py-2 rounded-md text-sm font-medium";
    let currentDesktopClass = "bg-red-300 text-gray-500 hover:text-gray-500 px-2 mx-1 py-2 rounded-md text-sm font-medium";
</script>

<div class="max-w-xl mx-auto sticky top-0 z-10">
    <nav class="bg-red-400 sm:rounded-b-md shadow-md">
        <div class="mx-auto px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            
            <div class="flex flex-1 items-center sm:items-stretch justify-start">
              <div class="flex flex-shrink-0 items-center">
                <!-- title "Que vivas bien" -->
                <a href="{base}/" class="text-white font-bold text-2xl hover:text-white">Que vivas bien</a>
              </div>
            </div>
            <!-- expandable menu with links for mobile devices -->
            <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <!--
                    Icon when menu is closed.
        
                    Menu open: "hidden", Menu closed: "block"
                  -->
                  <svg class="{(mobileMenuOpen) ? "hidden" : "block"} h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" on:click={ () => mobileMenuOpen = true }>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  <!--
                    Icon when menu is open.
        
                    Menu open: "block", Menu closed: "hidden"
                  -->
                  <svg class="{(mobileMenuOpen) ? "block" : "hidden"} h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" on:click={() => mobileMenuOpen = false }>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            <!-- links for non-mobile devices -->
            <div class="absolute inset-y-0 right-0 hidden sm:flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a href="{base}/" class={(current == "home") ? currentDesktopClass : defaultDesktopClass}>Home</a>
                <a href="{base}/about/" class={(current == "about") ? currentDesktopClass : defaultDesktopClass}>About</a>
                <a href="{base}/archive/" class={(current == "archive") ? currentDesktopClass : defaultDesktopClass}>Archive</a>
            </div>
          </div>
        </div>
      
        <!-- Mobile menu, show/hide based on menu state. -->
        {#if mobileMenuOpen}
            <div class="sm:hidden" transition:slide>
            <div class="space-y-1 px-2 pt-2 pb-3">
                <a href="{base}/" class={(current == "home") ? currentMobileClass : defaultMobileClass}>Home</a>
                <a href="{base}/about/" class={(current == "about") ? currentMobileClass : defaultMobileClass}>About</a>
                <a href="{base}/archive/" class={(current == "archive") ? currentMobileClass : defaultMobileClass}>Archive</a>
            </div>
            </div>
        {/if}
    </nav>
</div>