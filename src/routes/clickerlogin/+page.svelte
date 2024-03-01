<script>


    let lettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("")
    let letters = [] ; 
    let username = "";
    


    for(let letter of lettersString){
        letters.push({letter:letter, top:Math.random()*100, left:Math.random()*100})
    }

    setInterval(()=>{
    letters = []    
    for(let letter of lettersString){
        letters.push({letter:letter, top:Math.random()*100, left:Math.random()*100})
    }
    },2000)

    function addLetter(letter, i){
        username += letter;
        letters[i].top = Math.random()*100
        letters[i].left = Math.random()*100
        letters = letters;
    }


</script>

<h1>Logga in som {username}</h1>
<div class="container">
{#each letters as {letter,top,left}, i}
    <button on:click={()=>addLetter(letter, i)} style="position:sticky;top:{top}%; left:{left}%;">{letter}</button>

{/each}
</div>


<style>


    .container{
        background-color: blue;
        width: 700px;
        height: 500px;
        margin: auto;
    }

    button{
        background-color: aquamarine;
    }


</style>>