<script>


    let numbersString = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29".split(",")
    let lettersString = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split("")
    
    let användare = "";

    let letters = [] ; 
    let username = "";

    let login = "Login under"
    let showpop = false;


    


    for(let number of numbersString){
        letters.push({number:number, top:Math.random()*100, left:Math.random()*100})
    }

    setInterval(()=>{
    letters = []    
    for(let number of numbersString){
        letters.push({number:number, top:Math.random()*100, left:Math.random()*100})
    }
    },2000)

    function addLetter(number, i){
        username += lettersString[number - 1];
        letters[i].top = Math.random()*100
        letters[i].left = Math.random()*100
        letters = letters;

    }

    

</script>




<main>

    <div class="knapp"><p>{login}</p></div>
    <div on:click={()=>{showpop=!showpop}} class="knapp"><p> </p></div>

</main>




<h1>Logga in som {username}</h1>
<div class="container">
{#each letters as {number,top,left}, i}
    <button on:click={()=>addLetter(number, i)} style="position:sticky;top:{top}%; left:{left}%;">{number}</button>

{/each}
</div>
{#if showpop}
    <div class="pop">Oj vad hände här?</div>
{/if}

<style>

    .pop{
        position: fixed;
        z-index: 1;
        left:45vw;
        top:45vh;
        width: 10vw;
        height: 10vh;
        background-color: red;
        text-align: center;
        border: 2px;
        border-radius: 20px;
    }

    .container{
        background-color: black;
        width: 700px;
        height: 500px;
        margin: auto;
    }

    button{
        background-color:greenyellow;
    }


    .knapp{
        left: 0px;
        bottom: 0px;
        border-radius: 1px;
        width: 100px;
        height: 20px;
    }


</style>





