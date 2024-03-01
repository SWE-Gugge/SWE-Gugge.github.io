<h1>Colin</h1>

<script>
    import Error from "../search/[category]/+error.svelte";


 let kassa = "Varu korg"
 let menu = ['dryck', 'mat', 'snacks'];

 let flavours = 'dryck';

 let products = [
    {info:"dryck",img:"https://res.cloudinary.com/anora/image/upload/t_HeroFullWidthImage-SM-SM/f_auto/folkofolk%2Fsprit%2FCocktails%2FRom_och_cola"}, {info:"dryck",img:"https://www.seriouseats.com/thmb/zw2r4cED7iYqdv0tlKEqFwMMyy8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230908-SEA-Martini-TwoBites-04-c25657f74b634726bdce127e304c2d82.jpg"}, {info:"dryck",img:"https://images.cocktailwave.com/cosmopolitan.png"}, {info:"dryck",img:"https://media.istockphoto.com/id/458560173/sv/foto/jack-daniels-old-no-7-whiskey.jpg?s=612x612&w=0&k=20&c=oRTp3FZSSRbnWMAMKXGA9plwihDJy3H0Mnb_5BbbPRY="}, {info:"dryck",img:"https://images.cocktailwave.com/tr:h-1200,w-1200/moscow-mule.png"}, {info:"dryck",img:"https://images.cocktailwave.com/tr:h-1200,w-1200/old-fashioned.png"}, 
    {info:"mat",img:"https://shared.cdn.smp.schibsted.com/v2/images/9ba377b7-de44-4f5f-854f-798a681b43c0?fit=crop&h=684&w=1000&s=ad4b67c90da6d9e73393f7d04c21c9bad1038b23"},{info:"mat",img:"https://res.cloudinary.com/anora/image/upload/t_HeroFullWidthImage-SM-SM/f_auto/folkofolk%2Fpokebowl-med-rakor_0"}, {info:"mat",img:"https://i.pinimg.com/236x/09/b9/36/09b9366e921c0ab35a0570676ee4845d.jpg"}, {info:"mat",img:"https://deliverkstan.se/wp-content/uploads/2018/03/2100x1400_choklad-1.jpg"}, {info:"mat",img:"https://i0.wp.com/media.victoriasprovkok.se/2022/03/9F72CF15-B532-46E0-86FD-3E49F8D3BEDF.jpeg?ssl=1"}, {info:"mat",img:"https://www.jokkmokk.se/globalassets/kommun--samhalle/barn-o-utbildning/bilder/allmanna-bilder/skolmat_tacos.jpg"},
    {info:"snacks",img:"https://res.cloudinary.com/coopsverige/images/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_330,w_330/v1691584622/cloud/287370/Snacks%20Kina%20R%C3%B6d.jpg"}, {info:"snacks",img:"https://res.cloudinary.com/happyorder/image/upload/e_trim:10:ffffff00,w_605/e_trim:10:ffffff00,/b_rgb:ffffff,f_auto,q_auto:eco,fl_lossy,w_605,h_750,g_center,c_fit/v1566510373/products/1394-1566510372"}, {info:"snacks", img:"https://shopping.tallink.com/_next/image?url=http%3A%2F%2Fwwtll018.fleet.zone%3A28152%2Fimages%2Fprod%2F8%2FE%2FE%2F3%2F8EE351C9-912C-4A9E-872E-E50367856048_1_big.png&w=3840&q=75"}, {info:"snacks", img:"https://www.sweetsideofsweden.com/_next/image/?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0761%2F8848%2F3889%2Ffiles%2Fphotoroom-generated-image-4.png%3Fv%3D1689320089&w=3840&q=75"}, {info:"snacks", img:"https://en.fazer.com/cdn/shop/products/Tutti-Frutti-Sour-Splash_640x640.gif?v=1677678385"}, {info:"snacks", img:"https://www.rusta.com/globalassets/inriver/resources/991524220201-177-P_638417783181023018.jpg?preset=ib"}
];

let varukorg = [];
 

$: p =  products.filter(value => value.info==flavours);

</script>

<main>
    <section class="blocks">
        {#each p as product}
            <div on:click={()=>{varukorg = [...varukorg,product]}}>
            <img class="block" src={product.img} alt="">
        </div>
        {/each}
        <p>p: {p}</p>
    </section>


<div class="knapp"><p>{kassa}</p></div>




<section class="blocks">
    {#each varukorg as product}
        <div on:click={()=>{varukorg = [...varukorg,product]}}>
        <img class="block" src={product.img} alt="">
    </div>
    {/each}
    <p>p: {p}</p>
</section>


<div class="knapp"><p>{kassa}</p></div>



<div class="categorics">
    {#each menu as flavour}
	<label>
		<input type="radio" bind:group={flavours}  value={flavour} />
		{flavour}
	</label>
{/each}
    
</div>


</main>

<style>
    .blocks {
        margin: auto;
        display: grid;
        grid-template-columns: repeat(2, 200px);
        grid-gap: 20px;
        width: fit-content;
    }
    
    .block {
        width: 200px;
        height: 200px;
    }

    .knapp {
        position: fixed;
        top: 50px; 
        right: 20px; 
        width: 60px;
        height: 60px;
        background-color: darkgreen;
        border-radius: 10px;
        display: flex;
        text-align: center;
    }


    .categorics{

        position: fixed;
        width: 250px;
        height: 450px;
        border-radius: 10px;
        border-color: darkgray;
        background-color: aliceblue;
        top: 100px;
        left: 50px;



    }
</style>