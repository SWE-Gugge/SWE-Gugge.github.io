<script>

  let routes = ["/","/memory", "/telltale", "/photoapp", "/register", "/todo", "/chat", "/search", "/scroll", "/clickerlogin", "/week1", "/Colin", "/blog"]
  import "../app.css"
</script>


<nav class="bg-gray-800">

  {#each routes as route}
      <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" href={route}> {route=="/"? "Hem": route.charAt(1).toUpperCase()+route.slice(2)} </a>
  {/each}




  <a
    target="_blank" rel="noreferrer"
    href="https://github.com/lisaviktorsson/lisaviktorsson.github.com"
    >GitHub</a
  >
</nav>

<hr />

<slot />
