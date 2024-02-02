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
      {#if typeof value=="object"}
       {#each Object.entries(value) as [key1, value1]}
       <p class={key1}>{key1}: {value1}</p>
       {/each}
      {:else}
      <p class={key}>{key}: {value}</p>
      {/if}
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


  .credit_card_number{

    background-color: cyan;
    font-family: 'Times New Roman', Times, serif;

  }




</style>
 
