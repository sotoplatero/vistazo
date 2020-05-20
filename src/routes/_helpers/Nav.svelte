<script>
    import { GithubIcon, MailIcon, SettingsIcon } from 'svelte-feather-icons' 
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
          <a href="https://github.com/sotoplatero/vistazo.git" target="_blank" rel="noreferer" class="py-1 text-gray-800 font-semibold">
            <MailIcon size="1.4x" class="inline"></MailIcon>
            <span class="md:inline hidden">Github</span>
          </a>
        </li>
        <li>
          <a href="/contact" class="py-1 text-gray-800 font-semibold">
            <GithubIcon size="1.4x" class="inline"></GithubIcon>
            <span class="md:inline hidden">Contacto</span>
          </a>
        </li>
        <li>
          <a href="/config" class="py-1 text-gray-800 font-semibold">
            <SettingsIcon size="1.4x" class="inline"></SettingsIcon>
            <span class="md:inline hidden">Perfil</span>
          </a>
        </li>
      </ul>
    </div>

  </div>
</nav>
