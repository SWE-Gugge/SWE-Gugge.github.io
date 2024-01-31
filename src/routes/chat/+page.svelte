<script>
  import { enhance } from "$app/forms";
  import "elizabot";
  import ElizaBot from "elizabot";
    import { each } from "svelte/internal";

  let eliza = new ElizaBot();

  let chat = [{ user: "eliza", text: eliza.getInitial() }];

  async function write(message) {
    // TODO: yeet in the new message

    chat.push({user: "me", text:message})
    chat = chat
    // random delay for writing
    //Hämta HTML-elementet med id:et visible
var element = document.getElementById("visible");
//Ändrar elementets CSS-egenskap display till default
element.style.display = "flex"; // Visa elementet

    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

element.style.display = "none"; // Visa elementet
    // TODO: write the text
    
    
  }
</script>


<svelte:head>
  <link rel="stylesheet" href="/pico.min.css">
  <style>
    nav {
      margin-left: 10%;
      margin-right: 10%;
      
    }
  </style>
</svelte:head>

<div class="container">
  <h1>TODO: Complete assignment</h1>
  <div class="scrollable">
    <!-- TODO: loop over the messages and display them -->
    {#each chat as message}
    <article>
      <span>
        {message.text}
      </span>
    </article>
    {/each}
    <article  id="visible">
      <span id="circle">
      </span>
      <span id="circle">
      </span>
      <span id="circle">
      </span>
    </article>
  </div>
  <form
    method="post"
    use:enhance={({ form, data, action, cancel }) => {
      /* https://kit.svelte.dev/docs/form-actions#progressive-enhancement */
      cancel(); //don't post anything to server
      const text = data.get("text");
      write(text);

      // TODO: reset the form using form.reset()
    }}
  >
    <input type="text" name="text" />
  </form>
</div>



<style>

@keyframes typing {
0% {transform: scale(1);}
50% {transform: scale(1.4);}
100% {transform: scale(1);}
}



#visible{
  height: 60px;
  width: 100px;
  padding:0%;
  justify-content: center;
  align-items: center;
  display: none;
}



 #circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color:black;
  animation-name: typing;
  animation-duration: 1000ms; /* Längd på animationen (till exempel 3sekunder) */
  animation-timing-function: ease-in-out; /* Funktion som styrtidsförloppet (till exempel "ease-in-out") */

}

</style>