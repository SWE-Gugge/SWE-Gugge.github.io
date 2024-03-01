
<script>


let enemytop = 0;
let enemyleft = 0;
let score = 0;

let top = 0;
let left = 0;
// up = 38
// down = 40
// right = 39
// left = 37
let bricks = [];
for(let i =0; i<450;i+=50)
    bricks.push(i)

    
function onKeyDown(e) {
    
    
  let temptop = top;
  let templeft = left;
    switch(e.keyCode) {


        case 38:
             temptop -= 50;
             break;
         case 40:
             temptop += 50;
             break;
         case 37:
             templeft -= 50;
             break;
         case 39:
             templeft += 50;
             break;
        }

        if(templeft>=0  && templeft<500)
            left = templeft


        if(temptop>=0  && temptop<500)
            top = temptop
    

        if(Math.abs(top -enemytop)<20 && Math.abs(left - enemyleft)<20){
            enemytop = bricks[Math.round(Math.random()*(bricks.length-1))];
            enemyleft =  bricks[Math.round(Math.random()*(bricks.length-1))];
            score = score + 1;
        }


     
}





</script>
<style>
main {
    width: 500px;
    height: 500px;
    border: solid blue 1px;
    margin: 10px auto;
    position: relative
}
.box {
    width: 50px;
    height: 50px;
    background-color: green;
    position: absolute;
    z-index: 2;

}

 .enemy{
    width: 50px;
    height: 50px;
    background-color: red;
    position: absolute;
    z-index: 1;
 }

 .score{
    width: 50px;
    height: 50px;
    background-color: aqua;
    text-align: center;
    font-size: 30;

 }

</style>


<main>
<div class = "box" style="left: {left}px; top: {top}px">
</div>

<div class = "enemy box"  style="left: {enemyleft}px; top: {enemytop}px"></div>


</main>

<div class = "score"><p>Score: {score}</p></div>

<svelte:window on:keydown|preventDefault={onKeyDown} />