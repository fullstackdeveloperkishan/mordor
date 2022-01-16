<template>
    <div class="container mx-auto px-8">
        <div class="text-left mb-8 my-auto justify-center">
            <h1>Leades unique by Email Address</h1>

            <input class="border-2 solid rounded-lg w-1/3 p-4 mt-4" type="search" placeHolder="Filtered by" v-model="myVal" disabled/>
            <span><i class="fa fa-caret-down"/></span>
        </div>
        <div>
            <div class="flex justify-between border-2 solid rounded-lg p-2">
                <div>
                    <input type="date" class="border-2 solid p-2" />
                    <button class="btn ml-4 rounded-lg">Compare</button>
                </div>
                <div class="space-x-2">
                    <span>Group by:</span>
                    <input class="border-2 solid p-2 rounded-lg" type="search" placeholder="Country" disabled />
                    <input class="border-2 solid p-2 rounded-lg" type="search" placeholder="Stacked Bar" disabled />
                </div>
            </div>
            <div class="flex border solid border-2">
                <div>
                    <Accordion />
                    <AccordionCountry/>
                </div>
                <RightContent />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Accordion from "./Accordion.vue"
import AccordionCountry from "./AccordionCountry.vue"
import RightContent from "./RightContent.vue"
export default {
    name: "Content",
    components: {
        Accordion,
        RightContent,
        AccordionCountry
    },
    computed: {
        ...mapState({
            selectedBrowser: (state) => state.assignment.selectedBrowser,
            selectedCountry: (state) => state.assignment.selectedCountry
        }),
        myVal() {
            let res = "Breakdown: ";
            if(this.selectedBrowser.length > 0)
                res += "Browser, ";
            if(this.selectedCountry.length > 0)
                res += "Country, ";
            res += "Date"
            return res;
            // return this.selectedBrowser.length > 0  && this.selectedCountry.length > 0 ? "Breakdown: Browser, Country Date" : "Breakdown: ";
        }
    }
}
</script>

<style scoped>
.btn {
    @apply px-4 py-2 bg-white;
    color: #46CDCF;
    border: 2px solid;
    border-radius: 5px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
</style>