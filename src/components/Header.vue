<template>
  <header class="max-w-2xl mx-auto px-4 font-sans">

      <div class="flex justify-between items-center py-2 border-b mb-2">
        <div>
          <button class="text-xs uppercase font-semibold mr-4"><i class="mr-1 fa fa-bars"></i>Sections</button>
          <button class="text-xs uppercase font-semibold"><i class="mr-1 fa fa-search"></i>Search</button>
        </div>
        <div>
          <button class="text-xs tracking-wide bg-blue-dark text-white py-2 px-3 uppercase font-bold rounded mx-2">Subscribe now</button>
          <button class="text-xs bg-blue-dark text-white py-2 px-3 uppercase font-semibold rounded mx-2">Log in</button>
          <button><i class="fa fa-cog"></i></button>
        </div>
    </div>

    <div class="flex pb-2">
      <div class="w-1/5 h-24 bg-green-light"></div>
      <div class="flex-1">

          <div class="w-3/5 mx-auto text-center">
            <img class="h-16" alt="The VueJS News Logo" src="../assets/images/the-vuejs-news.png">
        </div>
        <div class="flex justify-center text-xs items-center">
          <div class="px-2">{{ today }}</div>
          <div class="px-2 border-l border-r"><i class="fa fa-file mr-1"></i><a href="" class="no-underline text-black hover:underline">Today’s Paper</a></div>
          <div class="border-r"><button class="py-1 px-2 rounded hover:bg-grey-lighter"><i class="fa fa-cloud text-grey"></i> 59°F</button></div>
          <div class=""><button class="py-1 px-2 rounded hover:bg-grey-lighter">Shanghai <span class="text-red">0.00%</span></button></div>
        </div>
      </div>
      <div class="w-1/5 bg-green-light"></div>
    </div>


    <div class="border-t-2 border-b border-grey-darker py-3">
      <nav class="text-center text-xs">
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">World</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">U.S.</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Politics</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">N.Y.</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Business</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Opinion</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Tech</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Science</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Health</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Sports</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Arts</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Books</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Style</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Food</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Travel</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Magazine</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">T Magazine</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">Real Estate</a>
        <a href="#" class="no-underline p-1 text-black hover:bg-grey-light ">ALL</a>

      </nav>
    </div>

  </header>
</template>

<script>
export default {
  name: 'Header',
  data: function() {
    return {
      // today:  'this.$moment().format('MMMM Do YYYY')'
      today:  this.$format(new Date(), 'MMMM Do YYYY')
    }
  }
}
</script>