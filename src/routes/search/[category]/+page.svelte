<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>


<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <!-- TODO: Style the results -->
  <div>
    {#each data.response as item}
    <article >
    {#each Object.entries(item) as [key, value]}
      <p class={key}>{key}: {value}</p>
    {/each}
    </article>
    {/each}
  </div>
</main>


<style>
.id{
  background-color: beige;
}
 .alcohol{

  background-image: url;

 }

 .banks{

  background-color: blue;

 }


  .credit_cards{



  }




</style>
 
