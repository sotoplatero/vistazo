<script>
    // import { HomeIcon, SettingsIcon } from 'svelte-feather-icons' 
</script>

<nav class="flex bg-white fixed top-0 inset-x-0 z-40 h-16 items-center shadow" role="navigation">
  <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
    
    <div class="mr-4 md:mr-8">
      <a href="/">
        <span class="font-bold font-serif font-mono text-xl text-purple-600">Notificon</span>
      </a>
    </div>

    <div class="w-auto flex-grow flex items-center">
      <ul class="flex flex-no-wrap items-center ml-auto border-0 space-x-6">
        <li>
          <a href="/home" class="py-1 text-gray-800 font-semibold">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home inline h-6 w-6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>            
            <!-- <HomeIcon size="1.4x" class="inline"></HomeIcon> -->
            <span class="md:inline hidden ml-2">Inicio</span>
          </a>
        </li>
        <li>
          <a href="/contact" class="py-1 text-gray-800 font-semibold">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail inline h-6 w-6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>            
            <!-- <MailIcon size="1.4x" class="inline"></MailIcon> -->
            <span class="md:inline hidden ml-2">Contacto</span>
          </a>
        </li>
        <li>
          <a href="/config" class="py-1 text-gray-800 font-semibold">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings inline h-6 w-6"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>

            <span class="md:inline hidden ml-2">Preferencias</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</nav>
