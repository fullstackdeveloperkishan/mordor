const state = {
    browser: ["Chrome", "Safari", "Firefox","Edge","Undefined"],
    selectedBrowser: [],
    country: ['USA', 'India', 'UK'],
    selectedCountry: [],
};

const mutations = {
    browser(state, payload) {
        state.browser = payload;
    },
    selectedBrowser(state, payload) {
        state.selectedBrowser = payload;
    },
    country(state, payload) {
        state.country = payload;
    },
    selectedCountry(state, payload) {
        state.selectedCountry = payload;
    }
}

const actions = {
    setSelectedBrowser(context, payload) {
        context.commit("selectedBrowser", payload)
    },
    setSelectedCountry(context, payload) {
        context.commit("selectedCountry", payload)
    }
}

export default {
    state,
    mutations,
    actions
}