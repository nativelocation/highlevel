<template>
	<div>
		<!-- Main content -->
		<div role="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App' 
    }
  }
}
</script>
