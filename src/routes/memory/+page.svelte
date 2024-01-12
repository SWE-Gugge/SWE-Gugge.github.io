<script>
    import { Input } from "postcss";


let red = 0

let blue = 0

let turn = true



  


  let cards = [];
  for (let index = 0; index < 12; index++) {
    cards.push({
      id: index, // TODO: unique ids per card card
      img: "https://picsum.photos/id/"+(10+index%6).toString()+"/200/300", // TODO: unique images per card card
      flipped: false,  // TODO: think
      completed: false,
    });
  }
  let flipcount = 0;

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(cards)




  function flip(card) {
    // flip card over if two cards are not already flipped
    // TODO: and card is already not flipped
    if (!card.flipped && flipcount < 2) {
      // TODO: Probably do what?
      card.flipped = true
      flipcount ++

      // flip the cards over after 2s from seeing both cards
      if (flipcount == 2) {

        cards.forEach((c)=>{
          if(
            c.flipped && c.img == card.img && c.id != card.id
          ){

            c.completed = true
            card.completed = true

            if (
              turn == true){
                blue ++
              }

            else if(turn == false){
              red ++
            }
            
          }
        })

        setTimeout(() => {
          // flip over cards that have not been marked as "completed"
          cards.forEach((card) => {
            card.flipped = card.completed;
          });
          flipcount = 0;
          cards = cards;
          turn = !turn

        }, 2000);


      }
      cards = cards;
    } else {
      alert("lugn");
    }
  }

  function reset(){
    cards.forEach((card) => {
            card.flipped = false;
             card.completed = false;
          });
          flipcount = 0;
          shuffleArray(cards)
          cards = cards;
  }

</script>
  <button on:click={reset}>Reset</button>

<main>
  <div class="row">
    {#each cards as card, i}
      <div
        on:click={() => {
          flip(card);
        }}
        on:keypress={() => {
          flip(card);
        }}
        class:flipped={card.flipped}
        class="card"
      >
        <img class="front" src={card.img} alt="" />
        <img class="back" src="front.webp" alt="" />
      </div>
    {/each}
  </div>

<div class="box" id="red-box"><p>{red}</p></div>
<div class="box" id="blue-box"><p>{blue}</p></div>
<div class = "box" id = "turn-box" style={turn?"right: 10px;":"left:10px"}></div>
<div class="button"></div>



</main>


<style>
  main {
    margin-top: 50px;
    display: flex;
    place-content: center;
    place-items: center;
  }

  .row {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(3, 100px);
  }

  @media (max-width:800px){
    .row{
      grid-template-columns: repeat(4, 100px);
    }
  }

  @media (max-width:600px){
    .row{
      grid-template-columns: repeat(2, 100px);
      grid-template-rows: repeat(6, 100px);

    }
  }

  .card {
    border: 1px solid black;
    border-radius: 10% 30% 50% 70%;
    cursor: pointer;
    transition: transform 1s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .card .back {
    transform: rotateY(0deg);
    
  }

  .card .front {
    transform: rotateY(180deg);
  }

  .card img {
    border-radius: 50% 20% / 10% 40%;;
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    position: absolute;
  }


  .box {
width: 100px;
height: 100px;
position: fixed;
text-align: center;
font-size: 30px;
}

#turn-box{
bottom: 10px;
z-index: 1;
background-color: greenyellow;
box-shadow: 0 0 20px 20px greenyellow;
}

  #red-box, #blue-box{
bottom: 0px;
z-index: 2;
}


#red-box {
background-color: red;
left: 0px;

}
#blue-box {
background-color: blue;
right: 0px;

}


  .butten {
    width: 100px;
    height: 100px;
    position: fixed;
    text-align: center;
    font-size: 30px;
    bottom: 0px;
    z-index: 1;


  }

</style>
