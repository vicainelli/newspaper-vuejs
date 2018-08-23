<template>
  <div id="app">


    <Header></Header>

<!--
<div class="max-w-2xl mx-auto px-4 my-2">
	<div class="w-full h-64 bg-orange"></div>
	<div class="border-b mt-2"></div>
</div> -->


<div class="max-w-2xl mx-auto px-4 my-2">
	<div class="flex pt-4">
		<div class="w-1/5 border-r pr-2">
      <NewsSingleBlock
      title="Turkey’s Currency Crisis Tests Erdogan’s Approach"
      author="CARLOTTA GALL"
      date="6:17 PM"
      content="Turkey’s worst economic crisis since 2001 has confronted President Recep Tayyip Erdogan with the limits of his authoritarian approach, and could end his long run of success."></NewsSingleBlock>

			<hr class="border-t my-3">
	</div>
<!-- 		ends col 1 -->

		<div class="md:w-2/5 px-2">

			<img id="g-promo-master-img" class="g-aiImg" src="https://static01.nyt.com/newsgraphics/2018/06/18/house-ratings/970e78d0690579f50b18b18dfb629c0ef427eb90/promo-master.jpg">

			<h2 class="font-serif text-center font-normal text-xl">House Races to Watch <br> in the Midterm Elections</h2>
			<p class="text-center font-serif my-2 text-sm leading-tight">Dozens of competitive congressional races have shifted in the direction of Democrats in recent months.</p>
			<p class="text-center text-grey-dark font-serif text-xs">By THE NEW YORK TIMES</p>

			<div>
				<h2 class="font-serif text-sm leading-tight">‘Don’t Run This Year’: The Perils for Republican Women</h2>
				<p class="font-serif text-xs text-grey leading-tight">By KATE ZERNIKE 7:22 PM ET</p>
				<div class="flex mt-2">
					<p class="font-serif text-sm leading-tight flex-1 pr-1">The energy in the midterms is working against female Republican candidates who are reluctant or unable to claim any advantage to being a woman among voters.</p>
					<img src="https://static01.nyt.com/images/2018/08/10/us/politics/00repubwomen1/00repubwomen1-thumbStandard.jpg" alt="">
				</div>
			<div class="text-xs">
				<i class="fa fa-comment mr-1"></i><a href="">220 Comments</a>
			</div>
			</div>
		</div>
<!-- 	ends of col 2	 -->

		<div class="w-2/5 border-l">
			<h2 class="text-center text-xs font-serif mb-2">Opinion</h2>
			<div class="flex">
				<div class="w-1/2 px-2 border-r">
<h3 class="text-sm font-serif mb-1">Welcome to the Resistance, Omarosa</h3>
<p class="text-xs text-grey mb-1 font-serif leading-tight">By MICHELLE GOLDBERG</p>
<p class="text-xs font-serif leading-tight"><img src="https://static01.nyt.com/images/2018/08/13/opinion/13goldberg-01/merlin_142300929_fbf62a5f-6907-44ff-a87f-b70ef2515300-blogSmallThumb.jpg" align="right" alt=""> She’s a venal scammer, but she’s right to tell all about Trump. </p>
				</div>
				<div class="w-1/2 px-2">
					<h3 class="text-sm font-serif mb-1">Israel, This Is Not Who We Are</h3>

<p class="text-xs text-grey mb-1 font-serif leading-tight">By RONALD S. LAUDER</p>
<p class="text-xs font-serif leading-tight"><img src="https://static01.nyt.com/images/2018/08/15/opinion/13lauder/13lauder-blogSmallThumb.jpg" align="right" alt=""> We cannot allow the politics of a radical minority to alienate millions of Jews worldwide.</p>
				</div>
			</div>
		</div>
		</div>
</div>


  </div>
</template>

<script>
import Header from './components/Header.vue'
import NewsSingleBlock from './components/NewsSingleBlock.vue'

export default {
  name: 'app',
  components: {
    Header,
    NewsSingleBlock
  }
}
</script>