import { create } from 'zustand'

export const useDrugsStore = create((set) => ({
    drugs:{},
    updateDrugs: (newDrugs) => set({drugs: newDrugs}),
    cleanDrugs: () => set ({drugs: {}}),
    selectedDrug: null,
    cleanSelectedDrug: () => set ({ selectedDrug: null })

}))