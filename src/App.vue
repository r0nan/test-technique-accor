<template>
  <div>
    <Card 
      v-if="hotelsNearby"
      :name="hotelsNearby.commercialName"
      :distance="hotelsNearby.distance"
      :price="hotelsNearby.offer.price"
      :rating="hotelsNearby.localRating"
    ></Card>
  </div>
    
</template>

<script>
import Card from '@/components/Card';
import app from '../app'

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      hotelsNearby: null
    }
  },
  mounted() {
    const hotelsNearby = app.findHotelNearbyWithBestOfferForUser(48.856564, 2.351711, 2000, '11/01/2021', 2);
    this.hotelsNearby = hotelsNearby
  }
}
</script>
