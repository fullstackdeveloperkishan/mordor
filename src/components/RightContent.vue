<template>
    <div class="p-8 text-left">
        <div class="">
            <div class="grid grid-cols-3" v-if="selectedBrowser.length > 0">
                <div class="p-4" v-if="selectedBrowser.length > 0">Browser</div>
                <div class="p-4" v-if="selectedCountry.length > 0">Country</div>
                <div class="p-4">Graph</div>
            </div>
            <div v-else>Please Start Filtering</div>
            <div class="mt-4">
                <div v-if="selectedBrowser.length > 0">
                <div class="grid grid-cols-3" v-for="selectedB, index in selectedBrowser" :key="index">
                    <div class="border solid border-2 p-4">{{selectedB}}</div>
                    <div class="border solid border-2 p-4" v-if="selectedCountry.length > 0">{{selectedCountry[0]}}</div>
                    <div class="border solid border-2 p-4"><Chart /></div>
                </div>
                </div>
                <div v-else>
                    <div class="border solid border-2 p-4"><Chart /></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
import Chart from "./Chart"
export default {
    name: "RightContent",
    computed: {
        ...mapState({
            browsers: (state) => state.assignment.browser,
            selectedBrowser: (state) => state.assignment.selectedBrowser,
            selectedCountry: (state) => state.assignment.selectedCountry,
        })
    },
    components: {
        Chart
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>