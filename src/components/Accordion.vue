<template>
    <div class="border border-2 solid p-8 text-left space-y-2">
        <div class="cursor-pointer" @click="showList = !showList">Browser ({{selectedBrowser && selectedBrowser.length ? selectedBrowser.length : 0}} / {{ browsers.length}})</div>
        <div v-if="showList" class="transition delay-400 ease-in">
            <div  class="cursor-pointer" v-for="(browser, index) in browsers" :key="index" @click="handleClick(browser)" >
                <input type="checkbox" :checked="selectedBrowser.includes(browser)"/>
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
            browsers: (state) => state.assignment.browser,
            selectedBrowser: (state) => state.assignment.selectedBrowser
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
            if(this.selectedBrowser.includes(val)) {
                const index = this.selectedBrowser.indexOf(val);
                if(index > -1)
                    this.selectedBrowser.splice(index, 1);
                this.list = [...this.selectedBrowser];
            } else {
                this.list = [...this.selectedBrowser, val];
            }
            
            this.$store.dispatch("setSelectedBrowser", this.list);
        }
    }
}
</script>