


<h1>Photo App</h1>





<script>

    let images = ["https://i.pinimg.com/originals/1e/1f/17/1e1f17181701a672cb76871549a547cd.gif",
    "https://media.tenor.com/xmJnBpTf3dwAAAAd/fortnite-clip-krusty-krab.gif",
    "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif"]





</script>






<div class="photos">
    {#each images as image}
        <div class="image-wrapper">
            <img src= {image} alt = "flexbox rules">

        </div>
    {/each}
   

</div>


    <style>
        .photos{
        display:flex;
        /*Sätter att bredden på vår box enbart får vara 90% av webbfönstrets
        bredd*/
        max-width: 90vw;
        overflow: hidden;
    
        /*Det här ändrar platsen på bilderna */
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    
        }
        .photos img {
    /*Den maximala bredden på en bild, som ligger inom vår flex
    container,photos, är 100% av containers storlek (dess förälder)*/
        max-width: 100%;
    }

        .image-wrapper{
            max-width: 100%;
        }

        .image-wrapper img {
        max-width: 100%;
        flex:1;
        padding: 5px;
    }
        </style>