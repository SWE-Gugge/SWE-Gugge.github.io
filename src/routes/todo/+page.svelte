
<script>

let newtask = ""

let todos = []

function addtask(){

todos = [{task:newtask,done:false},...todos]


}



function removeTask(i){
    todos.splice(i,1)
    todos = todos

}

</script>








<div class="container">

<h1>Todo list</h1>
<input bind:value={newtask}><button on:click={addtask}>Add task</button>
<div class="layout">
    <div style="display:grid">
    <h1>NEW</h1>
    {#each todos as {task, done} }
        {#if !done }
             <div>{task}<button on:click={() => done = true}>done</button></div>
        {/if}
       
    {/each}
    </div>

    <div style="display:grid">
    <h1>COMPLETED</h1>
    {#each todos as {task, done},i }
        {#if done }
             <div>{task}<button on:click={()=>{removeTask(i)}}>remove</button></div>
        {/if}


       
    {/each}
    </div>
    </div>


</div>




<style>
    .container{
        width: 80vw;
        background-color:rgb(246, 252, 255);
        height: 70vh;
        border-width: 10px;
        border-style:double;
        border-color:dimgray;
        border-radius: 8px ;
        padding-top: 10px;
        text-align: center;


    }

    .layout{
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
    }

    input:focus{
background-color:rgb(213, 213, 213);
border-color:whitesmoke
}

    button:focus{
        border-color:black;
        cursor: pointer;
        border: none;
        
    }








</style>

