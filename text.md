<main id="main" class="flex  items-center justify-center h-[400vh]">
		<div class="h-[10px] fixed top-0 z-40 bg-[lime] w-full div"></div>
		<div class="bg-slate-400 w-[30vw] h-[50vh] flex flex-col gap-10 items-center pt-10">
			<h1 class="mb-20 text-4xl uppercase font-bold">contador</h1>
			<div class="flex items-center gap-10">
				<button class="btn-aument bg-green-500 p-5 rounded-md text-2xl font-medium hover:scale-105 duration-150">
					Aumentar
				</button>
				<button class="btn-reset bg-red-600 p-5 text-2xl font-medium rounded-md hover:scale-105 duration-150">
					Disminuir
				</button>
			    
			</div>
			<h4 class="text-4xl font-bold mt-5">Contador: <span id="span">0</span></h4>
			<a href="/Cata">ta</a>
		</div>
	</main>






    <style>
	
	
	main {
		margin: auto;
		padding: 1rem;
		background-color: rgb(62, 59, 59);
		color: white;
		font-size: 20px;
		line-height: 1.6;
	}
	
	.div{
		scale: 0 1;
		animation: scroll-watcher linear;
		animation-timeline: scroll();
		transform-origin: center;
	}
	@keyframes  scroll-watcher{
		to{
			scale: 1 1;
		}
	}
	

	
</style>
<script type="module">

const buttonAumentar = document.querySelector(".btn-aument")
const buttonReset = document.querySelector(".btn-reset")
 const span = document.getElementById("span")
let contador = 0


 buttonAumentar.addEventListener("click",() =>{
	contador++
	span.textContent = contador
 })
buttonReset.addEventListener("click", (e) =>{
	contador--
	span.textContent = contador
	e.stopPropagation()
})
if(contador === 10){
	contador == 0
}

</script>