<script >
    import { SettingsIcon } from 'svelte-feather-icons'
    import { ArrowDownIcon } from 'svelte-feather-icons'
</script>

<section class="hero is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
      <div class="container">
      <div class="columns is-centered">
        <div class="column is-two-thirds">  
    <nav class="navbar">
              
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <!-- <img src="https://bulma.io/images/bulma-type-white.png" 
              alt="Logo"> -->
              <b>Vistazo</b>
          </a>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu is-mobile" >
          <div class="navbar-end">
            <a class="navbar-item">
              Blog
            </a>
            <a class="navbar-item">
              <SettingsIcon size="1x"/>
            </a>
          </div>
        </div>
    </nav>
      </div>
      </div>
      </div>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <h1 class="title is-size-1">
            <b>Mantente Actualizado</b>
          </h1>
          <h2 class="subtitle columns has-text-grey is-size-4">
              <div class="column"><h4><b>Ahorra</b> tus datos móviles.</h4></div>
              <div class="column"><h4><b>Administra</b> la información que consumes.</h4></div>
              <div class="column"><h4><b>Menos tiempo</b> abriendo tus web favoritas.</h4></div>
          </h2>
            <a href="#main" class="button is-success is-medium is-rounded">
              <ArrowDownIcon size="2x"></ArrowDownIcon>
              <!-- &darr; -->
            </a>      
          
        </div>
      </div>
    </div>
  </div>

</section>