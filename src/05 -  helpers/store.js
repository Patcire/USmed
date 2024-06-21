import { create } from 'zustand'

export const useDrugsStore = create((set) => ({

    // related to search, gallery and pagination components
    drugs:{},
    updateDrugs: (newDrugs) => set({drugs: newDrugs}),
    cleanDrugs: () => set ({drugs: {}}),

    lastKeyWord: '',
    updateKeyWord: (newKeyWord) => set({lastKeyWord: newKeyWord}),

    totalPagesOfSearch: 0,
    updateTotalPagesOfSearch: (newTotalPages) => set({totalPagesOfSearch: newTotalPages}),

    // related to product page
    selectedDrug: null,
    updateSelectedDrug: (newDrug) => set({selectedDrug: newDrug}),
    cleanSelectedDrug: () => set ({ selectedDrug: null }),

}))