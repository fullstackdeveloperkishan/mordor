<template>
    <div class="border border-2 solid p-8 text-left space-y-2">
        <div class="cursor-pointer" @click="showList = !showList">Browser ({{selectedCountry && selectedCountry.length ? selectedCountry.length : 0}} / {{ countries.length}})</div>
        <div v-if="showList" class="transition delay-400 ease-in">
            <div  class="cursor-pointer" v-for="(browser, index) in countries" :key="index" @click="handleClick(browser)" >
                <input type="checkbox" :checked="selectedCountry.includes(browser)"/>
                {{browser}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    name: "Accordion",
    computed: {
        ...mapState({
            countries: (state) => state.assignment.country,
            selectedCountry: (state) => state.assignment.selectedCountry
        })
    },
    data() {
        return {
            list: [],
            showList: true
        }
    },
    methods: {
        handleClick(val) {
            if(this.selectedCountry.includes(val)) {
                this.list = [];
            } else {
                this.list = [val];
            }
            
            this.$store.dispatch("setSelectedCountry", this.list);
        }
    }
}
</script>