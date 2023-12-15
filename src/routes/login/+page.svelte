<script>
    let firstname = ""
    let lastname = ""
function handleSubmit() {
// Perform form submission logic here
console.log("Hello " + firstname +" "+ lastname + "! Welcome to my website.");
}   
</script>


<p>I do not have a account? <a

    href="/register">register account</a></p>

<main>

    <h1>Login Form</h1>
    
</main>








<form on:submit|preventDefault={handleSubmit}>

    <label for="email">Email:</label>
    <input id="email" type = "email"/>

    <label for="password">Password:</label>
    <input id="password" type="password"/>

<button type="submit">Log in</button>

</form>




<style>

form {grid-template-columns: repeat(2, minmax(200px, 1fr));}

    form{display:inline-grid;}  



</style>