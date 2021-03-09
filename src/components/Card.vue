<template>
    <div class="card-container md:grid  md:grid-rows-4 md:grid-cols-3 md:gap-4 p-4 border rounded">
        <div class="hotel-img-container relative row-span-3">
            <img src="../assets/hotel.jpg" :alt="name" class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
        </div>
        <div class="row-span-3 md:col-span-2">
            <div class="flex flex-col h-full">
                <div class="flex text-xl capitalize  font-bold mt-2 md:mt-0">
                    {{ name }}
                    <span class="rating-star-container flex mx-2">
                        <img :key="r" v-for="r in rating" src="../assets/rating-star.svg">
                    </span>
                </div>
                <div class="text-gray-500 text-xs mt-1">
                    Hôtels - {{ distanceKm }} km de votre recherche
                </div>
                <div class="flex text-gray-500 text-xs mt-2">
                    <img src="../assets/tripadvisor.png">
                    <span class="font-bold ml-2">
                        4/5
                    </span>
                    <span class="ml-2">
                        (5563 Avis)
                    </span>
                </div>
                <div class="service-container flex mt-3 space-x-2">
                    <img src="../assets/parking.svg">
                    <img src="../assets/wifi.svg">
                    <img src="../assets/restaurant.svg">
                    <img src="../assets/air-conditioning.svg">
                    <img src="../assets/beverage.svg">
                </div>
                <div class="flex items-end flex-col text-xs justify-center flex-1 h-full mt-3 bg-gray-200 rounded relative p-5">
                    <div class="absolute right-0 top-0 font-bold mr-5 -mt-4  bg-white py-1 px-3 uppercase  rounded-3xl">
                        Tarif à partir de (1)
                    </div>
                    <div class="">
                        Pour 1 nuit | 1 adulte
                    </div>
                    <div class="mt-2">
                        Public 
                        <span class="text-base font-bold">78 <sub class="bottom-0">€</sub></span>
                        |
                        Membre
                        <span class="text-base font-bold text-blue-800 text-xl">{{ price }} <sub class="bottom-0">€</sub></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden md:invisible md:block"></div>
        <div class="flex flex-grow-0 justify-between items-center md:col-span-2 mt-3 md:mt-0">
            <span class="text-green-800 underline">Voir le calendrier des prix</span>
            <button class="flex-grow-0 bg-green-800 text-white py-2 px-5 rounded-3xl">Sélectionner une chambre</button>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Card',
    props: {
        name: {type: String, required: true},
        distance: {type: Number, required: true},
        price: {type: Number, required: true},
        rating: {type: Number, required: true},
    },
    computed: {
        distanceKm() {
            return this.distance / 1000
        }
    }
}
</script>

<style scoped>
    .card-container {
        height: 350px;
        max-width: 1000px;
        min-width: 500px;
        margin: 100px auto;
    }
    .rating-star-container img {
        width: 10px;
    }
    .service-container img {
        width: 25px;
    }
    @media (max-width: 768px) {
        .card-container{
            height: 600px;
        }
        .hotel-img-container {
            height: 300px;
        }
        .hotel-img-container img {
            max-height: 300px;
        }
    }
</style>